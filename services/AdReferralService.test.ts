import { describe, expect, test, vi } from 'vitest'
import {
    AdReferralServiceTestOnly as AdReferralService,
    KEY,
    MAX_SESSION_MS_TEST_ONLY as MAX_SESSION_MS
} from './AdReferralService'

describe('AdReferralService', () => {

    class FakeLocalStorage {
        constructor(
            private readonly items: { [key: string]: string } = {}
        ) { }

        setItem(key: string, value: string) {
            this.items[key] = value;
        }
        getItem(key: string) {
            return this.items[key] ?? null;
        }
    }

    function makeWindow(search: string, localStorage?: FakeLocalStorage): Window {
        return {
            location: {search},
            localStorage: localStorage ?? new FakeLocalStorage()
        } as unknown as Window
    }

    function makeService(window: Window, clock?: () => number) {
        return new AdReferralService(window, clock ?? Date.now)
    }

    const EMPTY_QUERY = "";

    test('returns null when no parameters and empty storage', () => {
        const window = makeWindow(EMPTY_QUERY);
        const service = makeService(window);

        service.onAppInit();

        const params = service.getSessionUtmParams();
        expect(params).toBeNull();
    });

    test('stores UTM params', () => {
        const window = makeWindow("?utm_source=foo&utm_campaign=bar");
        const setLocalStorageSpy = vi.spyOn(window.localStorage, "setItem");
        const service = makeService(window);

        service.onAppInit();

        expect(setLocalStorageSpy).toBeCalled();
    });

    test('handles local storage corruption: invalid json', () => {
        // Use empty query so onAppInit() does not overwrite corrupted value.
        const window = makeWindow(EMPTY_QUERY);
        const service = makeService(window);
        window.localStorage.setItem(KEY, "{{asdf");

        service.onAppInit();

        // Should not throw error.
        expect(service.getSessionUtmParams()).toBeNull();
    });

    test('handles local storage corruption: wrong type', () => {
        // Use empty query so onAppInit() does not overwrite corrupted value.
        const window = makeWindow(EMPTY_QUERY);
        const service = makeService(window);
        window.localStorage.setItem(KEY, '{"asdf": 5}');

        service.onAppInit();

        // Should not throw error.
        expect(service.getSessionUtmParams()).toBeNull();
    });

    test('returns all UTM params', () => {
        const window = makeWindow("?utm_source=foo&utm_campaign=bar&utm_medium=mux&utm_content=clob");
        const service = makeService(window);

        service.onAppInit();

        const params = service.getSessionUtmParams();
        expect(params).toBeDefined();
        expect(params?.source).toBe("foo");
        expect(params?.campaign).toBe("bar");
        expect(params?.medium).toBe("mux");
        expect(params?.content).toBe("clob");
    });

    test('remembers UTM params across page loads', () => {
        const localStorage = new FakeLocalStorage();

        {
            const service = makeService(
                makeWindow("?utm_source=foo&utm_campaign=bar", localStorage)
            );
            service.onAppInit();
        }

        {
            const service = makeService(makeWindow(EMPTY_QUERY, localStorage));
            service.onAppInit();

            const params = service.getSessionUtmParams();
            expect(params).toBeDefined();
            expect(params?.source).toBe("foo");
        }
    });

    test('does not mix UTM params from different referrals', () => {
        const localStorage = new FakeLocalStorage();

        {
            const window = makeWindow(
                "?utm_source=foo&utm_campaign=bar",
                localStorage);
            const service = makeService(window);
            service.onAppInit();
        }

        {
            const window = makeWindow("?utm_campaign=baz", localStorage);
            const service = makeService(window);
            service.onAppInit();

            const params = service.getSessionUtmParams();
            expect(params).toBeDefined();
            expect(params?.campaign).toBe("baz");
            expect(params?.source).toBe(null);
        }
    });

    test('Does not return expired data', () => {
        const localStorage = new FakeLocalStorage();
        const TIME = 1715709289441;

        {
            const window = makeWindow(
                "?utm_source=foo",
                localStorage);
            const service = makeService(window, () => TIME);
            service.onAppInit();
        }

        // Test data is returned when almost expired.
        {
            const window = makeWindow(EMPTY_QUERY, localStorage);
            const service = makeService(
                window, () => TIME + MAX_SESSION_MS - 1000);
            service.onAppInit();

            const params = service.getSessionUtmParams();

            expect(params).toBeDefined();
            expect(params?.source).toBe("foo");
        }

        // Test data is not returned when expired.
        {
            const window = makeWindow(EMPTY_QUERY, localStorage);
            const service = makeService(
                window, () => TIME + MAX_SESSION_MS + 1000);
            service.onAppInit();

            const params = service.getSessionUtmParams();

            expect(params).toBeNull();
        }
    });
})
