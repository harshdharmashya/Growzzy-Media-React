
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { MonitorSmartphone, Megaphone, Linkedin, Globe, Settings, Users, MessageSquare, Search, PenTool, BarChart3, Target, Lightbulb, Palette, Zap, DollarSign, Calendar, TrendingUp, Eye, Share2, User, Building2, ArrowUpRight, Monitor, Smartphone, Clock, FileText, MousePointer, Star, Map, Trophy, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "AI-Driven Digital Marketing Services | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "AI-Powered Lead Generation",
      description: "We create high-converting campaigns using AI marketing automation on Google and Meta platforms that deliver measurable performance marketing results.",
      details: [
        "AI Performance – ROI-focused AI campaigns",
        "AI Targeting – Precision audience reach", 
        "AI Strategy & Planning – Predictive insights for smarter campaign planning",
        "Creative Optimization – Data-backed visuals & messaging that convert",
        "Marketing Automation – Auto-track performance & retarget high-value leads",
        "Budget Intelligence – Maximize ROI with real-time AI spend suggestions"
      ]
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "Organic Social Media Management",
      description: "Strategic content creation and community management to build engaged audiences through data-driven social media campaigns.",
      details: [
        "Content Calendar Creation – Consistent posting with high-impact timing",
        "Community Management – Engaging and growing follower relationships", 
        "Analytics & Growth Reports – Monthly reports with actionable insights",
        "Cross-Platform Optimization – Tailored content for Instagram, LinkedIn, etc."
      ]
    },
    {
      icon: <Linkedin className="w-10 h-10" />,
      title: "LinkedIn Management", 
      description: "Build your personal brand with AI-powered outreach systems and LinkedIn marketing automation for maximum lead generation.",
      details: [
        "Ghostwriting & Profile Optimization – Founder-led, high-engagement content",
        "Thought Leadership Strategy – Positioning for long-term influence", 
        "B2B Lead Funnel Design – LinkedIn DMs, comments & CTAs that convert",
        "Analytics Monitoring – Understand what's working & tweak accordingly"
      ]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "AI-Optimized Website Development",
      description: "Clean, conversion-focused websites with AI and SEO integration strategies that convert visitors into leads.",
      details: [
        "Responsive Design – Optimized for mobile, tablet, and desktop",
        "Speed & SEO Optimization – Fast load times & Google visibility", 
        "Lead Capture Setup – Forms, CTAs & automations for inbound interest",
        "Content & Animation Support – Scroll, hover, and motion interactions"
      ]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Brand Strategy & Research",
      description: "Comprehensive brand analysis and strategic planning to position your business for maximum market impact.",
      details: [
        "Audience Persona Mapping – Build campaigns on real buyer insights",
        "Competitive Benchmarking – Know where you stand & what to improve", 
        "Messaging Frameworks – Voice, tone & hooks tailored for your niche",
        "Marketing Audit Reports – Identify gaps and new opportunities"
      ]
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Reputation & Online Presence Management",
      description: "Manage and enhance your online reputation across all digital touchpoints to build trust and credibility.",
      details: [
        "Google Review Monitoring – Manage reviews & boost credibility",
        "Local SEO Strategy – Appear where customers are searching", 
        "Profile Optimization – GMB, social bios & listings aligned to brand",
        "Issue Resolution Workflows – Handle negative mentions with care"
      ]
    }
  ];

  const getServiceIcons = (index: number) => {
    const iconSets = [
      // AI-Powered Lead Generation
      [
        { icon: <BarChart3 className="w-8 h-8 text-growzzy-primary mb-2" />, title: "AI Performance", desc: "ROI-focused AI campaigns" },
        { icon: <Target className="w-8 h-8 text-growzzy-primary mb-2" />, title: "AI Targeting", desc: "Precision audience reach" },
        { icon: <Lightbulb className="w-8 h-8 text-growzzy-primary mb-2" />, title: "AI Strategy", desc: "Predictive insights" },
        { icon: <Palette className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Creative Optimization", desc: "Data-backed visuals" },
        { icon: <Zap className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Marketing Automation", desc: "Auto-track performance" },
        { icon: <DollarSign className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Budget Intelligence", desc: "Maximize ROI" }
      ],
      // Organic Social Media Management
      [
        { icon: <Calendar className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Content Calendar", desc: "Consistent posting" },
        { icon: <Users className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Community Management", desc: "Growing relationships" },
        { icon: <TrendingUp className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Analytics Reports", desc: "Actionable insights" },
        { icon: <Share2 className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Cross-Platform", desc: "Tailored content" }
      ],
      // LinkedIn Management
      [
        { icon: <PenTool className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Ghostwriting", desc: "High-engagement content" },
        { icon: <User className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Thought Leadership", desc: "Long-term influence" },
        { icon: <Building2 className="w-8 h-8 text-growzzy-primary mb-2" />, title: "B2B Lead Funnel", desc: "CTAs that convert" },
        { icon: <Eye className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Analytics Monitoring", desc: "Track what works" }
      ],
      // Website Development
      [
        { icon: <Monitor className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Responsive Design", desc: "All device optimization" },
        { icon: <Clock className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Speed & SEO", desc: "Fast load times" },
        { icon: <MousePointer className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Lead Capture", desc: "Conversion optimization" },
        { icon: <FileText className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Content Support", desc: "Motion interactions" }
      ],
      // Brand Strategy & Research
      [
        { icon: <Map className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Persona Mapping", desc: "Real buyer insights" },
        { icon: <Trophy className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Competitive Analysis", desc: "Know your position" },
        { icon: <MessageSquare className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Messaging Framework", desc: "Tailored voice & tone" },
        { icon: <Search className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Marketing Audit", desc: "Identify opportunities" }
      ],
      // Reputation Management
      [
        { icon: <Star className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Review Monitoring", desc: "Boost credibility" },
        { icon: <Map className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Local SEO", desc: "Customer search visibility" },
        { icon: <User className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Profile Optimization", desc: "Brand alignment" },
        { icon: <Mic className="w-8 h-8 text-growzzy-primary mb-2" />, title: "Issue Resolution", desc: "Handle mentions with care" }
      ]
    ];
    
    return iconSets[index] || [];
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                AI-Driven Digital Marketing <span className="text-growzzy-primary">Services</span>
              </h1>
              <p data-delay="0.2" className="text-xl text-muted-foreground mb-8 fade-in-section text-justify md:text-lg font-normal">
                We offer comprehensive AI marketing automation and data-driven marketing campaigns designed to help your brand grow using the best AI marketing platforms for D2C brands.
                <br /><br />
                We're not just a digital marketing agency — we're your AI-powered growth partner. At Growzzy Media, every campaign is fueled by AI marketing tools 2025, performance data, and audience intent — not guesswork. From AI-powered lead generation to automated SEO and trend-predictive content, our stack learns what converts faster than any team alone.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 md:py-24">
          <div className="container">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 fade-in-section`} data-delay={`${0.1 * index}`}>
                <div className="md:w-1/2">
                  <div className={`bg-white p-8 md:p-10 rounded-lg shadow-lg h-full flex flex-col ${index % 2 !== 0 ? 'items-start' : 'items-end'}`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-growzzy-light text-growzzy-primary mb-6 ${index % 2 !== 0 ? '' : 'mr-auto'}`}>
                      {service.icon}
                    </div>
                    <h2 className={`text-3xl font-display font-semibold mb-4 ${index % 2 !== 0 ? 'text-left' : 'text-right mr-auto'}`}>{service.title}</h2>
                    <p className={`text-lg mb-6 ${index % 2 !== 0 ? 'text-left' : 'text-right mr-auto'}`}>{service.description}</p>
                    <ul className={`space-y-2 text-muted-foreground mb-6 ${index % 2 !== 0 ? '' : 'mr-auto'}`}>
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-growzzy-primary rounded-full mt-2 mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className={`bg-growzzy-gray rounded-lg p-8 md:p-12 w-full h-full ${index % 2 === 0 ? 'slide-in-section' : 'slide-in-section'}`} data-animation={index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'} data-delay={`${0.3 + index * 0.1}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {getServiceIcons(index).map((iconItem, iconIndex) => (
                        <div key={iconIndex} className={`bg-white rounded-lg p-4 shadow-sm ${getServiceIcons(index).length <= 2 ? 'col-span-2' : ''}`}>
                          {iconItem.icon}
                          <h4 className="font-semibold">{iconItem.title}</h4>
                          <p className="text-sm text-muted-foreground">{iconItem.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow with AI marketing automation?</h2>
              <p className="text-lg mb-8">
                Let's discuss how our AI-driven digital marketing strategies can help you achieve your business goals and stand out with performance marketing.
              </p>
              <Link to="/connect" className="btn-primary inline-flex items-center">
                Get AI Marketing Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default ServicesPage;
