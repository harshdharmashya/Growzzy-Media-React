
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import MetaAdds from '../images/Meta Adds.png';
const Resources = () => {
  const resources = [
    {
      title: "Social Media Content Calendar",
      type: "Template",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LinkedIn Growth Playbook",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Meta Ads Benchmark Report",
      type: "Research",
      image: MetaAdds
    }
  ];

  return (
    <section id="resources" className="section-padding">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Resources</h2>
          <p className="text-lg mb-3 fade-in-section" data-delay="0.1">
            Freebies, templates & tools to make your marketing life easier.
          </p>
          <p className="text-muted-foreground fade-in-section" data-delay="0.2">
            Whether you're looking for plug-and-play social templates or full-scale strategy kits, 
            we've curated a library to help marketers move faster and smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href="https://superprofile.bio/growzzymedia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
              data-delay={`${0.2 + index * 0.1}`}
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
                <h3 className="text-lg font-semibold group-hover:text-growzzy-primary transition-colors">{resource.title}</h3>
                <div className="mt-4 text-growzzy-primary font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  View Resource <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center fade-in-section" data-delay="0.5">
          <a 
            href="https://superprofile.bio/growzzymedia" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center group"
          >
            Explore All Resources 
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-muted-foreground text-sm">All purchases and downloads are hosted on our SuperProfile</p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
