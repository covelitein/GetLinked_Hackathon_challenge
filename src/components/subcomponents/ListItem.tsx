/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const ListItem = ({ heading, point } : any) => {
  return (
    <div className="text-[13.5px] font-[montserrat] leading-[24px] md:mb-1 mb-3 md:pr-2 max-md:text-center">
      <span className="text-[#ff26b9]">{heading}:</span> <span>{point}</span>
    </div>
  );
}

export default ListItem
