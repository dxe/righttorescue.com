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
        Six activists face felony charges stemming from 3 nonviolent direct actions at factory farms which occurred in May 2018, September 2018, and June 2019. Preliminary hearings finally happened on December 5, 2022 for two of the defendants, Rachel and Jon. The judge ruled that there was enough evidence for the case to continue to trial. Preliminary hearings began in November 2021 for the other four defendants, and are scheduled to conclude January 18-19, 2023. Trial is expected to happen in 2023 for all six defendants. 
        </p>
      </FeaturedCase>
      <Letter />
      <CasesSection>
        <CasesSection.CaseList>
          <Case
            name="Sunrise Farms, Petaluma Poultry, Reichardt Duck Farm"
            location="Sonoma County, California"
            page="sunrise"
            image="sunrise.jpg"
          />

          <Case
            name="Ridglan Farms"
            location="Dane County, Wisconsin"
            page="ridglan"
            image="ridglan.jpg"
          />

          <Case
            name="Farmer John"
            location="Los Angeles County, California"
            page="fj"
            image="fj.png"
          />

          <Case
            name="Sospiro Ranch"
            location="North Carolina"
            page="rain"
            image="rain.jpg"
          />

          <Case
            name="Foster Farms"
            location="Merced County, California"
            page="fosterfarms"
            image="ff.png"
          />

          <Case
            name="Diestel Turkey Ranch"
            location="Alameda County, California"
            page="diestel"
            image="diestel.jpg"
          />

          <Case
            name="Pleasant Valley Farms"
            location="San Joaquin County, California"
            page="pv"
            image="pv.jpg"
            past
          />

          <Case
            name="Norbest Turkey"
            location="Sanpete County, Utah"
            page="norbest"
            image="nb.jpg"
            past
          />

          <Case
            name="Smithfield"
            location="Scotland County, North Carolina"
            page="sf-nc"
            image="sf-nc.jpg"
            past
          />

          <Case
            name="Iowa Select Farms"
            location="Iowa"
            page="iowa"
            image="iowa.jpg"
            past
          />

          <Case
            name="Smithfield"
            location="Beaver County, Utah"
            page="sf-ut"
            image="sf-ut.jpg"
            past
          />
        </CasesSection.CaseList>
      </CasesSection>
      <Announcements>
        <Announcement
          title="Washington County, Utah"
          date="Oct. 8, 2022"
          image="sf-ut.jpeg"
          featured
        >
          Victory! The jury in the #SmithfieldTrial unanimously found Wayne and
          Paul NOT GUILTY on all charges for rescuing Lily and Lizzie from
          Smithfield's Circle Four Farms. This groundbreaking verdict shows that
          the public supports the right to rescue animals from abuse.
          Please&nbsp;
          <a
            href="https://twitter.com/DxEverywhere/status/1578885463279927297"
            target="_blank"
          >
            spread the word!
          </a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="Sept. 8, 2022"
          image="gavel1.png"
          featured
        >
          Judge Wilcox ruled, over the defense's objection, to make the jury
          anonymous. It’s a move typically reserved for trials involving violent
          organized crime, with only one known use in Utah history, before now.
          This decision could indicate to jurors that the defendants are violent
          people to be feared, instead of compassionate individuals trying to
          protect the most vulnerable.
        </Announcement>
        <Announcement
          title="Washington County, Utah"
          date="Aug. 19, 2022"
          image="gavel1.png"
          featured
        >
          MOTION GRANTED! Wayne and Paul won their motion for a new jury and
          trial location because the judge agreed that Smithfield and police had
          biased people in Beaver County, Utah. The #SmithfieldTrial will now
          take place in Washington County, Utah. This is a win for the legal
          case, as the jury pool in Washington County is less financially
          dependent on Smithfield. As a result of this change in venue, the
          trial has also been delayed to October 3-7. Please share this news
          on&nbsp;
          <a
            href="https://www.instagram.com/p/Chdz3-nrHM-/?igshid=YmMyMTA2M2Y%3D&"
            target="_blank"
          >
            Instagram
          </a>
          ,&nbsp;
          <a href="https://www.facebook.com/100064603752737/posts/pfbid07qyn3tUWdXrXNQBvMj5ErtQ6w4tVyBFT7WfXNjmtndvxrES6n5v46VJ4jjhAap6Zl/">
            Facebook
          </a>
          , or&nbsp;
          <a
            href="https://twitter.com/dxeverywhere/status/1560828220936638464?s=21&t=Hlgy2rEDKeG3OXNqZ6IyJQ"
            target="_blank"
          >
            Twitter
          </a>
          .
        </Announcement>
        <Announcement
          title="Merced County, California"
          date="June 15, 2022"
          image="FF best.png"
          featured
        >
          Former Baywatch star Alexandra Paul and co-defendant Alicia Santurio
          entered “not guilty” pleas in a new rescue case. In September 2021,
          activists rescued birds from a slaughter truck that was stopped on its
          way into the Foster Farms slaughterhouse in Livingston, CA. In Spring
          2022, Alexandra and Alicia received theft charges in the mail related
          to this rescue.
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="May 30, 2022"
          image="sf-ut.jpeg"
          featured
        >
          Trial dates are set for Wayne and Paul in Utah: Sept. 9-16. DxE is
          organizing a convergence in Utah during the trial to show support for
          animal rescue, build community with one another, and take action
          together to expose Smithfield’s Deathstar to the world.
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="Feb. 24, 2022"
          image="gavel1.png"
          featured
        >
          Utah Judge Jeffrey C. Wilcox, who will preside over the
          #SmithfieldTrial, granted the State’s request to exclude the Operation
          Deathstar video and all evidence of “inhumane animal conditions” at
          trial, except to prove the value of the specific piglets who were
          rescued, Lily and Lizzie. The State argued that the footage would be
          prejudicial because it would arouse horror in the jury, but that is
          exactly why the jury should be allowed to see it.
        </Announcement>
        <Announcement
          title="Wright County, Iowa"
          date="Jan. 19, 2022"
          image="mj.jpg"
          featured
        >
          VICTORY! Just one day before trial was set to begin, all charges
          against DxE investigator Matt Johnson were DROPPED. International
          media outlets had requested coverage and people from around the
          country were planning to attend the trial to support the right to
          rescue. Could it be that the industry got scared of the public
          attention? We were going to expose Iowa Select Farms’ gruesome cruelty
          in court, but instead of going away, we are now using this victory as
          an opportunity to keep fighting "ag-gag" laws and defending the Right
          to Rescue.
        </Announcement>

        <Announcement
          title="Transylvania County, North Carolina"
          date="Dec. 6, 2021"
          image="rain.jpg"
          featured
        >
          GUILTY: The jury found Wayne guilty on both counts: felony breaking or
          entering and felony larceny. The Judge issued a suspended sentence.
          Wayne will have to do two years of supervised probation and pay $250
          in restitution, but no jail time. He plans to appeal.
        </Announcement>
        <Announcement
          title="Sanpete County, Utah"
          date="Nov. 24, 2021"
          image="turkey.jpg"
          featured
        >
          Case dismissed! The felony case against Wayne Hsiung and Paul Darwin
          Picklesimer for rescuing turkeys from a Utah farm in 2017 was just
          dismissed because the company and prosecutor agreed that "the
          criminalization of this nonviolent investigation and rescue is
          unnecessary." This is a step toward the #RightToRescue! Please share
          this important news on&nbsp;
          <a
            href="https://www.facebook.com/directactioneverywhere/photos/a.655305621166457/4951083394921970/"
            target="_blank"
          >
            Facebook
          </a>
          ,&nbsp;
          <a href="https://www.instagram.com/p/CWqcoq5JP40/" target="_blank">
            Instagram
          </a>
          , or&nbsp;
          <a
            href="https://twitter.com/DxEverywhere/status/1463538888140599298"
            target="_blank"
          >
            Twitter
          </a>
          .
        </Announcement>

        <Announcement
          title="Dane County, Wisconsin"
          date="Aug. 18, 2021"
          image="dog.jpg"
          featured
        >
          We got a new case! Eva Hamer, Paul Darwin Picklesimer, and Wayne
          Hsiung were charged for rescuing three beagles from Ridglan Farms, a
          massive breeding and research facility that raises beagles for
          horrific experiments like force-feeding them laundry detergent until
          they vomit blood and die. The defendants believe the public will
          support their actions in saving these dogs.
        </Announcement>

        <Announcement
          title="Grundy County, Iowa"
          date="Jan. 29, 2021"
          image="mj.jpg"
        >
          More charges dropped! Investigator Matt Johnson who exposed pigs being
          roasted alive had his trespass case dismissed, as the company refuses
          to testify about their actions.
        </Announcement>

        <Announcement
          title="Grundy County, Iowa"
          date="Jan. 11, 2021"
          image="ch.jpg"
        >
          Charges dropped! Last year, Cheyanne Holliday chained herself to the
          fence of an Iowa Select Farm during the campaign to end the use of
          "ventilation shutdown." ISF dropped their case against Cheyanne to
          avoid taking the stand in court.
        </Announcement>

        <Announcement title="San Francisco, CA" date="June 9, 2020">
          The San Francisco Board of Supervisors voted unanimously to&nbsp;
          <a
            href="https://www.directactioneverywhere.com/theliberationist/2020-6-9-sf-board-of-supervisors-votes-to-support-factory-farm-whistleblowers-facing-prison-time"
            target="_blank"
          >
            pass a resolution
          </a>
          &nbsp;in support of the Right to Rescue. Now, both Berkeley and San
          Francisco have condemned the prosecution of DxE activists who exposed
          animal cruelty in Sonoma County. The public support for animal rescue
          is growing!
        </Announcement>

        <Announcement title="North Carolina" date="Jan. 16, 2020">
          This week, Arwen's felony charges in the Smithfield case were dropped
          and replaced with misdemeanors!
        </Announcement>

        <Announcement title="North Carolina" date="Jan. 16, 2020">
          We thought the Sospiro trial might happen in December, but now trial
          has again been postponed to mid-2020 at the earliest.
        </Announcement>

        <Announcement title="Berkeley, CA" date="Dec. 11, 2019">
          THE RESOLUTION PASSED. The Berkeley City Council became the first
          legislative body in history (that we are aware of) to support the
          #RightToRescue – and the activists facing serious criminal charges for
          giving animals aid in factory farms. Please&nbsp;
          <a
            href="https://www.cityofberkeley.info/Clerk/City_Council/City_Council__Roster.aspx"
            target="_blank"
          >
            write to the City Council
          </a>
          &nbsp;to thank them for their support. Your support made the
          difference!
        </Announcement>

        <Announcement title="Utah" date="Nov. 25, 2019">
          The owner of the Norbest Turkey farm DxE investigated just released 20
          turkeys to DxE activists days before Thanksgiving, for the second year
          in a row! He has condemned the prosecution that DxE investigators are
          facing and he is actively helping us rescue more animals. See the
          video at&nbsp;
          <a href="http://dxe.io/turkeyrescue" target="_blank">
            dxe.io/turkeyrescue
          </a>
          .
        </Announcement>

        <Announcement title="North Carolina" date="Nov. 18, 2019">
          Sierra is out of the Smithfield case in North Carolina. She was
          offered a deal without charges if she named everyone involved in the
          investigation, but she refused. She ended up with misdemeanor charges
          and community service. Arwen is continuing with the case.
        </Announcement>
      </Announcements>
    </>
  );
};

