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
        title="Perdue's Petaluma Poultry"
        location="Sonoma County, California"
        video="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1104800410507149%2F&show_text=false&width=267&t=0"
        videoRatio="267 / 476"
        ctaText1="Call: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez and ask
        her to finally prosecute Petaluma Poultry for years of criminal animal cruelty.
      </Header>

      <Details image="zoepp.png">
        For years, investigators with {" "}
          <a
            href="https://www.directactioneverywhere.com"
            target="_blank"
          >
            Direct Action Everywhere
          </a> have been exposing criminal animal cruelty and rampant disease at factory farms in Sonoma
        County, including Petaluma Poultry, a subsidiary of poultry giant Perdue. Instead of
        prosecuting these companies, the Sonoma County District Attorney has gone after the whistleblowers and animal rescuers. They took animal rescuer Wayne Hsiung to trial and on Nov. 30, 2023, he was sentenced to 90 days in jail for his role in nonviolent open rescues at factory farms. On the very same day of Wayne's sentencing hearing, members of the Sonoma County Sheriff's Department {" "}
          <a
            href="https://www.vice.com/en/article/y3we9m/direct-action-everywhere-animal-rights-open-rescue-arrest"
            target="_blank"
          >
            arrested
          </a> three more animal rescuers on felony warrants. Sonoma County is escalating its fight against animal rescue, but we know rescuing animals is not a crime.  
      </Details>
      <Details image="Conrad-Zoe-Rocky.jpeg">
Following these arrests, two more activists discovered there were warrants out for them as well, and they turned themselves in. The District Attorney has filed charges for the Petaluma Poultry rescue that happened in June 2023 during the Animal Liberation Conference, but they have not made their charging decisions yet for the Reichardt investigation and rescue. Activists are due back in court on February 29th to hear the DA's charging decisions. One activist, Zoe Rosenberg, has been forced to wear a GPS ankle monitor and follow other strict pretrial release conditions because of her continued rescue efforts in the county. 
      </Details>

      <Defendants>
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
          href="https://www.cbsnews.com/amp/sanfrancisco/news/wayne-hsuing-dxe-animal-rights-activist-90-days-jail-sonoma-farm-protests-shutdown-petaluma/"
          iFramelyUrl="https://cdn.iframe.ly/hGopK4f?card=small"
        />
        <Article
          href="https://unchainedtv.com/2023/12/04/3-more-dxe-animal-rights-activists-arrested-in-sonoma-county-california/"
          iFramelyUrl="https://cdn.iframe.ly/UHMsyEY?card=small"
        />
         <Article
          href="https://www.truthdig.com/articles/facing-over-20-years-in-prison-for-rescuing-animals/"
          iFramelyUrl="https://cdn.iframe.ly/t4fidxC?card=small"
        />
         <Article
          href="https://www.dailycal.org/news/city/communities/uc-berkeley-student-faces-felony-misdemeanor-counts-for-animal-rescue/article_4d571c7a-b457-11ee-baaa-533dbadf464b.html#disqus_thread"
          iFramelyUrl="https://cdn.iframe.ly/yp4k5Ip?card=small"
        />
        
      </Press>
    </>
  );
};

export default Reichardt;
