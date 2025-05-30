
import React from 'react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import HumaraPandit from '../images/Humara Pandit Work.png';
import ClaySip from '../images/ClaySip work.jpg';
import Polki from '../images/Polki work.jpg';


const Portfolio = () => {
  const portfolioItems = [
    {
      id: "hitfit-health",
      title: "HitFit Health – Local Lead Generation via Meta Ads",
      category: "Meta Ads | Healthcare Marketing | Lead Generation",
      metrics: "300 leads generated in a single month at ₹33/lead",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      website: "https://hitfithealth.in"
    },
    {
      id: "humara-pandit",
      title: "Humara Pandit – Faith Meets Performance Marketing",
      category: "Ads Management | Meta + Google",
      metrics: "25% ROAS growth in just 3 months",
      image: HumaraPandit,
      website: "https://humarapandit.com/"
    },
    {
      id: "claysip",
      title: "ClaySip – Crafting an Online Identity from Clay",
      category: "Brand Building + Website + Organic Reach",
      metrics: "50,000+ impressions in 2 months (80% organic reach)",
      image: ClaySip,
      website: "https://claysip.com/",
      social: "https://www.instagram.com/clay_sip/"
    },
    {
      id: "polki-sarees",
      title: "Polki Sarees – Reviving the Saree, One Reel at a Time",
      category: "Organic Social Growth | Reels Strategy",
      metrics: "8 million+ views, 100% organically",
      image: Polki,
      website: "https://polkisarees.com/",
      social: "https://www.instagram.com/polki_sarees/"
    },
    {
      id: "advocate-rashi",
      title: "Advocate Rashi – Building a Digital Legal Brand",
      category: "LinkedIn Personal Branding",
      metrics: "Impressions: 870 → 45,678+",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      website: "https://www.linkedin.com/in/rashi-singhal-326076213"
    },
    {
      id: "bedtime-essentials",
      title: "Bedtime Essentials – From Manufacturer to D2C Brand",
      category: "Funnel Creation | Social Media | D2C Storefront",
      metrics: "1.6x increase in revenue in 60 days",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      website: "https://bedtimeessentials.dm2buy.com/",
      social: "https://www.instagram.com/bed_timeessentials/"
    },
    {
      id: "pace-institute",
      title: "PACE Institute – Hyperlocal Campaigns with National Impact",
      category: "Paid Ads | Education Sector",
      metrics: "₹5,000 ad spend → 180+ qualified leads",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      website: "https://iitianspace.com/"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Our Work</h2>
          <p className="text-xl font-medium mb-2 slide-in-section" data-delay="0.1">Real brands. Real results.</p>
          <p className="text-muted-foreground scale-in-section" data-delay="0.2">
            Scroll through our favourite success stories — campaigns that tripled reach, brands that blew up, and websites that made waves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link 
              key={index} 
              to={`/portfolio/${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group transform transition-all duration-500 hover:scale-105"
              data-delay={`${0.2 + index * 0.15}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-growzzy-primary font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.metrics}</p>
                {item.website && (
                  <div className="flex items-center text-sm mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    <LinkIcon className="w-3 h-3 mr-1 text-growzzy-primary" />
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-growzzy-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.website.replace('https://', '')}
                    </a>
                  </div>
                )}
                <div className="mt-2 text-growzzy-primary font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section" data-delay="0.8">
          <Link to="/portfolio" className="btn-primary inline-flex items-center group transform transition-all duration-300 hover:scale-105">
            See Full Portfolio
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
