import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import SEO from '../images/SEO.png';
import { toast } from "@/hooks/use-toast";


const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All Posts');
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
  const blogPosts = [
    {
      id: "ai-marketing-strategies-2025",
      title: "How to Integrate AI in Your Marketing Strategies in 2025",
      excerpt: "AI is not the future of marketing – it's the present, and it's here to stay! As we move deeper into 2025, artificial intelligence is completely reshaping how brands connect, convert, and captivate their audiences.",
      date: "May 15, 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sara Purohit",
      category: "AI Marketing",
      content: `
        <p class="mb-4">AI is not the future of marketing – it's the present, and it's here to stay! As we move deeper into 2025, artificial intelligence is completely reshaping how brands connect, convert, and captivate their audiences. From campaign planning and creative development to writing scripts and producing visuals, AI is playing a central role.</p>
        
        <p class="mb-4">Whether you're a growing startup or a well-established enterprise, integrating AI into your marketing strategy is no longer optional—it's essential. Striking the right balance between manual effort and automation can make your company both efficient and effective.</p>
        
        <p class="mb-4">Here's how you can smartly and successfully integrate AI into your marketing playbook this year:</p>
        
        <h3 class="text-xl font-semibold my-4">1. Hyper-Personalization at Scale (Customers love this ;)</h3>
        <p class="mb-4">Gone are the days of one-size-fits-all campaigns. Today's consumers expect personalization. And with attention spans dropping to just 3 seconds, your hook needs to be highly targeted and instantly engaging.</p>
        <p class="mb-4">AI tools—like machine learning algorithms and predictive analytics—help marketers tailor messaging based on user behavior, preferences, and buying patterns. Imagine email campaigns where subject lines, product suggestions, and even send times are customized for each recipient.</p>
        <p class="mb-4">This applies to everything from WhatsApp and email marketing to in-app communication—the key is feeding the AI the right data.</p>
        <p class="mb-4 text-growzzy-primary font-medium">Growzzy Tip: Use AI-powered CRMs to dynamically segment your audience and create experiences that feel deeply personal and relevant.</p>
        
        <h3 class="text-xl font-semibold my-4">2. AI-Powered Content Creation (It's never been easier!)</h3>
        <p class="mb-4">In 2025, content creation has hit a new level of ease and speed thanks to AI. From SEO-optimized blog posts and social media captions to video scripts and ad copy, AI can do it all.</p>
        <p class="mb-4">Gone are the days when you needed a full production team to shoot a single ad. With the right AI tools, you can generate high-quality content faster, cheaper, and often with better performance. Tools like ChatGPT, Leonardo.ai, and Captions.ai help marketers brainstorm, draft, and polish content in minutes.</p>
        <p class="mb-4 text-growzzy-primary font-medium">Growzzy Insight: Let AI handle the first draft, but always add your unique brand voice and human touch to keep the content authentic and emotionally resonant.</p>
        
        <h3 class="text-xl font-semibold my-4">3. Smart Customer Support with AI Voice Agents</h3>
        <p class="mb-4">Still picturing basic chatbots? Think again. In 2025, AI voice agents will go far beyond text-based bots—they can carry on realistic, human-like conversations that make customers feel truly heard.</p>
        <p class="mb-4">This 24/7 support option not only improves the customer experience but also saves your business significant time and money. Tools like Tably, Vapi, and Zendesk AI can manage FAQs, resolve issues, and even handle upselling—all while sounding like a real person.</p>
        <p class="mb-4 text-growzzy-primary font-medium">Action Step: Integrate AI-powered chat and voice bots across your website and social media platforms to enhance engagement and reduce response time.</p>
        
        <h3 class="text-xl font-semibold my-4">4. Data-Driven Decision Making (Let AI do the heavy lifting)</h3>
        <p class="mb-4">Sure, humans have been analyzing data for years—but not at the speed and accuracy AI can offer. In 2025, AI thrives on data, and that's a game-changer for marketers.</p>
        <p class="mb-4">From Google Analytics 4's AI-powered insights to platforms like Harmonize and Power BI, marketers can now forecast trends, measure ROI, and optimize strategies in real-time—without drowning in spreadsheets.</p>
        <p class="mb-4 text-growzzy-primary font-medium">Growzzy Tip: Use AI tools to detect performance anomalies early, so you can quickly pivot and make informed decisions that keep campaigns on track & to check for your competitors strategies- Use Spyfu.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">AI isn't here to replace marketers, it's here to empower them. By blending human creativity with machine intelligence, your brand can stay agile, authentic, and ahead of the curve.</p>
        <p class="mt-4 text-growzzy-primary font-medium">So, start experimenting, stay curious, and let AI be your smartest marketing partner in 2025.</p>
      `
    },
    {
      id: "scaling-coaching-businesses-2025",
      title: "Scaling Coaching Businesses Online in 2025: What Works and What's Just BS?",
      excerpt: "If you're a coach, consultant, or trainer in India trying to scale your business online, you've likely been fed a cocktail of overhyped strategies. Let's break down what actually works.",
      date: "May 20, 2025",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Business Growth",
      content: `
        <p class="mb-4">If you're a coach, consultant, or trainer in India trying to scale your business online, you've likely been fed a cocktail of overhyped strategies. From daily Reels to "DM everyone you know" tactics—some work, most don't.</p>
        
        <p class="mb-4">At Growzzy Media, we've worked with coaches across Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad and beyond. We've seen what actually drives growth—and what's just BS.</p>
        
        <p class="mb-4">Let's break it down.</p>
        
        <h2 class="text-2xl font-semibold my-6">What Actually Works in Scaling Coaching Businesses</h2>
        
        <h3 class="text-xl font-semibold my-4">1. Niche Positioning That Speaks Clearly</h3>
        <p class="mb-4">Most coaches try to help "everyone." That's noise. Instead:</p>
        <ul class="mb-4 ml-6 list-disc">
          <li>Define your ideal client: Age, pain point, income level</li>
          <li>Position around outcomes, not services</li>
          <li>E.g., "I help working moms lose 10kg in 90 days" > "I'm a fitness coach"</li>
        </ul>
        <p class="mb-4 text-growzzy-primary font-medium">SEO Tip: Use niche-specific landing pages with keywords like "business coach in Mumbai" or "career coaching for IT professionals in Bangalore."</p>
        
        <h3 class="text-xl font-semibold my-4">2. Client Results as Core Content</h3>
        <p class="mb-4">Reels are great, but proof sells:</p>
        <ul class="mb-4 ml-6 list-disc">
          <li>Showcase transformation stories</li>
          <li>Use UGC (user-generated content) testimonials</li>
          <li>Create before-after journeys with clear outcomes</li>
        </ul>
        <p class="mb-4 text-growzzy-primary font-medium">AEO Tip: Answer questions like "How do I find a good life coach in Hyderabad?" or "What does a business coach do?" in your blogs and videos.</p>
        
        <h3 class="text-xl font-semibold my-4">3. High-Converting Funnels</h3>
        <p class="mb-4">Free masterclass + Email nurture > Random Instagram Lives</p>
        <ul class="mb-4 ml-6 list-disc">
          <li>Offer a free, valuable lead magnet (e.g., "5-Step Blueprint to Scale to 1L/month")</li>
          <li>Build an email list</li>
          <li>Use automation for follow-ups</li>
        </ul>
        <p class="mb-4 text-growzzy-primary font-medium">Tools that help: Systeme.io, ConvertKit, and Calendly for booking calls</p>
        
        <h3 class="text-xl font-semibold my-4">4. Strategic Paid Ads (Not Boosted Posts)</h3>
        <p class="mb-4">Meta ads, YouTube, and Google Local ads work—but only when:</p>
        <ul class="mb-4 ml-6 list-disc">
          <li>You use solid creatives (UGC-style)</li>
          <li>Funnel traffic to a landing page (not your IG profile!)</li>
          <li>Retarget with testimonials & webinar invites</li>
        </ul>
        <p class="mb-4 text-growzzy-primary font-medium">Geo-Targeting Tip: Use keywords like "top career coach in Bangalore" and run ads around IT parks or co-working spaces.</p>
        
        <h3 class="text-xl font-semibold my-4">5. Authority Building via YouTube & Podcasts</h3>
        <p class="mb-4">Consistency wins. Your target client needs:</p>
        <ul class="mb-4 ml-6 list-disc">
          <li>Weekly videos answering their top 10 questions</li>
          <li>Guest features on niche podcasts</li>
          <li>Personal brand > Corporate feel</li>
        </ul>
        <p class="mb-4 text-growzzy-primary font-medium">Bonus: Videos and podcasts are AI voice-search friendly and help with long-tail SEO.</p>
        
        <h2 class="text-2xl font-semibold my-6">What's Total BS (And Wastes Time)</h2>
        
        <h4 class="text-lg font-semibold my-3">Posting daily Reels expecting clients</h4>
        <p class="mb-4">Unless you're a content creator and a coach, that's vanity. A reel without a funnel is like shouting into the void.</p>
        
        <h4 class="text-lg font-semibold my-3">Copy-pasting ChatGPT quotes on LinkedIn</h4>
        <p class="mb-4">Generic posts don't build brand equity. Your audience wants your voice, not recycled content.</p>
        
        <h4 class="text-lg font-semibold my-3">Buying fake followers or testimonials</h4>
        <p class="mb-4">One word: Trust. Gone. Once lost, it's game over in this space.</p>
        
        <h4 class="text-lg font-semibold my-3">DIY'ing Everything</h4>
        <p class="mb-4">Being your own designer, video editor, strategist, and closer? That's not scaling—that's struggling.</p>
        
        <h2 class="text-2xl font-semibold my-6">Local SEO Hacks for Coaches in India</h2>
        <ul class="mb-4 ml-6 list-disc">
          <li>Use city-specific keywords in your site's H1 and meta titles > "Best Business Coach in Delhi NCR"</li>
          <li>Claim and optimize your Google My Business profile</li>
        </ul>
      `
    },
    {
      id: "building-online-presence",
      title: "Building Your Business's Online Presence",
      excerpt: "In a world where digital is default, your online presence is more than just a fancy website or Instagram page. It's your business's personality, credibility, and discoverability — all rolled into one.",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "Digital Strategy",
      content: `
        <p class="mb-4">In a world where digital is default, your online presence is more than just a fancy website or Instagram page. It's your business's personality, credibility, and discoverability — all rolled into one. But building it? That's a whole journey.</p>
        
        <p class="mb-4">Here's how to start:</p>
        
        <h3 class="text-xl font-semibold my-4">Clarity First</h3>
        <p class="mb-4">Know what you stand for and who you serve. Your brand voice, messaging, and visuals should all reflect this.</p>
        
        <h3 class="text-xl font-semibold my-4">Website > Everything Else</h3>
        <p class="mb-4">Think of your website as your digital home. Make it SEO-optimized, mobile-friendly, and conversion-focused.</p>
        
        <h3 class="text-xl font-semibold my-4">Social Media Strategy</h3>
        <p class="mb-4">Choose platforms based on where your audience hangs out. Be consistent, not just present.</p>
        
        <h3 class="text-xl font-semibold my-4">Content is Currency</h3>
        <p class="mb-4">Blog posts, reels, newsletters — the more value you offer, the more trust you build.</p>
        
        <h3 class="text-xl font-semibold my-4">Google My Business + Listings</h3>
        <p class="mb-4">Don't sleep on local SEO. GMB is your best friend for foot traffic and credibility.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Your online presence doesn't need to be perfect on day one. It needs to be intentional, authentic, and constantly evolving.</p>
      `
    },
    {
      id: "our-glow-up-story",
      title: "Our Glow-Up Story: How Growzzy Media Became That Digital Marketing Agency",
      excerpt: "We didn't start with a full team, fancy tools, or massive retainers. We started with a Canva free account, one client who took a chance, and a Wi-Fi connection that worked 60% of the time.",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Company Story",
      content: `
        <p class="mb-4">We didn't start with a full team, fancy tools, or massive retainers. We started with a Canva free account, one client who took a chance, and a Wi-Fi connection that worked 60% of the time.</p>
        
        <p class="mb-4">Then came the glow-up.</p>
        
        <h3 class="text-xl font-semibold my-4">The Learning Curve</h3>
        <p class="mb-4">We learned (the hard way) how to run ads that actually convert.</p>
        <p class="mb-4">We figured out SEO isn't just keywords — it's strategy.</p>
        <p class="mb-4">We stopped saying yes to everyone and niched down.</p>
        <p class="mb-4">We made mistakes, lost sleep, and sometimes even lost confidence.</p>
        
        <p class="mb-4">But we stayed real. Every brand we helped grow became proof we were doing something right.</p>
        
        <h3 class="text-xl font-semibold my-4">Today?</h3>
        <p class="mb-4">We're a team that breathes digital. From ghostwriting for LinkedIn influencers to managing multi-channel ad funnels — we've evolved into a full-stack agency with heart.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Moral of the story: You don't have to start perfect. You just have to start. And stay obsessed with learning.</p>
      `
    },
    {
      id: "beginners-guide-to-seo",
      title: "Beginner's Guide to SEO",
      excerpt: "Search Engine Optimization is how you show up when someone Googles 'best [your service] near me.' It's how you get found organically, without paying for ads.",
      date: "April 15, 2025",
      image: SEO,
      author: "Varuni Bansal",
      category: "SEO",
      content: `
        <h3 class="text-xl font-semibold my-4">What even is SEO?</h3>
        <p class="mb-4">Search Engine Optimization is how you show up when someone Googles "best [your service] near me." It's how you get found organically, without paying for ads.</p>
        
        <p class="mb-4">The basics:</p>
        
        <h4 class="text-lg font-semibold my-3">On-page SEO</h4>
        <p class="mb-4">Headlines, keywords, and meta descriptions. These help Google "read" your content.</p>
        
        <h4 class="text-lg font-semibold my-3">Technical SEO</h4>
        <p class="mb-4">Site speed, mobile-friendliness, clean URLs. If your site loads like it's stuck in 2005, that's a problem.</p>
        
        <h4 class="text-lg font-semibold my-3">Off-page SEO</h4>
        <p class="mb-4">Backlinks from reputable sites. Think of them as "votes of confidence" for your content.</p>
        
        <h4 class="text-lg font-semibold my-3">Content is (still) king</h4>
        <p class="mb-4">Write blogs that answer real questions. Optimize them with relevant keywords.</p>
        
        <h3 class="text-xl font-semibold my-4">Tools to explore:</h3>
        <p class="mb-4">Google Search Console, Ubersuggest, Ahrefs (if you're fancy), and Yoast (for WordPress).</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Quick tip: Don't keyword-stuff. You're writing for humans first, algorithms second.</p>
      `
    },
    {
      id: "marketing-trends-2025",
      title: "The Top Marketing Trends You Can't Afford to Ignore in 2025",
      excerpt: "From AI tools to community-led growth and the evolution of search behavior, here's what's shaping digital marketing in 2025.",
      date: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Marketing Trends",
      content: `
        <h3 class="text-xl font-semibold my-4">1. AI Everywhere</h3>
        <p class="mb-4">From copywriting to customer service — AI tools are not a threat, but a tool. Use them to scale smarter.</p>
        
        <h3 class="text-xl font-semibold my-4">2. Search is Changing</h3>
        <p class="mb-4">People now search on Instagram, TikTok, and even Reddit. Think beyond Google — optimize content where your audience searches.</p>
        
        <h3 class="text-xl font-semibold my-4">3. Personal Branding > Business Pages</h3>
        <p class="mb-4">Founders are becoming influencers. People want to hear from humans, not logos.</p>
        
        <h3 class="text-xl font-semibold my-4">4. Community-Led Growth</h3>
        <p class="mb-4">Private groups, Discord servers, and exclusive newsletters are where loyalty is built.</p>
        
        <h3 class="text-xl font-semibold my-4">5. Micro Content is Winning</h3>
        <p class="mb-4">60-second videos, carousels, stories — if your content can't hold attention in 3 seconds, it's gone.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Final word: 2025 isn't about doing everything. It's about doing the right things, consistently, and building genuine relationships with your audience.</p>
      `
    }
  ];

  const categories = ['All Posts', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = filter === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

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
                Behind the <span className="text-growzzy-primary">Campaigns</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Read stories from the field, marketing experiments, LinkedIn tips, and BTS from our agency journey.
                We keep it real. No fluff. All growth.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md shadow-sm transition-colors ${filter === category ? 'bg-growzzy-primary text-white' : 'bg-white hover:bg-growzzy-light border border-gray-200'}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
                  data-delay={`${0.1 + index * 0.1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <span className="text-xs bg-growzzy-light text-growzzy-primary px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <User className="w-4 h-4 mr-1 text-growzzy-primary" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 bg-growzzy-gray">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-3xl mx-auto fade-in-section">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Get marketing insights delivered</h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for exclusive marketing tips, case studies, and industry insights.
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default BlogPage;
