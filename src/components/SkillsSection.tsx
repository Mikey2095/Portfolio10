export function SkillsSection() {
  const skills = [
    {
      category: "Design Systems",
      capabilities:
        "Architecture, governance, and scalable component and variable systems across Genesis and 60+ branded systems",
      tools: "Figma (Variables, Components, Tokens, Libraries)",
    },
    {
      category: "Design-to-Code",
      capabilities:
        "Translation of design logic into tokenized, production-ready outputs via automated pipelines",
      tools: "MCP Server, Token Pipelines",
    },
    {
      category: "Front-End Integration",
      capabilities:
        "Implementation and integration of UI components with APIs, data sources, and platform constraints",
      tools: "HTML, CSS, JavaScript, Component Frameworks",
    },
    {
      category: "Data & Logic Layer",
      capabilities:
        "Authentication, structured data models, and server-side logic supporting front-end systems",
      tools: "Supabase (Auth, Database, Edge Functions)",
    },
    {
      category: "Versioning & CI/CD",
      capabilities:
        "Source control, collaboration, and automated deployment workflows",
      tools: "GitHub",
    },
    {
      category: "Deployment & Runtime",
      capabilities:
        "Hosting, environment configuration, and production runtime management",
      tools: "Vercel",
    },
    {
      category: "Email & Automation",
      capabilities:
        "Event-driven transactional email workflows triggered by user actions and system events",
      tools: "Resend (Transactional Email API)",
    },
    {
      category: "AI & Augmentation",
      capabilities:
        "AI-assisted design, code generation, ideation, documentation, and production acceleration embedded into system workflows",
      tools:
        "ChatGPT, Gemini, Grok, Adobe Creative Cloud (Firefly)",
    },
  ];

  return (
    <section
      className="w-full bg-white px-[20px] py-[50px] md:px-[64px] md:py-[100px]"
      data-name="Skills Section"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="mb-[40px] md:mb-[80px] font-['ED_Manteca',sans-serif] text-[40px] md:text-[80px] uppercase leading-[0.9] tracking-[-2px] md:tracking-[-4px]">
          Capabilities
        </h2>

        <div className="flex flex-col border-t border-black">
          {/* Header Row - Desktop Only */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-8 md:py-6 md:border-b md:border-black">
            <div className="md:col-span-3">
              <span className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                Category
              </span>
            </div>
            <div className="md:col-span-5">
              <span className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                Capabilities
              </span>
            </div>
            <div className="md:col-span-4">
              <span className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-widest text-gray-500">
                Tools / Platforms
              </span>
            </div>
          </div>

          {/* Rows */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 py-8 border-b border-gray-200 md:grid-cols-12 md:gap-8 md:items-start transition-colors hover:bg-gray-50"
            >
              {/* Category */}
              <div className="md:col-span-3">
                <h3 className="font-['Instrument_Sans'] text-lg font-bold uppercase tracking-[-0.5px] md:text-xl">
                  {skill.category}
                </h3>
              </div>

              {/* Capabilities */}
              <div className="md:col-span-5">
                <p className="md:hidden font-['Instrument_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Capabilities
                </p>
                <p className="font-['Instrument_Sans'] text-base md:text-lg leading-[1.4] text-gray-800">
                  {skill.capabilities}
                </p>
              </div>

              {/* Tools */}
              <div className="md:col-span-4">
                <p className="md:hidden font-['Instrument_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 mt-2 md:mt-0">
                  Tools
                </p>
                <p className="font-['Instrument_Sans'] text-base md:text-lg leading-[1.4] text-gray-600">
                  {skill.tools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}