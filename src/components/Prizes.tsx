import prizes from '../assets/images/prizes.png'
import gold from '../assets/images/gold.png'
import silver from '../assets/images/silver.png'
import bronze from '../assets/images/bronze.png'

const Prizes = () => {
  return (
    <section className="py-12 font-[clash] text-[32px]">
      <main className="w-11/12 mx-auto">
        <div className="ml-auto max:lg:w-1/3">
          <h3 className="text-[32px]">
            Prizes and
            <br />
            <span className="text-[#D434FE] md:pr-16">Rewards</span>
          </h3>
          <p className="text-[14px] font-[montserrat]">
            Highlight of the prizes or rewards for winners and <br /> for
            participants.
          </p>
        </div>
        <div className="flex mt-16 max-lg:flex-col">
          <div className="h-[25rem] ml-6 shrink-0">
            <img src={prizes} alt="" className="h-full w-full object-contain" />
          </div>
          <section className="flex space-x-3 mt-16 ml-3">
            <div className="h-[15rem] w-[10rem] bg-[rgba(212, 52, 254, 0.5)] border-[1px] border-[#D434FE]">
              <div className="">
                <img src={silver} alt="" className="-translate-y-14" />
              </div>
            </div>
            <div className="h-[16rem] w-[13rem] bg-[rgba(212, 52, 254, 0.4)] border-[1px] border-[#903AFF]">
              <div className="">
                <img
                  src={gold}
                  alt=""
                  className=" relative -translate-y-16 h-full w-full"
                />
              </div>
            </div>
            <div className="h-[15rem] w-[11rem] bg-[rgba(212, 52, 254, 0.5)] border-[1px] border-[#D434FE]">
              <div className="">
                <img src={bronze} alt="" className="relative -translate-y-14" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default Prizes
