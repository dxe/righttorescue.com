import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const Iowa: NextPage = () => {
  return (
    <>
      <Header
        title="Iowa Select Farms"
        location="Iowa"
        video="https://www.youtube.com/embed/0Hf1YwIzN-k"
        videoRatio="1/1"
        ctaText1="Email"
        ctaLink1="mailto:esimonson@co.wright.ia.us"
      >
        Email Wright County Attorney Eric Simonson today to politely ask him to
        prosecute animal cruelty at Iowa Select Farms.
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
          The USDA handed out millions of dollars to make up for the profit
          companies lost from killing off their animals during the pandemic. A
          producer like Iowa Select Farms could get hundreds of dollars for
          every pig they killed and threw away.
        </p>
        <p>
          Instead of prosecuting the horrific animal cruelty at Iowa Select
          Farms, the state of Iowa came after the whistleblowers who exposed it.
          In direct response to DxE’s investigations, Governor Kim Reynolds has
          signed a series of “ag-gag” bills into law to protect the industry
          from public scrutiny. Matt Johnson was the first person to be charged
          under Iowa's third "ag-gag" law, which was enacted less than two weeks
          after the release of DxE’s exposé. In January 2022, the day before Matt was set to
          start trial, all charges against him were dropped. This is a victory,
          but it is not the end. We are calling on Iowa county attorneys to
          prosecute Iowa Select Farms for animal cruelty and asking Governor
          Reynolds to end "ag-gag" laws that criminalize whistleblowing.
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
        <Article
          href="https://www.theguardian.com/world/2022/jan/22/an-animal-rights-activist-was-in-court-on-criminal-charges-why-was-the-case-suddenly-dismissed"
          iFramelyUrl="https://cdn.iframe.ly/UQEk06s?card=small"
        />
        <Article
          href="https://harpers.org/archive/2022/10/standing-trial-should-we-care-about-animal-liberation-ag-gag-laws-iowa-slaughterhouse/"
          iFramelyUrl="https://cdn.iframe.ly/XX8x3KE?card=small"
        />
      </Press>
    </>
  );
};

export default Iowa;
