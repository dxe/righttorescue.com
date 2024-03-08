import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { NextPage } from "next";

const RidglanFarms: NextPage = () => {
  return (
    <>
      <Header
        title="Ridglan Farms"
        location="Wisconsin"
        video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1940219196008420%2F&show_text=0"
        videoRatio="1/1"
        ctaText1="Call: 608-266-4211"
        ctaLink1="tel:608-266-4211"
        ctaText2="Email"
        ctaLink2="mailto:danecoda@da.wi.gov"
      >
        Call and email Dane County District Attorney Ismael Ozanne asking him to
        prosecute Ridglan Farms for animal cruelty.
      </Header>
      <Details image="ridglan.jpg">
        Ridglan Farms is one of the largest breeders of beagles for experimentation in the United States. In 2017, DxE investigators
        entered the facility and documented the filthy conditions and the psychological trauma of the dogs spinning endlessly inside small cages.
        The team rescued three beagles, Julie, Anna, and Lucy. Eva, Paul, and Wayne were charged with felony burglary and felony theft
        charges. Their trial was set to start March 18th at the Dane County Courthouse in Madison, Wisconsin. However, ten days before trial, the state DROPPED all the charges. We believe this dismissal is coming after pressure and{" "}
          <a
            href="https://isthmus.com/news/cover-stories/a-crime-of-compassion/"
            target="_blank"
          >
            press coverage
          </a> made it clear that there is public support for animal rescue. Unfortunately, the Dane County District Attorney’s office is still failing to prosecute Ridglan Farms for criminal animal cruelty. It is more important now than ever that we keep the pressure on to get justice for these animals. Please help us share the news on{" "}
          <a
            href="https://www.instagram.com/p/C4QrpC0Rr0L/?igsh=ZDE1MWVjZGVmZQ=="
            target="_blank"
          >
            Instagram,
          </a>{" "}
          <a
            href="https://www.facebook.com/directactioneverywhere/posts/pfbid037W6Ht2xWjnE9XEwTuyvZhZJfch6WqTxhZ92zF1658dNo7xTZnk1XLdtUbrn5HP4Fl"
            target="_blank"
          >
            Facebook,
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/DxEverywhere/status/1766150519163380055"
            target="_blank"
          >
            Twitter
          </a>
          .
      </Details>
      <Defendants>
        <Bio name="Eva Hamer" image="eh.jpg">
          Eva is a researcher with Pax Fauna, a nonprofit that seeks to improve
          the ways animal advocates organize, take action, and communicate with
          the public. She currently lives in Portland, Oregon.
        </Bio>
        <Bio name="Paul Darwin Picklesimer" image="sf-ut-paul.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne is an attorney and co-founder of The Simple Heart. He has been a community organizer for over
          20 years.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2018/05/17/inside-the-barbaric-u-s-industry-of-dog-experimentation/"
          iFramelyUrl="https://cdn.iframe.ly/nQsNmzM?card=small"
        />
        <Article
          href="https://madison.com/news/local/crime-and-courts/rescue-of-beagles-from-blue-mounds-animal-testing-facility-leads-to-criminal-charges-against-activists/article_bd74d8d5-758b-53ab-a118-edc1c3619530.html"
          iFramelyUrl="https://cdn.iframe.ly/QbnLF8Z?card=small"
        />
        <Article
          href="https://www.seehafernews.com/2023/05/14/activists-put-spotlight-on-treatment-of-dogs-at-dane-county-research-facility/"
          iFramelyUrl="https://cdn.iframe.ly/6NnfFyy?card=small"
        />
      </Press>
    </>
  );
};

export default RidglanFarms;
