
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ExternalLink } from 'lucide-react';
import MetaAdds from '../images/Meta Adds.png';
import EmailMarketing from '../images/Email Marketing.jpg';
import { toast } from "@/hooks/use-toast";

const ResourcesPage = () => {
  useEffect(() => {
    document.title = "Resources | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append('Email', email);

      const response: Response = await fetch(
        'https://script.google.com/macros/s/AKfycbzyr076RzPcvGTlhxKEgy5CE0zCyF2bx55NvYpZuiq4iftC4d3pXsTHPAnJ68t0cT-egg/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );

      if (response.ok) {
        // Clear form fields
        toast({
          title: 'Email submitted successfully',
          description:
            "Thank you for your interest! We'll get back to you within 24 hours.",
        });
        setEmail('');
      } else {
        throw new Error(`Email submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: 'Error submitting Email',
        description:
          'Please try again later or contact us directly at growzzymedia@gmail.com',
        variant: 'destructive',
      });
    }
  };
  const resources = [
    {
      title: "Social Media Content Calendar",
      type: "Template",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A ready-to-use content calendar template to plan and organize your social media content across platforms."
    },
    {
      title: "LinkedIn Growth Playbook",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Our comprehensive guide to building your personal brand and growing your network on LinkedIn."
    },
    {
      title: "Meta Ads Benchmark Report",
      type: "Research",
      image: MetaAdds,
      description: "Industry benchmarks and performance metrics to help you evaluate and improve your Meta ad campaigns."
    },
    {
      title: "Website Conversion Checklist",
      type: "Checklist",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive checklist of website elements to optimize for maximum conversion rates."
    },
    {
      title: "Email Marketing Templates",
      type: "Templates",
      image: EmailMarketing,
      description: "A collection of email templates designed for different marketing goals and customer journey stages."
    },
    {
      title: "Digital Marketing ROI Calculator",
      type: "Tool",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "An Excel-based tool to calculate and project the return on investment for your digital marketing efforts."
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
                Marketing <span className="text-growzzy-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Freebies, templates & tools to make your marketing life easier. Whether you're looking for plug-and-play social templates or full-scale strategy kits, we've curated a library to help marketers move faster and smarter.
              </p>
              <a
                href="https://superprofile.bio/growzzymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center group fade-in-section"
                data-delay="0.4"
              >
                Visit Our Resource Library
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href="https://superprofile.bio/growzzymedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
                  data-delay={`${0.1 + index * 0.1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-growzzy-primary font-medium mb-2">{resource.type}</div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <div className="text-growzzy-primary font-medium inline-flex items-center">
                      Access Resource <ExternalLink className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-8 fade-in-section">
                Our resources are professionally designed and based on proven strategies we've used with our clients.
                <br />All resources are available on our SuperProfile page.
              </p>
              <a
                href="https://superprofile.bio/growzzymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center group fade-in-section"
                data-delay="0.2"
              >
                View All Resources
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-growzzy-gray">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-3xl mx-auto text-center fade-in-section">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Get Free Resources in Your Inbox</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and get exclusive access to free templates, guides, and tools to help grow your business online.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default ResourcesPage;
