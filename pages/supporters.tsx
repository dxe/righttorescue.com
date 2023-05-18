import type { NextPage } from "next";
import React from "react";
import { SupportersSection } from "../components/SupportersPage/SupportersSection";
import { Supporter } from "../components/SupportersPage/Supporter";

const Supporters: NextPage = () => {
  return (
    <>
      <SupportersSection>
           <Supporter
            name="sf"
            image="logos/sf.jpg"
          />
        
        <Supporter
            name="sepastopol"
            image="logos/sebastopol.png"
          />
        
           <Supporter
            name="cob"
            image="logos/cob.jpg"
          />
        
        <Supporter
            name="nlg"
            image="logos/nlg.jpg"
          />
        
           <Supporter
            name="save"
            image="logos/save.jpg"
          />
        
          <Supporter
            name="utv"
            image="logos/utv.jpg"
          />
        
          <Supporter
            name="ap"
            image="logos/ap.jpg"
          />
        
          <Supporter
            name="cb"
            image="logos/cb.jpg"
          />
        
         <Supporter
            name="gafs"
            image="logos/gafs.jpg"
          />
        
          <Supporter
            name="apex"
            image="logos/apex.jpg"
          />

          <Supporter
            name="boaa"
            image="logos/boaa.jpg"
          />

          <Supporter
            name="dva"
            image="logos/dva.jpg"
          />

          <Supporter
            name="ida"
            image="logos/ida.jpg"
          />

          <Supporter
            name="peta"
            image="logos/peta.jpg"
          />

          <Supporter
            name="uarc"
            image="logos/uarc.jpg"
          />

          <Supporter
            name="alt"
            image="logos/animal_liberation_temple.png"
          />

          <Supporter
            name="happyhen"
            image="logos/happy_hen.png"
          />

      </SupportersSection>
    </>
  );
};

export default Supporters;
