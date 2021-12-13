import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const Norbest: NextPage = () => {
  return (
    <>
      <Header
        title="Norbest Turkey"
        location="Utah"
        video="https://www.youtube.com/embed/YzL41kwYIP8"
        videoRatio="16x9"
      />
      <Details image="nb.jpg">
        Whistleblowers exposed the disturbing reality behind the “humane”
        marketing at a Norbest turkey farm in Utah, and the company’s own CEO
        called their findings “disturbing.” Two activists were facing felony
        "theft" charges for rescuing a few sick turkeys from the farm, but the
        owner of Norbest came out against the prosecutions and has even released
        turkeys to the activists for the last four years. In November 2021, the
        charges were officially "dismissed by compromise." The dismissal order
        stated that “all parties agree that there is legitimate concern and
        passion about our food system” and “all parties agree that the
        criminalization of nonviolent investigation and rescue is unnecessary.”
        This is a win for the right to rescue!
      </Details>
      <Defendants>
        <Bio name="Paul Darwin Picklesimer" image="sf-ut-paul.jpg">
          When Paul was a roofer in West Virginia, they worked on farms and saw
          animal abuse up close. Those experiences helped lead them to becoming
          an animal rights activist.
        </Bio>
        <Bio name="Wayne Hsiung" image="sf-ut-wayne.jpg">
          Wayne was a lawyer with DLA Piper before co-founding the animal rights
          network, Direct Action Everywhere. He has investigated dozens of farms
          and currently faces 16 felonies for rescuing sick animals.
        </Bio>
      </Defendants>
      <Press>
        <Article
          href="https://theintercept.com/2018/05/04/six-animal-rights-activists-charged-with-felonies-for-investigation-and-rescue-that-led-to-punishment-of-a-utah-turkey-farm/"
          iFramelyUrl="https://cdn.iframe.ly/nfH8dIG?card=small"
        />
        <Article
          href="https://www.cbsnews.com/news/as-thanksgiving-nears-animal-group-decry-conditions-at-turkey-farm/"
          iFramelyUrl="https://cdn.iframe.ly/WSUW50z?card=small"
        />
        <Article
          href="https://www.sltrib.com/news/2018/05/04/animal-rights-activists-are-charged-with-a-felony-in-sanpete-county-for-taking-a-sickly-turkey-chick/"
          iFramelyUrl="https://cdn.iframe.ly/goyHan4?card=small"
        />
        <Article
          href="https://www.fox13now.com/news/local-news/utah-seeks-to-block-animal-rights-activists-from-justifying-factory-farm-break-in"
          iFramelyUrl="https://cdn.iframe.ly/H7fdGZ1?card=small"
        />
      </Press>
    </>
  );
};

export default Norbest;
