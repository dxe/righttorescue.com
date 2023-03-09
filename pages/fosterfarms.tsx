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
        Share&nbsp;
          <a
            href="https://www.instagram.com/reel/Cmo2GNoJ1yM/"
            target="_blank"
          > 
            this video</a>
          &nbsp; and follow the&nbsp;
          <a
            href="https://twitter.com/FosterFarmTrial"
            target="_blank"
          > 
            Foster Farms Trial Twitter account</a>
          &nbsp; to help elevate news about the trial.
      </Header>
      <Details image="ff.png">
        In September 2021, activists Alexandra Paul and Alicia Santurio rescued two birds, Jax and Ethan, from a stopped slaughter
        truck that was heading into the Foster Farms slaughterhouse in
        Livingston, CA. The same day, DxE released&nbsp;
          <a
            href="https://www.youtube.com/watch?v=qWdJst8f7Sk"
            target="_blank"
          >
            hidden camera footage
          </a>
          &nbsp;filmed inside the slaughterhouse showing chickens routinely missing the stun bath and a device designed to cut their necks, leaving it to workers to identify conscious birds before their evisceration, at a speed of 140 birds per minute. Alexandra and Alicia received theft charges in the mail in spring 2022
        and had their first court date on June 15, 2022 in Merced Superior
        Court, where they entered not guilty pleas. At a pre-trial hearing on Feb. 21, Merced County Judge Paul Lo granted the defense’s subpoena of Foster Farms’ records regarding the health conditions of that flock of chickens! Foster Farms will be compelled to provide evidence regarding diseased, deceased, and condemned birds from the flock that included Jax and Ethan. The #FosterFarmsTrial began on March 7, 2023 in Merced, CA. It is expected to last into next week. 
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
        <Article
          href="https://www.davisvanguard.org/2023/03/merced-trial-over-rescue-of-slaughterhouse-bound-chickens-features-baywatch-star-as-accused-and-maybe-other-hollywood-actors/"
          iFramelyUrl="https://cdn.iframe.ly/VxFLFdL?card=small"
        />
        <Article
          href="https://abc30.com/foster-farms-stolen-chickens-activist-group-jury-selection-begins/12927353/"
          iFramelyUrl="https://cdn.iframe.ly/5glvoGW?card=small"
        />
        <Article
          href="https://www.latimes.com/california/story/2023-03-09/baywatch-star-alexandra-paul-to-go-on-trail-for-taking-chickens-from-foster-farms-truck"
          iFramelyUrl="https://cdn.iframe.ly/nMJho8G?card=small"
        />
      </Press>
    </>
  );
};

export default FosterFarms;
