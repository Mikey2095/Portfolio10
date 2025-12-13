import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PortfolioItem, caseStudies, projects } from "../data/portfolio";

function formatText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function Card({ item, type }: { item: PortfolioItem; type: "case-study" | "project" }) {
  return (
    <Link
      to={`/${type}/${item.id}`}
      className="group block border-t border-gray-200 py-12 transition-all hover:bg-gray-50"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="font-['Instrument_Sans'] text-2xl font-semibold uppercase tracking-tight md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-2 font-['Instrument_Sans'] text-sm uppercase tracking-wide text-gray-500">
            {item.subtitle}
          </p>
        </div>
        <div className="md:col-span-6">
          <p className="font-['Instrument_Sans'] text-xl font-medium leading-relaxed text-gray-800">
            "{formatText(item.summary)}"
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs uppercase tracking-wider text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end md:col-span-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition-transform duration-300 group-hover:scale-110 group-hover:bg-black group-hover:text-white">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function WorkSection() {
  return (
    <section className="relative z-10 w-full bg-white px-8 py-24 md:px-16 lg:px-24" id="work">
      <div className="mx-auto max-w-[1440px]">
        {/* Case Studies */}
        <div className="mb-32">
          <div className="mb-16 flex items-baseline justify-between border-b border-black pb-4">
            <h2 className="font-['ED_Manteca',sans-serif] text-6xl uppercase leading-none tracking-tighter md:text-8xl">
              Case Studies
            </h2>
            <span className="font-['Instrument_Sans'] text-lg font-medium">01</span>
          </div>
          
          <div className="flex flex-col">
            {caseStudies.map((study) => (
              <Card key={study.id} item={study} type="case-study" />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="mb-16 flex items-baseline justify-between border-b border-black pb-4">
            <h2 className="font-['ED_Manteca',sans-serif] text-6xl uppercase leading-none tracking-tighter md:text-8xl">
              Projects
            </h2>
            <span className="font-['Instrument_Sans'] text-lg font-medium">02</span>
          </div>
          
          <div className="flex flex-col">
            {projects.map((project) => (
              <Card key={project.id} item={project} type="project" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
