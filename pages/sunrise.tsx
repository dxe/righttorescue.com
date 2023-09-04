import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { Col } from "react-bootstrap";

const Sunrise: NextPage = () => {
  return (
    <>
      <Header
        title="Sunrise Farms, Petaluma Poultry, Reichardt Duck Farm"
        location="Sonoma County, California"
        video="https://www.youtube.com/embed/pV4LCWJaa18"
        videoRatio="1x1"
        ctaText1="Call: 707-565-2311"
        ctaLink1="tel:707-565-2311"
        ctaText2="Email"
        ctaLink2="mailto:carla.rodriguez@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Carla Rodriguez politely
        asking her to drop the charges against the activists who exposed animal
        cruelty and rescued suffering animals.
      </Header>
      <Details image="sunrise.jpg">
        Over 100 people have been arrested on felony charges for taking
        nonviolent direct action to help suffering animals at factory farms in
        Sonoma County, after the government ignored repeated reports of criminal
        animal cruelty. In October 2018, a small group of activists were charged
        with seven felonies each for two actions at factory farms which occurred
        in May 2018 (at Sunrise Farms) and September 2018 (at McCoy's Poultry, a
        supplier to Petaluma Poultry). The DA filed additional charges following
        a third action in June 2019 (at Reichardt Duck Farm). Since then, the
        prosecution has dismissed all of the charges related to the action at
        McCoy's and amended the charges to remove all mention of burglary and
        theft, leaving only conspiracy to commit trespass and trespass. Trial
        starts September 8 for Cassie, Priya, and Wayne, and it is expected to
        last two weeks (or longer). Direct Action Everywhere (DxE) is organizing
        a convergence during the trial to support the defendants and the right
        to rescue. Register for the trial support convergence&nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScHKN-MDu6r-UGLfsmeZu_kGTn_1b-TZZajIYQVNyqRPbAGIw/viewform"
          target="_blank"
        >
          here.
        </a>
        &nbsp;
      </Details>
      <Defendants>
        <Bio name="Cassie King" image="cassie.jpg">
          Cassie was an English major at UC Berkeley and is the Communications
          Director for Direct Action Everywhere. She is the guardian of two
          bunnies who were both rescued from slaughter.
        </Bio>
        <Bio name="Priya Sawhney" image="priya.jpg">
          Growing up in India, Priya witnessed the suffering of countless street
          animals. As an investigator with Direct Action Everywhere, she has
          seen the same kind of suffering on a systemic scale inside of factory
          farms.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne is an attorney and co-founder of The Simple Heart. He has been a
          community organizer for over 20 years.
        </Bio>
        <Col
          md={{ span: 12 }}
          lg={{ span: 8 }}
          className="px-4 py-5 more-defendants"
        >
          <h4 className="text-center text-white pb-4">
            The following people have also been arrested in Sonoma County for
            taking nonviolent direct action to expose animal cruelty:
          </h4>
          <p className="text-white">
            Aidan Cook, Alex Santurio, Alexandra Paul, Alicia Santurio, Almira
            Tanner, Alyssa Landi, Amy Brown, Ana Mehl, Ariel Ryan, Balaji V.,
            Brianna Baer, Camilla Hahn, Cheyanne Holliday, Chris Tarzan Hayward,
            Christina Brown, Christopher Bleichner, Conrad de Jesus, Corey
            Rowland, Daniela Habermehl, Dawn Michelle, Dean Wyrzykowski, Efrem
            Blitz, Emek Echo, Jake H., Jeyrama Robles, Jocelyn Cole, Jon
            Frohnmayer, Jorden Ruggles, Katt Cho, Kelly Landreth, Kevin Baker,
            Kristina Norris, Lance Wilson, Lauren Fluty, Lawrence Cuneaz, Leni
            Wasacz, Leslie Goldberg, Lewis Bernier, Linda Cridge, Lucy H., Madhu
            Anderson, Mandy Washburn, Marika Diaz, Marissa Garam, Mary McKee,
            Michael Goldberg, Michelle L., Monica Martella, Nena Salas, Nico
            Stubler, Nikki Symanovich, Noah Bristol, Ora Goldman, Paul Nguyen,
            Peter Lecki, Rachel Arima, Rev. Robert Yamada, Ronnie R., Sanjeev
            Deshpande, Sarah Hewson, Samantha Walsch, Sharon Claitor, Tonia
            Moore, Vanessa Marsot, Vero Z., Vicky Stewart, Virginia Fior
          </p>
        </Col>
      </Defendants>
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
      </Press>
    </>
  );
};

export default Sunrise;
