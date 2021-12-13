import { MainNav } from "./MainNav";
import { Support } from "./Support";
import { Footer } from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <MainNav />
      <main>{children}</main>
      <Support />
      <Footer />
    </>
  );
}
