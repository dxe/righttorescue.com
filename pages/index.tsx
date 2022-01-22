import type { NextPage } from "next";
import { MastHead } from "../components/HomePage/MastHead";
import { Letter } from "../components/HomePage/Letter";
import { CasesSection } from "../components/HomePage/CasesSection";
import React from "react";
import { Case } from "../components/HomePage/Case";
import { Announcements } from "../components/HomePage/Announcements";
import { Announcement } from "../components/HomePage/Announcement";

const Home: NextPage = () => {
  return (
    <>
      <MastHead image="bg-masthead-matt.jpg" takeActionPage="iowa" />
      <Letter />
      <CasesSection>
        <CasesSection.FeaturedCase
          name="Rescuing Gilly from Iowa Select Farms"
          page="iowa"
          video="https://www.youtube.com/embed/0Hf1YwIzN-k"
          videoRatio="1x1"
        >
          <p>
            In May 2020, DxE investigators exposed Iowa Select Farms roasting
            pigs alive. It’s a process the industry calls “ventilation shutdown”
            (VSD). It was used to kill thousands of healthy pigs in response to
            slaughterhouse shutdowns caused by COVID-19.
          </p>
          <p>
            Using hidden cameras, DxE captured pigs shrieking in agony at
            temperatures of over 140ºF in these gruesome mass killings. Two to
            three hours into the process, workers with bolt guns were seen
            shooting any pigs that appeared to still be alive.
          </p>
          <p>
            DxE activists rescued one piglet, named her Gilly, and brought her
            to sanctuary to live out her life in peace. DxE investigator Matt
            Johnson was facing felony burglary, wiretapping, and an "ag-gag" charge because
            of the investigation and rescue. Matt’s trial was scheduled to begin Jan. 20, 2022, but the day before, all charges against him were dropped. This is a victory, but it is not the end. We are calling on Iowa county attorneys to prosecute Iowa Select Farms for animal cruelty and asking Governor Reynolds to end "ag-gag" laws that criminalize whistleblowing.
          </p>
        </CasesSection.FeaturedCase>
        <CasesSection.CaseList>
          <Case
            name="Sunrise Farms, Petaluma Poultry, Reichardt Duck Farm"
            location="Sonoma County, California"
            page="sunrise"
            image="sunrise.jpg"
          />

          <Case
            name="Smithfield"
            location="Beaver County, Utah"
            page="sf-ut"
            image="sf-ut.jpg"
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
            name="Pleasant Valley Farms"
            location="San Joaquin County, California"
            page="pv"
            image="pv.jpg"
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
        </CasesSection.CaseList>
      </CasesSection>
      <Announcements>
        <Announcement
          title="Transylvania County, North Carolina"
          date="Dec. 6, 2021"
          image="rain.jpg"
          featured
        >
          GUILTY: The jury found Wayne guilty on both counts: felony breaking or
          entering and felony larceny. The Judge issued a suspended sentence.
          Wayne will have to do two years of supervised probation and pay $250
          in restitution, but no jail time. He plans to appeal.
        </Announcement>
        <Announcement
          title="Sanpete County, Utah"
          date="Nov. 24, 2021"
          image="turkey.jpg"
          featured
        >
          Case dismissed! The felony case against Wayne Hsiung and Paul Darwin
          Picklesimer for rescuing turkeys from a Utah farm in 2017 was just
          dismissed because the company and prosecutor agreed that "the
          criminalization of this nonviolent investigation and rescue is
          unnecessary." This is a step toward the #RightToRescue! Please share
          this important news on&nbsp;
          <a
            href="https://www.facebook.com/directactioneverywhere/photos/a.655305621166457/4951083394921970/"
            target="_blank"
          >
            Facebook
          </a>
          ,&nbsp;
          <a href="https://www.instagram.com/p/CWqcoq5JP40/" target="_blank">
            Instagram
          </a>
          , or&nbsp;
          <a
            href="https://twitter.com/DxEverywhere/status/1463538888140599298"
            target="_blank"
          >
            Twitter
          </a>
          .
        </Announcement>

         <Announcement
          title="Wright County, Iowa"
          date="Jan. 19, 2022"
          image="mj.jpg"
          featured
        >
          VICTORY! Just one day before trial was set to begin, all charges against DxE investigator Matt Johnson were DROPPED. International media outlets had requested coverage and people from around the country were planning to attend the trial to support the right to rescue. Could it be that the industry got scared of the public attention? We were going to expose Iowa Select Farms’ gruesome cruelty in court, but instead of going away, we are now using this victory as an opportunity to keep fighting "ag-gag" laws and defending the Right to Rescue.
        </Announcement>
       
        <Announcement
          title="Dane County, Wisconsin"
          date="Aug. 18, 2021"
          image="dog.jpg"
          featured
        >
          We got a new case! Eva Hamer, Paul Darwin Picklesimer, and Wayne
          Hsiung were charged for rescuing three beagles from Ridglan Farms, a
          massive breeding and research facility that raises beagles for
          horrific experiments like force-feeding them laundry detergent until
          they vomit blood and die. The defendants believe the public will
          support their actions in saving these dogs.
        </Announcement>

        <Announcement
          title="Grundy County, Iowa"
          date="Jan. 29, 2021"
          image="mj.jpg"
          featured
        >
          More charges dropped! Investigator Matt Johnson who exposed pigs being
          roasted alive had his trespass case dismissed, as the company refuses
          to testify about their actions.
        </Announcement>

        <Announcement
          title="Grundy County, Iowa"
          date="Jan. 11, 2021"
          image="ch.jpg"
          featured
        >
          Charges dropped! Last year, Cheyanne Holliday chained herself to the
          fence of an Iowa Select Farm during the campaign to end the use of
          "ventilation shutdown." ISF dropped their case against Cheyanne to
          avoid taking the stand in court.
        </Announcement>

        <Announcement title="San Francisco, CA" date="June 9, 2020">
          The San Francisco Board of Supervisors voted unanimously to&nbsp;
          <a
            href="https://www.directactioneverywhere.com/theliberationist/2020-6-9-sf-board-of-supervisors-votes-to-support-factory-farm-whistleblowers-facing-prison-time"
            target="_blank"
          >
            pass a resolution
          </a>
          &nbsp;in support of the Right to Rescue. Now, both Berkeley and San
          Francisco have condemned the prosecution of DxE activists who exposed
          animal cruelty in Sonoma County. The public support for animal rescue
          is growing!
        </Announcement>

        <Announcement title="North Carolina" date="Jan. 16, 2020">
          This week, Arwen's felony charges in the Smithfield case were dropped
          and replaced with misdemeanors!
        </Announcement>

        <Announcement title="North Carolina" date="Jan. 16, 2020">
          We thought the Sospiro trial might happen in December, but now trial
          has again been postponed to mid-2020 at the earliest.
        </Announcement>

        <Announcement title="Berkeley, CA" date="Dec. 11, 2019">
          THE RESOLUTION PASSED. The Berkeley City Council became the first
          legislative body in history (that we are aware of) to support the
          #RightToRescue – and the activists facing serious criminal charges for
          giving animals aid in factory farms. Please&nbsp;
          <a
            href="https://www.cityofberkeley.info/Clerk/City_Council/City_Council__Roster.aspx"
            target="_blank"
          >
            write to the City Council
          </a>
          &nbsp;to thank them for their support. Your support made the
          difference!
        </Announcement>

        <Announcement title="Utah" date="Nov. 25, 2019">
          The owner of the Norbest Turkey farm DxE investigated just released 20
          turkeys to DxE activists days before Thanksgiving, for the second year
          in a row! He has condemned the prosecution that DxE investigators are
          facing and he is actively helping us rescue more animals. See the
          video at&nbsp;
          <a href="http://dxe.io/turkeyrescue" target="_blank">
            dxe.io/turkeyrescue
          </a>
          .
        </Announcement>

        <Announcement title="North Carolina" date="Nov. 18, 2019">
          Sierra is out of the Smithfield case in North Carolina. She was
          offered a deal without charges if she named everyone involved in the
          investigation, but she refused. She ended up with misdemeanor charges
          and community service. Arwen is continuing with the case.
        </Announcement>
      </Announcements>
    </>
  );
};

export default Home;
