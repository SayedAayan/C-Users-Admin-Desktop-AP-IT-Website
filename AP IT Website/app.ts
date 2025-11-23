import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
