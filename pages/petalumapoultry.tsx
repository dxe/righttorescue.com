import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { Col, Row } from "react-bootstrap";
import TwitterTimeline from "../components/Twitter";
import { Letter } from "../components/Letter";

const Reichardt: NextPage = () => {
  return (
    <>
      <Header
        title="Perdue's Petaluma Poultry"
        location="Sonoma County, California"
        video="https://www.youtube.com/embed/3r4xjelwY0U?si=Hq0SmC7-RYN9iBmn"
        videoRatio="1/1"
        ctaText1="Email the DA"
        ctaLink1="#letter"
        // Just scrolling down to #letter -- default target="_blank" is not desired here.
        ctaTarget1="auto"
        ctaText2="Contact Trader Joe's"
        ctaLink2="https://docs.google.com/document/d/1WOBAr4Lc6Kj0vTdWbHpVhMg8P8E4klpt1T6udEqMp10/edit?usp=sharing"
      >
        Ask Sonoma County District Attorney Carla Rodriguez to finally prosecute Petaluma Poultry for years of criminal animal
        cruelty. Plus, urge Trader Joe's to cut ties with Petaluma Poultry.
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
        factory farms in Sonoma County operated by Petaluma Poultry, a subsidiary
        of poultry giant Perdue Farms. Instead of prosecuting these companies, the
        Sonoma County District Attorney has gone after the whistleblowers and
        animal rescuers. On November 30, 2023, DxE investigator Zoe Rosenberg
        was arrested on multiple felony warrants and later charged with five felonies for the rescue of four sick chickens from Perdue's
        Petaluma Poultry slaughterhouse in June 2023.
      </Details>
      <Details image="Conrad-Zoe-Rocky.jpeg">
        <p>
          Zoe has been forced to wear a GPS ankle monitor and follow other
          strict pretrial release conditions for over a year. She has been
          barred from possessing chickens, ducks, or other fowl. Clearly, they
          do not want Zoe rescuing any more suffering animals.
        </p>
        <p>
          After a back-and-forth where certain charges were dismissed, filed, and dismissed again, Zoe is now facing one felony conspiracy charge and three misdemeanors, including two types of trespass and tampering
          with a vehicle. She faces a potential maximum sentence of almost 5 years in prison. Zoe's trial was supposed to begin in May, but it was delayed to September because the prosecutors requested more time to prepare. The #PerdueTrial will now start September 15, 2025, and it is expected to last 2-4 weeks.
        </p>
      </Details>

      <div id="letter">
        <Letter />
      </div>

      <div className="bg-light pt-5"> {/* Add white padding on top */}
        <Defendants>
          <Bio name="Zoe Rosenberg" image="Zoe-and-Glenn.jpeg">
            Zoe is a UC Berkeley student, TEDx speaker, factory farm investigator,
            and animal rescuer. When she was 11 years old, she founded Happy Hen
            Animal Sanctuary, a nonprofit organization that has now saved over
            1,000 neglected or abandoned animals.
          </Bio>
        </Defendants>
      </div>
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
        <Article
          href="https://www.dailycal.org/opinion/op-eds/berkeley-can-lead-the-way-to-a-factory-farm-free-future/article_8d860e38-8b56-11ef-b67c-ffdd5d0a147e.html"
          iFramelyUrl="https://cdn.iframe.ly/cuPLIrG?card=small"
        />
         <Article
          href="https://sonomastatestar.com/37329/news/activists-face-harsh-penalties-for-exposing-cruelty/"
          iFramelyUrl="https://cdn.iframe.ly/rm0SXvA?card=small"
        />
         <Article
          href="https://www.publicnewsservice.org/2025-01-30/animal-welfare/trial-ahead-for-ca-animal-activist-accused-of-trespassing-theft-conspiracy/a94966-1"
          iFramelyUrl="https://cdn.iframe.ly/l7LMcpf?card=small"
        />
         <Article
          href="https://sfstandard.com/2025/02/03/trader-joes-farmgirl-tiktok-beef-chickens/"
          iFramelyUrl="https://cdn.iframe.ly/3xP4tQE?card=small"
        />
         <Article
          href="https://www.dailycal.org/news/city/law-and-justice/uc-berkeley-student-arraigned-on-charges-for-removing-chickens-from-farm/article_d0133f8a-f98f-11ef-bfb9-933161ed9da4.html"
          iFramelyUrl="https://cdn.iframe.ly/ihi9pNh?card=small"
        />
        <Article
          href="https://sonomastatestar.com/37786/news/animal-rights-activists-protest-at-home-of-perdue-farms-director-of-operations-after-a-court-hearing-for-fellow-activist/"
          iFramelyUrl="https://cdn.iframe.ly/KCb8JX5?card=small"
        />
         <Article
          href="https://www.delmarvanow.com/story/news/local/maryland/2025/03/18/protesters-target-perdue-headquarters-in-salisbury-maryland-2025-direct-action-everywhere/82518111007/"
          iFramelyUrl="https://cdn.iframe.ly/rvYWIjo?card=small"
        />
         <Article
          href="https://www.dailycal.org/news/city/law-and-justice/uc-berkeley-student-arraigned-on-charges-for-removing-chickens-from-farm/article_d0133f8a-f98f-11ef-bfb9-933161ed9da4.html"
          iFramelyUrl="https://cdn.iframe.ly/ihi9pNh?card=small"
        />
         <Article
          href="https://www.kcra.com/article/bay-area-animal-rights-activist-prison-chicken-rescue/64637277"
          iFramelyUrl="https://cdn.iframe.ly/VJZHzg4?card=small"
        />
         <Article
          href="https://www.pressdemocrat.com/article/news/zoe-rosenberg-billboard-petaluma-poultry/"
          iFramelyUrl="https://cdn.iframe.ly/ll8vPOf?card=small"
        />
         <Article
          href="https://www.dailycal.org/opinion/op-eds/graduating-with-an-ankle-monitor/article_cc277259-51ce-4910-9cc3-076927cda191.html"
          iFramelyUrl="https://cdn.iframe.ly/9vQqxPXg?card=small"
        />
         <Article
          href="https://sentientmedia.org/animal-rights-activist-rescued-four-sick-chickens/"
          iFramelyUrl="https://cdn.iframe.ly/YpJkPac2?card=small"
        />
         <Article
          href="https://theintercept.com/2025/06/02/fbi-animal-rights-bird-flu-disease-terrorists/"
          iFramelyUrl="https://cdn.iframe.ly/QdsEdctR?card=small"
        />
        <Article
          href="https://www.wired.com/story/fbi-wmdd-dxe-animal-agriculture-alliance/"
          iFramelyUrl="https://cdn.iframe.ly/3LrJOF7t?card=small"
        />
          <Article
          href="https://davisvanguard.org/2025/06/sonoma-county-justice-animal-rights/"
          iFramelyUrl="https://cdn.iframe.ly/DWgbvJq3?card=small"
        />
      </Press>
    </>
  );
};

export default Reichardt;
