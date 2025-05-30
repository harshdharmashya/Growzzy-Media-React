
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Connect | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('Phone', phone || 'NO Phone No. provided');
      formData.append('BusinessType', businessType);
      formData.append('ServiceNeeded', serviceNeeded);
      formData.append('Message', message || 'No message provided');

      const response: Response = await fetch(
        'https://script.google.com/macros/s/AKfycbzbMZDNh1oO3ZDSojCdqPjZwdOor9LtbQte68GIREfTQbjJ6X08AMtZKLpJb49zAU9QYA/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Form submitted successfully',
          description:
            "Thank you for your interest! We'll get back to you within 24 hours.",
        });

        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setBusinessType('');
        setServiceNeeded('');
        setMessage('');
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error submitting form',
        description:
          'Please try again later or contact us directly at growzzymedia@gmail.com',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const faqs = [
    {
      question: "I'm a small business owner. Is Growzzy Media the right fit for me?",
      answer: "Absolutely! We work with businesses of all sizes — and especially love helping small brands scale with tailored, affordable digital strategies."
    },
    {
      question: "What services do you specialize in?",
      answer: "We offer: Paid Ads (Meta & Google), Social Media Management, LinkedIn Branding, Website Development, Lead Gen, Brand Strategy, Reputation Management. Basically, your entire online presence — managed and grown, start to finish."
    },
    {
      question: "How do you use AI in your services?",
      answer: "We blend AI with creativity to improve targeting, analyze data faster, and create smarter campaigns — so you get better results, faster."
    },
    {
      question: "Can I choose only one or two services instead of a full package?",
      answer: "Yes! Every business has unique needs — we offer modular service plans to match your goals and budget."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes — we proudly serve clients globally, with deep understanding of regional nuances and audience behaviors."
    },
    {
      question: "What's the process to get started?",
      answer: "Simple: Book a discovery call, we'll audit your needs & goals, you get a tailored roadmap, and then we execute and grow together!"
    }
  ];

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
                Let's <span className="text-growzzy-primary">Connect</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Let's discuss what your business needs to thrive online.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="fade-in-section">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to grow your online presence? Fill out the form and we'll get back to you within 24 hours to discuss how we can help your business thrive in the digital world.
                </p>
                <p className="text-lg mb-8">
                  <strong>Serving clients globally with a focus on AI-powered digital solutions.</strong>
                </p>

                <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-10 h-10 rounded-full bg-growzzy-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-growzzy-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <a href="mailto:growzzymedia@gmail.com" className="hover:text-growzzy-primary transition-colors">growzzymedia@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                      <span className="w-10 h-10 rounded-full bg-growzzy-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-growzzy-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <a href="tel:+919259737609" className="hover:text-growzzy-primary transition-colors">+91-9259737609</a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/Growzzymedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#1864D2] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/growzzy_media/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:bg-[#C13584] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/growzzy-media/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#0069A6] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg fade-in-section" data-delay="0.2">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-growzzy-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium mb-2">Business Type</label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      >
                        <option value="">Select business type</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Local Business">Local Business</option>
                        <option value="B2B">B2B</option>
                        <option value="B2C">B2C</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-sm font-medium mb-2">Service Needed</label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      >
                        <option value="">Select service</option>
                        <option value="Paid Ads">Paid Ads (Meta & Google)</option>
                        <option value="Social Media">Social Media Management</option>
                        <option value="LinkedIn Branding">LinkedIn Branding</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Brand Strategy">Brand Strategy</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 fade-in-section">Common Questions</h2>
              <p className="text-muted-foreground fade-in-section" data-delay="0.1">
                Find quick answers to frequently asked questions about our services.
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
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default ContactPage;
