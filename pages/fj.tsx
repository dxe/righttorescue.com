import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";
import { Defendants } from "../components/Case/Defendants";
import { Bio } from "../components/Case/Bio";

const FarmerJohn: NextPage = () => {
  return (
    <>
      <Header
        title="Farmer John"
        location="Vernon, California"
        video="https://www.youtube.com/embed/EY0iU-LuLwE"
        videoRatio="1x1"
      >
        Share the video with #RightToRescue and stay tuned for more ways you can
        help.
      </Header>
      <Details image="fj.png">
        Seven activists were arrested while attempting to rescue a pig they
        named Greta from inside Farmer John slaughterhouse in Los Angeles.
        Farmer John is Smithfield’s largest West Coast slaughterhouse where more
        than 7,000 pigs are killed every day. It is also the site of a massive
        COVID outbreak. 1 in 2 workers at the facility have been infected. A few
        days after the attempted rescue, around 200 people united at the
        slaughterhouse to protest Smithfield’s abuse of animals and workers.
        Dozens more people were arrested during a lockdown at the facility. Most
        have had no charges filed against them, but some are still awaiting
        charging decisions. The seven people who tried to save Greta are also
        waiting to receive their charges.
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
        <Bio name="Emek Echo" image="ee.jpg">
          Emek is an audio engineer who finished school as valedictorian. She
          became an animal rights activist after learning about the suffering
          animals go through in animal exploiting industries.
        </Bio>
        <Bio name="Lewis Bernier" image="lb.jpg">
          Lewis is an outdoorsman and bodybuilder who works to investigate
          cruelty in animal agriculture. Since moving to the Bay Area, they have
          exposed horrific conditions inside dozens of farms and slaughterhouses
          across the United States.
        </Bio>
        <Bio name="Rachel Hosler" image="rh.jpg">
          Rachel is a mother, sanctuary volunteer, artist, and yoga teacher, on
          top of which she has operated a mobile dog grooming business for 16
          years.
        </Bio>
        <Bio name="Robert Franklin" image="rf.jpg">
          Reverend Robert Ryugen Doshin Yamada is the resident Soto Zen Buddhist
          monk at Dobutsu Kaihoji, the Animal Liberation Temple, and an activist
          for our dear animal friends.
        </Bio>
        <Bio name="Zoe Rosenberg" image="zr.jpg">
          Zoe is a UC Berkeley student, TEDx speaker, activist, and animal
          rescuer. She is the founder of Happy Hen Animal Sanctuary, a nonprofit
          organization that has saved over 1,000 animals from factory farms and
          slaughterhouses, and she leads the social media team for Direct Action
          Everywhere.
        </Bio>
      </Defendants>
    </>
  );
};

export default FarmerJohn;
