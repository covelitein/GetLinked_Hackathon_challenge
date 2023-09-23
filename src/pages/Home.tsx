import { Criteria, Faqs, Footer, Guides, Header, Hero, Introduction, Partnership, Prizes, Terms, Timeline } from '../components';

const Home = () => {
  return (
    <section className="min-h-screen bg-[#150E28] text-white pt-4 text-[14px] font-[montserrat]">
      <Header />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Hero />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Introduction />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Guides />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Criteria />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Faqs />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Timeline />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Prizes />
      <Partnership />
      <div className="h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
      <Terms />
      <Footer />
    </section>
  );
}

export default Home
