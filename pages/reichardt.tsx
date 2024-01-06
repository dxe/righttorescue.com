import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { Col, Row } from "react-bootstrap";
import TwitterTimeline from "../components/Twitter";

const Reichardt: NextPage = () => {
  return (
    <>
      <Header
        title="Reichardt Duck Farm and Petaluma Poultry"
        location="Sonoma County, California"
        video="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1104800410507149%2F&show_text=false&width=267&t=0"
        videoRatio="267 / 476"
        ctaText1="Call: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez and ask
        her to finally prosecute Reichardt Duck Farm and Petaluma Poultry for years of criminal animal cruelty.
      </Header>

      <Details image="Zoe-River-Oakley.png">
        For years, investigators with {" "}
          <a
            href="https://www.directactioneverywhere.com"
            target="_blank"
          >
            Direct Action Everywhere
          </a> have been exposing criminal animal cruelty and rampant disease at factory farms in Sonoma
        County, including California's largest duck farm, Reichardt Duck Farm, and Petaluma Poultry, a subsidiary of poultry giant Perdue. Instead of
        prosecuting these companies, the Sonoma County District Attorney has gone after the whistleblowers and animal rescuers. They took animal rescuer Wayne Hsiung to trial and on Nov. 30, 2023, he was sentenced to 90 days in jail for his role in nonviolent open rescues at factory farms. On the very same day of Wayne's sentencing hearing, members of the Sonoma County Sheriff's Department {" "}
          <a
            href="https://www.vice.com/en/article/y3we9m/direct-action-everywhere-animal-rights-open-rescue-arrest"
            target="_blank"
          >
            arrested
          </a> three more animal rescuers on felony warrants. Sonoma County is escalating its fight against animal rescue, but we know rescuing animals is not a crime.  
      </Details>
      <Details image="Conrad-Zoe-Rocky.jpeg">
The three arrestees, Rocky Chau, Conrad de Jesus, and Zoe Rosenberg, are all factory farm investigators with DxE. They were arrested on felony conspiracy and misdemeanor trespass charges apparently related to investigations and rescues they conducted in the county. All three activists are out of custody and will appear in court on December 14th for an arraignment hearing where will we learn more about the District Attorney’s charging decisions.

      </Details>

      <Defendants>
        <Bio name="Conrad de Jesus" image="Conrad.jpeg">
          An architect, business owner, and father, Conrad is a dedicated animal rights activist focusing on the right to rescue and bringing forth systemic changes needed to build a more compassionate world.
        </Bio>
        <Bio name="Lewis Bernier" image="lb.jpg">
          Lewis is an outdoorsman and bodybuilder who works to investigate
          cruelty in animal agriculture. Since moving to the Bay Area, they have
          exposed horrific conditions inside dozens of farms and slaughterhouses
          across the United States.
        </Bio>
        <Bio name="Rocky Chau" image="Rocky.jpeg">
          Rocky is a lifelong Bay Area resident. As an organizer with DxE, he works on building a community of like-minded individuals who believe in a better world for animals.
        </Bio>
        <Bio name="Zoe Rosenberg" image="Zoe-and-Glenn.jpeg">
          Zoe is a UC Berkeley student, TEDx speaker, factory farm investigator, and animal rescuer. When she was 11 years old, she founded Happy Hen Animal Sanctuary, a nonprofit organization that has now saved over 1,000 neglected or abandoned animals.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2023/06/13/perdue-chicken-slaughterhouse-animal-cruelty-dxe/"
          iFramelyUrl="https://cdn.iframe.ly/bA6f35V?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/bay-area-activist-group-back-at-petaluma-poultry-facility-removes-18-chick/"
          iFramelyUrl="https://cdn.iframe.ly/IZoGSGa?card=small"
        />
         <Article
          href="https://www.vox.com/future-perfect/23952627/wayne-hsiung-conviction-direct-action-everywhere-dxe-rescue-sonoma-county-chickens"
          iFramelyUrl="https://cdn.iframe.ly/inlhedh?card=small"
        />
         <Article
          href="https://www.vice.com/en/article/y3we9m/direct-action-everywhere-animal-rights-open-rescue-arrest"
          iFramelyUrl="https://cdn.iframe.ly/00YuISE?card=small"
        />
         <Article
          href="https://www.democracynow.org/2023/12/1/headlines/animal_rights_activist_wayne_hsiung_gets_3_month_jail_term_for_freeing_sick_factory_farm_birds"
          iFramelyUrl="https://cdn.iframe.ly/6RBLHHw?card=small"
        />
        <Article
          href="https://www.cbsnews.com/amp/sanfrancisco/news/wayne-hsuing-dxe-animal-rights-activist-90-days-jail-sonoma-farm-protests-shutdown-petaluma/"
          iFramelyUrl="https://cdn.iframe.ly/hGopK4f?card=small"
        />
      </Press>
    </>
  );
};

export default Reichardt;
