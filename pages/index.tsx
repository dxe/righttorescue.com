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

const Home: NextPage = () => {
  return (
    <>
      <MastHead image="alexandra 2.jpeg" takeActionPage={undefined} />
      <FeaturedCase
        name="Rescuing Ethan and Jax from Foster Farms"
        page="fosterfarms"
        video="https://www.youtube.com/embed/LxnIwWmFd1E"
        videoRatio="16x9"
      >
        In September 2021, two activists rescued chickens from a stopped slaughter truck that was heading into the Foster Farms slaughterhouse in Livingston, CA. The same day, DxE released&nbsp;
          <a
            href="https://www.youtube.com/watch?v=qWdJst8f7Sk"
            target="_blank"
          >
            hidden camera footage
          </a>
          &nbsp;filmed inside the slaughterhouse showing chickens routinely missing the stun bath and a device designed to cut their necks, leaving it to workers to identify conscious birds before their evisceration, at a speed of 140 birds per minute. The activists received theft charges for the rescue and pleaded not guilty. Their trial has been scheduled for March 7, 2023. It is expected to last 4-5 days. DxE is organizing a court support convergence around the trial. Register to join us by&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFCBAf-uw5ahBSgZcdUQZpr1eoMNlMzQQSoRTBTN7HGuX1Xw/viewform"
            target="_blank"
          > 
            filling out this form.</a>
          &nbsp;
      </FeaturedCase>
      <Letter />
      <About
        name="About the Right to Rescue"
        video="https://www.youtube.com/embed/BgOHTQy6SEU"
        videoRatio="16x9"
      >
        The Right to Rescue refers to every animal's right to be rescued from situations of distress and exploitation. 14 US states have laws that allow the rescue of dogs from hot cars, and <a href="http://directactioneverywhere.com">Direct Action Everywhere</a> (DxE) is leading a campaign to extend these laws to apply to animals of any species in need of rescue, including in factory farms and animal experimentation facilities. The Right to Rescue campaign seeks to build support for animal rescue and ultimately, to establish a legal right to rescue animals from distress and exploitation. This would open the door to a new view of animals under the law - as people deserving of rights, rather than "property.”
      </About>
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
          date="Feb. 21, 2023"
          image="FF best.png"
          featured
        >
          Merced County Judge Paul Lo granted the defense’s subpoena of Foster Farms’ records regarding the health conditions of the group of chickens that included the two who were rescued. Foster Farms will be compelled to provide evidence regarding diseased, deceased, and condemned birds from the flock that included Jax and Ethan. Previous attempts to obtain this kind of evidence were completely denied in North Carolina and Utah. This is an important victory that will certainly impact the trial, and future legal efforts. Read more in the press&nbsp;
          <a
            href="https://kmph.com/news/local/judge-grants-subpoena-of-foster-farms-after-activist-chicken-rescue"
            target="_blank"
          >here.</a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Merced County, California"
          date="Feb. 14, 2023"
          image="FF best.png"
          featured
        >
          New York Times columnist Farhad Manjoo just wrote about the #FosterFarmsTrial in a&nbsp;
          <a
            href="https://www.nytimes.com/2023/02/14/opinion/foster-farms-chicken-slaughterhouse-animal-cruelty.html"
            target="_blank"
          >piece</a>
          &nbsp;powerfully titled, “Rescuing Farm Animals From Cruelty Should Be Legal.” Manjoo describes the routine cruelty at Foster Farms and examines the strategy behind the “Right to Rescue” cases before concluding that the defendants, Alexandra Paul and Alicia Santurio, “should be praised, not punished.”  Help us elevate this incredible coverage by sharing it on&nbsp;
          <a
            href="https://www.instagram.com/p/CopbWGFLABE/"
            target="_blank"
          >Instagram,</a>
          &nbsp;
          <a
            href="https://www.facebook.com/directactioneverywhere/posts/pfbid027Yphug1WyWaEqNFqesmQToFwaPEE3UmkV4AcdszFLbYNURX9TGBLxQWbweDugBrZl"
            target="_blank"
          >
            Facebook,
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://twitter.com/fmanjoo/status/1625468222828081152"
            target="_blank"
          >
            Twitter.
          </a>
          &nbsp;
        </Announcement>
                <Announcement
          title="Sonoma County, California"
          date="Feb. 6, 2023"
          image="Sunrise.png"
          featured
        >
          Preliminary hearings finally concluded for Cassie, Priya, and Wayne (and Almira took a plea deal) on Jan. 19. Judge Honigsberg said he needed some time to consider the defense attorneys' 17b motions (motions to reduce the felony counts to misdemeanors), so Cassie, Priya, and Wayne went back to court on February 6, 2023 to hear the judge's ruling. He granted the 17b motion for Cassie, saying that in his review of the livestreams, he had not seen her seeming to be in a leadership role at the actions. He denied the motions for Priya and Wayne. Cassie now faces 8 misdemeanors, whereas her co-defendants face four felonies and four misdemeanors each, including Rachel. Trial is expected in 2023 for all four remaining defendants. Jon took the same plea deal as Almira.
        </Announcement>
        <Announcement
          title="Beaver County, Utah"
          date="Jan. 20, 2023"
          image="sf-ut.jpeg"
          featured
        >
          The University of Denver Animal Activist Defense Project hosted a “Smithfield Trial Summit” from Jan. 13-15 featuring panels and presentations by the defendants, lawyers, and jurors from this historic trial. Five of eight jurors attended and spoke about what motivated them to acquit Wayne and Paul. You can read more about the event in&nbsp;
          <a
            href="https://www.stgeorgeutah.com/?p=977195#.Y9hmkeyZOWo"
            target="_blank"
          > 
            this press article.</a>
          &nbsp;
        </Announcement>
        <Announcement
          title="Merced County, California"
          date="Dec. 13, 2022"
          image="FF best.png"
          featured
        >
          Trial dates were set today for the Foster Farms rescue case. Former
          Baywatch star Alexandra Paul and co-defendant Alicia Santurio are
          being charged with misdemeanor theft for rescuing two birds from a
          slaughter truck that was stopped on its way into the Foster Farms
          slaughterhouse in Livingston, CA in 2021. Trial is scheduled for March
          7, 2023 and it is expected to last 4-5 days. DxE is organizing a court support convergence around the trial. Register to join us at the trial by&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFCBAf-uw5ahBSgZcdUQZpr1eoMNlMzQQSoRTBTN7HGuX1Xw/viewform"
            target="_blank"
          > 
            filling out this form.</a>
          &nbsp;
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
          to trial on all charges, except those the prosecution dismissed before the hearing began, including one the felony theft charge from Sunrise and all charges relating to the McCoys Poultry action. Sonoma County’s own animal services department referred McCoy's as a suspect for animal cruelty, after examining the birds removed by activists from the farm. So it seems like DA Waner simply doesn't want the judge or jury to see this evidence of animal cruelty, including birds with necrotic wounds so deep that muscle and bone were exposed. He also dropped the felony theft charge from Sunrise Farms. Rachel and Jon are now facing 4 felonies and 4 misdemeanors. You can
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
