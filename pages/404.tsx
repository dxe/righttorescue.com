import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const [isLoaded, setLoaded] = useState(false);
  const router = useRouter();
  // If a user tries to go to a path with uppercase letters, redirect them to the lowercase version.
  useEffect(() => {
    const lowerAsPath = router.asPath.toLowerCase();
    if (router.asPath !== lowerAsPath) {
      router.push(lowerAsPath);
      return;
    }
    setLoaded(true);
  }, [router]);

  return (
    <header className="masthead" style={{ backgroundColor: "#161616" }}>
      <div
        className="
          container
          d-flex
          h-100
          align-items-center
          flex-column
          justify-content-center
        "
      >
        <div className="mx-auto text-center">
          {isLoaded && (
            <h2 className="text-white mx-auto my-0">404 Page Not Found</h2>
          )}
        </div>
      </div>
    </header>
  );
}
