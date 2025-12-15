import { Header } from "../components/Home";
import { creativeWorks } from "../data/portfolio";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function MoreProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex items-baseline justify-between border-b border-black pb-4">
            <h1 className="font-['ED_Manteca',sans-serif] text-6xl uppercase leading-none tracking-tighter md:text-8xl">
              More Projects
            </h1>
            <span className="font-['Instrument_Sans'] text-lg font-medium">
              {creativeWorks.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {creativeWorks.map((project) => (
              <Link
                key={project.id}
                to={`/creative-work/${project.id}`}
                className="group flex flex-col gap-4"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-sm">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-['Instrument_Sans'] text-xl font-bold uppercase tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 shrink-0 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </div>
                  <p className="font-['Instrument_Sans'] text-sm uppercase tracking-wide text-gray-500">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                     {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-gray-200 px-2 py-1 rounded-full text-gray-500 uppercase tracking-wider">
                          {tag}
                        </span>
                     ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
