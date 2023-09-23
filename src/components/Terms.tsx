import policyimg from '../assets/images/policy.png'
import { GoCheck } from "react-icons/go";

const Terms = () => {
  return (
    <section className="py-3">
      <main className="flex max-lg:flex-col md:w-[90%] w-full px-5 py-4 mx-auto">
        <div className="lg:w-[50%] w-full md:pt-9 lg:mt-24 font-[Clash] lg:pl-20">
          <h3 className="text-[32px] max-md:text-[24px] max-lg:text-center ">
            Privacy Policy and
            <br />
            <span className="text-[#D434FE] md:pr-16">Terms</span>
          </h3>
          <p className="text-[14px] font-[montserrat] mt-4 max-lg:text-center">
            We got answers to the questions that you might <br /> want to ask
            about getlinked Hackathon 1.0
          </p>

          <div className="border-[1px] border-[#D434FE] mt-16 rounded-sm bg-[rgba(217, 217, 217, 0.03)] md:px-9 px-3 py-12 font-[montserrat]">
            <p className="max-lg:text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h3 className="text-[16px] mt-5 text-[#D434FE]">
              Licensing Policy
            </h3>
            <h4 className="mt-2">Here are terms of our Standard License:</h4>

            <div className="mt-4 flex space-x-2 items-start">
              <button className="bg-[#2DE100] px-1 py-1 rounded-full">
                <GoCheck className="text-lg" />
              </button>
              <p className="pl-3">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="mt-4 flex space-x-2 items-start">
              <button className="bg-[#2DE100] px-1 py-1 rounded-full">
                <GoCheck className="text-lg" />
              </button>
              <p className="pl-3">
                You are license to use the item available at any free source
                sites, for your project development
              </p>
            </div>
            <div className="mt-11 text-center">
              <button className="bg-gradient px-5 py-2 rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:mt-[14rem] h-[36rem] ml-11">
            <img
              src={policyimg}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Terms
