import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const Rain: NextPage = () => {
  return (
    <>
      <Header
        title="Sospiro Ranch"
        location="North Carolina"
        video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdirectactioneverywhere%2Fvideos%2F1836799003017107%2F&show_text=0"
        videoRatio="16/9"
        ctaText1="Contact Gov. Cooper"
        ctaLink1="https://governor.nc.gov/contact/contact-governor-cooper"
      >
        Ask Governor Cooper to issue a pardon and acknowledge the right to
        rescue animals.
      </Header>
      <Details image="rain.jpg">
        DxE co-founder Wayne Hsiung was charged with felony counts of breaking
        or entering and larceny for rescuing a sick baby goat from a goat meat
        ranch in North Carolina in 2018, an incident which unfolded on Facebook
        live. Wayne took the baby, named Rain, to emergency veterinary care and
        today, Rain is safe with a family who takes care of him. Wayne's trial
        began on Monday, November 29, 2021 at the Transylvania County Courthouse
        in Brevard, NC. It concluded on Monday, December 6, 2021 when the jury
        reached a verdict of guilty on both felony charges. The judge issued a
        suspended sentence. Wayne appealed, but in February 2024, the North
        Carolina Court of Appeals upheld the sentence at which point Wayne began
        his two-year probation period. The case was appealed up to the Supreme
        Court, but on May 21, 2024, the North Carolina Supreme Court dismissed
        the appeal, which means that the ruling from the previous appellate
        court stands. Wayne's probation will end in February 2026.
      </Details>
      <Defendants>
        <Bio name="Wayne Hsiung" image="sf-ut-wayne.jpg">
          Wayne is an attorney and co-founder of The Simple Heart. He has been a
          community organizer for over 20 years.
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
