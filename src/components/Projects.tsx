import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const projects = [
  {
    id: 1,
    title: "NEBULA DESIGN SYSTEM",
    category: "Design System Architecture",
    image: "https://images.unsplash.com/photo-1755018237309-bb3f5efeb2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NjU1NTk0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A comprehensive design language unifying 50+ internal products.",
    architecture: "The system is built on a token-based architecture using Style Dictionary, allowing for multi-platform distribution (Web, iOS, Android). We implemented a strict component lifecycle policy and automated regression testing.",
    caseStudy: "The main challenge was legacy code adoption. We devised a 'strangler fig' pattern strategy, gradually replacing components."
  },
  {
    id: 2,
    title: "VORTEX E-COMMERCE",
    category: "UX/UI & Scalability",
    image: "https://images.unsplash.com/photo-1738918941142-00fe2cbe3c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHN0cnVjdHVyZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzY1NTU5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-performance storefront framework handling 850+ units/min.",
    architecture: "Utilized a headless architecture with Shopify Plus and a custom Next.js frontend. The design system focused on atomic design principles to ensure consistency across rapid promotional landing pages.",
    caseStudy: "Conversion rates increased by 40% after implementing the new checkout flow components."
  },
  {
    id: 3,
    title: "HORIZON UI KIT",
    category: "Open Source Library",
    image: "https://images.unsplash.com/photo-1634207284450-f6ad4451b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHN5c3RlbSUyMGNvbmNlcHR1YWx8ZW58MXx8fHwxNzY1NTU5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Accessible, themeable component library for SaaS applications.",
    architecture: "Built with Radix UI primitives and Tailwind CSS. Features include automatic dark mode support, extensive keyboard navigation, and WAI-ARIA compliance out of the box.",
    caseStudy: "Adopted by 15+ startups in the first month. The focus was on developer experience (DX) and comprehensive documentation."
  }
];

export function Projects() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-[12vw] md:text-[8vw] leading-[0.85] font-['Instrument_Sans',sans-serif] tracking-tighter uppercase text-black">
            Selected<br />Works
          </h2>
          <p className="text-xl font-['Instrument_Sans',sans-serif] text-gray-500 max-w-md mt-8 md:mt-0 text-right">
            A curation of design systems and architectural solutions that drive scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-black pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* Image Section */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
                   <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-['Instrument_Sans',sans-serif] uppercase tracking-widest text-gray-500 mb-4 block">
                        0{index + 1} / {project.category}
                      </span>
                      <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-['Instrument_Sans',sans-serif] font-medium tracking-tight mb-8 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-['Instrument_Sans',sans-serif] leading-relaxed max-w-2xl mb-12">
                      {project.description}
                    </p>

                    {/* Architecture Details */}
                    <div className="mt-8 border border-black/10 p-6 bg-gray-50">
                       <h4 className="font-['Instrument_Sans',sans-serif] font-semibold text-sm uppercase tracking-wider mb-6 text-gray-400">
                        System Architecture Notes
                       </h4>
                       <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="architecture" className="border-b-black/10">
                          <AccordionTrigger className="text-lg font-['Instrument_Sans',sans-serif]">Architecture Strategy</AccordionTrigger>
                          <AccordionContent className="text-base text-gray-600 font-['Instrument_Sans',sans-serif] leading-relaxed">
                            {project.architecture}
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="case-study" className="border-none">
                          <AccordionTrigger className="text-lg font-['Instrument_Sans',sans-serif]">Case Study Findings</AccordionTrigger>
                          <AccordionContent className="text-base text-gray-600 font-['Instrument_Sans',sans-serif] leading-relaxed">
                            {project.caseStudy}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                  
                  <div className="mt-8 lg:mt-0">
                     <button className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:pb-2 transition-all font-['Instrument_Sans',sans-serif]">
                       View Full Case Study
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
