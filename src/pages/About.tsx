import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import varuni from '../images/Varuni.png';
import mayank from '../images/Mayank Goel edit.jpeg'
import { Check, Scale } from 'lucide-react';
const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                About <span className="text-growzzy-primary">Growzzy Media</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">Your partner in digital growth. We combine creativity with data, strategy with storytelling — and most importantly, we grow with you. — and now, faster, smarter, and sharper with AI.</p>
            </div>
          </div>
        </section>
        
        {/* Why Growzzy Media Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section">
                <h2 className="text-3xl font-display font-bold mb-6">Why Growzzy Media?</h2>
                <p className="text-lg mb-4"><span className="font-medium">Growzzy is short for "growth made eazy."</span></p>
                <p className="text-muted-foreground mb-6 text-justify">In a world where speed, relevance, and precision define success, we’re not just keeping up — we’re leading with AI-driven marketing solutions that scale faster, work harder, and cost less.</p>
                <p className="text-muted-foreground mb-6 text-justify">At Growzzy Media, we blend human creativity with machine intelligence to deliver performance-first marketing — from intelligent ad campaigns to automated content strategies. Our process cuts guesswork, boosts results, and helps brands grow without burning out or burning cash.

We’re not your typical agency — we’re your always-on, AI-powered growth engine.</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.2">
                <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Digital Marketing Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg fade-in-section">
                <div className="w-14 h-14 bg-growzzy-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-growzzy-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-justify">To empower modern businesses with AI-backed strategies, tools, and content that don’t just look good — they work hard, convert faster, and scale smarter.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg fade-in-section" data-delay="0.2">
                <div className="w-14 h-14 bg-growzzy-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-growzzy-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-justify">To become the world’s most trusted AI-driven marketing partner — delivering human-led, machine-optimized digital growth for brands across the globe.</p>
              </div>
            </div>
            
            <div className="text-center mt-16 fade-in-section" data-delay="0.3">
              <p className="text-xl font-medium text-growzzy-primary">
                Serving clients globally with a focus on AI-powered digital solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Founder's Diary */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-12 text-center fade-in-section">Founder's Diary</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Varuni Profile */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.1">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                      <img src={varuni} alt="Varuni Bansal" className="w-full h-full object-cover" style={{transform: 'Scale(2.3) translateY(10px) translateX(5px)'}} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Varuni Bansal</h3>
                      <p className="text-growzzy-primary">Co-Founder</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">&quot;I’ve always loved the art of branding and the science of marketing.&quot;</p>
                    <p className="text-muted-foreground text-justify">From the start, I knew I was made for this field. The way brands come alive in the digital space fascinated me. I pursued BBA and MBA in marketing, and over time, gained hands-on experience in social media, ads, and brand strategy.</p>
                    <p className="text-muted-foreground">But something still felt missing — until I realized I didn’t just want to work in marketing; I wanted to build something with it.</p>
                    <p className="text-muted-foreground">That’s how Growzzy came to life. It’s more than a business — it’s a shared journey. Within months, we scaled from one to ten clients.

Because when you lead with value… the work speaks for itself.</p>
                  </div>
                </div>
              </div>
              
              {/* Mayank Profile */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.2">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                      <img src={mayank} alt="Mayank Goel" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Mayank Goel</h3>
                      <p className="text-growzzy-primary">Co-Founder</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">“I’ve always lived at the crossroads of business, numbers, and impact.”</p>
                    <p className="text-muted-foreground text-justify">I pursued B.Com (Hons) in International Accounting &amp; Finance, I always wanted to create something impactful and for that marketing was the other half for it, So just here I took a leap for digital marketing and made it my way to start in my journey. Growing up in a business family, entrepreneurship was always part of me — I just had to find the right way to channel it. And marketing gave me that path. After hands-on experience in advertising and personal branding, I saw how much potential businesses had… if only they had the right tools. </p>
                    <p className="text-muted-foreground">The AI wave? We chose to ride it, not fear it.
And now, Growzzy stands as our way of helping others do the same — to grow, thrive, and scale with strategy, not guesswork.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center fade-in-section">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow with us?</h2>
              <p className="text-lg mb-8">
                Let's discuss how we can help your business achieve remarkable growth with our AI-powered digital solutions.
              </p>
              <Link to="/connect" className="btn-primary inline-flex items-center">
                Let's Connect
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>;
};
export default AboutPage;