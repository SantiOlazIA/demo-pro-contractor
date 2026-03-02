import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-[100dvh] bg-background font-sans selection:bg-accent selection:text-dark pb-0">
      <Hero />
      <Stats />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
