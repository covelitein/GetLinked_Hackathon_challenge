import guideimg from '../assets/images/guide.png'

const Guides = () => {
  return (
    <section className="pt-3 lg:pb-2 pb-5">
      <main className="flex w-[90%] mx-auto md:px-10 max-lg:flex-col">
        <div className="lg:w-[50%] w-full md:pt-9 lg:mt-16 font-[Clash] w-[50%] md:pl-6">
          <h3 className="text-[32px] max-sm:text-[24px] max-lg:text-center">
            Rules and
            <br />
            <span className="text-[#D434FE] lg:pr-16">Guidelines</span>
          </h3>
          <p className="text-[14px] mt-5 leading-[27.5px] font-[montserrat] max-lg:text-center">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="max-lg:order-first">
          <div className="shrink-0 lg:h-[35rem] h-[30rem] md:pl-14 ">
            <img
              src={guideimg}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Guides