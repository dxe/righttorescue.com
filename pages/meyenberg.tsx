import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const Meyenberg: NextPage = () => {
  return (
    <>
      <Header
        title="Meyenberg's Vera Goat Dairy"
        location="Kings County, California"
        video="https://www.youtube.com/embed/VCIJxjj-lgw?si=IXdLyd2_EUx1b-Dg"
        videoRatio="1/1"
        ctaText1="Contact the AG"
        ctaLink1="https://docs.google.com/document/d/1YIwTQa28nHX8_0Fj2laX39cncA399ujTEBagUVBDIVk/edit?usp=sharing"
      >
        Urge California Attorney General Rob Bonta to investigate the disease, neglect and death at Meyenberg's Vera Goat Dairy factory farm in Stratford and to stop the company's mass goat graveyard.
      </Header>
      <Details image="Dead pile.jpg">
        In early 2025, DxE investigators discovered a massive, illegal dead pile at Vera Goat Dairy, a "Certified Humane," Whole Foods-supplying goat dairy in California's Central Valley. They observed dozens of dead mother and baby goats being dumped on a regular basis, and they began a months-long investigation into the facility to find out why so many animals were dying. Vera supplies the nation's largest goat milk producer, Meyenberg Dairy. Inside Vera, investigators documented mothers with engorged and distended teats, animals with respiratory infections, and violations of both "Certified Humane" standards and state animal cruelty laws. {" "}
        <a
          href="https://www.directactioneverywhere.com/campaigns/stop-meyenbergs-goat-graveyard"
          target="_blank"
        >
          Read more here</a>. 
      </Details>
      <Details image="5:27 Rescue.png">
        An attorney on DxE's legal team repeatedly reported these violations to the local authorities, including the Kings County Sheriff and Central Valley Regional Water Quality Control Board which had cited Vera in 2021 for illegally disposing of dead animals on site. But the authorities failed to take enforcement action. So DxE investigators went back to Vera on May 27, 2025 to document the conditions again in broad daylight, and they rescued two sick baby goats with eye and nasal discharge. They carried the goats, whom they named Phoebe and Celia, to safety. 
      </Details>
      <Details image="Arrest at Meyenberg.jpeg">
         Then, they returned to the facility with dozens of other activists to tell the authorities about the conditions they had just witnessed and urge them to investigate Vera's animal cruelty. Instead, the Kings County Sheriff arrested the rescuers. In March 2026, the District Attorney filed felony charges against Joe, Carla, Taj, and Sally. They're charged with felony grand theft, felony conspiracy, and trespass and face up to 6.5 years in prison for saving Phoebe and Celia. Both goats were taken to a veterinarian and treated for their respiratory infections as well as for their conjunctivitis and overgrown hooves. Today, they are living in safety and peace.  
      </Details>
      <Details image="Goat rescuers at court.jpeg">
          Sally, Carla, Joe, and Taj have their preliminary hearing scheduled for Tuesday, May 19, 2026 at 1:30 PM at the Kings County Superior Court (1640 Kings County Drive, Hanford, CA 93230). This preliminary hearing is like a mini trial where prosecutors will present evidence to the judge and the judge will decide if the case proceeds to trial. Supporters will be attending in solidarity with the defendants and the animals suffering behind Meyenberg Goat Milk. Please        <a
          href="https://www.facebook.com/events/1616542496285379"
          target="_blank"
        >
          join us if you can</a>. 
      </Details>
      <Defendants>
        <Bio name="Joseph" image="Joe.png">
          Joseph is a pilot, videographer, and animal cruelty investigator based in California. 
        </Bio>
        <Bio name="Carla" image="Carla photo 1.jpeg">
          Carla grew up loving animals and built a career around caring for them, first as an ER veterinary technician and then as a research scientist—but it wasn’t until she faced the truth about how we exploit animals, even in the name of care, that she committed to a life of advocacy to help build a world free from speciesism and cruelty.
        </Bio>
        <Bio name="Taj" image="Taj Uppal Photo.jpg">
          Taj is an activist and attorney working at a large law firm. In his spare time, he enjoys playing basketball with his friends.
        </Bio>
        <Bio name="Sally" image="sally.jpg">
          Sally is a professional musician and a DxE organizer in Los Angeles, CA. She woke up to the torture inflicted on non-human animals by human animals in 2017 and has been an activist with DxE since 2018.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://kmph.com/news/local/animal-rights-group-rescues-sick-goats-from-california-dairy-amid-abuse-claims"
          iFramelyUrl="https://cdn.iframe.ly/QbBzWSF7?card=small"
        />
        <Article
          href="https://www.yourcentralvalley.com/news/local-news/activists-arrested-dairy-kings-county/"
          iFramelyUrl="https://cdn.iframe.ly/R5r0b3aB?card=small"
        />
        <Article
          href="https://unchainedtv.com/2025/06/14/sick-goats-secret-cameras-animal-rights-activists-arrested/"
          iFramelyUrl="https://cdn.iframe.ly/TZMfgo60?card=small"
        />
        <Article
          href="https://abc30.com/post/protesters-ask-kings-county-officials-investigate-vera-goat-dairy/17140852/"
          iFramelyUrl="https://cdn.iframe.ly/YikVPpwC?card=small"
        />
        <Article
          href="https://kmph.com/news/local/four-animal-rights-activists-charged-after-taking-ill-baby-goats-from-stratford-dairy"
          iFramelyUrl="https://cdn.iframe.ly/zbA2c5VP?card=small"
        />
        <Article
          href="https://sjvsun.com/news/hanford/activists-charged-for-stealing-goats-from-kings-co-dairy/"
          iFramelyUrl="https://cdn.iframe.ly/xKFphpFl?card=small"
        />
         <Article
          href="https://www.fresnobee.com/news/local/article315201514.html"
          iFramelyUrl="https://cdn.iframe.ly/7n4Tk3WF?card=small"
        />
        <Article
          href="https://www.modbee.com/news/local/turlock/article315360549.html"
          iFramelyUrl="https://cdn.iframe.ly/82LxqWQw?card=small"
        />
      </Press>
    </>
  );
};

export default Meyenberg;
