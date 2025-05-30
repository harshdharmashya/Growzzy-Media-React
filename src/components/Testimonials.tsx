
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import HumaraPandit from '../images/Humara Pandit.jpg';
import Claysip from '../images/ClaySip.jpg';
import polki from '../images/Polki.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Team Humara Pandit",
      role: "Faith-Tech Startup | Ads & Content",
      content: "Partnering with Growzzy Media has been one of the best decisions for our startup. Their sharp ads, smart targeting, and culturally resonant content gave us not just leads, but trust. Our ROAS jumped, and even 5-day campaigns brought real results. They didn't just run ads — they understood our faith-driven mission and brought it alive in every campaign.",
      stars: 5,
      image: HumaraPandit
    },
    {
      name: "Founders, ClaySip",
      role: "Branding, Social Media, Website for Terracotta Brand",
      content: "We were completely offline, unsure if going digital was worth it. Growzzy Media not only convinced us to take that leap — they built our entire brand from scratch, thoughtfully and affordably. From logo to launch, they handled everything. In just 2 months, we reached over 50,000 people and started receiving direct website sales. It was like watching our mitti ka sapna come alive online.",
      stars: 5,
      image: Claysip
    },
    {
      name: "Founder, Polki Sarees",
      role: "Social Media Management for D2C Saree Brand",
      content: "We didn't think Instagram could move the needle this fast. With Growzzy's creative direction, we went from 2K to over 8 million reach in just 4 months — and that too organically! Every reel, every post, told our story perfectly. They truly helped us make sarees feel magical again, just like childhood memories.",
      stars: 5,
      image: polki
    },
    {
      name: "Adv. Rashi Singhal",
      role: "LinkedIn Personal Branding",
      content: "I always knew I needed a digital presence, but I didn't know how to make it impactful until Growzzy stepped in. In 4 months, my LinkedIn impressions jumped from 800 to 45,000+. New clients began reaching out through the platform, and my content finally reflected my credibility. Their strategy gave my practice a personal brand I'm proud of.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Owner, Bedtime Essentials",
      role: "Social Media + Lead Gen for D2C & Wholesale",
      content: "We'd been in the bedsheet business for years, but online was new for us. Growzzy Media gave us the confidence — and the results. They built our social presence from scratch, ran B2B outreach, and created a D2C buying link that actually sold. Our revenue grew by 1.6x in two months. They turned our bedsheets into a digital success story.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Client Success Stories</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Don't just take our word for it. Here's what our clients have to say about working with Growzzy Media.
          </p>
        </div>

        <div className="fade-in-section" data-delay="0.2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <div className="p-4">
                    <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.stars)}
                      </div>
                      
                      <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
