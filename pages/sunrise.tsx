import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { Col } from "react-bootstrap";
import { Lawyers } from "../components/CasePage/Lawyers";

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
        Over 100 nonviolent activists have been arrested at factory farms in
        Sonoma County for taking nonviolent direct action to help suffering animals after
        the government ignored repeated reports of criminal animal cruelty. In October 2018, six activists were charged with 7 felonies each for two actions
        at factory farms which occurred in May 2018 (at Sunrise Farms) and September 2018 (at McCoy's Poultry, a supplier to Petaluma Poultry). Five of the defendants received additional charges following a third action in June
        2019 (at Reichardt Duck Farm). Since then, the prosecution has dismissed all of the charges related to the action at McCoys and a felony charge from Sunrise, and two of the activists, Almira and Jon, have taken plea deals. Now, four
        activists remain in the case. The preliminary hearings for Rachel Ziegler happened on December 5, 2022, and Judge Urioste ruled that there was enough
        evidence for the case to continue to trial. The preliminary hearing for the other defendants began in November 2021 and concluded on January 19, 2023, but Judge Honigsberg said he needed some time to consider the defense attorneys' 17b motions (motions to reduce the felony counts to misdemeanors), so Cassie, Priya, and Wayne went back to court on February 6, 2023 to hear the judge's ruling. He granted the 17b motion for Cassie, saying that in his review of the livestreams, he had not seen her seeming to be in a leadership role at the actions. He denied the motions for Priya and Wayne. Cassie now faces 8 misdemeanors, whereas her co-defendants face four felonies and four misdemeanors each, including Rachel. Trial is expected in 2023 for all 
        defendants.
      </Details>
      <Defendants>
        <Bio name="Cassie King" image="cassie.jpg">
          Cassie was an English major at UC Berkeley and is the Communications
          Director for Direct Action Everywhere. She spends her free time
          writing stories, reading books, and playing with her bunnies who were
          both rescued from slaughter.
        </Bio>
        <Bio name="Priya Sawhney" image="priya.jpg">
          Growing up in India, Priya witnessed the suffering of countless street
          animals. As an investigator with Direct Action Everywhere, she has
          seen the same kind of suffering on a systemic scale inside of factory
          farms.
        </Bio>
        <Bio name="Rachel Ziegler" image="rachel.jpg">
          Rachel moved to California to get more involved in the animal rights
          movement in Berkeley. She is a full-time photographer, the guardian of
          two rescued doves, and an activist with Direct Action Everywhere.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne is an attorney and co-founder of the animal rights
          network, Direct Action Everywhere. He has been a community organizer for over 20 years.
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
            Aidan Cook, Alex Santurio, Alexandra Paul, Alicia Santurio, Almira Tanner, Alyssa
            Landi, Amy Brown, Ana Mehl, Ariel Ryan, Balaji V., Brianna Baer,
            Camilla Hahn, Cheyanne Holliday, Chris Tarzan Hayward, Christina
            Brown, Christopher Bleichner, Conrad de Jesus, Corey Rowland,
            Daniela Habermehl, Dawn Michelle, Dean Wyrzykowski, Efrem Blitz,
            Emek Echo, Jake H., Jeyrama Robles, Jocelyn Cole, Jon Frohnmayer, Jorden Ruggles,
            Katt Cho, Kelly Landreth, Kevin Baker, Kristina Norris, Lance
            Wilson, Lauren Fluty, Lawrence Cuneaz, Leni Wasacz, Leslie Goldberg,
            Lewis Bernier, Linda Cridge, Lucy H., Madhu Anderson, Mandy
            Washburn, Marika Diaz, Marissa Garam, Mary McKee, Michael Goldberg,
            Michelle L., Monica Martella, Nena Salas, Nico Stubler, Nikki
            Symanovich, Noah Bristol, Ora Goldman, Paul Nguyen, Peter Lecki,
            Rachel Arima, Rev. Robert Yamada, Ronnie R., Sanjeev Deshpande,
            Sarah Hewson, Samantha Walsch, Sharon Claitor, Tonia Moore, Vanessa
            Marsot, Vero Z., Vicky Stewart, Virginia Fior
          </p>
        </Col>
      </Defendants>
      <Lawyers>
        <Bio name="Chris Andrian" image="sca.jpg" circle>
          For almost 40 years, Chris has been one of Sonoma County's pre-eminent
          trial lawyers. He has litigated in over 150 jury trials and
          represented Grateful Dead guitarist Jerry Garcia.
        </Bio>
        <Bio name="Gabriela Lopez" image="sgl.jpg" circle>
          Gabriela is an Oakland based criminal defense attorney who focuses on
          criminal defense for immigrants and activists. She also serves on the
          National Executive Committee of the National Lawyers Guild.
        </Bio>
        <Bio name="Lauren Regan" image="slr.jpg" circle>
          Lauren is the executive director of the Civil Liberties Defense
          Center, which has defended over 3000 activists for free. She is a
          national expert in the defense of political activists, particularly
          those in the climate, environmental, indigenous and animal rights
          movements.
        </Bio>
        <Bio name="Orchid Vaghti" image="sov.jpg" circle>
          Orchid started her career in criminal defense law at the age of
          sixteen, and she has successfully handled hundreds of felony and
          misdemeanor cases.
        </Bio>
        <Bio name="Izaak Schwaiger" image="sis.jpg" circle>
          Izaak has devoted his practice to defending the civil rights of those
          who have been wronged by police, and his accomplishments in police
          brutality cases have made national headlines. In law school he was
          named "most likely to become a rockstar," and we think he has.
        </Bio>
      </Lawyers>
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
      </Press>
    </>
  );
};

export default Sunrise;
