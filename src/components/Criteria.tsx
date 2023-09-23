import criteria from '../assets/images/criteria.png'
import { ListItem } from './subcomponents';


const Criteria = () => {
  return (
    <section className="md:pt-4 md:pb-5">
      <main className="w-[90%] mx-auto flex max-lg:flex-col">
        <div className="shrink-0">
          <div className="h-[25rem] md:h-[29rem] md:mt-[10rem]">
            <img src={criteria} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="py-3 font-[clash] md:pl-5 md:w-1/2 w-full">
          <h3 className="md:text-[32px] text-[24px] md:mt-5 mb-2 max-lg:text-center">
            Judging Criteria
            <br />
            <span className="text-[#D434FE] md:pr-16">Key attributes</span>
          </h3>

          <div className="">
            <ListItem
              heading={"Innovation and Creativity"}
              point={
                "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."
              }
            />
            <ListItem
              heading={"Functionality"}
              point={
                "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
              }
            />
            <ListItem
              heading={"Impact and Relevance"}
              point={
                "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits."
              }
            />
            <ListItem
              heading={"Technical Complexity"}
              point={
                "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
              }
            />
            <ListItem
              heading={"Adherence to Hackathon Rules"}
              point={
                "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements"
              }
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Criteria
