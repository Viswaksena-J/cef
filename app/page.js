import { Hero, About, Causes, CTA, Services, CaseStudy, GreyCTA, Articles, BottomCTA } from "./components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Causes />
      {/* <CTA /> */}
      <Services />
      <CaseStudy />
      <GreyCTA />
      <Articles />
      <BottomCTA />
    </>
  );
}
