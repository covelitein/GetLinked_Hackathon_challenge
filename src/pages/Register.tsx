import { useState } from "react";
import { Header, SuccessMessage } from "../components";
import register from '../assets/images/register.png'

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <section className="bg-[#150E28] min-h-screen text-white pt-6">
      <Header />
      <main className="w-11/12 mx-auto mt-16 font-[montserrat] flex max-lg:flex-col">
        <div className="">
          <div className="h-[35rem] max-md:h-[25rem]">
            <img src={register} alt="" className="h-full object-contain" />
          </div>
        </div>
        <div className="max-md:mt-16 py-3 w-[40rem] max-lg:w-full">
          <form className="lg:bg-[rgba(255,255,255,0.03)] rounded-[12px] lg:shadow-1">
            <div className="pt-5 px-12 pb-9">
              <h3 className="font-[clash] text-[32px] mb-6 mt-2 text-[#D434EF]">
                Register
              </h3>
              <p className="mb-5 text-[14px]">Be part of this movement</p>
              <h3 className="uppercase mb-5">Create Your Account</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 text-[14px]">
                <div className="">
                  <input
                    type="text"
                    className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                    placeholder="First Name"
                  />
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div className="">
                    <input
                      type="text"
                      className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="w-full focus:ring-0 focus:outline-none border-[1px] border-[rgba(255, 255, 255, 0.3)] py-2 rounded-[4px] bg-transparent text-white px-3"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </div>
              <p className="text-[14px] my-4 font-[montserratitalic] text-[#D434EF]">
                Please review your registration details before submitting
              </p>
              <div className="flex items-center space-x-2">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-1"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={checked}
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#D434EF] checked:bg-[#D434EF] checked:before:bg-[#D434EF] hover:before:opacity-10"
                      id="checkbox"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </label>
                </div>
                <p className="text-[12px] ">
                  I agree with the event terms and conditions and privacy policy
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-gradient w-full text-white py-1.5 rounded-sm">
                  Register Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <SuccessMessage />
    </section>
  );
};

export default Register;
