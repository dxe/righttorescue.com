import { NextPage } from "next";
import { Header } from "../components/CasePage/Header";
import { Details } from "../components/CasePage/Details";

const Diestel: NextPage = () => {
  return (
    <>
      <Header
        title="Diestel Turkey Ranch"
        location="California"
        video="https://www.youtube.com/embed/byb8WjknZxw"
        videoRatio="16/9"
        ctaText1="Share"
        ctaLink1="https://www.facebook.com/watch/?v=1089174481112900"
      >
        Share the video exposing Diestel’s cruel practices.
      </Header>
      <Details image="diestel.jpg">
        DxE SF Bay Area investigated Diestel Turkey Ranch, a Whole Foods
        supplier at the highest GAP welfare rating, in 2015 and filed suit in
        2017 for consumer fraud. The case went to trial in October – December
        2019. The judge who presided over the 2019 trial left the bench for
        medical leave before rendering a decision. The case was then reassigned
        to a new judge who issued a decision in November 2020 without the
        benefit of seeing any of the witnesses or hearing any of the testimony.
        The new judge nevertheless concluded that: “Plaintiff cannot establish
        actual reliance under the law if from the outset its agents already
        strongly suspected that the defendant’s advertising was false and were
        not deceived by it... Although it appears dubious that Diestel is a
        ‘small’ family farm or that its birds receive ‘individual’ care or live
        ‘twice as long’ as other commercial turkeys, because plaintiff lacks
        standing, this court is without jurisdiction to adjudicate those
        claims.” DxE SF Bay Area appealed this decision in January 2021 but the appeal was unsuccessful. Separately, consumers who purchased Diestel’s turkey
        products in California and New Mexico also sued Diestel Turkey Ranch for consumer fraud in 2020. More information is
        available by contacting counsel at{" "}
        <a href="https://www.elsnerlaw.org/fowl-play" target="_blank">
          https://www.elsnerlaw.org/fowl-play
        </a>
        .
      </Details>
    </>
  );
};

export default Diestel;
