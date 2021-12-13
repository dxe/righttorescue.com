import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";

const SmithfieldNC: NextPage = () => {
  return (
    <>
      <Header
        title="Smithfield"
        location="North Carolina"
        video="https://www.youtube.com/embed/gH1GLEC7VDQ"
        videoRatio="1x1"
      />
      <Details>
        Two DxE activists in North Carolina were charged with multiple felonies
        for investigating a Smithfield pig farm and rescuing two sick piglets.
        They exposed rampant drug use, antibiotic-resistant diseases, and the
        company’s continued use of cruel gestation crates. Their investigation
        findings generated national media coverage in The New York Times and
        Vox. Arwen and Sierra appeared in court in November 2019, and Sierra got
        out of the case. She was offered a deal without charges if she named
        everyone involved in the investigation and rescue at Smithfield, but she
        refused. She ended up with misdemeanor charges and community service.
        Arwen was continuing to trial, but in 2021, she was offered a greatly
        reduced plea deal with only 2 misdemeanor charges and community service.
        Arwen took the plea deal and pled guilty to misdemeanor breaking and
        entering and misdemeanor trespass on March 24, 2021.
      </Details>
    </>
  );
};

export default SmithfieldNC;
