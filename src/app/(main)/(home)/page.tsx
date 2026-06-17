import AboutSection from './AboutSection/AboutSection';
import { Contact } from './contact/contact';
import HeroSection from './HeroSection/HeroSection';
import Portfolio from './portfolio/portfolio';
import Services from './services/services';
import { Testimonials } from './testimonials/testimonials';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default HomePage;
