import type { NextPage } from "next";
import { MastHead } from "../components/HomePage/MastHead";
import { Letter } from "../components/HomePage/Letter";
import { CasesSection } from "../components/HomePage/CasesSection";
import React, { useEffect, useState } from "react";
import { Case } from "../components/HomePage/Case";
import { Announcements } from "../components/HomePage/Announcements";
import { Announcement } from "../components/HomePage/Announcement";
import { FeaturedCase } from "../components/HomePage/FeaturedCase";
import { About } from "../components/HomePage/About";

const Cases: NextPage = () => {
  return (
    <>
      <CasesSection>
        <CasesSection.CaseList>
          <Case
            name="Sunrise Farms, Petaluma Poultry, Reichardt Duck Farm"
            location="Sonoma County, California"
            page="sunrise"
            image="sunrise.jpg"
          />

          <Case
            name="Ridglan Farms"
            location="Dane County, Wisconsin"
            page="ridglan"
            image="ridglan.jpg"
          />

          <Case
            name="Farmer John"
            location="Los Angeles County, California"
            page="fj"
            image="fj.png"
          />

          <Case
            name="Sospiro Ranch"
            location="North Carolina"
            page="rain"
            image="rain.jpg"
          />

          <Case
            name="Diestel Turkey Ranch"
            location="Alameda County, California"
            page="diestel"
            image="diestel.jpg"
          />

          <Case
            name="Asha's Farm Sanctuary"
            location="Niagara County, New York"
            page="ashas"
            image="ashas.jpg"
          />

          <Case
            name="Foster Farms"
            location="Merced County, California"
            page="fosterfarms"
            image="ff.png"
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
            name="Norbest Turkey"
            location="Sanpete County, Utah"
            page="norbest"
            image="nb.jpg"
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
        </CasesSection.CaseList>
      </CasesSection>
    </>
  );
};

export default Cases;
