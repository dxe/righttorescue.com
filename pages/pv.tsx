import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";

const PleasantValley: NextPage = () => {
  return (
    <>
      <Header
        title="Pleasant Valley Farms"
        location="California"
        video="https://www.youtube.com/embed/yrlsZaLJHew"
        videoRatio="16x9"
        ctaText1="Email"
        ctaLink1="mailto:cjelinek@costco.com"
      >
        Tell Costco CEO Craig Jelinek to drop Pleasant Valley Farms and support
        the whistleblowers who exposed animal cruelty, instead of suing DxE.
      </Header>
      <Details image="pv.jpg">
        DxE investigators documented cannibalism, infections, and death inside
        Pleasant Valley Farms, a Costco “cage-free” egg farm. Now, two
        investigators are being charged over $330,000 in restitution. Costco
        claims to give animals 5 freedoms, including freedom from pain and
        suffering, and the company received widespread public praise for
        committing to selling only cage-free eggs. But DxE’s exposé showed the
        world the horrific reality behind the “cage-free” label, in the
        Washington Post, New York Times and more. We have appealed the court's
        decision, but the Superior Court of California, County of San Joaquin,
        Appellate Division rejected our appeal by affirming the judge's original
        decision. We have petitioned to transfer the case to the Court of Appeal
        to see if they will hear it. In this case, the Court of Appeal's role is
        similar to that of the Supreme Court in that it has discretion to choose
        what cases to take.
      </Details>
    </>
  );
};

export default PleasantValley;