export default Home;

      </Details>
      <Defendants>
        <Bio name="Almira Tanner" image="almira.jpg">
          A former occupational therapist, Almira is currently a full-time
          activist with the SF Bay Chapter of Direct Action Everywhere. When
          she’s not working, she’s most likely out on a run or going to a
          concert.
        </Bio>
        <Bio name="Cassie King" image="cassie.jpg">
          Cassie was an English major at UC Berkeley and is the
          Communications Director for Direct Action Everywhere. She spends her
          free time writing stories, reading books, and playing with her bunnies
          who were both rescued from slaughter.
        </Bio>
        <Bio name="Jon Frohnmayer" image="jon.jpg">
          A Stanford graduate and former lawyer with DLA Piper, Jon’s current
          focus is animal advocacy in the legislative system, as well as lots of
          yoga and meditation.
        </Bio>
        <Bio name="Priya Sawhney" image="priya.jpg">
          Growing up in India, Priya witnessed the suffering of countless street
          animals. As an investigator with Direct Action Everywhere, she has
          seen the same kind of suffering on a systemic scale inside of factory
          farms.
        </Bio>
        <Bio name="Rachel Ziegler" image="rachel.jpg">
          Rachel moved to California to get more involved in the animal rights movement in Berkeley. She is a full-time photographer, the guardian of two rescued doves, and an activist with Direct Action Everywhere.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 10 felonies for rescuing sick animals.
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
            Landi, Amy Brown, Ana Mehl, Ariel Ryan, Balaji V., Brianna Baer, Camilla Hahn,
            Cheyanne Holliday, Chris Tarzan Hayward, Christina Brown, Christopher Bleichner, Conrad
            de Jesus, Corey Rowland, Daniela Habermehl, Dawn Michelle, Dean
            Wyrzykowski, Efrem Blitz, Emek Echo, Jake H., Jeyrama Robles,
            Jocelyn Cole, Jorden Ruggles, Katt Cho, Kelly Landreth, Kevin Baker, Kristina
            Norris, Lance Wilson, Lauren Fluty, Lawrence Cuneaz, Leni Wasacz, Leslie Goldberg, Lewis Bernier, Linda Cridge,
            Lucy H., Madhu Anderson, Mandy Washburn, Marika Diaz, Marissa Garam,
            Mary McKee, Michael Goldberg, Michelle L., Monica Martella, Nena
            Salas, Nico Stubler, Nikki Symanovich, Noah Bristol, Ora Goldman,
            Paul Nguyen, Peter Lecki, Rachel Arima, Rev. Robert Yamada, Ronnie
            R., Sanjeev Deshpande, Sarah Hewson, Samantha Walsch, Sharon Claitor, Tonia Moore,
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
      </Press>
    </>
  );
};

export default Sunrise;
