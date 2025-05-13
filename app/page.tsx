import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}