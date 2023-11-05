import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { Col, Row } from "react-bootstrap";
import TwitterTimeline from "../components/Twitter";

const Sunrise: NextPage = () => {
  return (
    <>
      <Header
        title="Sunrise Farms and Reichardt Duck Farm"
        location="Sonoma County, California"
        video="https://www.youtube.com/embed/IqiC8MQcjiM?si=xfkXH40tKS41LYcK"
        videoRatio="1x1"
        ctaText1="Call: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez and ask
        her to finally prosecute Sunrise Farms and Reichardt Duck Farm for years
        of criminal animal cruelty.
      </Header>

      <Details image="sunrise.jpg">
        For years, investigators with {" "}
          <a
            href="https://www.directactioneverywhere.com"
            target="_blank"
          >
            Direct Action Everywhere
          </a> have been
        exposing violations of animal cruelty law at factory farms in Sonoma
        County, including Sunrise Farms and Reichardt Duck Farm. Instead of
        prosecuting these companies, the Sonoma County District Attorney has
        gone after the whistleblowers and animal rescuers. Over 100 people have
        been arrested on felony charges for taking nonviolent direct action to
        help suffering animals at factory farms in the county. These charges
        resulted in the five-year prosecution of a handful of activists and
        ultimately, the eight-week trial of one remaining defendant, Wayne
        Hsiung.
      </Details>

      <Details image="wayne cuffed at court.jpeg">
        On November 2, 2023, after 6 days of jury deliberation, Wayne was convicted of three of the four charges in the #SonomaRescueTrial. This includes felony conspiracy and misdemeanor trespass at Sunrise Farms and misdemeanor trespass at Reichardt Duck Farm. The jury could not reach a unanimous verdict on a second felony conspiracy charge, resulting in a “hung jury” mistrial on that charge. Wayne was cuffed and immediately taken into custody. He has a sentencing hearing set for November 30th. He will be in jail until then, without bail. {" "}
          <a
            href="https://www.facebook.com/events/1055213158842795"
            target="_blank"
          >
            Please join us on November 30th
          </a> to support Wayne and defend the #RightToRescue. You can also write Wayne a letter. The jail has strict instructions which you can see {" "}
          <a
            href="dxe.io/writetowayne"
            target="_blank"
          >
            here
          </a>. His address is:
Wayne Hsiung
Main Adult Detention Facility
2777 Ventura Avenue
Santa Rosa, CA 95403 

Don't share any private information in your letter as there is no privacy in jails. Cops will read what you write. 
      </Details>

      <Defendants>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne is an attorney and co-founder of The Simple Heart. He has been a
          community organizer for over 20 years.
        </Bio>
      </Defendants>

      <div className="container">
        <Row xs={1} md={2} lg={3} className="justify-content-center">
          <Col
            md={{ span: 12 }}
            lg={{ span: 10 }}
            className="px-4 py-5 more-defendants"
          >
            <h4 className="text-center text-white pb-4">
              The following people have also been arrested in Sonoma County for
              taking nonviolent direct action to expose animal cruelty:
            </h4>
            <p className="text-white">
              Aidan Cook, Alex Santurio, Alexandra Paul, Alicia Santurio, Almira
              Tanner, Alyssa Landi, Amy Brown, Ana Mehl, Ariel Ryan, Balaji V.,
              Brianna Baer, Camilla Hahn, Cassie King, Cheyanne Holliday, Chris
              Tarzan Hayward, Christina Brown, Christopher Bleichner, Conrad de
              Jesus, Corey Rowland, Daniela Habermehl, Dawn Michelle, Dean
              Wyrzykowski, Efrem Blitz, Emek Echo, Jake H., Jeyrama Robles,
              Jocelyn Cole, Jon Frohnmayer, Jorden Ruggles, Katt Cho, Kelly
              Landreth, Kevin Baker, Kristina Norris, Lance Wilson, Lauren
              Fluty, Lawrence Cuneaz, Leni Wasacz, Leslie Goldberg, Lewis
              Bernier, Linda Cridge, Lucy H., Madhu Anderson, Mandy Washburn,
              Marika Diaz, Marissa Garam, Mary McKee, Michael Goldberg, Michelle
              L., Monica Martella, Nena Salas, Nico Stubler, Nikki Symanovich,
              Noah Bristol, Ora Goldman, Paul Nguyen, Peter Lecki, Rachel Arima,
              Rev. Robert Yamada, Ronnie R., Sanjeev Deshpande, Sarah Hewson,
              Samantha Walsch, Sharon Claitor, Tonia Moore, Vanessa Marsot, Vero
              Z., Vicky Stewart, Virginia Fior
            </p>
          </Col>
        </Row>
      </div>

      <TwitterTimeline
        twitterHandle="SonomaTrial"
        title="View the latest updates on the Sonoma Trial Twitter:"
      />

      <Press>
        <Article
          href="https://www.pressdemocrat.com/article/news/dozens-of-animal-welfare-activists-arrested-after-large-protest-at-petaluma/"
          iFramelyUrl="https://cdn.iframe.ly/cnhos0c?card=small"
        />
        <Article
          href="https://www.democracynow.org/2018/5/30/39_arrested_protesting_industrial_farm_supplying"
          iFramelyUrl="//iframely.net/nkC42xv?card=small"
        />
        <Article
          href="https://psmag.com/environment/why-did-the-chicken-activists-cross-the-road-to-start-a-debate-about-animal-cruelty"
          iFramelyUrl="https://cdn.iframe.ly/Y3W0uoC?card=small"
        />
        <Article
          href="https://www.forbes.com/sites/janetwburns/2018/09/29/activists-occupy-amazon-chicken-supplier-to-treat-sick-starving-birds/"
          iFramelyUrl="https://cdn.iframe.ly/5icS5Hr?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/six-animal-welfare-activists-face-felony-charges-for-petaluma-chicken-farm/"
          iFramelyUrl="//iframely.net/A2K8dJI?card=small"
        />
        <Article
          href="https://www.democracynow.org/2019/6/6/direct_action_everywhere_dxe_duck_farm"
          iFramelyUrl="https://cdn.iframe.ly/PihY1hc?card=small"
        />
        <Article
          href="https://www.democracynow.org/2019/6/7/animal_rights_activists_cops_punish_protesters"
          iFramelyUrl="//iframely.net/lhQt5Th?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/petaluma-protesters-urge-animal-rights-law/"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?card=small&url=https%3A%2F%2Fwww.pressdemocrat.com%2Farticle%2Fnews%2Fpetaluma-protesters-urge-animal-rights-law%2F&key=f228a120ef238f04c4948018b7d4e843"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/delays-continue-in-case-of-activists-who-removed-chickens-from-local-poultr/"
          iFramelyUrl="https://cdn.iframe.ly/vD6oEaA?card=small"
        />
        <Article
          href="https://www.petaluma360.com/article/news/animal-rights-activists-to-stand-trial-in-2018-19-petaluma-protest-burglary/"
          iFramelyUrl="https://cdn.iframe.ly/O3PV9IR?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/sebastopol-city-council-urges-leniency-in-criminal-case-against-animal-acti/"
          iFramelyUrl="https://cdn.iframe.ly/yYN7QD6?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/animal-rights-activists-still-dont-know-when-theyre-going-to-trial/"
          iFramelyUrl="https://cdn.iframe.ly/MBt5VPS?card=small"
        />
        <Article
          href="https://theintercept.com/2023/06/13/perdue-chicken-slaughterhouse-animal-cruelty-dxe/"
          iFramelyUrl="https://cdn.iframe.ly/bA6f35V?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/bay-area-activist-group-back-at-petaluma-poultry-facility-removes-18-chick/"
          iFramelyUrl="https://cdn.iframe.ly/IZoGSGa?card=small"
        />
        <Article
          href="https://norcalpublicmedia.org/2023061588894/news-feed/activists-target-petaluma-poultry"
          iFramelyUrl="https://cdn.iframe.ly/K7nOcjG?card=small"
        />
        <Article
          href="https://www.alternet.org/problem-humanely-raised-poultry-eggs/"
          iFramelyUrl="https://cdn.iframe.ly/Aig86fY?card=small"
        />
        <Article
          href="https://norcalpublicmedia.org/2023070689509/news-feed/animal-rights-activists-call-for-action-from-county-da"
          iFramelyUrl="https://cdn.iframe.ly/dodQdch?card=small"
        />
        <Article
          href="https://wagingnonviolence.org/2023/08/proud-to-stand-trial-defending-right-to-rescue-animals/"
          iFramelyUrl="https://cdn.iframe.ly/rgIHv1M?card=small"
        />
        <Article
          href="https://dailycal.org/2023/08/30/direct-action-everywhere-activists-face-felony-and-misdemeanor-charges"
          iFramelyUrl="https://cdn.iframe.ly/oeIZ9r0?card=small"
        />
        <Article
          href="https://sentientmedia.org/sonoma-open-rescue-trial/"
          iFramelyUrl="https://cdn.iframe.ly/BK3a37D?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/animal-welfare-group-rallies-outside-sonoma-county-courthouse-as-criminal-c/?artslide=0"
          iFramelyUrl="https://cdn.iframe.ly/fEoRmha?card=small"
        />
        <Article
          href="https://www.cbsnews.com/sanfrancisco/video/animal-rights-protesters-go-on-trial-in-sonoma-county/"
          iFramelyUrl="https://cdn.iframe.ly/jOPWrAf?card=small"
        />
        <Article
          href="https://norcalpublicmedia.org/2023090991417/news-feed/awaited-trial-of-bay-area-animal-rights-activists-begins"
          iFramelyUrl="https://cdn.iframe.ly/qSYnbkH?card=small"
        />
        <Article
          href="https://dailycal.org/2023/09/19/gag-order-on-dxe-activists-upheld-despite-calls-to-vacate-from-berkeley-law-dean-aclu"
          iFramelyUrl="https://cdn.iframe.ly/er2ViUB?card=small"
        />
        <Article
          href="https://www.northbaybusinessjournal.com/article/news/1-of-2-activists-accused-of-stealing-livestock-from-petaluma-farms-reaches/"
          iFramelyUrl="https://cdn.iframe.ly/9XLRIPW?card=small"
        />
        <Article
          href="https://www.davisvanguard.org/2023/09/court-watch-2nd-california-animal-rights-trial-involving-open-rescue-ongoing-in-santa-rosa-defense-said-hopes-to-open-floodgates-to-new-view-of/"
          iFramelyUrl="https://cdn.iframe.ly/XH95tzr?card=small"
        />
        <Article
          href="https://dailyillini.com/opinions-stories/2023/10/04/letter-to-the-editor-its-time-to-confront-animal-violence/"
          iFramelyUrl="https://cdn.iframe.ly/xn79VKF?card=small"
        />
        <Article
          href="https://www.davisvanguard.org/2023/10/court-watch-open-rescue-trial-underway-lawyer-activist-faces-felonies-insists-ca-law-allows-rescue-of-injured-animals-in-factory-farms-judge-guts-defense-imposes-gag-ord/"
          iFramelyUrl="https://cdn.iframe.ly/3twgXY9?card=small"
        />
        <Article
          href="https://www.northbaybusinessjournal.com/article/news/opening-statements-begin-in-trial-of-activist-accused-of-taking-animals-fro/"
          iFramelyUrl="https://cdn.iframe.ly/rCTpUM9?card=small"
        />
        <Article
          href="https://www.davisvanguard.org/2023/10/court-watch-prosecution-rests-in-california-farm-animal-open-rescue-trial-celebrity-others-called-by-defense-to-explain-actions-to-save-sick-injured-animals/"
          iFramelyUrl="https://cdn.iframe.ly/U0lHaDo?card=small"
        />
        <Article
          href="https://sentientmedia.org/open-rescue-movement/"
          iFramelyUrl="https://cdn.iframe.ly/RVy9o5Y?card=small"
        />
        <Article
          href="https://www.davisvanguard.org/2023/10/court-watch-jury-in-deliberation-after-closing-arguments-in-open-rescue-case-at-california-factory-farms-lawyer-faces-felony-charges/"
          iFramelyUrl="https://cdn.iframe.ly/1LvLd75?card=small"
        />
      </Press>
    </>
  );
};

export default Sunrise;
