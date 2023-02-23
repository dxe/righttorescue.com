import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

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
      <Details image="ff.png">
        In September 2021, two activists rescued birds from a stopped slaughter
        truck that was heading into the Foster Farms slaughterhouse in
        Livingston, CA. They received theft charges in the mail in spring 2022
        and had their first court date on June 15, 2022 in Merced Superior
        Court, where they entered not guilty pleas via their attorney. At a
        hearing on December 13, 2022, their trial was scheduled for March 7,
        2023 and it is expected to last 4-5 days. Direct Action Everywhere (DxE) is organizing a court support convergence around the trial. Register to join us at the trial by&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFCBAf-uw5ahBSgZcdUQZpr1eoMNlMzQQSoRTBTN7HGuX1Xw/viewform"
            target="_blank"
          > 
            filling out this form.</a>
          &nbsp;
      </Details>
      <Defendants>
        <Bio name="Alexandra Paul" image="ap.jpg">
          Alexandra is a longtime actress who lives in Oregon with her human
          partner of 25+ years and their two felines. With other DxE activists,
          she has rescued pigs, chickens and calves from factory farms and has
          been arrested 5 times at DxE actions peacefully advocating for
          animals.
        </Bio>
        <Bio name="Alicia Santurio" image="as.jpg">
          Alicia is a factory farm investigator and experienced animal caretaker
          who lives in the Bay Area. She and her parents have been taking action
          with DxE since 2015.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2021/09/29/animal-cruelty-chickens-foster-farms-humane/"
          iFramelyUrl="https://cdn.iframe.ly/h2dIr7Z?card=small"
        />
        <Article
          href="https://fox40.com/news/california-connection/demonstrators-protest-alleged-worker-animal-abuses-at-foster-farms-facility/"
          iFramelyUrl="https://cdn.iframe.ly/A8rhXPa?card=small"
        />
        <Article
          href="https://kmph.com/news/local/protesters-gather-some-arrested-outside-foster-farms-plant-in-livingston"
          iFramelyUrl="https://cdn.iframe.ly/lTyHsNc?card=small"
        />
        <Article
          href="https://www.mercedsunstar.com/news/local/article254599757.html"
          iFramelyUrl="https://cdn.iframe.ly/M6pcW2H?card=small"
        />
        <Article
          href="https://kmph.com/news/local/baywatch-star-who-saved-chickens-from-slaughterhouse-gets-trial-date-for-chicken-theft#"
          iFramelyUrl="https://cdn.iframe.ly/CXPmLbj?card=small"
        />
        <Article
          href="https://www.nytimes.com/2023/02/14/opinion/foster-farms-chicken-slaughterhouse-animal-cruelty.html"
          iFramelyUrl="https://cdn.iframe.ly/pVL4kSS?card=small"
        />
        <Article
          href="https://kmph.com/news/local/judge-grants-subpoena-of-foster-farms-after-activist-chicken-rescue"
          iFramelyUrl="https://cdn.iframe.ly/9fQTBNP?card=small"
        />
      </Press>
    </>
  );
};

export default FosterFarms;
