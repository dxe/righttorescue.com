import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";
import { NextPage } from "next";

const RidglanFarms: NextPage = () => {
  return (
    <>
      <Header
        title="Ridglan Farms"
        location="Wisconsin"
        video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1940219196008420%2F&show_text=0"
        videoRatio="1/1"
        ctaText1="Instructions for Calling"
        ctaLink1="https://docs.google.com/document/d/1A6PyZV9fYke72q1tj7se7duBbW-UJAJVl7Os13XO3BI"
        ctaText2="Instructions for Emailing"
        ctaLink2="https://docs.google.com/document/d/1n4XUHQropg6FQFI6y42vojrgenvA_8kmLazdC51lDE8"
      >
        Call and email Dane County District Attorney Ismael Ozanne asking him to
        prosecute Ridglan Farms for animal cruelty.
      </Header>
      <Details image="ridglan.jpg">
        Ridglan Farms is one of the largest breeders of beagles for
        experimentation in the United States. In 2017, DxE investigators entered
        the facility and documented the filthy conditions and the psychological
        trauma of the dogs spinning endlessly inside small cages. The team
        rescued three beagles, Julie, Anna, and Lucy. Eva, Paul, and Wayne were
        charged with felony burglary and felony theft charges. Their trial was
        set to start in March 2024 at the Dane County Courthouse in Madison,
        Wisconsin. However, ten days before trial, the state{" "}
        <a
          href="https://www.instagram.com/p/C4QrpC0Rr0L/?igsh=ZDE1MWVjZGVmZQ=="
          target="_blank"
        >
          DROPPED all the charges.
        </a> We believe this dismissal was the result of pressure and{" "}
        <a
          href="https://isthmus.com/news/cover-stories/a-crime-of-compassion/"
          target="_blank"
        >
          press coverage
        </a>{" "}
        that made it clear there is public support for animal rescue.
     </Details>
      <Details>
        <h4>This court case completely flipped. Now, Ridglan is the one facing prosecution!</h4>
        <p>
        The Dane County District Attorney’s office failed to prosecute Ridglan Farms for criminal animal cruelty, but former defendant Wayne Hsiung and local groups Dane4Dogs and Alliance for Animals filed a petition with the Dane County Courthouse asking the court to appoint a special prosecutor to prosecute Ridglan. Dane County Judge Rhonda Lanford agreed to hold an evidentiary hearing, which took place on October 24, 2024. The Animal Activist Legal Defense Project represented Dane4Dogs. The court heard testimony from investigator Wayne Hsiung, veterinarians, and former Ridglan employees who testified about the company's routine abuse of dogs, including non-veterinarians conducting surgeries on dogs without anesthetics. After reviewing this evidence, Judge Lanford issued her ruling on January 9, 2025. She{" "}
        <a
          href="https://isthmus.com/news/news/let-special-prosecutor-decide-if-ridglan-committed-crimes/"
          target="_blank"
        >
          granted the petition
        </a>{" "} to appoint a special prosecutor to investigate and prosecute Ridglan Farms for animal cruelty! This decision marks a major victory in our fight to hold Ridglan Farms accountable. On February 5, the Court appointed La Crosse County District Attorney Tim Gruenke to be the special prosecutor on this case. DA Gruenke will now begin his investigation into animal cruelty at Ridglan Farms. And if we keep the pressure on, this could lead to shutting down operations at Ridglan Farms for good. 
      </p>
        </Details>
      <Defendants>
        <Bio name="Eva Hamer" image="eh.jpg">
          Eva is a researcher with Pax Fauna, a nonprofit that seeks to improve
          the ways animal advocates organize, take action, and communicate with
          the public. She currently lives in Portland, Oregon.
        </Bio>
        <Bio name="Paul Darwin Picklesimer" image="sf-ut-paul.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Wayne Hsiung" image="wayne-julie.jpg">
          Wayne is an attorney and co-founder of The Simple Heart. He has been a
          community organizer for over 20 years.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2018/05/17/inside-the-barbaric-u-s-industry-of-dog-experimentation/"
          iFramelyUrl="https://cdn.iframe.ly/nQsNmzM?card=small"
        />
        <Article
          href="https://madison.com/news/local/crime-and-courts/rescue-of-beagles-from-blue-mounds-animal-testing-facility-leads-to-criminal-charges-against-activists/article_bd74d8d5-758b-53ab-a118-edc1c3619530.html"
          iFramelyUrl="https://cdn.iframe.ly/QbnLF8Z?card=small"
        />
        <Article
          href="https://www.seehafernews.com/2023/05/14/activists-put-spotlight-on-treatment-of-dogs-at-dane-county-research-facility/"
          iFramelyUrl="https://cdn.iframe.ly/6NnfFyy?card=small"
        />
        <Article
          href="https://dailyillini.com/opinions-stories/2024/01/31/lte-dog-experiments-ui/"
          iFramelyUrl="https://cdn.iframe.ly/peYRYWH?card=small"
        />
        <Article
          href="https://sentientmedia.org/beagles-bred-on-factory-farms/"
          iFramelyUrl="https://cdn.iframe.ly/oMgAZF3?card=small"
        />
        <Article
          href="https://isthmus.com/news/cover-stories/a-crime-of-compassion/"
          iFramelyUrl="https://cdn.iframe.ly/oDuYJxm?card=small"
        />
        <Article
          href="https://www.commondreams.org/news/puppy-mill-rescuers"
          iFramelyUrl="https://cdn.iframe.ly/UnOe752?card=small"
        />
        <Article
          href="https://isthmus.com/news/news/Ridglan-Farms-beagle-rescue-case-dismissed/"
          iFramelyUrl="https://cdn.iframe.ly/127TebU?card=small"
        />
        <Article
          href="https://www.wkow.com/news/top-stories/case-dismissed-dane-county-trial-of-thefts-from-dog-breeder-scuttled/article_765f14f4-e0c3-11ee-b931-9f177ad7ee4a.html"
          iFramelyUrl="https://cdn.iframe.ly/aTqvhW0?card=small"
        />
        <Article
          href="https://www.kron4.com/news/bay-area/charges-dropped-berkeley-resident-sued-for-beagle-rescue-mission/"
          iFramelyUrl="https://cdn.iframe.ly/YBPrIEC?card=small"
        />
        <Article
          href="https://isthmus.com/news/news/activists-demand-that-dane-county-da-prosecute-ridglan-farms/"
          iFramelyUrl="https://cdn.iframe.ly/Zb65faV?card=small"
        />
        <Article
          href="https://www.wkow.com/video/animal-rights-activists-protest-downtown-against-ridglan-farms/video_b3259b14-ca04-5272-98a3-5175c7969d0e.html"
          iFramelyUrl="https://cdn.iframe.ly/iLpEDYa?card=small"
        />
        <Article
          href="https://plus.thebulwark.com/p/when-permissible-to-rescue-dog-in-peril"
          iFramelyUrl="https://cdn.iframe.ly/ONkaXOW?card=small"
        />
        <Article
          href="https://isthmus.com/news/ridglan-farms-critics-want-their-day-in-court/"
          iFramelyUrl="https://cdn.iframe.ly/wLA2WmX?card=small"
        />
        <Article
          href="https://isthmus.com/news/news/judge-will-weigh-special-prosecutor-for-ridglan-farms/"
          iFramelyUrl="https://cdn.iframe.ly/dTEfQdA?card=small"
        />
         <Article
          href="https://isthmus.com/news/news/ridglan-farms-cited-for-new-violations-as-hearing-nears/"
          iFramelyUrl="https://cdn.iframe.ly/sgnThVx?card=small"
        />
         <Article
          href="https://isthmus.com/news/news/ridglan-farms-accused-of-the-wholesale-abuse-of-dogs/"
          iFramelyUrl="https://cdn.iframe.ly/Qp8Agk3?card=small"
        />
          <Article
          href="https://www.channel3000.com/news/local-news/judge-appoints-special-prosecutor-to-investigate-ridglan-farms-dog-breeding-facility/article_7220e2a0-cea7-11ef-89dd-a30d7d20439f.html"
          iFramelyUrl="https://cdn.iframe.ly/d2zHk5q?card=small"
        />
         <Article
          href="https://isthmus.com/news/news/let-special-prosecutor-decide-if-ridglan-committed-crimes/"
          iFramelyUrl="https://cdn.iframe.ly/sc8LkVV?card=small"
        />
        <Article
          href="https://wiscnews.com/news/state-regional/ridglan-farms-beagles-animal-rights-special-prosecutor/article_e78ab3fb-c0ad-5227-8666-09c00eaf83c1.html"
          iFramelyUrl="https://cdn.iframe.ly/lWDrYGH?card=small"
        />
        <Article
          href="https://www.wpr.org/news/special-prosecutor-investigate-dog-breeding-facility-ridglan-farms"
          iFramelyUrl="https://cdn.iframe.ly/e44hAUG?card=small"
        />
         <Article
          href="https://madison.com/news/local/crime-courts/ridglan-farms-beagles-animal-rights-special-prosecutor/article_48cf287e-ceb3-11ef-ae26-bb7878c53935.html"
          iFramelyUrl="https://cdn.iframe.ly/fISmNp4?card=small"
        />
        <Article
          href="https://captimes.com/opinion/letters-to-the-editor/letter-beagles-have-a-voice-with-judge-lanford/article_6dc645be-cf70-11ef-b72c-63899f498daf.html"
          iFramelyUrl="https://cdn.iframe.ly/m04a3Ej?card=small"
        />
        <Article
          href="https://www.wortfm.org/special-prosecutor-to-investigate-blue-mounds-dog-breeding-facility/"
          iFramelyUrl="https://cdn.iframe.ly/xpCKJhF?card=small"
        />
         <Article
          href="https://urbanmilwaukee.com/pressrelease/senator-habush-sinykin-commends-decision-to-appoint-a-special-prosecutor-to-address-criminal-animal-cruelty-allegations-at-research-facility-in-wisconsin/"
          iFramelyUrl="https://cdn.iframe.ly/fBVzZNR?card=small"
        />
      <Article
          href="https://isthmus.com/news/news/wisconsin-agency-launches-probe-into-ridglan-farms/"
          iFramelyUrl="https://cdn.iframe.ly/sCVr7Ou?card=small"
        />
        <Article
          href="https://www.channel3000.com/news/la-crosse-county-da-appointed-as-special-prosecutor-in-blue-mounds-beagle-breeder-case/article_77b16080-e3ee-11ef-b733-8f7d65329cf4.html"
          iFramelyUrl="https://cdn.iframe.ly/foCyrzF?card=small"
        />
         <Article
          href="https://www.channel3000.com/news/news-3-now-investigates-ridglan-farms-under-fire/article_ad3ea676-f48e-11ef-9902-b35feadf3ff6.html"
          iFramelyUrl="https://cdn.iframe.ly/jFTbz10?card=small"
        />
        <Article
          href="https://www.washingtonpost.com/opinions/2025/03/24/dogs-experiments-cruel-ridglan-prosecutor/"
          iFramelyUrl="https://cdn.iframe.ly/Uq7JQBr?card=small"
        />
        <Article
          href="https://spectrumnews1.com/wi/milwaukee/news/2025/03/26/special-prosecutor-appointed-to-investigate-ridglan-farms"
          iFramelyUrl="https://cdn.iframe.ly/xOhr3V98?card=small"
        />
        <Article
          href="https://www.fox6now.com/news/wisconsin-puppy-mill-beagles-suffer-human-research"
          iFramelyUrl="https://cdn.iframe.ly/lMNSjCws?card=small"
        />
        <Article
          href="https://www.wmtv15news.com/2025/08/21/county-supervisors-push-remove-dogs-blue-mounds-breeder-during-investigations/"
          iFramelyUrl="https://cdn.iframe.ly/HxAtJ0w0?card=small"
        />
      </Press>
    </>
  );
};

export default RidglanFarms;
