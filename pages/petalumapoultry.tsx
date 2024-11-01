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
        ctaText1="Register to attend trial"
        ctaLink1="https://docs.google.com/forms/d/e/1FAIpQLSeoS_f-9g-NsWVqEofwwy2PuBoPQinW2j4KJpbP47b6bHBtxg/viewform"
        ctaText2="Email the DA"
        ctaText3="Tell Safeway: Drop Petaluma Poultry"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
        ctaLink3="https://docs.google.com/document/d/13s5dQAezXOC7IhnqJh8yxU_lhSDhLMF9E-Lo9LSJT_k/edit?usp=sharing"
      >
        Register to attend the trial convergence in support of Zoe and the right to rescue. Email Sonoma County District Attorney Carla Rodriguez and ask
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
          After a back-and-forth where certain charges were dismissed, filed, and dismissed again, Zoe is now facing one felony conspiracy charge and four misdemeanors, including two types of trespass, tampering
          with a vehicle, and theft. She faces a potential maximum sentence of over 5 years in prison. Zoe's trial is set to start on May 16, 2025 in Santa Rosa, CA. DxE is organizing a convergence of activists around the trial to support Zoe and the right to rescue animals from abuse. Register to attend the trial convergence{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeoS_f-9g-NsWVqEofwwy2PuBoPQinW2j4KJpbP47b6bHBtxg/viewform"
            target="_blank"
          >
            here.
          </a>{" "} 
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
          <Article
          href="https://www.sfexaminer.com/news/business/chef-tyler-florence-distances-from-poultry-farm-and-animal-rights-heat/article_64da5ab4-601a-11ef-a358-9774850aac1b.html?"
          iFramelyUrl="https://cdn.iframe.ly/LdK9Er0?card=small"
        />
         <Article
          href="https://davisvanguard.org/2024/08/sonoma-da-drops-charge-against-animal-rescuer-ahead-of-trial/"
          iFramelyUrl="https://cdn.iframe.ly/gXaI6rl?card=small"
        />
        <Article
          href="https://norcalpublicmedia.org/2024090596220/news-feed/health-workers-supporting-measure-j-link-factory-farms-with-pandemic-illnesses"
          iFramelyUrl="https://cdn.iframe.ly/J9C78mV?card=small"
        />
      </Press>
    </>
  );
};

export default Reichardt;
