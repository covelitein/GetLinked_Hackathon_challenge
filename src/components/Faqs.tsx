import fagimg from '../assets/images/faq.png'
import { Accordion } from './subcomponents';

const Faqs = () => {
  return (
    <section className="">
      <main className="flex max-lg:flex-col w-[90%] py-4 mx-auto">
        <div className="lg:w-[50%] w-full md:pt-9 pt-5 lg:mt-24 font-[Clash] w-[50%] md:pl-20">
          <h3 className="text-[32px] max-lg:text-center max-md:text-[24px]">
            Frequently Ask
            <br />
            <span className="text-[#D434FE] md:pr-16">Questions</span>
          </h3>
          <p className="text-[14px] font-[montserrat] mt-4 max-lg:text-center">
            We got answers to the questions that you might <br /> want to ask
            about getlinked Hackathon 1.0
          </p>
          <div className="mt-12 font-[montserrat] text-[12px]">
            <Accordion
              question={
                "Can I work on a project I started before the hackathon?"
              }
            />
            <Accordion
              question={"What happens if I need help during the hackathon?"}
            />
            <Accordion
              question={"What happens if I need help during the hackathon?"}
            />
            <Accordion
              question={"What happens if I need help during the hackathon?"}
            />
            <Accordion
              question={"What happens if I need help during the hackathon?"}
            />
            <Accordion
              question={"What happens if I need help during the hackathon?"}
            />
          </div>
        </div>
        <div>
          <div className="max-lg:mt-32 mt-4 max-lg:order-first">
            <img src={fagimg} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Faqs
