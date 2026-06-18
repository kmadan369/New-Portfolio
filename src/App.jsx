import { Approach } from "./components/Approach";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Grid } from "./components/Grid";
import { Hero } from "./components/Hero";
import { FloatingNav } from "./components/FloatingNav";
import { RecentProjects } from "./components/RecentProjects";
import { navItems } from "./data";

function App() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <RecentProjects />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default App;
