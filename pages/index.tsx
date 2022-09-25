import type { NextPage } from "next";
import { MastHead } from "../components/HomePage/MastHead";
import { Letter } from "../components/HomePage/Letter";
import { CasesSection } from "../components/HomePage/CasesSection";
import React, { useEffect, useState } from "react";
import { Case } from "../components/HomePage/Case";
import { Announcements } from "../components/HomePage/Announcements";
import { Announcement } from "../components/HomePage/Announcement";
import { FeaturedCase } from "../components/HomePage/FeaturedCase";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <MastHead image="sf-ut.jpg" takeActionPage={undefined} />
      <FeaturedCase
        name="Rescuing Lily and Lizzie from Smithfield"
        page="/sf-ut"
        video="https://www.youtube.com/embed/wlSE1X-hSqQ"
        videoRatio="16x9"
      >
        <p>
          In 2017, DxE investigators infiltrated a massive pig farm in the Utah
          desert – a facility owned by Smithfield/WH Group, the world’s largest
          pig killing company. The investigators filmed the horrific conditions
          inside in 360º virtual reality and rescued two piglets: Lily, who had
          a severe leg injury, and Lizzie, who was malnourished and nursing on a
          shredded nipple. The case has been covered by&nbsp;
          <a href="https://www.wired.com/story/direct-action-everywhere-virtual-reality-exposing-factory-farms/" target="_blank">
            WIRED,
          </a>
          &nbsp;&nbsp;
          <a href="https://newrepublic.com/article/165468/animal-rights-dxe-smithfield" target="_blank">
            The New Republic,
          </a>
          &nbsp;and&nbsp;
          <a href="https://www.nytimes.com/2017/07/06/dining/animal-welfare-virtual-reality-video-meat-industry.html" target="_blank">
            The New York Times.
          </a>
          &nbsp; 
        </p>
        <p>
          Trial dates for DxE investigators Wayne Hsiung and Paul Darwin
          Picklesimer are set for October 3-7, 2022 in Washington County, Utah.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
          <Link href="https://dxe.io/utahsignup" passHref>
            <a target="_blank" rel="noreferrer">
              Register today
            </a>
          </Link>{" "}
          to join us in Utah this October to expose Smithfield’s Deathstar and
          defend the right to rescue!
        </p>
      </FeaturedCase>
      <Letter />
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
            name="Foster Farms"
            location="Merced County, California"
            page="fosterfarms"
            image="Foster Farms rescue shot.png"
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
        </CasesSection.CaseList>
      </CasesSection>
      <Announcements>
        <Announcement
          title="Washington County, Utah"
          date="August 19, 2022"
          image="gavel1.png"
          featured
        >
          MOTION GRANTED! Wayne and Paul won their motion for a new jury and
          trial location because the judge agreed that Smithfield and police had
          biased people in Beaver County, Utah. The #SmithfieldTrial will now
          take place in Washington County, Utah. This is a win for the legal
          case, as the jury pool in Washington County is less financially
          dependent on Smithfield. As a result of this change in venue, the
          trial has also been delayed to October 3-7 (and we anticipate it may
          last into the following week). Our trial support convergence will now
          be October 3-11. If you can join us in Utah in October, please
          register at&nbsp;
          <a href="https://dxe.io/utahsignup" target="_blank">
            dxe.io/utahsignup.
          </a>
          &nbsp; Please share this news on&nbsp;
          <a
            href="https://www.instagram.com/p/Chdz3-nrHM-/?igshid=YmMyMTA2M2Y%3D&"
            target="_blank"
          >
            Instagram
          </a>
          ,&nbsp;
          <a href="https://www.facebook.com/100064603752737/posts/pfbid07qyn3tUWdXrXNQBvMj5ErtQ6w4tVyBFT7WfXNjmtndvxrES6n5v46VJ4jjhAap6Zl/">
            Facebook
          </a>
          , or&nbsp;
          <a
            href="https://twitter.com/dxeverywhere/status/1560828220936638464?s=21&t=Hlgy2rEDKeG3OXNqZ6IyJQ"
            target="_blank"
          >
            Twitter
          </a>
          .
        </Announcement>
        <Announcement
          title="Merced County, California"
          date="June 15, 2022"
          image="FF best.png"
          featured
        >
          Former Baywatch star Alexandra Paul and co-defendant Alicia Santurio
          entered “not guilty” pleas in a new rescue case. In September 2021,
          activists rescued birds from a slaughter truck that was stopped on its
          way into the Foster Farms slaughterhouse in Livingston, CA. In Spring
          2022, Alexandra and Alicia received theft charges in the mail related
          to this rescue.
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="May 30, 2022"
          image="sf-ut.jpeg"
          featured
        >
          Trial dates are set for Wayne and Paul in Utah: Sept. 9-16. We are
          organizing a convergence in Utah during the trial to show support for
          animal rescue, build community with one another, and take action
          together to expose Smithfield’s Deathstar to the world. You can
          register at&nbsp;
          <a href="https://dxe.io/utahsignup" target="_blank">
            dxe.io/utahsignup.
          </a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Wright County, Iowa"
          date="Jan. 19, 2022"
          image="mj.jpg"
          featured
        >
          VICTORY! Just one day before trial was set to begin, all charges
          against DxE investigator Matt Johnson were DROPPED. International
          media outlets had requested coverage and people from around the
          country were planning to attend the trial to support the right to
          rescue. Could it be that the industry got scared of the public
          attention? We were going to expose Iowa Select Farms’ gruesome cruelty
          in court, but instead of going away, we are now using this victory as
          an opportunity to keep fighting "ag-gag" laws and defending the Right
          to Rescue.
        </Announcement>

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
        >
          More charges dropped! Investigator Matt Johnson who exposed pigs being
          roasted alive had his trespass case dismissed, as the company refuses
          to testify about their actions.
        </Announcement>

        <Announcement
          title="Grundy County, Iowa"
          date="Jan. 11, 2021"
          image="ch.jpg"
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
