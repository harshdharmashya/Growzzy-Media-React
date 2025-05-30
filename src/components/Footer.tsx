
import React from 'react';
import { ArrowUp, Mail, Phone, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const faqs = [
    {
      question: "How to use AI for lead generation in 2025?",
      answer: "AI transforms lead generation through predictive analytics, automated targeting, and intelligent campaign optimization. Our AI marketing tools analyze customer behavior patterns and optimize campaigns in real-time for maximum conversion rates."
    },
    {
      question: "What are the best AI marketing platforms for D2C brands?",
      answer: "The best AI marketing platforms include Meta's AI advertising suite, Google's Performance Max, and LinkedIn's AI targeting. We integrate these with marketing automation tools for comprehensive AI-driven digital marketing strategies."
    },
    {
      question: "How does AI marketing automation work?",
      answer: "AI marketing automation uses machine learning to improve targeting, analyze data faster, and create smarter campaigns — so you get better results with less manual work through data-driven marketing campaigns."
    },
    {
      question: "Can I choose only one AI marketing service instead of a full package?",
      answer: "Yes! Every business has unique needs — we offer modular AI-driven digital marketing strategies to match your goals and budget, from AI-powered lead generation to performance marketing."
    },
    {
      question: "Do you work with international clients using AI marketing?",
      answer: "Yes — we proudly serve clients globally with AI marketing automation, with deep understanding of regional nuances and audience behaviors for optimal performance marketing results."
    },
    {
      question: "What's the process to get started with AI marketing?",
      answer: "Simple: Book a discovery call, we'll audit your needs & goals with AI marketing tools, you get a tailored AI-driven strategy roadmap, and then we execute and grow together using performance marketing!"
    }
  ];

  return (
    <footer className="bg-growzzy-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/lovable-uploads/5b22c906-da6f-4a74-93b1-443537c5a5f4.png" alt="Growzzy Media Logo" className="h-12 mb-6" />
            <p className="text-gray-300 mb-6 max-w-md text-justify">
              A digital-first, AI-driven digital marketing agency specializing in AI marketing automation, performance marketing, and AI-powered lead generation. We help brands stand out using AI marketing tools 2025, connect with their audience through data-driven marketing campaigns, and achieve measurable growth in today's competitive digital landscape. Serving clients globally with AI and SEO integration strategies.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/Growzzymedia" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/growzzy_media/" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/growzzy-media/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a 
              href="https://superprofile.bio/lf/67a5d624b08b3900136a29b9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-growzzy-primary text-white rounded-md hover:bg-growzzy-primary/80 transition-colors"
            >
              Get AI Marketing Solutions <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">AI Marketing Services</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">AI Marketing Agency</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI-Powered Lead Generation</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">AI Marketing Automation</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">AI Marketing Tools 2025</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">AI Marketing Resources</Link></li>
              <li><Link to="/connect" className="text-gray-300 hover:text-white transition-colors">Get AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:growzzymedia@gmail.com" className="text-gray-300 hover:text-white transition-colors">growzzymedia@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919259737609" className="text-gray-300 hover:text-white transition-colors">+91-9259737609</a>
              </li>
              <p className="text-gray-300 mt-4">Serving clients globally with AI-driven digital marketing strategies and performance marketing solutions.</p>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <h4 className="text-xl font-semibold mb-4">AI Marketing Questions</h4>
          <div className="bg-growzzy-dark/50 rounded-lg mb-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-0">
                  <AccordionTrigger className="text-white hover:text-growzzy-primary py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Growzzy Media - AI Marketing Agency. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 bg-growzzy-primary hover:bg-growzzy-primary/80 text-white p-3 rounded-full transition-colors animate-bounce" aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
