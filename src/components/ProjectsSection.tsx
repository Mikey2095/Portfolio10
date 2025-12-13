import React from 'react';
import { ArrowUpRight, Database, Layers, Layout, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Design System",
      client: "FinTech Global",
      description: "A comprehensive design system scaling across 4 platforms and 12 product teams.",
      stats: ["50+ Components", "95% Adoption", "4 Platforms"],
      architecture: "Atomic design methodology with strict tokenization for multi-theme support.",
      caseStudy: "Solved fragmentation issues by unifying 3 legacy libraries into one source of truth."
    },
    {
      id: 2,
      title: "E-Commerce Component Library",
      client: "Retail Giant",
      description: "High-performance component library focused on conversion and accessibility.",
      stats: ["0.2s Load Time", "AAA Accessibility", "+25% Conversion"],
      architecture: "Headless UI architecture allowing maximum flexibility for distinct brand themes.",
      caseStudy: "Reduced development time by 60% for new campaign landing pages."
    },
    {
      id: 3,
      title: "SaaS Dashboard Framework",
      client: "DataCorp",
      description: "Data visualization and complex interaction patterns for analytics products.",
      stats: ["Real-time Data", "Complex Grids", "Dark Mode"],
      architecture: "React-based framework with encapsulated state management for complex widgets.",
      caseStudy: "Standardized data visualization patterns improving user comprehension metrics."
    }
  ];

  return (
    <div className="w-full bg-white px-6 md:px-[64px] py-24 md:py-32" id="work">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-black pb-8">
          <div>
             <h2 className="text-[48px] md:text-[80px] leading-[0.9] font-['Instrument_Sans',sans-serif] tracking-[-0.03em] uppercase mb-4">
              Selected<br />Work
            </h2>
          </div>
          <p className="max-w-md text-lg md:text-xl font-medium text-gray-600 mt-6 md:mt-0 font-['Instrument_Sans',sans-serif]">
            Architectural solutions bridging the gap between design vision and technical implementation.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative border-t border-gray-200 pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Project Header */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-mono border border-black px-3 py-1 rounded-full">0{index + 1}</span>
                      <span className="text-sm font-medium uppercase tracking-wider text-gray-500">{project.client}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-['Instrument_Sans',sans-serif] font-semibold leading-tight mb-6 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-10">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-100 px-4 py-2 rounded-sm text-sm font-medium">
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all duration-300 uppercase tracking-tight mt-auto">
                    View Case Study <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Project Details / Architecture Placeholder */}
                <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Layout className="w-64 h-64" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-900 font-bold uppercase tracking-wider text-sm mb-2">
                        <Database className="w-4 h-4" />
                        System Architecture
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base border-l-2 border-gray-200 pl-4">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="space-y-4">
                       <div className="flex items-center gap-2 text-gray-900 font-bold uppercase tracking-wider text-sm mb-2">
                        <Layers className="w-4 h-4" />
                        Key Solution
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base border-l-2 border-gray-200 pl-4">
                        {project.caseStudy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 h-64 bg-gray-200 w-full rounded border-2 border-dashed border-gray-300 flex items-center justify-center relative group-hover:bg-gray-100 transition-colors">
                     <p className="text-gray-400 font-mono text-sm uppercase tracking-widest text-center px-4">
                        [ Project Visual / UI Mockup Placeholder ]<br/>
                        <span className="text-xs normal-case opacity-70 mt-2 block">Hover to expand details</span>
                     </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
