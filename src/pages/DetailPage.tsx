import { ArrowLeft, Brain, Microscope, GitBranch, Calendar, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PortfolioItem, caseStudies, projects, creativeWorks } from "../data/portfolio";
import { useEffect } from "react";
import { Header } from "../components/Home";

function ImageGrid({ images }: { images?: string[] }) {
  if (!images || images.length === 0) return null;
  return (
    <div className={`grid gap-4 mt-8 ${images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
      {images.map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-sm bg-gray-100">
          <img src={img} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" alt="Detail visual" />
        </div>
      ))}
    </div>
  );
}

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

export function DetailPage({ type }: { type: "case-study" | "project" | "creative-work" }) {
  const { id } = useParams();
  const data = type === "case-study" ? caseStudies : type === "project" ? projects : creativeWorks;
  const item = data.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl">Item not found</h1>
        <Link to="/" className="ml-4 underline">Go Home</Link>
      </div>
    );
  }

  // Dynamic Header Logic
  const getHeader = (section: string) => {
    if (item.id === "ripple-mentorship") {
      switch(section) {
        case "research": return "Case Study: Amber’s Transformation";
        case "architecture": return "Systemized Mentorship Process";
        case "framework": return "Behavioral Shift: From Art to Architecture";
        case "kpis": return "Results & Strategic Impact";
        case "results": return "Impact"; // Fallback
      }
    }
    if (item.id === "d2c-blueprint") {
      switch(section) {
        case "research": return "Process: Entry Point Audit";
        case "architecture": return "Process: System Structuring";
        case "framework": return "Visual Communication & Framework";
        case "kpis": return "Strategic Outcomes";
        case "results": return "Impact";
      }
    }
    if (item.id === "genesis-b2b") {
      switch(section) {
        case "research": return "System Challenges I Solved";
        case "architecture": return "Genesis Structure";
        case "framework": return "System Elements";
        case "training": return "Training & Onboarding Built In";
        case "kpis": return "Results & Business Impact";
      }
    }
    if (item.id === "ada-blueprint") {
      switch(section) {
        case "research": return "Challenges";
        case "architecture": return "What I Built";
        case "training": return "Blueprint As A Teaching Tool";
        case "kpis": return "Results";
      }
    }
    if (item.id === "brand-integration-tanx") {
      switch(section) {
        case "research": return "Research Process";
        case "architecture": return "Strategy & Solution — The TANX System";
        case "framework": return "Testing & Live Integration";
        case "kpis": return "Strategic Results";
      }
    }
    if (item.id === "figma-governance") {
      switch(section) {
        case "research": return "Challenges";
        case "architecture": return "What I Built";
        case "framework": return "How It Works In Production";
        case "kpis": return "Results & Impact";
      }
    }
    if (item.id === "ripple-effect-ops") {
      switch(section) {
        case "research": return "Challenges";
        case "architecture": return "What I Built";
        case "framework": return "How It Works In Production";
        case "kpis": return "Results & Impact";
      }
    }
    // Default headers (Genesis)
    switch(section) {
      case "research": return "Research & Analysis";
      case "architecture": return "Structuring The System";
      case "framework": return "System Framework";
      case "training": return "Training & Onboarding";
      case "results": return "Results & Strategic Impact";
      case "kpis": return "KPIs";
      default: return section;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      {/* Hero */}
      <header className="relative flex min-h-[50vh] md:min-h-[70vh] flex-col justify-end bg-black text-white overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 opacity-40">
           <img 
              src={item.heroImage} 
              className="w-full h-full object-cover" 
              alt={item.title} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8 pb-12 md:pb-24 pt-24 md:pt-48">
          <span className="mb-4 md:mb-6 block font-['Instrument_Sans'] text-xs md:text-sm font-medium uppercase tracking-widest text-gray-400">
            {type === "case-study" ? "Case Study" : type === "project" ? "Project" : "Creative Work"}
          </span>
          <h1 className="max-w-4xl font-['ED_Manteca',sans-serif] text-4xl md:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tighter">
            {item.title}
          </h1>
          <p className="mt-4 md:mt-8 max-w-2xl font-['Instrument_Sans'] text-lg md:text-2xl font-light leading-relaxed text-gray-300">
            {item.subtitle}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 md:px-8 py-12 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-24 lg:grid-cols-12">
          {/* Sidebar Info */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:h-fit">
            
            {/* Metadata (Role, Scope/Focus, Duration) */}
            <div className="mb-12 border-t border-black pt-6">
               <div className="mb-6">
                 <h3 className="mb-2 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                  Role
                </h3>
                 <p className="font-['Instrument_Sans'] text-lg font-medium">{item.role}</p>
               </div>
               
               {item.duration && (
                 <div className="mb-6">
                   <h3 className="mb-2 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Duration
                  </h3>
                   <p className="font-['Instrument_Sans'] text-lg">{item.duration}</p>
                 </div>
               )}

               {item.focus && (
                 <div className="mb-6">
                   <h3 className="mb-2 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Focus
                  </h3>
                   <p className="font-['Instrument_Sans'] text-lg leading-snug">{item.focus}</p>
                 </div>
               )}
               
               {/* Legacy Scope Support */}
               {item.scope && !item.focus && (
                 <div className="mb-6">
                   <h3 className="mb-2 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                    Scope
                  </h3>
                   <p className="font-['Instrument_Sans'] text-lg leading-snug">{item.scope}</p>
                 </div>
               )}

               <div>
                 <h3 className="mb-2 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                  Tools
                </h3>
                 <div className="flex flex-wrap gap-2">
                   {item.tools.map((tool) => (
                      <span key={tool} className="border border-gray-300 px-2 py-1 text-xs uppercase tracking-wider text-gray-600">
                        {tool}
                      </span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-gray-50 p-6 mb-12">
               <h3 className="mb-4 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                At a Glance
              </h3>
              <p className="font-['Instrument_Sans'] text-lg font-medium">"{item.summary}"</p>
            </div>

            {/* System Architecture Stats */}
            {item.system_architecture && (
              <div className="border border-gray-200 p-6 mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <GitBranch className="w-5 h-5 text-gray-500" />
                  <h3 className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                    System Architecture
                  </h3>
                </div>
                
                <div className="space-y-6">
                    <div>
                      <span className="block text-xs uppercase text-gray-400">Topology</span>
                      <span className="block text-lg font-medium">{item.system_architecture.topology}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">Component Count</span>
                      <span className="block text-lg font-medium">
                        {item.system_architecture.component_count !== undefined 
                          ? item.system_architecture.component_count 
                          : "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">Adoption Rate</span>
                      <div className="w-full bg-gray-200 h-1 mt-2">
                        <div 
                          className="bg-black h-full" 
                          style={{ 
                            width: typeof item.system_architecture.adoption_percentage === 'number' 
                              ? `${item.system_architecture.adoption_percentage}%` 
                              : '100%' 
                          }}
                        />
                      </div>
                      <span className="block text-right text-xs mt-1">
                        {item.system_architecture.adoption_percentage}
                        {typeof item.system_architecture.adoption_percentage === 'number' ? '%' : ''}
                      </span>
                    </div>
                </div>
              </div>
            )}


          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8">
            
            {/* --- RICH CONTENT LAYOUT (Priority) --- */}
            {item.brief ? (
              <>
                {/* 1. Design Brief */}
                <section className="mb-12 md:mb-20">
                  <h2 className="mb-6 md:mb-8 font-['ED_Manteca',sans-serif] text-4xl md:text-6xl uppercase leading-none">
                    Design Brief
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                     <div>
                       <h3 className="font-bold uppercase tracking-wide text-sm mb-2 text-gray-500">Issue</h3>
                       <p className="text-base md:text-lg leading-relaxed text-gray-800">{formatText(item.brief.issue)}</p>
                     </div>
                     <div>
                       <h3 className="font-bold uppercase tracking-wide text-sm mb-2 text-gray-500">Solution</h3>
                       <p className="text-base md:text-lg leading-relaxed text-gray-800">{formatText(item.brief.solution)}</p>
                     </div>
                  </div>
                  <ImageGrid images={item.brief.images} />
                </section>

                {/* Scientific Layer (Psychology) */}
                {item.psychology && (
                  <section className="mb-12 md:mb-20 rounded-xl bg-black p-6 text-white">
                    <div className="mb-6 flex items-center gap-3 border-b border-white/20 pb-4">
                      <Brain className="h-6 w-6 text-white" />
                      <h2 className="font-['ED_Manteca',sans-serif] text-2xl uppercase leading-none">
                        The Psychology
                      </h2>
                    </div>
                    <div className="grid gap-6">
                      <div>
                        <h3 className="mb-2 font-['Instrument_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400">
                          Core Principle
                        </h3>
                        <p className="font-['Instrument_Sans'] text-xl font-medium leading-tight text-white">
                          {formatText(item.psychology.principle)}
                        </p>
                         <p className="mt-2 font-['Instrument_Sans'] text-sm italic text-gray-400">
                          "{formatText(item.psychology.definition)}"
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-3 font-['Instrument_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400">
                          Applied Architecture
                        </h3>
                        <p className="font-['Instrument_Sans'] text-base font-light leading-relaxed text-gray-200">
                          {formatText(item.psychology.application)}
                        </p>
                      </div>
                    </div>
                  </section>
                )}

                {/* 2. Research & Analysis */}
                {item.research && (
                  <section className="mb-12 md:mb-20">
                    <h3 className="mb-4 md:mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-xl md:text-2xl font-bold uppercase tracking-wide">
                      {getHeader("research")}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">{formatText(item.research.content)}</p>
                    <ImageGrid images={item.research.images} />
                  </section>
                )}

                {/* 3. Structuring the System (Architecture) */}
                {item.architecture && (
                  <section className="mb-12 md:mb-20">
                    <h3 className="mb-4 md:mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-xl md:text-2xl font-bold uppercase tracking-wide">
                      {getHeader("architecture")}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">{formatText(item.architecture.content)}</p>
                    <ImageGrid images={item.architecture.images} />
                  </section>
                )}

                {/* 4. System Framework */}
                {item.framework && (
                  <section className="mb-12 md:mb-20 bg-gray-50 p-4 md:p-8">
                     <h3 className="mb-4 md:mb-6 font-['Instrument_Sans'] text-xl md:text-2xl font-bold uppercase tracking-wide">
                      {getHeader("framework")}
                    </h3>
                    {item.framework.principles && (
                      <div className="grid gap-8 md:grid-cols-2">
                         <div>
                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-4">Key Principles</h4>
                            <ul className="list-disc pl-5 space-y-2">
                               {item.framework.principles.map((p, i) => <li key={i} className="text-base md:text-lg">{formatText(p)}</li>)}
                            </ul>
                         </div>
                         <div>
                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-4">Contents</h4>
                            <ul className="list-disc pl-5 space-y-2">
                               {item.framework.contents.map((c, i) => <li key={i} className="text-base md:text-lg">{formatText(c)}</li>)}
                            </ul>
                         </div>
                      </div>
                    )}
                    {/* Fallback for framework content if principles not used */}
                    {!item.framework.principles && item.framework.contents && (
                       <ul className="list-disc pl-5 space-y-2">
                          {item.framework.contents.map((c, i) => <li key={i} className="text-base md:text-lg">{formatText(c)}</li>)}
                       </ul>
                    )}
                    <ImageGrid images={item.framework.images} />
                  </section>
                )}

                 {/* 5. Branded Systems */}
                 {item.branded_systems && (
                  <section className="mb-20">
                    <h3 className="mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-2xl font-bold uppercase tracking-wide">
                      Branded Systems
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{formatText(item.branded_systems.content)}</p>
                    <ImageGrid images={item.branded_systems.images} />
                  </section>
                )}

                {/* 6. KPIs */}
                {item.kpis && (
                   <section className="mb-20">
                    <h3 className="mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-2xl font-bold uppercase tracking-wide">
                      {getHeader("kpis")}
                    </h3>
                    <ul className="space-y-4 mb-8">
                      {item.kpis.stats.map((stat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xl font-medium">
                           <span className="text-green-600">✅</span> {formatText(stat)}
                        </li>
                      ))}
                    </ul>
                    <ImageGrid images={item.kpis.images} />
                   </section>
                )}

                {/* 7. Training */}
                {item.training && (
                  <section className="mb-20 bg-gray-50 p-8">
                    <h3 className="mb-6 font-['Instrument_Sans'] text-2xl font-bold uppercase tracking-wide">
                      {getHeader("training")}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{formatText(item.training.content)}</p>
                    <ImageGrid images={item.training.images} />
                  </section>
                )}

                 {/* 8. Results */}
                 {item.results && (
                  <section className="mb-20">
                    <h3 className="mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-2xl font-bold uppercase tracking-wide">
                      {getHeader("results")}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-800 mb-8">{formatText(item.results.content)}</p>
                    
                    {item.results.business_outcomes && (
                      <div className="grid gap-4 md:grid-cols-3 mb-8">
                         {item.results.business_outcomes.map((outcome, i) => (
                            <div key={i} className="bg-black text-white p-4 text-center">
                               <p className="font-bold text-lg">{formatText(outcome)}</p>
                            </div>
                         ))}
                      </div>
                    )}
                    <ImageGrid images={item.results.images} />
                  </section>
                )}

                {/* 9. Reflection */}
                {item.reflection && (
                  <section className="mb-20 border-t border-gray-200 pt-12">
                     <h3 className="mb-6 font-['Instrument_Sans'] text-2xl font-bold uppercase tracking-wide">
                      Reflection
                    </h3>
                    <p className="text-2xl font-medium italic text-gray-600 leading-relaxed mb-8">
                      "{formatText(item.reflection.content)}"
                    </p>
                    {item.reflection.image && (
                      <div className="overflow-hidden rounded-sm">
                         <img src={item.reflection.image} className="w-full h-auto" alt="Reflection" />
                      </div>
                    )}
                  </section>
                )}
              </>
            ) : (
              /* --- LEGACY CONTENT LAYOUT --- */
              <>
                 {/* Logic Section */}
                 <section className="mb-24">
                  <h2 className="mb-8 font-['ED_Manteca',sans-serif] text-5xl uppercase leading-none md:text-6xl">
                    The Logic
                  </h2>
                  <div className="grid gap-16 md:grid-cols-2">
                    <section>
                      <h3 className="mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-xl font-bold uppercase tracking-wide">
                        The Condition
                      </h3>
                      <p className="font-['Instrument_Sans'] text-lg leading-relaxed text-gray-700">
                        {formatText(item.challenge)}
                      </p>
                    </section>
                    <section>
                      <h3 className="mb-6 border-b border-black pb-4 font-['Instrument_Sans'] text-xl font-bold uppercase tracking-wide">
                        The Execution
                      </h3>
                      <p className="font-['Instrument_Sans'] text-lg leading-relaxed text-gray-700">
                        {formatText(item.solution)}
                      </p>
                    </section>
                  </div>
                </section>

                {/* Gallery */}
                {item.galleryImages && item.galleryImages.length > 0 && (
                   <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.galleryImages.map((img, idx) => (
                      <div key={idx} className="aspect-video bg-gray-100 overflow-hidden relative">
                          <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery" />
                      </div>
                    ))}
                  </section>
                )}

                {/* Outcome */}
                <section className="bg-gray-100 p-12 text-center">
                  <h3 className="mb-6 font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                    Final Outcome
                  </h3>
                  <p className="font-['Instrument_Sans'] text-3xl font-medium leading-relaxed text-black md:text-4xl">
                    {formatText(item.outcome)}
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
