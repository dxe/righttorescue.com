import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { NextPage } from "next";

const AshasSanctuary: NextPage = () => {
  return (
    <>
      <Header
        title="Asha's Farm Sanctuary"
        location="New York"
        video="https://www.youtube.com/embed/PgJGdh4b0MQ"
        videoRatio="1/1"
        ctaText1="Share the news"
        ctaLink1="https://www.instagram.com/p/DAq4CnDSC71/"
      >
        The case against Tracy has been dismissed due to constitutional violations committed by law enforcement during the investigation, including destroying the "evidence” which in this case was the rescued cows.
      </Header>
      <Details image="ashas.jpg">
        When two cows wandered onto Tracy Murphy’s property, an animal sanctuary
        called Asha’s Farm Sanctuary, she took them in and cared for them,
        naming them Ismael and Little Willow. That was July 16, 2022, and Tracy
        contacted law enforcement that same day. It took a week for Scott
        Gregson, the owner of McKee Farm, to realize that two cows from his farm
        had ended up at Asha’s. Gregson accused Murphy of theft. As a trooper
        with the New York State Police himself, Gregson got the state police to
        raid the sanctuary without notice and seize the cows. Tracy was
        arrested, taken to jail, and had her hands and legs shackled in court.
        She was charged with felony grand larceny, which was later reduced to petty larceny. In a shocking turn of events, on the day trial was set to begin, the case was dismissed! It was revealed that law enforcement committed serious constitutional violations during the investigation, including destroying the "evidence” which in this case was the cows, Ismael and Little Willow, who were slaughtered. As a result, Judge Gary Strenkoski ruled that no evidence about the cows could be presented, rendering the prosecution’s case impossible. Check the
        <a href="https://x.com/AshaRescueTrial"> Asha Rescue Trial Twitter account</a> for more details.
      </Details>
      <Defendants>
        <Bio name="Tracy Murphy" image="tracymurphy.jpg">
          Tracy is the president and founder of Asha’s Farm Sanctuary. She has
          dedicated her life to rescue and gives innocent cows, pigs and
          chickens rehabilitation, care and refuge under the protection of the
          sanctuary.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://www.niagara-gazette.com/gagged-protesters-argue-against-order-for-animal-sanctuary-owner/image_c1f15210-a774-550d-ace1-ed47819a29b2.html"
          iFramelyUrl="https://cdn.iframe.ly/OEcSWaw?card=small"
        />
        <Article
          href="https://www.lockportjournal.com/news/local_news/show-of-support-for-farm-animal-sanctuary-owner/article_7f2820be-da50-11ed-ba18-8f78a2fefd68.html"
          iFramelyUrl="https://cdn.iframe.ly/xdXyN3u?card=small"
        />
        <Article
          href="https://www.lockportjournal.com/opinion/empathy-with-animals-represents-the-best-in-humanity/article_6c296950-e2ca-11ed-add6-a79bebf3f317.html"
          iFramelyUrl="https://cdn.iframe.ly/DSe1RMi?card=small"
        />
        <Article
          href="https://unchainedtv.com/2023/05/01/prosecuted-for-compassion-tracy-murphys-cow-case/"
          iFramelyUrl="https://cdn.iframe.ly/ffIC7DQ?card=small"
        />
        <Article
          href="https://www.lockportjournal.com/news/local_news/farm-sanctuary-operator-charged-with-theft-sues-over-court-imposed-gag-order/article_c2660110-1534-11ee-907a-abd0200377b8.html"
          iFramelyUrl="https://cdn.iframe.ly/BTBZZnx?card=small"
        />
        <Article
          href="https://www.lockportjournal.com/news/local_news/animal-sanctuary-owner-has-gag-order-revised/article_1b6dd69a-5be7-11ee-ba89-6bc20db15ea2.html"
          iFramelyUrl="https://cdn.iframe.ly/jY1hTPJ?card=small"
        />
         <Article
          href="https://unchainedtv.com/2023/12/28/persecuted-sanctuary-owner-tracy-murphy-speaks-after-gag-order-lifted/"
          iFramelyUrl="https://cdn.iframe.ly/lrK60su?card=small"
        />
        <Article
          href="https://www.niagara-gazette.com/news/crime/newfane-animal-sanctuary-owner-rejects-plea-deal/article_54d8b7e8-0ce4-11ef-821b-cb5feba0361b.html/"
          iFramelyUrl="https://cdn.iframe.ly/STsnEWs?card=small"
         />
        <Article
          href="https://www.niagara-gazette.com/news/local_news/wheatfield-town-justice-sets-trial-date-for-cow-theft-case/article_a7bed3c8-5449-11ef-88b5-7309514d3d68.html/"
          iFramelyUrl="https://cdn.iframe.ly/SSbpadE?card=small"
         />
      </Press>
    </>
  );
};

export default AshasSanctuary;
