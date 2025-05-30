
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How to use AI for lead generation in 2025?",
      answer: "AI transforms lead generation through predictive analytics, automated targeting, and intelligent campaign optimization. Our AI marketing tools analyze customer behavior patterns, optimize ad spend in real-time, and identify high-quality prospects using machine learning algorithms for maximum conversion rates."
    },
    {
      question: "What are the best AI marketing platforms for D2C brands?",
      answer: "The best AI marketing platforms for D2C brands include Meta's AI-powered advertising suite, Google's Performance Max campaigns, and LinkedIn's AI targeting. We integrate these with marketing automation tools to create comprehensive AI-driven digital marketing strategies that scale with your business."
    },
    {
      question: "How does AI-driven campaign optimization work for small businesses?",
      answer: "AI-driven campaign optimization uses machine learning to automatically adjust targeting, bidding, and creative elements based on performance data. For small businesses, this means better ROI with less manual work - our AI marketing automation handles the complex optimizations while you focus on growing your business."
    },
    {
      question: "What services do you specialize in?",
      answer: "We offer: AI-Powered Lead Generation (Meta & Google), AI-Driven Social Media Management, AI LinkedIn Marketing, AI-Optimized Website Development, AI Marketing Automation, Performance Marketing, and AI and SEO Integration Strategies. Basically, your entire online presence — managed and grown with AI."
    },
    {
      question: "How do you use AI in your marketing services?",
      answer: "We blend AI marketing tools 2025 with creativity to improve targeting accuracy, analyze data faster, create smarter campaigns, and automate repetitive tasks. Our AI-powered outreach systems and data-driven marketing campaigns deliver better results faster than traditional methods."
    },
    {
      question: "Do you work with international clients using AI marketing strategies?",
      answer: "Yes — we proudly serve clients globally with AI-driven digital marketing strategies, with deep understanding of regional nuances and audience behaviors. Our AI marketing automation adapts to different markets and time zones for optimal performance."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-growzzy-light">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">AI Marketing FAQs</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Got questions about AI marketing automation and digital growth? Here's everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 fade-in-section" data-delay="0.2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-growzzy-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
