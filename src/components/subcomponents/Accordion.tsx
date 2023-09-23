/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import { BsPlus, BsDash } from "react-icons/bs";

const Accordion = ({ question } : any) => {
    const el = useRef<HTMLParagraphElement>(null)
    const [isOpen, setOpen] = useState(false)

  const handleOpen = ()=> {
    setOpen(!isOpen)
  }

  return (
    <div className="mb-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <h2 className="text-[14px]">{question}</h2>
        {!isOpen ? (
          <BsPlus className="text-[#D434FE] text-xl" />
        ) : (
          <BsDash className="text-[#D434FE] text-xl" />
        )}
      </div>
      <div className="h-[1px] bg-[#D434FE] mt-2.5"></div>
      <div className="mt-3 text-justify">
        <p
          ref={el}
          className={`overflow-hidden pr-1 text-[14px] duration-400 transition-all overflow-y-hidden`}
          style={
            isOpen
              ? { maxHeight: el.current?.scrollHeight }
              : { maxHeight: "0px" }
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi
          repellendus nemo maxime aperiam explicabo quos assumenda. Maxime,
          voluptatum necessitatibus?
        </p>
      </div>
    </div>
  );
}

export default Accordion
