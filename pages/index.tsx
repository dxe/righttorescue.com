import type { NextPage } from "next";
import { MastHead } from "../components/HomePage/MastHead";
import { Letter } from "../components/HomePage/Letter";
import { CasesSection } from "../components/HomePage/CasesSection";
import React, { useEffect, useState } from "react";
import { Case } from "../components/HomePage/Case";
import { Announcements } from "../components/HomePage/Announcements";
import { Announcement } from "../components/HomePage/Announcement";
import { FeaturedCase } from "../components/HomePage/FeaturedCase";

const Home: NextPage = () => {
  return (
    <>
      <MastHead image="alexandra 2.jpeg" takeActionPage={undefined} />
      <FeaturedCase
        name="Rescuing Ethan and Jax from Foster Farms"
        page="fosterfarms"
        video="https://www.youtube.com/watch?v=LxnIwWmFd1E"
        videoRatio="16x9"
      >
        In September 2021, two activists rescued birds from a stopped slaughter truck that was heading into the Foster Farms slaughterhouse in Livingston, CA. They received theft charges in the mail in spring 2022 and had their first court date on June 15, 2022 in Merced Superior Court, where they entered not guilty pleas via their attorney. At a hearing on December 13, 2022, their trial was scheduled for March 7, 2023 and it is expected to last 4-5 days.
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
            image="ff.png"
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

          <Case
            name="Smithfield"
            location="Beaver County, Utah"
            page="sf-ut"
            image="sf-ut.jpg"
            past
          />
        </CasesSection.CaseList>
      </CasesSection>
      <Announcements>
        <Announcement
          title="Merced County, California"
          date="December 13, 2022"
          image="FF best.png"
          featured
        >
          Trial dates were set today for the Foster Farms rescue case. Former
          Baywatch star Alexandra Paul and co-defendant Alicia Santurio are
          being charged with misdemeanor theft for rescuing two birds from a
          slaughter truck that was stopped on its way into the Foster Farms
          slaughterhouse in Livingston, CA in 2021. Trial is scheduled for March
          7, 2023 and it is expected to last 4-5 days.
        </Announcement>
        <Announcement
          title="Sonoma County, California"
          date="Dec. 5, 2022"
          image="Sunrise.png"
          featured
        >
          Rachel and Jon finally had their preliminary hearings today, four
          years after the nonviolent mass open rescues that led to this felony
          case. Although the prosecution failed to provide evidence that Rachel
          or Jon engaged in the alleged crimes including conspiracy and
          burglary, Judge Urioste nonetheless ruled that the case would proceed
          to trial on all charges. Trial dates have not been set yet. You can
          read more about what happened at the hearing in&nbsp;
          <a
            href="https://www.petaluma360.com/article/news/animal-rights-activists-to-stand-trial-in-2018-19-petaluma-protest-burglary/"
            target="_blank"
          >
            this press article
          </a>
          &nbsp;or&nbsp;
          <a
            href="https://www.directactioneverywhere.com/dxe-in-the-news/court-update-the-sonomatrial-is-finally-on-the-horizon"
            target="_blank"
          >
            this DxE blog.
          </a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Washington County, Utah"
          date="Oct. 8, 2022"
          image="sf-ut.jpeg"
          featured
        >
          Victory! The jury in the #SmithfieldTrial unanimously found Wayne and
          Paul NOT GUILTY on all charges for rescuing Lily and Lizzie from
          Smithfield's Circle Four Farms. This groundbreaking verdict shows that
          the public supports the right to rescue animals from abuse.
          Please&nbsp;
          <a
            href="https://twitter.com/DxEverywhere/status/1578885463279927297"
            target="_blank"
          >
            spread the word!
          </a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="Sept. 8, 2022"
          image="gavel1.png"
          featured
        >
          Judge Wilcox ruled, over the defense's objection, to make the jury
          anonymous. It’s a move typically reserved for trials involving violent
          organized crime, with only one known use in Utah history, before now.
          This decision could indicate to jurors that the defendants are violent
          people to be feared, instead of compassionate individuals trying to
          protect the most vulnerable.
        </Announcement>
        <Announcement
          title="Washington County, Utah"
          date="Aug. 19, 2022"
          image="gavel1.png"
          featured
        >
          MOTION GRANTED! Wayne and Paul won their motion for a new jury and
          trial location because the judge agreed that Smithfield and police had
          biased people in Beaver County, Utah. The #SmithfieldTrial will now
          take place in Washington County, Utah. This is a win for the legal
          case, as the jury pool in Washington County is less financially
          dependent on Smithfield. As a result of this change in venue, the
          trial has also been delayed to October 3-7. Please share this news
          on&nbsp;
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
        >
          Trial dates are set for Wayne and Paul in Utah: Sept. 9-16. DxE is
          organizing a convergence in Utah during the trial to show support for
          animal rescue, build community with one another, and take action
          together to expose Smithfield’s Deathstar to the world.
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="Feb. 24, 2022"
          image="gavel1.png"
        >
          Utah Judge Jeffrey C. Wilcox, who will preside over the
          #SmithfieldTrial, granted the State’s request to exclude the Operation
          Deathstar video and all evidence of “inhumane animal conditions” at
          trial, except to prove the value of the specific piglets who were
          rescued, Lily and Lizzie. The State argued that the footage would be
          prejudicial because it would arouse horror in the jury, but that is
          exactly why the jury should be allowed to see it.
        </Announcement>
        <Announcement
          title="Wright County, Iowa"
          date="Jan. 19, 2022"
          image="mj.jpg"
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
