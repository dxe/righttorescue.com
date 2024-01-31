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
        prosecute Ridglan Farms for animal cruelty, instead of prosecuting
        people for the rescue of three beagles from experimentation.
      </Header>
      <Details image="ridglan.jpg">
        Ridglan Farms is one of the largest breeders of beagles for experimentation in the United States. DxE investigators
        entered the facility and documented the filthy conditions and the
        psychological trauma of the dogs spinning endlessly inside small cages.
        The team rescued three beagles, Julie, Anna, and Lucy. Now, Eva, Paul, and Wayne are facing felony burglary and felony theft
        charges. Their trial starts March 18th at the Dane County Courthouse in Madison, Wisconsin. This could be a major turning point in the movement to end animal experimentation and to enshrine the right of all animals to be rescued from cruelty. But we need your help to make this trial a success!
If you can join us at the trial to defend the #RightToRescue, please register at {" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSesFMbVWYDXLUe6mSuD4L7nK8OVBe2C9Xqo3Pz_k_gfkt8sOg/viewform"
            target="_blank"
          >
            dxe.io/ridglan
          </a>.
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
