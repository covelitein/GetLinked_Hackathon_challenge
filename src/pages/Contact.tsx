import { useState } from "react";
import { Header } from "../components"

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <section className="bg-[#150E28] min-h-screen text-white pt-6">
      <Header />
      <main className="w-11/12 mx-auto mt-14 px-5 font-[montserrat] grid md:grid-cols-2">
        <div className="mt-8 max-md:hidden">
          <h3 className="text-[32px] font-[clash]">Get in Touch</h3>
          <p className="text-[14px]  mt-4">
            Contact <br /> Information
          </p>

          <p className="text-[14px]  mt-4">
            27, Alara street <br /> Yaba 100012 <br /> Lagos State
          </p>

          <p className="text-[14px]  mt-4">Call Us: 07067981819</p>

          <p className="text-[14px]  mt-4">
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>

          <div className="mt-4">
            <p className="text-[#D434EF]">Share on</p>
            <div className="flex"></div>
          </div>
        </div>
        <div className="max-md:mt-16 py-3">
          <form className="md:bg-[rgba(255,255,255,0.03)] rounded-[12px] shadow-1">
            <div className="md:pt-9 md:px-12 pb-9">
              <h3 className="font-[clash] md:mb-6 mb-11 mt-2 text-[#D434EF]">
                Questions or need assistance? <br /> Let us know about it
              </h3>
              <div className="mb-10">
                <input
                  type="text"
                  className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-10">
                <input
                  type="text"
                  className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                  placeholder="Mail"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="w-full h-[8rem] rounded-[4px] px-3 py-3 bg-transparent border-[1px] border-[rgba(255, 255, 255, 0.3)]"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <button className="bg-gradient px-20 text-white py-1.5 rounded-sm">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Contact
