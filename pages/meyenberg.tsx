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
        ctaText1="Sign the Petition"
        ctaLink1="https://www.directactioneverywhere.com/campaigns/stop-meyenbergs-goat-graveyard"
      >
        Urge the Kings County Animal Services Department to investigate the disease, neglect and high mortality at Meyenberg's Vera Goat Dairy factory farm in Stratford and to stop the illegal goat graveyard.
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
        An attorney on DxE's legal team repeatedly reported these violations to the local authorities, including the Central Valley Regional Water Quality Control Board (RWQCB) which had cited Vera in 2021 for illegally disposing of dead animals on site. But the authorities failed to take enforcement action against Vera. So DxE investigators went back to Vera on May 27, 2025 to document the conditions again in broad daylight, and they rescued two sick baby goats with eye and nasal discharge. They carried the goats, whom they named Phoebe and Celia, to safety. 
      </Details>
      <Details image="return.png">
        Then, they returned to the facility with dozens of other activists to tell the authorities about the conditions they had just witnessed and urge them to investigate Vera's animal cruelty. Instead, the Kings County Sheriff arrested the five rescuers. Joe, Carla, Taj, Yasirah, and Sally were released after a couple of hours in custody with certificates of release saying no charges are yet filed, pending further investigation. We are now waiting to see if Kings County will file charges against these compassionate animal rescuers.  
      </Details>
      <Defendants>
        <Bio name="Joseph Allman" image="Joe.png">
          Joseph is a pilot, videographer, and animal cruelty investigator based in California. 
        </Bio>
        <Bio name="Carla Cabral" image="Carla photo 1.jpeg">
          Carla grew up loving animals and built a career around caring for them, first as an ER veterinary technician and then as a research scientist—but it wasn’t until she faced the truth about how we exploit animals, even in the name of care, that she committed to a life of advocacy and education to help build a world free from speciesism and cruelty.
        </Bio>
        <Bio name="Taj Uppal" image="Taj Uppal Photo.jpg">
          Taj is an activist and attorney litigating animal activist defense cases. In his spare time, he enjoys playing basketball with his friends.
        </Bio>
        <Bio name="Yasirah Vaughn" image="yasirah.jpg">
          Yasirah is from Princeton, New Jersey. When she's not doing animal rights activism, her hobbies include cooking, writing, and doing yoga.
        </Bio>
        <Bio name="Sally Zito" image="sally.jpg">
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
      </Press>
    </>
  );
};

export default Meyenberg;
