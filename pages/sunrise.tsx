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
        ctaLink2="mailto:jill.ravitch@sonoma-county.org"
      >
        Call and email Sonoma County District Attorney Jill Ravitch politely
        asking her to drop the charges against the activists who exposed animal
        cruelty and rescued suffering animals.
      </Header>
      <Details image="sunrise.jpg">
        Over 100 nonviolent activists have been arrested at factory farms in
        Sonoma County for taking direct action to help suffering animals after
        the government ignored repeated reports of criminal animal cruelty.
        Thirteen activists face criminal charges, including a total of 47
        felonies. Trial was expected to begin in 2020, but the COVID-19 pandemic
        delayed the court schedule. Four felony defendants have preliminary
        hearings set for November 2021, and two felony defendants have
        preliminary hearings set for January 2022.
      </Details>
      <Defendants>
        <Bio name="Almira Tanner" image="almira.jpg">
          A former occupational therapist, Almira is currently a full-time
          activist with the SF Bay Chapter of Direct Action Everywhere. When
          she’s not working, she’s most likely out on a run or going to a
          concert.
        </Bio>
        <Bio name="Ana Mehl" image="am.jpg">
          Ana is a plant-based chef who left her kitchen to investigate the
          criminal animal cruelty rampant in California farms. In her time off,
          she can be found spending time with her friends, human and nonhuman
          alike.
        </Bio>
        <Bio name="Cassie King" image="cassie.jpg">
          Cassie was an English major at UC Berkeley and now leads the
          Communications Committee for Direct Action Everywhere. She spends her
          free time writing stories, reading books, and playing with her bunnies
          who were both rescued from slaughter.
        </Bio>
        <Bio name="Cheyanne Holliday" image="ch.jpg">
          Cheyanne is the founder and president of the non-profit organization
          PEACE: Promoting Equality, Acceptance & Compassion Everywhere. Two
          years after becoming an activist, she opened an animal rights center,
          vegan restaurant, community event space, art gallery, and theater in
          the heart of animal agriculture: Fairfield, IA.
        </Bio>
        <Bio name="Jon Frohnmayer" image="jon.jpg">
          A Stanford graduate and former lawyer with DLA Piper, Jon’s current
          focus is animal advocacy in the legislative system, as well as lots of
          yoga and meditation.
        </Bio>
        <Bio name="Kelly Landreth" image="kl.jpg">
          Kelly is a bartender in Colorado whose personal experiences with
          sexual harassment led her to sympathize with animals and recognize
          that all oppression is connected.
        </Bio>
        <Bio name="Lance Wilson" image="lw.jpg">
          Current real estate agent striving to become full-time activist after
          attending the Animal Liberation Conference. Moved to San Diego from
          St. Louis to get more involved in animal rights. Loves long, romantic
          walks to vegan junk food!
        </Bio>
        <Bio name="Lawrence Cuneaz" image="lc.jpg">
          Lawrence is a tech consultant from the Midwest. Being bullied in
          school helped him recognize the helplessness of animals, and when he’s
          not fighting for their liberation, he is working out or dancing.
        </Bio>
        <Bio name="Lewis Bernier" image="lb.jpg">
          Lewis is an outdoorsman and bodybuilder who works to investigate
          cruelty in animal agriculture. Since moving to the Bay Area, they have
          exposed horrific conditions inside dozens of farms and slaughterhouses
          across the United States.
        </Bio>
        <Bio name="Priya Sawhney" image="priya.jpg">
          Growing up in India, Priya witnessed the suffering of countless street
          animals. As an investigator with Direct Action Everywhere, she has
          seen the same kind of suffering on a systemic scale inside of factory
          farms.
        </Bio>
        <Bio name="Rachel Ziegler" image="rachel.jpg">
          Rachel moved to California because of the thriving animal rights
          movement here. She works in a vegan restaurant, cares for rescued
          pigeons, and organizes protests with Direct Action Everywhere.
        </Bio>
        <Bio name="Sanjeev Deshpande" image="sd.jpg">
          Sanjeev is a Silicon Valley software engineer who loves trying out
          different adventure sports, learning cultures and languages, spending
          time with animals in sanctuaries, and reading The New York Times.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 16 felonies for rescuing sick animals.
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
            Aidan Cook, Alex Santurio, Alexandra Paul, Alicia Santurio, Alyssa
            Landi, Amy Brown, Ariel Ryan, Balaji V., Brianna Baer, Camilla Hahn,
            Chris Tarzan Hayward, Christina Brown, Christopher Bleichner, Conrad
            de Jesus, Corey Rowland, Daniela Habermehl, Dawn Michelle, Dean
            Wyrzykowski, Efrem Blitz, Emek Echo, Jake H., Jeyrama Robles,
            Jocelyn Cole, Jorden Ruggles, Katt Cho, Kevin Baker, Kristina
            Norris, Lauren Fluty, Leni Wasacz, Leslie Goldberg, Linda Cridge,
            Lucy H., Madhu Anderson, Mandy Washburn, Marika Diaz, Marissa Garam,
            Mary McKee, Michael Goldberg, Michelle L., Monica Martella, Nena
            Salas, Nico Stubler, Nikki Symanovich, Noah Bristol, Ora Goldman,
            Paul Nguyen, Peter Lecki, Rachel Arima, Rev. Robert Yamada, Ronnie
            R., Sarah Hewson, Samantha Walsch, Sharon Claitor, Tonia Moore,
            Vanessa Marsot, Vero Z., Vicky Stewart, Virginia Fior
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
        <Bio name="Omar Figueroa" image="sof.jpg" circle>
          Omar has represented hundreds of peaceful individuals facing
          incarceration for cannabis-related felonies. He's a graduate of Yale
          and Stanford Law School, and a purple belt in Brazilian Jiu-Jitsu.
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
          href="https://www.forbes.com/sites/janetwburns/2018/09/29/activists-occupy-amazon-chicken-supplier-to-treat-sick-starving-birds/"
          iFramelyUrl="https://cdn.iframe.ly/5icS5Hr?card=small"
        />
        <Article
          href="https://www.democracynow.org/2019/6/6/direct_action_everywhere_dxe_duck_farm"
          iFramelyUrl="https://cdn.iframe.ly/PihY1hc?card=small"
        />
        <Article
          href="https://psmag.com/environment/why-did-the-chicken-activists-cross-the-road-to-start-a-debate-about-animal-cruelty"
          iFramelyUrl="https://cdn.iframe.ly/Y3W0uoC?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/dozens-of-animal-welfare-activists-arrested-after-large-protest-at-petaluma/"
          iFramelyUrl="https://cdn.iframe.ly/cnhos0c?card=small"
        />
        <Article
          href="https://www.pressdemocrat.com/article/news/petaluma-protesters-urge-animal-rights-law/"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?card=small&url=https%3A%2F%2Fwww.pressdemocrat.com%2Farticle%2Fnews%2Fpetaluma-protesters-urge-animal-rights-law%2F&key=f228a120ef238f04c4948018b7d4e843"
        />
      </Press>
    </>
  );
};

export default Sunrise;
