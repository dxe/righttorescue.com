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
        video="https://www.youtube.com/embed/3r4xjelwY0U?si=FCWNAJSv0SKn-mLV"
        videoRatio="1x1"
        ctaText1="Call: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez and ask
        her to finally prosecute Petaluma Poultry for years of criminal animal
        cruelty.
      </Header>

      <Details image="zoepp.png">
        For years, investigators with{" "}
        <a href="https://www.directactioneverywhere.com" target="_blank">
          Direct Action Everywhere
        </a>{" "}
        have been exposing criminal animal cruelty and rampant disease at
        factory farms in Sonoma County, including Petaluma Poultry, a subsidiary
        of poultry giant Perdue. Instead of prosecuting these companies, the
        Sonoma County District Attorney has gone after the whistleblowers and
        animal rescuers. They took animal rescuer Wayne Hsiung to trial and on
        Nov. 30, 2023, he was sentenced to 90 days in jail for his role in
        nonviolent open rescues at factory farms. On the very same day of
        Wayne's sentencing hearing, members of the Sonoma County Sheriff's
        Department{" "}
        <a
          href="https://www.vice.com/en/article/y3we9m/direct-action-everywhere-animal-rights-open-rescue-arrest"
          target="_blank"
        >
          arrested
        </a>{" "}
        three more animal rescuers on felony warrants. Sonoma County is
        escalating its fight against animal rescue, but we know rescuing animals
        is not a crime.
      </Details>
      <Details image="Conrad-Zoe-Rocky.jpeg">
        <p>Following these arrests, the District Attorney filed charges against Zoe
        Rosenberg for the rescue of sick chickens from the Petaluma Poultry
        slaughterhouse that took place in June 2023 during the Animal Liberation
        Conference. They have not yet filed charges relating to Reichardt Duck
        Farm. Zoe has been forced to wear a GPS ankle monitor and follow other
        strict pretrial release conditions, including informing the authorities
        any time she leaves her home county. She also has been barred from
        possessing chickens, ducks, or other fowl. Clearly, they do not want Zoe
        rescuing any more suffering animals. 
        </p>
        <p>
        Zoe's preliminary hearing took place on May 3, 2024. After failing to present any evidence of vandalism, the prosecution dropped the felony conspiracy to commit vandalism charge, reducing the total number of felonies from four down to three. The judge said she will take some time to consider all the evidence presented and scheduled a hearing for May 13, where she will give her ruling as to whether there is probable cause to pursue the remaining charges.</p>
      </Details>

      <Defendants>
        <Bio name="Zoe Rosenberg" image="Zoe-and-Glenn.jpeg">
          Zoe is a UC Berkeley student, TEDx speaker, factory farm investigator,
          and animal rescuer. When she was 11 years old, she founded Happy Hen
          Animal Sanctuary, a nonprofit organization that has now saved over
          1,000 neglected or abandoned animals.
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
         <Article
          href="https://www.dailycal.org/news/campus/asuc/asuc-passes-right-to-rescue-resolution-as-student-animal-rights-activist-awaits-trial/article_6f5c8836-0624-11ef-a596-9f784e0e2b55.html"
          iFramelyUrl="https://cdn.iframe.ly/iTVf2Wf?card=small"
        />
      </Press>
    </>
  );
};

export default Reichardt;
