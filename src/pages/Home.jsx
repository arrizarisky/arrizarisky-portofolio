import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { CategorySkill } from "../components/CategorySkill";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ToolsSection } from "../components/ToolsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySkill />
      <AboutSection />
      <ProjectSection />
      <ToolsSection />
      <Footer />
    </>
  );
};
