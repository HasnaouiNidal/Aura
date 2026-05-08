import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FadeIn, MeshBackground, Section } from './UI';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    demoUrl?: string; // Link to live demo
    docsUrl?: string; // Link to docs/details
    docsButtonText?: string; // Custom text for the docs button
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
    return (
        <div className={`group relative bg-surface/10 border border-textPrimary/[0.03] backdrop-blur-md rounded-sm overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:bg-surface/30 hover:border-textPrimary/[0.08] ${className}`}>
            
            {/* Subtle Top Gradient Line on Hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-textPrimary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30" />

            {/* Cinematic Preview Container */}
            <div className="relative h-[280px] overflow-hidden bg-bgSecondary border-b border-textPrimary/[0.02]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.95] group-hover:contrast-[1.1] transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />

                {/* Atmospheric Depth & Soft Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.2)_100%)] pointer-events-none transition-opacity duration-1000 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/90 via-transparent to-black/20 opacity-80" />

                {/* Editorial Category Tag */}
                <div className="absolute top-6 left-6 z-20 flex justify-between w-[calc(100%-3rem)] items-start">
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-[1px] bg-white/40" />
                        <span className="text-[9px] uppercase tracking-[0.25em] font-light text-white/90 drop-shadow-md">
                            {project.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Editorial Content Section */}
            <div className="p-8 relative z-20 flex flex-col h-[calc(100%-280px)]">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-[1.75rem] font-serif font-light tracking-tight mb-4 text-textPrimary group-hover:text-textPrimary/80 transition-colors duration-1000 leading-snug">
                        {project.title}
                    </h3>
                    <p className="text-[13px] text-textSecondary/60 line-clamp-2 leading-[1.9] font-light mb-10">
                        {project.description}
                    </p>
                </div>

                {/* Elegant Minimal Interaction */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-textPrimary/[0.03]">
                    <Link 
                        to={project.docsUrl || `/catalog/${project.id}`} 
                        className="text-[10px] uppercase tracking-[0.2em] font-light text-textPrimary/80 hover:text-textPrimary transition-colors duration-500 flex items-center gap-2"
                    >
                        {project.docsButtonText || 'Explore Case'}
                        <ArrowRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" strokeWidth={1} />
                    </Link>
                    
                    {project.demoUrl && (
                        <Link 
                            to={project.demoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-[10px] uppercase tracking-[0.2em] font-light text-textSecondary/40 hover:text-textPrimary/80 transition-colors duration-500 flex items-center gap-1.5"
                        >
                            Live <ExternalLink size={10} strokeWidth={1} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export const ProjectGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-24 md:[&>*:nth-child(even)]:mt-16 md:[&>*:nth-child(odd)]:mt-0 lg:[&>*:nth-child(3n+1)]:mt-0 lg:[&>*:nth-child(3n+2)]:mt-16 lg:[&>*:nth-child(3n+3)]:mt-32 ${className}`}>
            {children}
        </div>
    );
};

interface CategoryHeaderProps {
    title: string;
    subtitle: string;
    tag?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, subtitle, tag }) => {
    return (
        <Section className="pt-40 pb-20 relative overflow-hidden bg-bgPrimary">
            <MeshBackground />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    {tag && (
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-textPrimary/5 border border-textPrimary/10 text-xs font-bold uppercase tracking-wider text-accentSecondary">
                            {tag}
                        </div>
                    )}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                </FadeIn>
            </div>
        </Section>
    );
};

interface EmptyStateProps {
    category: string;
    message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    category,
    message = "We're currently architecting new systems for this category. Check back soon or contact us to start a custom project."
}) => {
    return (
        <Section className="py-32 bg-bgPrimary">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <FadeIn>
                    <div className="bg-surface/50 border border-textPrimary/5 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accentPrimary to-transparent opacity-50" />

                        <h2 className="text-3xl font-serif font-bold mb-4">No {category} Projects Yet</h2>
                        <p className="text-textSecondary mb-8 leading-relaxed">
                            {message}
                        </p>

                        <div className="flex justify-center gap-4">
                            <Button to="/catalog" variant="secondary" icon>
                                Back to Catalog
                            </Button>
                            <Button to="/contact" variant="primary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
