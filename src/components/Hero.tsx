import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <div className="bg-blob blob-1 animate-float"></div>

    <div className="container relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 style={{
          animationDelay: '0.2s'
        }} className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in md:text-3xl">
          <span className='text-4xl lg:text-5xl'>AI-Driven </span><span className="text-growzzy-primary text-5xl font-bold">Digital Marketing Agency</span> | Performance Marketing that <span className="text-growzzy-primary">Drives Results</span>
        </h1>
        <p style={{
          animationDelay: '0.4s'
        }} className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in md:text-base">
          Growzzy Media combines AI marketing automation with data-driven marketing campaigns to deliver AI-powered lead generation and measurable growth for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
          <Link to="/connect" className="btn-primary text-lg group">
            Get AI-Driven Marketing Solutions
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/services" className="btn-outline text-lg group">
            Explore ai marketing services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>

    <div className="container mt-20 md:mt-32">
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg fade-in-section" data-delay="0.8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">About Growzzy - Your AI Marketing Partner</h2>
          <p className="text-lg mb-4">
            We're India's most relatable AI-driven digital marketing agency, passionate about helping brands stand out using AI marketing automation and performance marketing strategies.
          </p>
          <p className="text-muted-foreground mb-6 text-justify text-base">
            At Growzzy, we blend human storytelling with AI-powered marketing tools to deliver data-driven marketing campaigns that actually convert. Our founder-led approach ensures every AI marketing strategy is trained, tested, and tailored for maximum performance in 2025 and beyond.
            <br /><br />
            We don't follow trends. We predict them using AI and SEO integration strategies.
          </p>
          <Link to="/services" className="text-growzzy-primary font-medium inline-flex items-center group hover:text-growzzy-dark transition-colors">
            Discover Our AI Marketing Solutions <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;