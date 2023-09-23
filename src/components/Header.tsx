import { Hamburger } from "./subcomponents";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = ()=> {
    setOpen(!isOpen)
  }
  return (
    <header className="relative">
      <main className="w-11/12 mx-auto flex justify-between items-center p-2 font-[Montserrat]">
        <h2 className="md:text-[36px] text-[24px] font-[700] font-[Clash]">
          get
          <span className="text-[#D434FE]">linked</span>
        </h2>
        <ul className="flex items-center text-[16px] max-lg:hidden">
          <li className="mx-6">Timeline</li>
          <li className="mx-6">Overview</li>
          <li className="mx-6">FAQs</li>
          <li className="mx-6">Contact</li>
        <button className="bg-gradient px-5 py-2 rounded-sm ml-16">Register</button>
        </ul>
        <div className="lg:hidden" onClick={handleOpen}>
          <Hamburger />
        </div>
      </main>
    </header>
  );
}

export default Header
