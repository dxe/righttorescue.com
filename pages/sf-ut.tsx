import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";
import { Defendants } from "../components/CasePage/Defendants";
import { Bio } from "../components/CasePage/Bio";
import { Press } from "../components/CasePage/Press";
import { Article } from "../components/CasePage/Article";

const SmithfieldUtah: NextPage = () => {
  return (
    <>
      <Header
        title="Smithfield"
        location="Utah"
        video="https://www.youtube.com/embed/wlSE1X-hSqQ"
        videoRatio="16x9"
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
        DxE investigators Wayne Hsiung and Paul Darwin Picklesimer are being prosecuted for investigating the world’s largest “pork” producer, Smithfield Foods, and rescuing 2 sick piglets, Lily and Lizzie. In 2017, they infiltrated a massive Smithfield farm in the Utah desert, a facility that raises 1.3 million pigs for slaughter every year. They filmed the conditions inside in 360 degree virtual reality footage. Their footage, titled "Operation Deathstar," documented row after row of mother pigs crammed inside gestation crates barely bigger than their bodies and piles of dead piglets covered in their mothers' feces. They published the whole investigation and rescue online and in the&nbsp;
        <a
           href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html" 
           target="_blank"
           >
          New York Times 
          </a>
        &nbsp;to show the world the nightmarish cruelty happening inside Smithfield’s farms.  The story went viral when the FBI started hunting for
        the piglets, raiding sanctuaries and even cutting off part of a pig’s
        ear to do DNA testing.
        Trial dates are finally set for Wayne and Paul in Utah: Sept. 9-16, 2022. DxE is organizing a convergence in Utah during the trial to show support for animal rescue, build community with one another, and take action together to expose Smithfield’s Deathstar to the world. You can register at&nbsp; 
        <a 
           href="https://docs.google.com/forms/d/e/1FAIpQLSekKhKSd8KpIP1C3aVwfZ1GmeUd4VfvwuWtm3QhbN-NXK-HlQ/viewform"
           target="_blank"
           >
           dxe.io/utahsignup. 
          </a>
        &nbsp;
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
          and currently faces 11 felonies for rescuing sick animals.
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
         <Article
          href="https://www.fox13now.com/news/local-news/utah-seeks-to-block-animal-rights-activists-from-justifying-factory-farm-break-in"
          iFramelyUrl="https://cdn.iframe.ly/H7fdGZ1?card=small"
        />
         <Article
          href="https://www.fox13now.com/news/local-news/animal-welfare-activists-protest-ruling-on-video-of-factory-farm-break-in"
          iFramelyUrl="//iframely.net/E9eGBuX?card=small"
        />
      </Press>
    </>
  );
};

export default SmithfieldUtah;
