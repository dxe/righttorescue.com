import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";
import { Defendants } from "../components/Case/Defendants";
import { Bio } from "../components/Case/Bio";
import { Press } from "../components/Case/Press";
import { Article } from "../components/Case/Article";

const Rain: NextPage = () => {
  return (
    <>
      <Header
        title="Sospiro Ranch"
        location="North Carolina"
        video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1836799003017107%2F&show_text=0"
        videoRatio="16x9"
      />
      <Details image="rain.jpg">
        DxE co-founder Wayne Hsiung is being charged with felony counts of
        breaking or entering and larceny, as well as a misdemeanor trespass
        count for rescuing a sick baby goat from a goat meat ranch in North
        Carolina, an incident which unfolded on Facebook live. Wayne took the
        baby, named Rain, to emergency veterinary care and today, Rain is safe
        with a family who takes care of him. Wayne's trial is scheduled to begin
        Monday November 29th at the Transylvania County Courthouse in Brevard,
        NC.
      </Details>
      <Defendants>
        <Bio name="Wayne Hsiung" image="sf-ut-wayne.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 16 felonies for rescuing sick animals.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://sanfrancisco.cbslocal.com/2018/05/03/bay-area-dxe-animal-activists-charged/"
          iFramelyUrl="https://cdn.iframe.ly/HMwzJrp?iframe=card-small"
        />
        <Article
          href="https://www.foxcarolina.com/news/lawyer-facing-felony-charges-says-its-because-he-rescued-sick-baby-goat-from-nc-meat/article_8f5bdff7-aa72-5e88-bbfd-7ece43a88ccb.html"
          iFramelyUrl="//cdn.iframe.ly/sIwV19P?iframe=card-small"
        />
        <Article
          href="https://www.transylvaniatimes.com/news/stolen-goat-case-going-to-trial/article_1a1e8c16-58a2-11ec-9678-bfbec873b0e2.html"
          iFramelyUrl="https://cdn.iframe.ly/Db2K6vO?iframe=card-small"
        />
        <Article
          href="https://theintercept.com/2021/11/28/animal-rights-wayne-hsiung-felony/"
          iFramelyUrl="https://cdn.iframe.ly/UsjEr0t?iframe=card-small"
        />
        <Article
          href="https://www.theguardian.com/world/2021/dec/06/wayne-hsiung-activist-goat-animal-welfare-trial"
          iFramelyUrl="https://cdn.iframe.ly/tBDbih3?iframe=card-small"
        />
        <Article
          href="https://www.transylvaniatimes.com/news/animal-activist-wayne-hsiung-found-guilty-plans-to-appeal/article_ceb616ee-58a2-11ec-9b84-0fd831c08a43.html"
          iFramelyUrl="https://cdn.iframe.ly/Wu7c4TZ?iframe=card-small"
        />
      </Press>
    </>
  );
};

export default Rain;
