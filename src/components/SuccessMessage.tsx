import success from '../assets/images/success.png'
import done from '../assets/images/done.png'
import pstar from "../assets/images/pstar.png";
import pinkstar from "../assets/images/pinkstar.png";
import { useGlobalState } from '../store';

const SuccessMessage = ()=> {
    const [modalcomponent] = useGlobalState('modalcomponent')

    return (
      <section
        className={`font-[montserrat] fixed top-0 left-0 bg-[rgba(21,14,40,0.93)] h-full w-full flex justify-center items-center ${modalcomponent}`}
      >
        <div className="border-[1px] w-2/5 border-[#D434EF] min-h-[14rem] py-7 flex flex-col items-center px-7 rounded-[4px] relative">
          <div className="absolute -right-7 -top-6 h-[29px]">
            <img src={pstar} alt="" className="h-full w-full" />
          </div>
          <div className="absolute right-7 bottom-3 h-[21px]">
            <img src={pinkstar} alt="" className="h-full w-full" />
          </div>
          <div className="flex w-full justify-center">
            <div className="absolute -translate-x-[5rem]">
              <img src={done} alt="" />
            </div>
            <div className="ml-6 h-[15rem] z-50">
              <img
                src={success}
                alt=""
                className="h-full w-full object-contain inline"
              />
            </div>
          </div>
          <p className="mt-4 text-[24px] text-center">
            Congratulations <br /> you have successfully Registered!
          </p>
          <p className="text-[14px] my-3">
            Yes, it was easy and you did it! <br /> check your mail box for next
            step
          </p>
          <button className="text-[14px] bg-gradient my-4 py-2 w-full rounded-[4px]">
            Back
          </button>
        </div>
      </section>
    );
}
export default SuccessMessage