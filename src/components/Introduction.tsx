import bigidea from '../assets/images/the big idea 1.png'

const Introduction = () => {
  return (
    <section className="py-20 ">
      <main className="flex w-[90%] mx-auto md:px-10 max-lg:flex-col">
        <div className="shrink-0 h-[29rem] md:ml-5">
          <img src={bigidea} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="font-[clash] md:pl-16">
          <h2 className="text-[36px] lg:mt-[7.4rem] max-sm:text-[24px] max-lg:text-center leading-tight">
            Introduction to getlinked <br />
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h2>
          <p className="text-[14px] leading-[27.5px] mt-5 pr-1 font-[montserrat] max-lg:text-center">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </main>
    </section>
  );
}

export default Introduction
