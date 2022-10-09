import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const SmithfieldUtah: NextPage = () => {
  return (
    <>
      <Header
        title="Smithfield"
        location="Utah"
        video="https://www.youtube.com/embed/wlSE1X-hSqQ"
        videoRatio="16x9"
        ctaText1="Sample messages + images here"
        ctaLink1="https://docs.google.com/document/d/10H2yOIeO4XicPl7Ad--LqJ1R0ejYem6vC8vt3KPuRMQ/edit?usp=sharing"
      >
        Help us defend the right to rescue and share the story of the #SmithfieldTrial today by tweeting or making a different social media post with the hashtag #SmithfieldTrial.
      </Header>
      <Details image="sf-ut-2.jpg">
        <p>
          In 2017, DxE investigators&nbsp;
          <a
            href="https://www.wired.com/story/direct-action-everywhere-virtual-reality-exposing-factory-farms/"
            target="_blank"
          >infiltrated a massive pig farm</a>
          &nbsp; in the Utah
          desert, a facility owned by Smithfield/WH Group, the world’s largest
          pig killing company. This one Smithfield farm is 20 miles long with
          over 300 barns on site. The investigators filmed the conditions inside
          in 360 degree virtual reality footage. Their footage, titled
          "Operation Deathstar," documented row after row of mother pigs crammed
          inside gestation crates barely bigger than their bodies and piles of
          dead piglets covered in their mothers' feces.
        </p>
        <p>
          The investigators rescued 2 sick piglets, Lily, who had a severe leg
          injury, and Lizzie, who was malnourished and nursing on a shredded
          nipple. They took Lily and Lizzie to a sanctuary to receive care.
          Then, they published the whole investigation and rescue online and in
          the&nbsp;
          <a
            href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html"
            target="_blank"
          >
            New York Times
          </a>
          &nbsp;to show the world the nightmarish cruelty happening inside
          Smithfield’s farms. The story went viral when the FBI started hunting for the piglets,
          raiding sanctuaries and even cutting off part of a pig’s ear to do DNA
          testing. 
        </p>
        <p>
          DxE investigators Wayne Hsiung and Paul Darwin Picklesimer went to trial October 3-7, 2022 in Washington County, Utah. On Saturday, October 8, after a full day of deliberations, the jury of 8 people unanimously found Wayne and Paul NOT GUILTY on all charges for rescuing Lily and Lizzie from Smithfield. Together, we have just set a powerful precedent for the legal right to rescue animals from abuse.
        </p>
      </Details>
      <Defendants>
        <Bio name="Paul Darwin Picklesimer" image="sf-ut-paul.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Wayne Hsiung" image="sf-ut-wayne.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 9 felonies for rescuing sick animals.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.nytimes.com%2F2017%2F07%2F06%2Fdining%2Fanimal-welfare-virtual-reality-video-meat-industry.html&key=89a4a3ff448183aeb0070b28c0c9f3b7&iframe=card-small"
        />
        <Article
          href="https://theintercept.com/2017/10/05/factory-farms-fbi-missing-piglets-animal-rights-glenn-greenwald/"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Ftheintercept.com%2F2017%2F10%2F05%2Ffactory-farms-fbi-missing-piglets-animal-rights-glenn-greenwald%2F&key=89a4a3ff448183aeb0070b28c0c9f3b7&iframe=card-small"
        />
        <Article
          href="https://www.wired.com/story/direct-action-everywhere-virtual-reality-exposing-factory-farms/"
          iFramelyUrl="https://cdn.iframe.ly/TlhwI9d?card=small"
        />
        <Article
          href="https://www.sltrib.com/news/politics/2020/07/18/animal-welfare-activists/"
          iFramelyUrl="https://cdn.iframe.ly/6k3SEbJ?card=small"
        />
        <Article
          href="https://www.wired.com/story/get-wired-podcast-5-wayne-hsiung-direct-action-everywhere/"
          iFramelyUrl="https://cdn.iframe.ly/c6LnF2B?card=small"
        />
        <Article
          href="https://www.fox13now.com/news/local-news/utah-seeks-to-block-animal-rights-activists-from-justifying-factory-farm-break-in"
          iFramelyUrl="https://cdn.iframe.ly/H7fdGZ1?card=small"
        />
        <Article
          href="https://theintercept.com/2022/01/30/animal-rights-activists-dxe-trial-evidence/"
          iFramelyUrl="//iframely.net/VYkJc5O?card=small"
        />
        <Article
          href="https://newrepublic.com/article/165468/animal-rights-dxe-smithfield"
          iFramelyUrl="//iframely.net/eNnUV6s?card=small"
        />
        <Article
          href="https://www.fox13now.com/news/local-news/animal-welfare-activists-protest-ruling-on-video-of-factory-farm-break-in"
          iFramelyUrl="//iframely.net/E9eGBuX?card=small"
        />
        <Article
          href="https://www.deseret.com/u-s-world/2022/7/5/23195290/nathans-hot-dog-eating-contest-joey-chestnut-attacks-darth-vader-protester-smithfield-deathstar-utah"
          iFramelyUrl="https://cdn.iframe.ly/Eip8qlD?card=small"
        />
        <Article
          href="https://www.usatoday.com/story/sports/2022/07/05/joey-chestnut-hot-dog-eating-contest-protester-reaction-regret/7816840001/"
          iFramelyUrl="https://cdn.iframe.ly/l2nKLW6?card=small"
        />
         <Article
          href="https://www.sltrib.com/news/2022/08/03/utah-police-intimidated-animal/"
          iFramelyUrl="https://cdn.iframe.ly/l8i6Fff?card=small"
        />
         <Article
          href="https://www.fox13now.com/news/local-news/animal-rights-activists-sue-beaver-county-for-allegedly-violating-first-amendment-rights"
          iFramelyUrl="https://cdn.iframe.ly/GbKOV6l?card=small"
        />
         <Article
          href="https://www.sltrib.com/news/2022/08/29/heres-how-trial-activists-who/"
          iFramelyUrl="https://cdn.iframe.ly/WFVjtc8?card=small"
        />
         <Article
          href="https://www.sltrib.com/opinion/commentary/2022/09/01/jonathan-frohnmayer-big-pork-is/"
          iFramelyUrl="https://cdn.iframe.ly/H2v6T3T?card=small"
        />
        <Article
          href="https://www.foxnews.com/sports/animal-rights-activists-interrupt-bills-rams-game-carry-smoke-flare-across-field"
          iFramelyUrl="https://cdn.iframe.ly/rz0NKsc?card=small"
        />
        <Article
          href="https://www.usatoday.com/story/sports/nfl/2022/09/09/animal-rights-activists-interrupt-nfl-opener-between-bills-rams/8032257001/"
          iFramelyUrl="https://cdn.iframe.ly/wWK0byk?card=small"
        />
        <Article
          href="https://nypost.com/2022/09/09/animal-activists-emek-echo-and-katia-shokrai-disrupt-bills-rams-game/"
          iFramelyUrl="https://cdn.iframe.ly/Li5Qqq2?card=small"
        />
        <Article
          href="https://www.ourhenhouse.org/alp88/"
          iFramelyUrl="https://cdn.iframe.ly/yg8rHVf?card=small"
        />
        <Article
          href="https://kslnewsradio.com/1976167/nations-largest-pig-farm-exposed-two-face-criminal-charges/"
          iFramelyUrl="https://cdn.iframe.ly/yPJ5Z5o?card=small"
        />
        <Article
          href="https://www.fox13now.com/news/local-news/trial-begins-for-animal-activists-accused-of-stealing-2-piglets-from-utah-factory-farm"
          iFramelyUrl="https://cdn.iframe.ly/psaMg8m?card=small"
        />
        <Article
          href="https://www.stgeorgeutah.com/news/archive/2022/10/04/mgk-elevate-the-message-animal-rights-activists-protest-in-st-george-ahead-of-circle-four-farm-trial/#.Y0G0k-yZNqP"
          iFramelyUrl="https://cdn.iframe.ly/2QgBVLu?card=small"
        />
        <Article
          href="https://www.foxnews.com/sports/defendant-highlighted-rams-49ers-demonstration-swipes-bobby-wagner-protester-tackle"
          iFramelyUrl="https://cdn.iframe.ly/5J9d2Ul?card=small"
        />
        <Article
          href="https://www.ksl.com/article/50491244/jury-deliberating-case-of-animal-activists-charged-with-taking-pigs-from-utah-farm"
          iFramelyUrl="https://cdn.iframe.ly/qgHn41o?card=small"
        />
        <Article
          href="https://www.sltrib.com/news/2022/10/08/animal-rights-activists-charged/"
          iFramelyUrl="https://cdn.iframe.ly/GkRikFy?card=small"
        />
      </Press>
    </>
  );
};

export default SmithfieldUtah;
