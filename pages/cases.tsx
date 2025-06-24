import type { NextPage } from "next";
import { CasesSection } from "../components/HomePage/CasesSection";
import { Case } from "../components/HomePage/Case";

{
  /* Images should be 700x500 px. */
}

const Cases: NextPage = () => {
  return (
    <CasesSection>
      <CasesSection.CaseList>

        <Case
          name="Petaluma Poultry"
          location="Sonoma County, California"
          page="petalumapoultry"
          image="zoe-pp.png"
        />
        <Case
          name="Ridglan Farms"
          location="Dane County, Wisconsin"
          page="ridglan"
          image="ridglan.jpg"
        />
        <Case
          name="Meyenberg's Vera Goat Dairy"
          location="Kings County, California"
          page="meyenberg"
          image="M rescue.png"
        />
        <Case
          name="Sunrise Farms, Petaluma Poultry, Reichardt Duck Farm"
          location="Sonoma County, California"
          page="sunrise"
          image="sunrise.jpg"
        />
<Case
          name="Asha's Farm Sanctuary"
          location="Niagara County, New York"
          page="ashas"
          image="ashas.jpg"
          past
        />
        <Case
          name="Diestel Turkey Ranch"
          location="Alameda County, California"
          page="diestel"
          image="diestel.jpg"
          past
        />
        <Case
          name="Sospiro Ranch"
          location="North Carolina"
          page="rain"
          image="rain.jpg"
          past
        />
        <Case
          name="Pleasant Valley Farms"
          location="San Joaquin County, California"
          page="pv"
          image="pv.jpg"
          past
        />

        <Case
          name="Smithfield"
          location="Scotland County, North Carolina"
          page="sf-nc"
          image="sf-nc.jpg"
          past
        />
        <Case
          name="Farmer John"
          location="Los Angeles County, California"
          page="fj"
          image="fj.png"
          past
        />

        <Case
          name="Norbest Turkey"
          location="Sanpete County, Utah"
          page="norbest"
          image="nb.jpg"
          past
        />

        <Case
          name="Iowa Select Farms"
          location="Iowa"
          page="iowa"
          image="iowa.jpg"
          past
        />

        <Case
          name="Smithfield"
          location="Beaver County, Utah"
          page="sf-ut"
          image="sf-ut.jpg"
          past
        />
        <Case
          name="Foster Farms"
          location="Merced County, California"
          page="fosterfarms"
          image="ff.png"
          past
        />
      </CasesSection.CaseList>
    </CasesSection>
  );
};

export default Cases;
