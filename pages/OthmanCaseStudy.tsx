import React from 'react';
import { Section, FadeIn, Button } from '../components/UI';
import { ArrowRight, ExternalLink } from 'lucide-react';
import screenshot from '../assets/othman_screenshot.png';

const OthmanCaseStudy: React.FC = () => {
  return (
    <div className="bg-bgPrimary min-h-screen text-textPrimary">
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <Section className="pt-40 pb-20 relative overflow-hidden bg-bgPrimary">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-textPrimary">
              Othman Tours
            </h1>
            
            <p className="text-xl text-textPrimary/80 max-w-2xl mx-auto leading-relaxed mb-10">
              A luxury transport website built for premium travel experiences in Northern Morocco.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="https://othman-liard.vercel.app/" variant="primary" className="relative flex items-center justify-center gap-2 px-8 py-3.5" target="_blank" rel="noopener noreferrer">
                View Live Website <ExternalLink size={16} />
              </Button>
              <Button to="/contact" variant="outline" className="flex items-center justify-center gap-2 px-8 py-3.5 border-textPrimary/20 hover:border-textPrimary/40">
                Start a Similar Project <ArrowRight size={16} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          ABOUT THE PROJECT
      ============================================================ */}
      <Section className="bg-bgSecondary py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-6 text-textPrimary">About the Project</h2>
            <p className="text-textPrimary/80 text-lg leading-relaxed mb-4">
              This project was built for a transport company in Northern Morocco.
            </p>
            <p className="text-textPrimary/80 text-lg leading-relaxed">
              The goal was to create a premium website that builds trust, shows services clearly, and makes booking easy.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          HOW WE BUILT IT
      ============================================================ */}
      <Section className="bg-bgPrimary py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-8 text-textPrimary">How We Built It</h2>
            <ul className="space-y-6 text-textPrimary/80 text-lg">
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                We started by defining a luxury positioning
              </li>
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                Designed a clean hero section to create a strong first impression
              </li>
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                Built clear service sections (transfers, excursions, privatizations)
              </li>
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                Added fleet showcase with vehicle details
              </li>
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                Created destination sections to highlight key cities
              </li>
              <li className="flex items-start">
                <span className="text-accentPrimary mr-3 font-bold">•</span>
                Integrated WhatsApp booking for fast conversion
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          KEY FEATURES
      ============================================================ */}
      <Section className="bg-bgSecondary py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-8 text-textPrimary">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Luxury landing page",
                "Fleet showcase",
                "Services structure",
                "Destinations section",
                "B2B agencies section",
                "Testimonials",
                "WhatsApp CTA"
              ].map((feature, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-textPrimary/5 text-textPrimary/90">
                  {feature}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FINAL RESULT
      ============================================================ */}
      <Section className="bg-bgPrimary py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-6 text-textPrimary">Final Result</h2>
            <p className="text-textPrimary/80 text-lg leading-relaxed">
              The final result is a clean, premium website that clearly presents the service and makes it easy for users to explore and book.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          WEBSITE PREVIEW
      ============================================================ */}
      <Section className="bg-bgSecondary py-24">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-textPrimary/10 shadow-xl mb-10">
              <img 
                src={screenshot} 
                alt="Othman Tours Preview" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
            <Button to="https://othman-liard.vercel.app/" variant="primary" className="inline-flex items-center gap-2 px-8 py-3.5" target="_blank" rel="noopener noreferrer">
              View Live Website <ExternalLink size={16} />
            </Button>
          </FadeIn>
        </div>
      </Section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <Section className="bg-bgPrimary border-t border-textPrimary/5 py-24 text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-8">Want a website like this?</h2>
            <Button variant="primary" to="/contact" className="px-10 py-4">Book Strategy Call</Button>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default OthmanCaseStudy;
