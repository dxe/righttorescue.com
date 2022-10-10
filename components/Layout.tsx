import { MainNav } from "./MainNav";
import { Support } from "./Support";
import { Footer } from "./Footer";
import { useState } from "react";

export default function Layout({ children }: any) {
  const [mainTopPadding, setMainTopPadding] = useState(0);
  return (
    <>
      <MainNav
        announcement="BREAKING: Jury finds Wayne and Paul NOT GUILTY on all charges in the #SmithfieldTrial"
        announcementPage="sf-ut"
        onPaddingUpdate={(paddingTop) => setMainTopPadding(paddingTop)}
      />
      <main style={{ paddingTop: mainTopPadding }}>{children}</main>
      <Support />
      <Footer />
    </>
  );
}
