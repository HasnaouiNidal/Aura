import React from 'react';
import { Section, FadeIn, MeshBackground } from '../components/UI';
import { ProjectGrid, ProjectCard } from '../components/ProjectSystem';
import othmanScreenshot from '../assets/othman_screenshot.png';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgPrimary">
      {/* Header */}
      <Section className="pt-40 pb-20 relative overflow-hidden bg-bgPrimary">
        <MeshBackground />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-textPrimary/5 border border-textPrimary/10 text-xs font-bold uppercase tracking-wider text-accentSecondary">
              Our Work
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-textPrimary">
              Case Studies
            </h1>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
              Real websites built with strategy, design, and AI-powered engineering.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section className="pb-32 bg-bgPrimary">
        <div className="container mx-auto px-6">
          <ProjectGrid>
            <FadeIn delay={100}>
              <ProjectCard project={{
                id: 'othman-tours',
                title: 'Othman Tours',
                category: 'Luxury Transport',
                description: 'A premium tourism transport website built for luxury journeys, fleet showcase, destinations, and B2B travel agencies.',
                image: othmanScreenshot,
                docsUrl: '/case-studies/othman-tours',
                docsButtonText: 'View Case Study',
                demoUrl: 'https://othman-liard.vercel.app/'
              }} />
            </FadeIn>
          </ProjectGrid>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
