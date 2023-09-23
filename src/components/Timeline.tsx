import { TimelineItem } from "./subcomponents";

const Timeline = () => {
  return (
    <section className="pt-14 pb-16 font-[montserrat2]">
      <h3 className="font-[clash] text-[32px] text-center">Timeline</h3>
      <p className="text-center text-[13px] mt-2 px-4">
        Here is the breakdown of the time we anticipate <br /> using for the
        upcoming event
      </p>

      <main className="w-[90%] mx-auto mt-16">
        <TimelineItem
          gridNo={"grid-1"}
          No="1"
          h1={"Hackathon Announcement"}
          desc={
            "The getLinked tech hackathon 1.0 is formally announced <br /> to the general public and teams begin to get ready for register"
          }
          dateString={"November 18, 2023"}
        />
        {/*  end */}
        <TimelineItem
          gridNo={"grid-2"}
          No="2"
          h1={"Teams Registration begins"}
          desc={
            "Interested team can now show their interest in the <br /> getlinked tech hackathon 1.0 2023 by proceeding to register"
          }
          dateString={"November 18, 2023"}
        />
        {/* end */}
        <TimelineItem
          gridNo={"grid-1"}
          No="3"
          h1={"Teams Registration ends"}
          desc={
            "Interested participants are no longer Allowed to <br /> register"
          }
          dateString={"November 18, 2023"}
        />
        {/* end */}
        <TimelineItem
          gridNo={"grid-2"}
          No="4"
          h1={"Announcement of the accepted teams and ideas"}
          desc={
            "All teams whom idea has been accepted into getlinked tech <br /> hackathon 1.0 2023 are formally announced"
          }
          dateString={"November 18, 2023"}
        />
        {/* end */}
        <TimelineItem
          gridNo={"grid-1"}
          No="5"
          h1={"Getlinked Hackathon 1.0 Officially Begins"}
          desc={
            "Accepted teams can now proceed to build their <br /> ground breaking skill driven solutions"
          }
          dateString={"November 18, 2023"}
        />
        {/* end */}
        <TimelineItem
          gridNo={"grid-2"}
          No="6"
          h1={"Demo Day"}
          desc={
            "Teams get the opportunity to pitch their projects to the judges. <br /> The winner of the hackathon will also be announced on <br /> this day"
          }
          dateString={"November 18, 2023"}
        />
      </main>
    </section>
  );
};

export default Timeline;
