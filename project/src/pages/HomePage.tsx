import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import LatestNews from '../components/home/LatestNews';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'MultiService Pro - Solutions sur mesure';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <LatestNews />
      <CTA />
    </>
  );
};

export default HomePage;