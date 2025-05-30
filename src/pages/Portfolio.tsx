
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import HumaraPandit from '../images/Humara Pandit Work.png';
import ClaySip from '../images/ClaySip work.jpg';
import Polki from '../images/Polki work.jpg';
import Testimonials from '../components/Testimonials';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = "Our Work | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  // Complete portfolio data with updated tags
  const portfolioItems = [{
    id: "hitfit-health",
    title: "HitFit Health – Local Lead Generation via Meta Ads",
    category: "Meta Ads | Healthcare Marketing | Lead Generation",
    metrics: "300 leads generated in a single month at ₹33/lead",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "HitFit Health",
    description: "Modern multi-specialty healthcare platform offering surgery coordination, insurance support, and post-op recovery services.",
    website: "https://hitfithealth.in",
    tags: ["Ads Management", "Lead Generation"]
  }, {
    id: "humara-pandit",
    title: "Humara Pandit – Faith Meets Performance Marketing",
    category: "Ads Management | Meta + Google",
    metrics: "25% ROAS growth in just 3 months",
    image: HumaraPandit,
    client: "Humara Pandit",
    description: "Faith-tech startup redefining how modern devotees access spiritual rituals.",
    website: "https://humarapandit.com/",
    tags: ["Ads Management", "Lead Generation"]
  }, {
    id: "claysip",
    title: "ClaySip – Crafting an Online Identity from Clay",
    category: "Brand Building + Website + Organic Reach",
    metrics: "50,000+ impressions in 2 months (80% organic reach)",
    image: ClaySip,
    client: "ClaySip",
    description: "Building a digital identity for handcrafted terracotta drinkware from scratch.",
    website: "https://claysip.com/",
    social: "https://www.instagram.com/clay_sip/",
    tags: ["Brand Building", "Ads Management", "Website Building", "Organic Social Growth"]
  }, {
    id: "polki-sarees",
    title: "Polki Sarees – Reviving the Saree, One Reel at a Time",
    category: "Organic Social Growth | Reels Strategy",
    metrics: "8 million+ views, 100% organically",
    image: Polki,
    client: "Polki Sarees",
    description: "D2C brand founded by women for women, driving awareness through organic content.",
    website: "https://polkisarees.com/",
    social: "https://www.instagram.com/polki_sarees/",
    tags: ["Organic Social Growth"]
  }, {
    id: "advocate-rashi",
    title: "Advocate Rashi Singhal – Building a Digital Legal Brand",
    category: "LinkedIn Personal Branding",
    metrics: "Impressions: 870 → 45,678+",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "Adv. Rashi Singhal",
    description: "Positioning a legal professional as a credible, insightful voice in the ecosystem.",
    website: "https://www.linkedin.com/in/rashi-singhal-326076213",
    tags: ["Personal Branding"]
  }, {
    id: "bedtime-essentials",
    title: "Bedtime Essentials – From Manufacturer to D2C Brand",
    category: "Funnel Creation | Social Media | D2C Storefront",
    metrics: "1.6x increase in revenue in 60 days",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "Bedtime Essentials",
    description: "Transforming an offline bedsheet manufacturer into a digital D2C brand.",
    website: "https://bedtimeessentials.dm2buy.com/",
    social: "https://www.instagram.com/bed_timeessentials/",
    tags: ["Lead Generation", "Organic Social Growth", "Brand Building", "Website Building"]
  }, {
    id: "pace-institute",
    title: "PACE Institute – Hyperlocal Campaigns with National Impact",
    category: "Paid Ads | Education Sector",
    metrics: "₹5,000 ad spend → 180+ qualified leads",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    client: "PACE Institute",
    description: "Generating local awareness and leads for CUET coaching in Delhi with limited budget.",
    website: "https://iitianspace.com/",
    tags: ["Ads Management", "Lead Generation"]
  }];

  // Define categories in the specified order
  const categories = [
    "Ads Management",
    "Lead Generation", 
    "Brand Building",
    "Organic Social Growth",
    "Personal Branding",
    "Website Building"
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                Our <span className="text-growzzy-primary">Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Real brands. Real results. Browse our portfolio of successful campaigns and projects.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button 
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-md shadow-sm transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-growzzy-primary text-white transform scale-105'
                    : 'bg-white hover:bg-growzzy-light border border-gray-200'
                }`}
              >
                All Projects
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-2 rounded-md shadow-sm transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-growzzy-primary text-white transform scale-105'
                      : 'bg-white hover:bg-growzzy-light border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
              {filteredItems.map((item, index) => (
                <Link 
                  key={item.id} 
                  to={`/portfolio/${item.id}`} 
                  className="bg-white rounded-lg overflow-hidden shadow card-hover group opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-growzzy-primary font-medium mb-2">{item.category}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.metrics}</p>
                    {item.website && (
                      <div className="flex items-center text-sm mb-2">
                        <LinkIcon className="w-3 h-3 mr-1 text-growzzy-primary" />
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-growzzy-primary hover:underline" onClick={e => e.stopPropagation()}>
                          {item.website.replace('https://', '')}
                        </a>
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-medium">Client: {item.client}</span>
                      <div className="text-growzzy-primary font-medium inline-flex items-center">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Show message when no results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to be our next success story?</h2>
              <p className="text-lg mb-8">Let's discuss how we can help your business achieve similar results with a custom AI-powered digital strategy.</p>
              <a href="https://superprofile.bio/lf/67a5d624b08b3900136a29b9" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
                Start Your Project
              </a>
            </div>
          </div>
        </section>
        <Testimonials/>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>;
};

export default PortfolioPage;
