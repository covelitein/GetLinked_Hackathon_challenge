import img from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import virtual from "../assets/images/virtual.png";
import chain from "../assets/images/chain-9365116-7621444.png";
import creative from '../assets/images/Creative 1.png'
import fire from '../assets/images/1f4a5 (1).png'

const Hero = () => {
  return (
    <div className=" relative font-[montserrat] ">
      <div className="absolute -top-24 -left-12 bg-purplelens w-[60%] h-full mix">
        <div className="relative w-full h-full bg-[rgba(211,211,211,.001)] "></div>
      </div>

      <div className="absolute top-1 right-1 bg-purplelens w-[50%] h-full mix">
        <div className="relative w-full h-full bg-[rgba(211,211,211,.001)] "></div>
      </div>

      <section className="mix1 pt-3">
        <h3 className="mt-5 mb-1 max-md:text-[15px] max-md:text-center text-right md:pr-16 font-style">
          Igniting a Revolution in HR Innovation
        </h3>
        <main className="flex max-lg:flex-col font-[Clash] justify-between mt-9">
          <div className="lg:pl-14 max-md:px-2">
            <h3 className="mt-12 lg:text-[70px] md:text-[50px] text-[32px] relative -mb-5">
              <span className="relative max-lg:text-center">
                getlinked Te
                <span className="relative">
                  c
                  <img
                    src={creative}
                    className="absolute h-[3rem] max-sm:h-[1.5rem] -right-1 -top-8 object-contain"
                  />
                </span>
                h
              </span>
            </h3>
            <h3 className="lg:text-[70px] leading-loose md:text-[50px] text-[32px] items-center relative">
              <span>
                Hackathon <span className="text-[#D434FE]">1.0</span>
              </span>{" "}
              <img src={chain} alt="" className="inline max-md:h-[3rem]" />
              <img src={fire} alt="" className="inline md:h-[4rem] h-[2rem]" />
            </h3>
          </div>
          {/*
              end of hero text
          */}
          <div className="relative shrink-0">
            <div className="w-full flex justify-end md:h-[30rem] h-[25rem]">
              <img src={img} alt="h-full object-contain" />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Hero