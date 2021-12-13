import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";
import { Defendants } from "../components/Case/Defendants";
import { Bio } from "../components/Case/Bio";
import { NextPage } from "next";

const RidglanFarms: NextPage = () => {
  return (
    <>
      <Header
        title="Ridglan Farms"
        location="Wisconsin"
        video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1940219196008420%2F&show_text=0"
        videoRatio="1x1"
        ctaText1="Call: 608-266-4211"
        ctaLink1="tel:608-266-4211"
        ctaText2="Email"
        ctaLink2="mailto:danecoda@da.wi.gov"
      >
        Call and email Dane County District Attorney Ismael Ozanne asking him to
        prosecute Ridglan Farms for animal cruelty, instead of prosecuting the
        people who rescued three beagles from experimentation.
      </Header>
      <Details image="ridglan.jpg">
        Ridglan Farms is a dog breeding and research facility in Wisconsin that
        raises beagles for cruel experiments. A few years ago, DxE investigators
        entered the facility and documented the filthy conditions and the
        psychological trauma of the dogs spinning endlessly inside small cages.
        The team rescued three beagles. Although the investigation and rescue
        happened years ago, the charging documents were filed in August 2021. No
        hearing dates have been set yet, but our legal team is working on the
        case. This is an important opportunity to show the world the horrors
        inflicted on humankind’s supposed best friend and to move toward ending
        experimentation on dogs and other animals.
      </Details>
      <Defendants>
        <Bio name="Eva Hamer" image="eh.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Paul Darwin Picklesimer" image="sf-ut-paul.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Wayne Hsiung" image="sf-ut-wayne.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 16 felonies for rescuing sick animals.
        </Bio>
      </Defendants>
    </>
  );
};

export default RidglanFarms;
