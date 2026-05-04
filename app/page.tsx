import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  frontPage,
  socials,
  experiences,
  projects,
  techCategories,
  achievements,
  photos,
  games,
} from "@/data";

export default function Home() {
  return (
    <main>
      <Header frontPage={frontPage} />
      <Hero frontPage={frontPage} social={socials} />
      {/* <About frontPage={frontPage} /> */}
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Techstack categories={techCategories} />
      <Achievements achievements={achievements} />
      <Hobbies photos={photos} games={games} />
      <Contact frontPage={frontPage} social={socials} />
      <Footer />
    </main>
  );
}
