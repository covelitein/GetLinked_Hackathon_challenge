/* eslint-disable @typescript-eslint/no-explicit-any */


const TimelineItem = ({ gridNo, No, h1, desc, dateString } : any) => {
  return (
    <div className={`${gridNo} mx-auto mb-3`}>
      <div
        className={`${
          gridNo === "grid-1" ? "text-right max-md:text-left" : "text-left"
        } desc relative max-md:self-end max-md:translate-y-7`}
      >
        <h3 className="text-[#D434FE] md:text-[24px] font-[700] lg:mb-2 ">
          {h1}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="text-[14px] max-md:text-[12px] max-md:mb-7"
        ></p>
      </div>
      <div className="second item-start">
        <div className="flex flex-col items-center">
          <div className="w-1 min-h-[6rem] bg-[#D434FE]"></div>
          <button className="shrink-0 w-[3rem] h-[3rem] max-md:h-[2rem] max-md:w-[2rem] rounded-full bg-gradient2 mt-3">
            {No}
          </button>
        </div>
      </div>
      <div
        className={`date ${
          gridNo === "grid-2" ? "text-right max-md:text-left" : "text-left"
        } relative max-md:self-end`}
      >
        <h3 className="text-[#D434FE] text-[24px] max-md:text-[14px] font-[700]">
          {dateString}
        </h3>
      </div>
    </div>
  );
}

export default TimelineItem
