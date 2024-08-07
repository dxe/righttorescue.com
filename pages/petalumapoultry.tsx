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
        video="https://www.youtube.com/embed/3r4xjelwY0U?si=Hq0SmC7-RYN9iBmn"
        videoRatio="1/1"
        ctaText1="Call the DA: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email the DA"
        ctaText3="Tell Safeway: Drop Petaluma Poultry"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
        ctaLink3="https://docs.google.com/document/d/13s5dQAezXOC7IhnqJh8yxU_lhSDhLMF9E-Lo9LSJT_k/edit?usp=sharing"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez and ask
        her to finally prosecute Petaluma Poultry for years of criminal animal
        cruelty. Plus, ask Safeway to cut ties with Petaluma Poultry.
      </Header>

      <a
        href="/cases/petalumapoultry/Petaluma Poultry Investigatory Report 2023.pdf"
        target="_blank"
      >
        <div
          style={{
            position: "relative",
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src="/img/investigatory-report-fading-screenshot.jpg"
            alt="Investigatory report screenshot"
            style={{
              width: "100%",
              aspectRatio: "1920/860",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(18px, 3vw, 48px)",
              // Prevent unnecessary wrapping. I'm not sure why it's wrapping
              // without this on some smaller screen sizes, especially when
              // padding is applied which would've been useful for a
              // semi opaque background for improved visibility.
              width: "90%",
              textShadow: "#FC0 1px 0 10px",
              boxSizing: "border-box",
              color: "black",
              textAlign: "center",
            }}
          >
            Read the full investigatory report
          </span>
        </div>
      </a>

      <Details image="zoepp.png">
        For years, investigators with{" "}
        <a href="https://www.directactioneverywhere.com" target="_blank">
          Direct Action Everywhere
        </a>{" "}
        have been exposing criminal animal cruelty and rampant disease at
        factory farms in Sonoma County, including Petaluma Poultry, a subsidiary
        of poultry giant Perdue. Instead of prosecuting these companies, the
        Sonoma County District Attorney has gone after the whistleblowers and
        animal rescuers. On November 30, 2023, DxE investigator Zoe Rosenberg
        was arrested on multiple felony warrants and at her court date, she was
        charged with five felonies for the rescue of sick chickens from Perdue's
        Petaluma Poultry slaughterhouse in June 2023.
      </Details>
      <Details image="Conrad-Zoe-Rocky.jpeg">
        <p>
          Zoe has been forced to wear a GPS ankle monitor and follow other
          strict pretrial release conditions, including informing the
          authorities any time she leaves her home county. She also has been
          barred from possessing chickens, ducks, or other fowl. Clearly, they
          do not want Zoe rescuing any more suffering animals.
        </p>
        <p>
          Zoe's preliminary hearing took place on May 3, 2024. After they failed
          to present any evidence of vandalism, the prosecution dropped the
          felony conspiracy to commit vandalism charge. Then the judge dismissed
          an additional two felony conspiracy charges. Zoe was left facing one
          felony conspiracy charge and three misdemeanors: trespass, tampering
          with a vehicle, and theft. In response, the prosecution hurriedly
          filed new charges: a felony burglary charge and an additional
          misdemeanor trespass charge. Zoe's next court date is September 4th.
        </p>
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
        <Article
          href="https://www.pressdemocrat.com/article/news/poultry-petaluma-courts-activists-crime/"
          iFramelyUrl="https://cdn.iframe.ly/OdekoI7?card=small"
        />
        <Article
          href="https://www.davisvanguard.org/2024/05/animal-rescuer-sees-1-felony-charge-dropped-in-perdue-poultry-case-still-faces-other-charges/"
          iFramelyUrl="https://cdn.iframe.ly/gHUrdru?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/court-crime-petaluma-animal-welfare-activists-poultry/"
          iFramelyUrl="https://cdn.iframe.ly/4v9R4vZ?card=small"
        />
        <Article
          href="https://www.dailycal.org/news/city/communities/4-felony-counts-dropped-against-uc-berkeley-student-for-animal-removal-charges-remain/article_bad0993c-11c9-11ef-9ef1-8764bf7dbb2b.html"
          iFramelyUrl="https://cdn.iframe.ly/jCTM2HS?card=small"
        />
         <Article
          href="https://napavalleyregister.com/news/local/napa-valley-cookbook-festival-tyler-florence-protestors-petaluma-poultry/article_e9f44776-3281-11ef-bf6e-5357d7c4bc68.html#tracking-source=home-top-story"
          iFramelyUrl="https://cdn.iframe.ly/enpnVhK?card=small"
        />
         <Article
          href="https://www.ktvu.com/news/food-network-star-confronted-activists-napa-book-signing"
          iFramelyUrl="https://cdn.iframe.ly/KuLXI8h?card=small"
        />
      </Press>
    </>
  );
};

export default Reichardt;
