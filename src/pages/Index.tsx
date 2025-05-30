
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';

const Index = () => {
  useEffect(() => {
    document.title = "Growzzy Media - Digital Marketing Agency";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default Index;
