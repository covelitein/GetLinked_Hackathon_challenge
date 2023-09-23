import { FaXTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className="py-9">
      <main className="w-5/6 mx-auto grid grid-cols-4 gap-5">
        <div className="col-span-2">
          <h3 className="text-[32px] mb-3 font-[clash]">
            get<span className="text-[#D434EF]">Linked</span>
          </h3>
          <p className="">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <div className="mt-14">
            Terms of Use <span className="text-[#D434EF] px-3">|</span> Privacy Policy
          </div>
        </div>
        <div className="pl-11 pt-2">
          <h3 className="text-[16px] text-[#D434EF] text-left">Useful Links</h3>
          <ul className="pt-5 flex flex-col space-y-3">
            <li className="">Overview</li>
            <li className="">Timeline</li>
            <li className="">FAQs</li>
            <li className="">Register</li>
            <li className="flex">
              <span className="text-[#D434EF]">Follow</span>
              <div className="flex"></div>
            </li>
          </ul>
        </div>

        <div className="px-5 pt-2">
          <h3 className="text-[16px] text-text-[#D434EF]">Contact Us</h3>
        </div>
      </main>
      <div className="pt-16 text-center">
        All rights reserved. &copy; getlinked Ltd.
      </div>
    </footer>
  );
}

export default Footer
