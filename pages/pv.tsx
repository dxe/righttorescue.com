import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const PleasantValley: NextPage = () => {
  return (
    <>
      <Header
        title="Pleasant Valley Farms"
        location="California"
        video="https://www.youtube.com/embed/yrlsZaLJHew"
        videoRatio="16x9"
        ctaText1="Email"
        ctaLink1="mailto:cjelinek@costco.com"
      >
        Tell Costco CEO Craig Jelinek to drop Pleasant Valley Farms and support
        the whistleblowers who exposed animal cruelty, instead of suing DxE.
      </Header>
      <Details image="pv.jpg">
        DxE investigators documented cannibalism, infections, and death inside
        Pleasant Valley Farms, a Costco “cage-free” egg farm. Now, two
        investigators are being charged over $330,000 in restitution. Costco
        claims to give animals 5 freedoms, including freedom from pain and
        suffering, and the company received widespread public praise for
        committing to selling only cage-free eggs. But DxE’s exposé showed the
        world the horrific reality behind the “cage-free” label, in the
        Washington Post, New York Times and more. We appealed the court's
        decision, but the Superior Court of California, County of San Joaquin,
        Appellate Division rejected our appeal by affirming the judge's original
        decision. So the restitution ruling still stands, but no one is paying. 
      </Details>
      <Press>
        <Article
          href="https://www.nytimes.com/2016/10/21/business/video-reveals-how-cage-free-hens-live-animal-advocates-say.html"
          iFramelyUrl="https://cdn.iframe.ly/tDwUC0Z?card=small&media=0"
        />
        <Article
          href="/https://www.washingtonpost.com/news/animalia/wp/2016/10/20/her-head-has-been-torn-off-activists-film-alleges-abuse-at-costco-linked-cage-free-egg-farm/"
          iFramelyUrl="https://cdn.iframe.ly/b6ncpT6?card=small"
        />
        <Article
          href="https://www.sfgate.com/news/article/Animal-activist-charged-after-taking-hen-from-10907963.php"
          iFramelyUrl="https://cdn.iframe.ly/H6afFBH?card=small"
        />
        <Article
          href="https://www.abc10.com/article/news/local/california/video-from-cage-free-chicken-farm-documents-alleged-abuses/103-340887507"
          iFramelyUrl="https://cdn.iframe.ly/vgrbByx?card=small"
        />
      </Press>
    </>
  );
};

export default PleasantValley;
