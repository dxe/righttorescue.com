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
        ctaText1="Call: (716) 439-7085"
        ctaLink1="tel:716-439-7000"
        ctaText2="Email"
        ctaLink2="mailto:ncda@niagaracounty.com"
      >
        Contact the Niagara County District Attorney Brian D. Seaman and
        politely ask him to drop the charges against Tracy.
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
        She was charged with felony grand larceny, which has since been reduced to petty larceny. She's being represented by an
        incredible legal team including Animal Activist Legal Defense Project
        staff attorney Chris Carraway. Trial is set for October 2nd to 5th,
        2024. In the face of this unjust prosecution and harassment from local
        farmers, Tracy and Asha’s Farm Sanctuary must continue to care for their
        many animal residents. You can donate to Asha’s Farm Sanctuary
        <a href="https://www.ashasfarmsanctuary.org/donate-only.html"> here</a>. Follow the
        <a href="https://x.com/AshaRescueTrial"> Asha Rescue Trial Twitter account</a> for updates from court.
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
      </Press>
    </>
  );
};

export default AshasSanctuary;
