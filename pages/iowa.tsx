import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";
import { Defendants } from "../components/Case/Defendants";
import { Bio } from "../components/Case/Bio";
import { Press } from "../components/Case/Press";
import { Article } from "../components/Case/Article";

const Iowa: NextPage = () => {
  return (
    <>
      <Header
        title="Iowa Select Farms"
        location="Iowa"
        video="https://www.youtube.com/embed/0Hf1YwIzN-k"
        videoRatio="1x1"
        ctaText1="Sign Up"
        ctaLink1="https://www.directactioneverywhere.com/campaigns/dxe-expose-mass-killings-due-to-covid-19"
      >
        Join our campaign to expose the industry and #CancelAnimalAg.
      </Header>
      <Details>
        <h4>
          DxE exposed Iowa's largest “pork” producer using a gruesome mass kill
          method called “ventilation shutdown” (VSD).
        </h4>
        <p>
          Thousands of pigs were loaded into a shed, the vents were sealed off,
          and heat and steam were pumped inside to kill them. With the help of
          an employee whistleblower who was sickened by the cruelty, DxE
          investigators captured hidden-camera video of the pigs screaming in
          agony for hours as they died. They also rescued a piglet and named her
          Gilly.
        </p>

        <h4>Brutality like this is the result of a corrupt food system.</h4>
        <p>
          The USDA is handing out millions of dollars to make up for the profit
          companies lost from killing off their animals during the pandemic. A
          producer like Iowa Select Farms can get hundreds of dollars for every
          pig they killed and threw away.
        </p>
        <p>
          Instead of prosecuting the horrific animal cruelty at Iowa Select
          Farms, the state of Iowa came after the whistleblowers who exposed it.
          In direct response to DxE’s investigations, the governor has signed a
          series of “ag-gag” bills into law to protect the industry from public
          scrutiny. Matt Johnson is the first person to be charged under the new
          law, which was enacted less than two weeks after the release of DxE’s
          exposé.
        </p>

        <h4>
          The COVID-19 crisis put a spotlight on the horrors of animal
          agriculture.
        </h4>
        <p>
          Now more than ever, the world is paying attention to the reality of
          animal agriculture, from diseases brewing inside factory farms, to the
          routine endangerment of slaughterhouse workers, to “ventilation
          shutdown” – the epitome of this industry’s disregard for life.
        </p>
        <p>
          While the industry thinks they’re putting whistleblowers on trial, the
          tables are being turned to put the industry on trial instead.
          Activists and journalists are uniting in Iowa for this groundbreaking
          case. We will show the public what the industry and government are
          trying so hard to hide.
        </p>
        <p>
          A victory in court could challenge the constitutionality of ag-gag
          laws and establish a precedent for a new wave of anti-ag-gag
          legislation. Imagine if instead of covering up animal cruelty, our
          laws gave ordinary people the right to see inside these places, and
          even rescue sick and suffering animals. With the victory of this case,
          a chain reaction will be set to end ag-gag and enshrine the Right to
          Rescue.
        </p>
      </Details>
      <Defendants>
        <Bio name="Matt Johnson" image="mj.jpg">
          Matt was born and raised in Cresco, Iowa. He earned his B.A. in
          accounting from the University of Northern Iowa and served six years
          in the National Guard before becoming an activist with DxE. He has
          family members who are pig farmers and believes that even in rural
          Iowa, people want to see a world where all animals are protected under
          the law.
        </Bio>
        <Bio name="Linda Cridge" image="lc2.jpg">
          Linda grew up in Indiana, graduating from Indiana University. The last
          20 years have been dedicated to raising two children. She likes
          cooking, thrifting and helping animals.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2020/05/29/pigs-factory-farms-ventilation-shutdown-coronavirus/"
          iFramelyUrl="https://cdn.iframe.ly/c4vjvkc?iframe=card-small"
        />
        <Article
          href="https://www.desmoinesregister.com/story/opinion/columnists/rekha-basu/2020/06/19/iowa-agriculture-time-rethink-farming-model-hogs-direct-action/3205639001/"
          iFramelyUrl="https://cdn.iframe.ly/V9Dw7Qe?card=small"
        />
        <Article
          href="https://abcnews.go.com/US/wireStory/charges-dropped-activist-exposed-iowa-hog-deaths-75565220"
          iFramelyUrl="https://cdn.iframe.ly/OjbDagP?card=small"
        />
        <Article
          href="https://theintercept.com/2021/02/17/fbi-iowa-select-pigs-whistleblower/"
          iFramelyUrl="https://cdn.iframe.ly/bzyUAhs?card=small"
        />
        <Article
          href="https://abcnews.go.com/US/wireStory/industry-foe-charged-iowas-food-trespassing-law-76952661"
          iFramelyUrl="https://cdn.iframe.ly/YEm2tMU?card=small"
        />
      </Press>
    </>
  );
};

export default Iowa;
