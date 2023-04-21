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
        videoRatio="1x1"
        ctaText1="Call: (716) 439-7000"
        ctaLink1="tel:716-439-7000"
        ctaText2="Email"
        ctaLink2="mailto:ncda@niagaracounty.com"
      >
        Contact the Niagara County District Attorney Brian D. Seaman and politely
        ask him to drop the charges against Tracy.
      </Header>
      <Details image="ashas.jpg">
        When two cows wandered onto Tracy Murphy’s property, an animal sanctuary
        called Asha’s Farm Sanctuary, she took them in and cared for them, naming
        them Ismael and Little Willow. That was July 16, 2022, and Tracy contacted
        law enforcement that same day. It took a week for Scott Gregson, the owner
        of McKee Farm, to realize that two cows from his farm had ended up at Asha’s.
        Gregson accused Murphy of theft. As a trooper with the New York State Police
        himself, Gregson got the state police to raid the sanctuary without notice
        and seize the cows. Tracy was arrested, taken to jail, and had her hands and
        legs shackled in court. She was charged with felony grand larceny, which
        carries with it a sentence of up to 7 years in prison. In 2023, she retained
        animal rights activist and attorney Wayne Hsiung to represent her. Trial
        dates have not been scheduled yet.

        In the face of this unjust prosecution and harassment from local farmers,
        Tracy and Asha’s Farm Sanctuary must continue to care for their many animal
        residents. You can donate to Asha’s Farm Sanctuary
        <a href="https://www.ashasfarmsanctuary.org/donate-only.html"> here</a>.
      </Details>
      <Defendants>
        <Bio name="Tracy Murphy" image="tracymurphy.jpg">
          Tracy is the president and founder of Asha’s Farm Sanctuary. She has
          dedicated her life to rescue and gives innocent cows, pigs and chickens
          rehabilitation, care and refuge under the protection of the sanctuary.
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
      </Press>
    </>
  );
};

export default AshasSanctuary;
