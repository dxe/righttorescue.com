import { NextPage } from "next";
import { Header } from "../components/Case/Header";
import { Details } from "../components/Case/Details";
import { Defendants } from "../components/Case/Defendants";
import { Bio } from "../components/Case/Bio";
import { Press } from "../components/Case/Press";
import { Article } from "../components/Case/Article";

const SmithfieldUtah: NextPage = () => {
  return (
    <>
      <Header
        title="Smithfield"
        location="Utah"
        video="https://www.youtube.com/embed/HDPTtM3tgEY"
        videoRatio="1x1"
        ctaText1="Call: 435-438-6441"
        ctaLink1="tel:435-438-6441"
        ctaText2="Email"
        ctaLink2="https://beaver.utah.gov/forms.aspx?fid=98"
      >
        Call and email Beaver County Prosecuting Attorney Von Christensen asking
        him to drop the charges against the activists who rescued two piglets
        from Smithfield.
      </Header>
      <Details image="sf-ut-2.jpg">
        In 2017, activists rescued two piglets, Lily and Lizzie, from a Utah
        factory farm owned by Smithfield Foods, the largest pig-killing company
        in the world. Their story went viral when the FBI started hunting for
        the piglets, raiding sanctuaries and even cutting off part of a pig’s
        ear to do DNA testing. Two of the rescuers are facing 60 years in
        prison. Their trial was delayed due to the pandemic; it is expected to
        take place in 2022.
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
          href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.nytimes.com%2F2017%2F07%2F06%2Fdining%2Fanimal-welfare-virtual-reality-video-meat-industry.html&key=89a4a3ff448183aeb0070b28c0c9f3b7&iframe=card-small"
        />
        <Article
          href="https://theintercept.com/2017/10/05/factory-farms-fbi-missing-piglets-animal-rights-glenn-greenwald/"
          iFramelyUrl="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Ftheintercept.com%2F2017%2F10%2F05%2Ffactory-farms-fbi-missing-piglets-animal-rights-glenn-greenwald%2F&key=89a4a3ff448183aeb0070b28c0c9f3b7&iframe=card-small"
        />
      </Press>
    </>
  );
};

export default SmithfieldUtah;
