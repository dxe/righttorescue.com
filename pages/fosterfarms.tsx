import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";

const FosterFarms: NextPage = () => {
  return (
    <>
      <Header
        title="Foster Farms"
        location="Livingston, California"
        video="https://www.youtube.com/embed/LxnIwWmFd1E"
        videoRatio="16x9"
      >
        Share the video with #RightToRescue and stay tuned for more ways you can
        help.
      </Header>
      <Details image="Foster Farms rescue shot.png">
        In September 2021, two activists rescued birds from a stopped slaughter truck that was heading into the Foster Farms slaughterhouse in Livingston, CA.
        They recently received larceny charges in the mail and have a court date in June 2022. Stay tuned for more information.  
      </Details>
      <Defendants>
        <Bio name="Alexandra Paul" image="ap.jpg">
          Alexandra is a longtime actress who lives in Los Angeles with her
          human partner of 25 years and their two felines. With other DxE
          activists, she has rescued pigs, chickens and calves from factory
          farms and has been arrested 5 times at DxE actions peacefully
          advocating for animals.
        </Bio>
        <Bio name="Alicia Santurio" image="as.jpg">
          Alicia is a factory farm investigator and experienced animal caretaker
          who lives in the Bay Area. She and her parents have been taking action
          with DxE since 2015.
        </Bio>
      </Defendants>
    </>
  );
};

export default FosterFarms;
