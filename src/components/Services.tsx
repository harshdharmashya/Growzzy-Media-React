
import React, { useState } from 'react';
import { MonitorSmartphone, Megaphone, Linkedin, Globe, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import ExpandedServiceCards from './ExpandedServiceCards';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "AI-Powered Lead Generation",
      description: "Advanced campaign setup with AI marketing automation for Google and Meta platforms, delivering ROI-driven performance marketing results.",
      expandedCards: [
        { title: "AI Performance", subtitle: "ROI-focused AI campaigns" },
        { title: "AI Targeting", subtitle: "Precision audience reach" },
        { title: "AI Strategy & Planning", subtitle: "Predictive insights for smarter campaign planning" },
        { title: "Creative Optimization", subtitle: "Data-backed visuals & messaging that convert" },
        { title: "Marketing Automation", subtitle: "Auto-track performance & retarget high-value leads" },
        { title: "Budget Intelligence", subtitle: "Maximize ROI with real-time AI spend suggestions" }
      ]
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Organic Social Media Management",
      description: "Strategic content creation and community management to build engaged audiences through data-driven social media campaigns.",
      expandedCards: [
        { title: "Content Calendar Creation", subtitle: "Consistent posting with high-impact timing" },
        { title: "Community Management", subtitle: "Engaging and growing follower relationships" },
        { title: "Analytics & Growth Reports", subtitle: "Monthly reports with actionable insights" },
        { title: "Cross-Platform Optimization", subtitle: "Tailored content for Instagram, LinkedIn, etc." }
      ]
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Management",
      description: "AI-powered outreach systems and personal branding strategies for thought leadership and quality lead generation.",
      expandedCards: [
        { title: "AI Thought Leadership", subtitle: "Position yourself as an industry expert with AI" },
        { title: "Ghostwriting & Profile Optimization", subtitle: "Founder-led, high-engagement content" },
        { title: "Thought Leadership Strategy", subtitle: "Positioning for long-term influence" },
        { title: "B2B Lead Funnel Design", subtitle: "LinkedIn DMs, comments & CTAs that convert" },
        { title: "Analytics Monitoring", subtitle: "Understand what's working & tweak accordingly" }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AI-Optimized Website Development",
      description: "Clean, conversion-focused websites with AI and SEO integration strategies that turn visitors into customers.",
      expandedCards: [
        { title: "AI-Optimized Presence", subtitle: "Beautiful, AI-enhanced websites" },
        { title: "Responsive Design", subtitle: "Optimized for mobile, tablet, and desktop" },
        { title: "Speed & SEO Optimization", subtitle: "Fast load times & Google visibility" },
        { title: "Lead Capture Setup", subtitle: "Forms, CTAs & automations for inbound interest" },
        { title: "Content & Animation Support", subtitle: "Scroll, hover, and motion interactions" }
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Brand Strategy & Research",
      description: "Comprehensive brand analysis and strategic planning to position your business for maximum market impact.",
      expandedCards: [
        { title: "Audience Persona Mapping", subtitle: "Build campaigns on real buyer insights" },
        { title: "Competitive Benchmarking", subtitle: "Know where you stand & what to improve" },
        { title: "Messaging Frameworks", subtitle: "Voice, tone & hooks tailored for your niche" },
        { title: "Marketing Audit Reports", subtitle: "Identify gaps and new opportunities" }
      ]
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="section-padding bg-growzzy-gray relative">

      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">AI-Driven Digital Marketing Strategies</h2>
          <p className="text-lg text-muted-foreground fade-in-section" data-delay="0.2">
            Our specialized AI marketing tools and data-driven marketing campaigns help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="fade-in-section" data-delay={`${0.2 + index * 0.1}`}>
              <ServiceCard
                service={service}
                index={index}
                isExpanded={expandedService === index}
                onToggle={() => toggleService(index)}
              />
              {expandedService === index && (
                <ExpandedServiceCards cards={service.expandedCards} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section" data-delay="0.6">
          <Link to="/services" className="btn-primary inline-flex items-center group">
            Explore AI Marketing Services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
