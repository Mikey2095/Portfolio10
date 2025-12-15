export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  heroImage: string;
  galleryImages: string[];
  
  // Metadata
  role: string;
  tools: string[];
  duration?: string;
  focus?: string;
  scope?: string;
  
  // Rich Content Sections
  brief?: {
    issue: string;
    solution: string;
    images?: string[];
  };
  research?: {
    content: string;
    images?: string[];
  };
  architecture?: {
    content: string;
    images?: string[];
  };
  framework?: {
    principles?: string[];
    contents: string[];
    images?: string[];
  };
  branded_systems?: {
    content: string;
    images?: string[];
  };
  kpis?: {
    stats: string[];
    images?: string[];
  };
  training?: {
    content: string;
    images?: string[];
  };
  results?: {
    content: string;
    business_outcomes?: string[];
    images?: string[];
  };
  reflection?: {
    content: string;
    image?: string;
  };

  // Legacy/Fallback Fields
  challenge?: string;
  approach?: string;
  solution?: string;
  outcome?: string;
  
  tags: string[];
  
  psychology?: {
    principle: string;
    definition: string;
    application: string;
  };
  ux_research?: {
    method: string;
    hypothesis: string;
    finding: string;
  };
  system_architecture?: {
    component_count?: number;
    adoption_percentage: string | number;
    legacy_debt_reduction: string;
    topology: string;
  };
}

export const creativeWorks: PortfolioItem[] = [
  {
    id: "modern-architecture-viz",
    title: "Modern Architecture Visualization",
    subtitle: "3D Rendering",
    summary: "Photorealistic visualization of modern architectural concepts focusing on light and material.",
    heroImage: "https://images.unsplash.com/photo-1686164748261-33e13eef70b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjAzZCUyMGFyY2hpdGVjdHVyZSUyMHJlbmRlcnxlbnwxfHx8fDE3NjU3Njg0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "3D Artist",
    tools: ["Blender", "Cycles", "Photoshop"],
    tags: ["3D", "Architecture", "Rendering"],
  },
  {
    id: "blueprint-sketches",
    title: "Technical Blueprint Sketches",
    subtitle: "Drafting & Illustration",
    summary: "Hand-drawn and digitally enhanced technical blueprints exploring structural concepts.",
    heroImage: "https://images.unsplash.com/photo-1721132537184-5494c01ed87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwc2tldGNofGVufDF8fHx8MTc2NTc2ODQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Draftsman",
    tools: ["AutoCAD", "Sketching", "Illustrator"],
    tags: ["Drafting", "Blueprint", "Technical"],
  },
  {
    id: "geometric-abstract",
    title: "Geometric Abstractions",
    subtitle: "Digital Art",
    summary: "Exploration of pure form and geometry through procedural generation.",
    heroImage: "https://images.unsplash.com/photo-1743435188586-73f751a36f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwZ2VvbWV0cmljJTIwYXJ0fGVufDF8fHx8MTc2NTc2ODQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Digital Artist",
    tools: ["Houdini", "Redshift"],
    tags: ["Abstract", "Geometry", "3D"],
  },
  {
    id: "isometric-rooms",
    title: "Isometric Room Design",
    subtitle: "3D Illustration",
    summary: "Stylized isometric room designs focusing on color palettes and spatial arrangement.",
    heroImage: "https://images.unsplash.com/photo-1663063036902-df7d871b39a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc29tZXRyaWMlMjByb29tJTIwZGVzaWduJTIwM2R8ZW58MXx8fHwxNzY1NzM4MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "3D Illustrator",
    tools: ["Cinema 4D", "Octane"],
    tags: ["Isometric", "Illustration", "3D"],
  },
  {
    id: "futuristic-city",
    title: "Futuristic Urban Planning",
    subtitle: "Concept Art",
    summary: "Conceptual visualizations of future urban environments and mega-structures.",
    heroImage: "https://images.unsplash.com/photo-1655624409955-426a25866ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMHJlbmRlcnxlbnwxfHx8fDE3NjU3Njg0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Concept Artist",
    tools: ["Unreal Engine", "Photoshop"],
    tags: ["Concept Art", "Sci-Fi", "Environment"],
  },
  {
    id: "minimalist-product",
    title: "Minimalist Product Design",
    subtitle: "Industrial Design",
    summary: "Clean and functional product design visualizations with a focus on minimalism.",
    heroImage: "https://images.unsplash.com/photo-1647507653704-bde7f2d6dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMDNkfGVufDF8fHx8MTc2NTc2ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Industrial Designer",
    tools: ["Rhino", "Keyshot"],
    tags: ["Product Design", "Minimalism", "Render"],
  },
  {
    id: "architectural-section",
    title: "Architectural Sections",
    subtitle: "Technical Drawing",
    summary: "Detailed cross-sectional drawings revealing the inner workings of architectural spaces.",
    heroImage: "https://images.unsplash.com/photo-1721244653546-a96caf5689ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwc2VjdGlvbiUyMGRyYXdpbmd8ZW58MXx8fHwxNzY1NzY4NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Architect",
    tools: ["Revit", "Illustrator"],
    tags: ["Architecture", "Technical", "Section"],
  },
  {
    id: "digital-wireframe",
    title: "Digital Structure Wireframes",
    subtitle: "3D Modeling",
    summary: "Wireframe renders showcasing the topology and structure of complex 3D models.",
    heroImage: "https://images.unsplash.com/photo-1616898877076-c544907dc75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2lyZWZyYW1lJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2NTc2ODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "3D Modeler",
    tools: ["Maya", "Arnold"],
    tags: ["Wireframe", "3D", "Topology"],
  },
  {
    id: "photoreal-interior",
    title: "Photorealistic Interiors",
    subtitle: "Interior Design",
    summary: "High-fidelity interior rendering for residential and commercial spaces.",
    heroImage: "https://images.unsplash.com/photo-1643701475345-a89e02714e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b3JlYWxpc3RpYyUyMGludGVyaW9yJTIwcmVuZGVyfGVufDF8fHx8MTc2NTc2ODQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Interior Visualizer",
    tools: ["3ds Max", "V-Ray"],
    tags: ["Interior", "Visualization", "Photorealism"],
  },
  {
    id: "fluid-shapes",
    title: "Fluid Organic Shapes",
    subtitle: "Experimental Art",
    summary: "Studies in organic forms and fluid dynamics using particle simulations.",
    heroImage: "https://images.unsplash.com/photo-1644843521796-33876c641aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZsdWlkJTIwM2QlMjBzaGFwZXxlbnwxfHx8fDE3NjU3Njg0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    galleryImages: [],
    role: "Motion Designer",
    tools: ["X-Particles", "After Effects"],
    tags: ["Organic", "Fluid", "Simulation"],
  }
];

export const caseStudies: PortfolioItem[] = [
  {
    id: "genesis-b2b",
    title: "Genesis — The Scalable B2B Design System Engine",
    subtitle: "B2B Architecture & UX Strategy",
    summary: "Genesis became our visual and operational source of truth — powering 60+ branded sub-systems and supporting A+ content, infographics, and product videos.",
    heroImage: "https://images.unsplash.com/photo-1762016610744-fe2eb31e31a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect",
    tools: ["Figma Org", "Variables", "Component Libraries", "ADA Compliance", "Governance Systems"],
    duration: "2022 – Present",
    focus: "Production Efficiency, Multi-Brand Scalability, System Ownership, Retail-Ready Content",
    
    brief: {
      issue: "With over 60 in-house and licensed brands, our B2B eCommerce workflow was inefficient, inconsistent, and unsustainable. Designers rebuilt assets from scratch, every file was different, and there was no system of record.",
      solution: "I architected **Genesis**, our centralized B2B design system — a fully modular, governed, and brand-agnostic system built in Figma to solve scale, collaboration, onboarding, and developer handoff. Genesis became our visual and operational source of truth.",
      images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "Designers were duplicating templates manually. Files lacked naming conventions and export logic. No ADA considerations or mobile responsiveness baked in. Copy, design, and product teams worked in silos. Onboarding new hires took up to 3 months.",
      images: [
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]
    },
    
    architecture: {
      content: "Genesis was not just a design file — it was a **production framework**. I designed the system to scale both visually and operationally. I then created 60+ branded systems (DSGs) that all referenced Genesis — allowing rapid customization while maintaining brand integrity.",
      images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      principles: [
        "**Color & Typography Tokens** for brand overrides",
        "**Reusable Components** for A+, infographics, and video",
        "**Responsive Variants** for mobile/desktop",
        "**ADA Compliance** baked into contrast, spacing, type",
        "**Naming & Export Conventions** for dev-ready handoff",
        "**Blueprint Files** for onboarding and training"
      ],
      contents: ["Genesis powered 60+ branded sub-systems (DSGs) allowing rapid customization while maintaining integrity."],
      images: ["https://images.unsplash.com/photo-1492619879874-88db080e53fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1634942537034-2531766767d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    training: {
      content: "Genesis was designed to **teach while it’s used**. I created Blueprint templates to walk designers through building content, color-coded zones for responsive behavior, variable-based design logic that taught modularity, and documentation inside the file. Using this approach, I mentored designers like Amber to become production-ready in 60 days.",
      images: ["https://images.unsplash.com/photo-1544531320-dadbed29130d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Reduced design production time by 60%",
        "95% improvement in brand consistency",
        "Cut onboarding time from 3 months to 1.5 months",
        "Enabled multi-designer collaboration inside single jobs",
        "Increased visual trust from Walmart and retail partners",
        "Set the groundwork for future GitHub and Shopify integration"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]
    },
    
    reflection: {
      content: "Genesis wasn’t just about design efficiency — it was about **design ownership**. I transformed our team from production-bound designers to system-literate collaborators who now think in structure, not screens. Genesis unified visual strategy, accelerated delivery, and gave us a system that will carry into the next platform evolution.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },

    tags: ["Architecture", "Governance", "Variables"],
    
    psychology: {
      principle: "Cognitive Load Theory",
      definition: "The total amount of mental effort being used in the working memory.",
      application: "By standardizing patterns across the 60+ brands, we reduced the intrinsic cognitive load for teams.",
    },
    ux_research: {
      method: "Workflow Analysis & Time-Motion Study",
      hypothesis: "Centralizing the brand logic into a 'Genesis' file will reduce the time required to spin up a new campaign by 50%.",
      finding: "Production time dropped by 60%, and revisions due to brand inconsistency were virtually eliminated.",
    },
    system_architecture: {
      component_count: 500,
      adoption_percentage: 95,
      legacy_debt_reduction: "60% (Time Saved)",
      topology: "Hub & Spoke (Genesis Core)",
    },
  },
  {
    id: "ripple-mentorship",
    title: "Ripple Effect — Systemized Mentorship and Cultural Transformation",
    subtitle: "System-First Mentorship & Talent Development",
    summary: "I treated mentorship as a system design problem. I created a structured onboarding path within Genesis, using component logic, blueprint files, and system rules as live teaching tools.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect & UX Mentor",
    tools: ["Figma", "Genesis Design System", "Blueprint Files", "Process Frameworks"],
    duration: "2023 – Present",
    focus: "System-First Mentorship, Talent Development, UX Mindset Shift",
    
    brief: {
      issue: "As I built the Genesis design system to scale content across 60+ brands, I realized the system was only as strong as the people using it. Many designers on the team had no prior UX training — some came from print or branding backgrounds. There was a disconnect between system logic and designer behavior. Without guidance, they defaulted to execution instead of thinking in structure.",
      solution: "I treated mentorship as a **system design problem.** I created a structured onboarding path within Genesis, using component logic, blueprint files, and system rules as **live teaching tools.** This method empowered designers to not just use the system, but to think like systems architects — creating a ripple effect across team culture.",
      images: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "**Case Study: Amber’s Transformation**\nAmber was a talented print designer — but had no experience in Figma, components, variables, or UX workflows. Using the system I built, I trained her to understand naming conventions, build ADA-compliant content, and question design choices through a UX lens. She went from zero system experience to fully ramped production in under **60 days**, cutting standard onboarding time in half.",
      images: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]
    },
    
    architecture: {
      content: "**Systemized Mentorship Process**\nMy approach was structured into five layers:\n1. **Observation** – Identifying roadblocks\n2. **Blueprints** – Live teaching files\n3. **Modular Thinking** – Design as puzzle-building\n4. **Rules + Reasons** – Reinforcing business logic\n5. **Independence** – Building confidence\n\nThis approach helped Amber and others move from “executor” to “architect-in-training.”",
      images: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1664575602276-acd073f104c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      contents: [
        "**Behavioral Shift: From Art to Architecture**\nMentorship wasn’t just technical — it was cognitive. I helped designers make decisions rooted in UX laws, collaborate asynchronously using Figma features, and learn how to explain their design rationally in cross-team reviews.",
        "Participation in design system growth replaced resistance, creating a culture of shared ownership."
      ],
      images: ["https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Onboarding time cut by 50%",
        "Designers now contribute confidently to brand DSGs",
        "Shared language across PMs, writers, and designers",
        "Brand team adoption initiated through same method",
        "VP and directors now understand that systems = culture shift",
        "Created a repeatable onboarding pipeline embedded into Figma"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]
    },
    
    reflection: {
      content: "Design systems aren’t just reusable components — they’re reusable knowledge. By embedding education into the system, I helped change how designers think, speak, and build. This ripple effect is now spreading across teams — from branding to digital to content — and it all started with one system file, and one designer.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Mentorship", "Culture", "Growth"],
    
    psychology: {
      principle: "Zone of Proximal Development",
      definition: "The distance between what a learner can do without help and what they can do with guidance.",
      application: "We used the 'Blueprints' to scaffold learning. Designers were given tasks just slightly beyond their current capability, with the system providing the necessary guardrails to succeed.",
    },
    ux_research: {
      method: "Longitudinal Study (Skill Tracking)",
      hypothesis: "Embedded system mentorship will accelerate proficiency faster than external tutorials.",
      finding: "Skill acquisition speed doubled (2x) when learning occurred directly within the context of the production files.",
    },
    system_architecture: {
      component_count: 5,
      adoption_percentage: 100,
      legacy_debt_reduction: "50% (Onboarding)",
      topology: "Embedded Knowledge Architecture",
    },
  },
  {
    id: "d2c-blueprint",
    title: "D2C Information Architecture — Visualizing the Invisible System",
    subtitle: "Site Connectivity & Shopify Transition",
    summary: "I designed a full-scale information architecture system map to uncover the invisible structure of our current D2C experience.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect",
    tools: ["Figma", "Information Architecture Mapping", "System Strategy"],
    duration: "2024 – Present",
    focus: "Site Connectivity, Department Alignment, Shopify Transition Planning",
    
    brief: {
      issue: "Our Direct-to-Consumer (D2C) site was being managed by multiple departments — content, design, development, marketing, analytics — yet no one had a clear understanding of how everything was connected. Stakeholders relied on assumptions or fragmented knowledge. There was no source of truth showing how pages, teams, platforms, and tools were interacting to build the current experience.",
      solution: "I designed a full-scale **information architecture system map** to uncover the invisible structure of our current D2C experience. This wasn't about navigation menus or wireframes — this was about **clarifying how the actual system worked** across tools, people, pages, data, and content flows. I presented the visual architecture to our eCommerce Director and VP, allowing them to finally see the entire system from a bird’s-eye view.",
      images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "**Entry Point Audit**\nI began by analyzing the many different entry points users were taking — from Google Search and product ads to social media links and QR codes. These weren’t accounted for in the current structure, leading to confusion, duplicated pathways, and broken funnels.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Audit viz
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  // Color coded map
      ]
    },
    
    architecture: {
      content: "**System Structuring**\nI created an ecosystem map connecting product data, SEO, analytics, marketing assets, and development dependencies. Every layer was labeled based on its operational role.\n\n**Refinement through Terminology**\nTo reduce communication breakdowns between departments, I introduced **standardized terminology and connection tags**. This let every team — from developers to content creators — know who was responsible for what.",
      images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1558494949-efc535b5fa12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      contents: [
        "**Visual Communication**\nEach color-coded line indicated a specific type of system communication: Blue (Core connection), Yellow (Supporting tools), Dotted Blue (Descriptive labels). These visual cues let leadership see the complexity and delegate ownership.",
        "**Final System Framework**\nThe result was a five-layer information architecture system that showed how users enter the site, how departments contribute, where tools integrate, and how Shopify can inherit this structure."
      ],
      images: ["https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Leadership gained total visibility into how the current site actually functions",
        "Enabled clear platform decisions — including the greenlight for Shopify",
        "Simplified team communication and reduced internal confusion",
        "Built onboarding clarity for future designers, developers, and marketers",
        "Shifted the business from guesswork to structured growth"
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ]
    },
    
    reflection: {
      content: "This was not just a design map — this was an operational lens. I created a shared system language that aligned leadership, design, and development. By showing what was previously invisible, I helped leadership make decisions about where we go next — and gave teams a structure to move with confidence.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Architecture", "Strategy", "Mapping"],
    
    psychology: {
      principle: "Cognitive Mapping",
      definition: "A mental representation which serves an individual to acquire, code, store, recall, and decode information about the relative locations and attributes of phenomena in their spatial environment.",
      application: "We externalized the 'invisible' system into a concrete visual map, allowing stakeholders to finally build a shared mental model of the ecosystem.",
    },
    ux_research: {
      method: "System Auditing & Stakeholder Interviews",
      hypothesis: "Visualizing the system complexity will reveal redundancy and inefficiencies that are invisible in isolation.",
      finding: "The audit revealed that 30% of entry points were leading to dead ends or non-optimized pages, which was immediately corrected.",
    },
    system_architecture: {
      adoption_percentage: "100% (Leadership Buy-in)",
      legacy_debt_reduction: "N/A (Strategic)",
      topology: "Information Architecture (IA)",
    },
  },
];

export const projects: PortfolioItem[] = [
  {
    id: "ripple-effect-ops",
    title: "The Ripple Effect — Design System Architecture as an Operational Engine",
    subtitle: "Operational Engine & Scalability",
    summary: "I architected a design system ecosystem that restructured how design, branding, and operations collaborate — turning Figma into an operational engine.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect / Senior Digital Designer",
    tools: ["Figma", "Genesis System", "Branded DSGs", "Variables", "Components", "Figma Make", "Dev Mode"],
    duration: "2022 – Present",
    focus: "System Architecture, Scalable Production, Human Onboarding, Cross-Department Collaboration, Business Impact",
    
    brief: {
      issue: "As eCommerce volume scaled, traditional workflows couldn't handle the 'trinity' of deliverables (A+, Infographics, Video) for every SKU. One job could generate 30+ assets across dozens of brands.",
      solution: "I architected a design system ecosystem inside Figma that went beyond visual consistency. The system restructured how designers, copywriters, branding, operations, and sales collaborate — turning Figma into an operational engine rather than just a design tool.",
      images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "**Challenges**\n- Exponential asset growth without proportional headcount\n- Fragmented workflows between design, copy, branding, ops, and sales\n- Repetitive decision-making slowing production\n- Designers operating as executors instead of problem solvers\n- Onboarding new hires took 120+ days",
      images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    architecture: {
      content: "**What I Built**\n✅ Genesis MAIN system as a universal foundation\n✅ 60+ branded Design System Guides (DSGs)\n✅ Modular A+ templates (standard + premium)\n✅ Universal infographic frameworks\n✅ Product video layout logic tied to copy and brand variables\n✅ Embedded blueprints that teach designers how to think systemically",
      images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1558494949-efc535b5fa12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      contents: [
        "**How It Works In Production**\n- One job scales into dozens of assets through reusable systems\n- Designers work in parallel without conflicts\n- Copywriters collaborate directly inside Figma\n- Ops and Sales reference historical work instantly via archive logic\n- New designers reach production readiness in ~60 days instead of 120",
      ],
      images: ["https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Scaled from hundreds to 8,000+ individual assets annually",
        "Maintained stable production across seasonal spikes",
        "Enabled a 3-person team to outperform much larger teams",
        "Reduced onboarding time by 50%",
        "Shifted designers from execution to systems thinking",
        "Created a foundation now expanding into D2C systems"
      ],
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    reflection: {
      content: "Design systems don’t just scale files — they scale people. By designing structure, language, and logic into the system, I was able to influence how teams collaborate, make decisions, and solve problems. The Ripple Effect demonstrates how design system architecture can operate as organizational infrastructure.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Operations", "Scalability", "Ecosystem"],
    
    psychology: {
      principle: "Systems Thinking",
      definition: "A holistic approach to analysis that focuses on the way that a system's constituent parts interrelate and how systems work over time and within the context of larger systems.",
      application: "We moved from viewing assets as isolated deliverables to viewing them as connected nodes in a larger operational ecosystem.",
    },
    ux_research: {
      method: "Operational Analytics",
      hypothesis: "Streamlining the 'trinity' asset workflow will increase throughput by 300% without adding headcount.",
      finding: "Asset production scaled from hundreds to 8,000+ annually with the same team size.",
    },
    system_architecture: {
      component_count: 5000,
      adoption_percentage: 100,
      legacy_debt_reduction: "N/A (New Infrastructure)",
      topology: "Operational Mesh Network",
    },
  },
  {
    id: "brand-integration-tanx",
    title: "Brand Integration System — Research-Driven Asset Handoff & System Expansion",
    subtitle: "Brand-to-Digital Integration (TANX)",
    summary: "I designed a cross-functional handoff framework called TANX to standardize how branding assets plug into the Genesis design system.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect",
    tools: ["Figma", "Genesis System", "Research Frameworks", "Variables", "Components"],
    duration: "2024",
    focus: "Cross-Team Collaboration, UX Research, System Expansion, Brand-to-Digital Integration",
    
    brief: {
      issue: "Branding and digital teams worked in isolation. Branding created assets, but digital often rebuilt them due to lack of standardized handoff. No common naming convention or file logic existed, causing delays and inconsistency.",
      solution: "This project began with **UX research**, evolved into a **strategic collaboration with branding**, and resulted in the creation of a **cross-functional handoff framework called TANX** — which was successfully tested, validated, and adopted.",
      images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "**Research Process**\nI worked directly with Annissa (branding) to observe how assets were created, identify handoff friction, and define common pain points. I also met with Bree (Brand Director) to understand hesitations and discuss how governance could empower creativity.",
      images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    architecture: {
      content: "**Strategy & Solution — The TANX System**\nI proposed a brand-to-digital pipeline built into Figma. The TANX Framework allowed branding to upload assets to a staging file, applied standard naming conventions, and let digital designers 'pull' approved assets directly into their DSGs.",
      images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1634942537034-2531766767d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      contents: [
        "**Testing & Live Integration**\nI worked with Annissa to stage the TANX file, import real assets, apply naming/variable logic, and push the updated template into active production. This test went live in under 48 hours.",
      ],
      images: ["https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Reduced brand-to-digital handoff time from 2+ weeks to <48 hours",
        "Unified branding assets and digital systems without creative compromise",
        "Empowered branding to work with system rules, not around them",
        "Introduced shared language and expectations between teams",
        "TANX now serves as a blueprint for future handoff models"
      ],
      images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    reflection: {
      content: "This project wasn't just about asset management — it was about system trust. By involving Annissa and Bree from the start, I shifted the perception of the system from 'digital-only' to a shared operating layer. The TANX system proves that great systems don’t just store assets — they build relationships.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Collaboration", "Strategy", "Handoff"],
    
    psychology: {
      principle: "Social Identity Theory",
      definition: "A person’s sense of who they are based on their group membership.",
      application: "We bridged the 'Brand' vs 'Digital' divide by creating a shared 'System' identity (TANX) that both teams co-owned.",
    },
    ux_research: {
      method: "Participatory Design (Co-Design)",
      hypothesis: "Involving the brand team in the system creation will increase adoption by 50%.",
      finding: "Adoption was near 100% because the brand team felt the system solved their specific pain points, rather than being imposed on them.",
    },
    system_architecture: {
      component_count: 1,
      adoption_percentage: 100,
      legacy_debt_reduction: "90% (Handoff Time)",
      topology: "Federated Architecture",
    },
  },
  {
    id: "figma-governance",
    title: "Figma Governance System — Scalable Naming, Variables, & File Logic",
    subtitle: "File Architecture & Governance",
    summary: "I created the 'Operating System' of our Genesis design system — establishing naming, file structure, and variable logic to scale across 60+ brands.",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect",
    tools: ["Figma", "Genesis System", "Variables", "Component Naming", "Version Control"],
    duration: "2022 – Present",
    focus: "Scalable File Architecture, Component Logic, Team Collaboration, Dev Handoff Prep",
    
    brief: {
      issue: "At the scale of 60+ brands, inefficiencies compounded. Inconsistent file naming and component logic led to broken exports, QA issues, and confused onboarding. There was no shared 'Operating System' for how files should be built.",
      solution: "I created a **governance model inside Figma** that standardized file architecture, naming conventions, variable usage, and export logic. This system is now the backbone of Genesis and is compatible with GitHub and Dev Mode.",
      images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    research: {
      content: "**Challenges**\nDesigners were recreating components with slight name changes, breaking exports and causing dev confusion. There were no shared rules for folders or variables, making version control manual and error-prone.",
      images: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    architecture: {
      content: "**What I Built**\n✅ A structured naming system (ComponentType/Function/State)\n✅ Variable tokens for color, type, and layout\n✅ File hierarchy logic: Main Genesis → Brand DSGs → Production files\n✅ Automated export system for consistent file naming\n✅ Shared component libraries with override-ready variants",
      images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    framework: {
      contents: [
        "**How It Works In Production**\nDesigners work in parallel in branded DSGs without conflicts. Assets auto-export with standardized names for eCommerce. Developers inspect assets using Dev Mode without confusion. The system is plug-and-play with GitHub prep.",
      ],
      images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Reduced component duplication by 80%",
        "Cut onboarding confusion — new hires understand logic in days",
        "Enabled multi-designer collaboration without conflict",
        "Reduced export errors and QA requests",
        "Genesis system now compatible with Dev Mode and GitHub"
      ],
      images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    reflection: {
      content: "A design system isn’t just about reusable components — it’s about how those components are understood, shared, and maintained. This governance model turned chaos into structure. Governance is what makes design truly scalable.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Governance", "Figma", "Scale"],
    
    psychology: {
      principle: "Mental Models",
      definition: "An explanation of someone's thought process about how something works in the real world.",
      application: "By aligning the file structure with the developers' mental model of the codebase (Component/Prop/State), we reduced handoff friction to near zero.",
    },
    ux_research: {
      method: "Tree Testing (Navigation)",
      hypothesis: "Standardized naming conventions will reduce the time it takes to find a specific asset by 70%.",
      finding: "Time-to-find dropped significantly, and 'asset not found' errors were virtually eliminated.",
    },
    system_architecture: {
      component_count: 1000,
      adoption_percentage: 100,
      legacy_debt_reduction: "80% (Duplication)",
      topology: "Strict Hierarchical Taxonomy",
    },
  },
  {
    id: "ada-blueprint",
    title: "ADA-Compliant Enhanced Content & Blueprint Training System",
    subtitle: "Accessibility & Training System",
    summary: "I designed an ADA-compliant enhanced content system within Genesis that unified visual accessibility, design scalability, and onboarding.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [],
    
    role: "Design Systems Architect",
    tools: ["Figma", "Genesis System", "Variables", "Blueprint Templates"],
    duration: "2023 – Present",
    focus: "Accessibility, Training, System Reuse, Production Efficiency",
    
    brief: {
      issue: "No accessibility standards were in place. Inconsistent use of type size, contrast, or layout spacing led to slow production timelines and revisions. Designers lacked reusable logic for building content, and ADA compliance was not built into the design process.",
      solution: "To ensure our content was inclusive, reusable, and compliant with accessibility standards, I designed an ADA-compliant enhanced content system within Genesis. This system was built to power all A+ content across mobile and desktop experiences while also serving as a **live training tool** for new designers.",
      images: ["https://images.unsplash.com/photo-1573497620053-ea5300f94f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    architecture: {
      content: "**What I Built**\n✅ Fully responsive A+ templates (standard + premium)\n✅ Variable token-driven ADA color and typography rules\n✅ Built-in content zones to support translations and localization\n✅ Blueprint overlays for teaching ADA spacing, color contrast, and visual hierarchy\n✅ Mobile-first logic to account for real-world usage",
      images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", "https://images.unsplash.com/photo-1558494949-efc535b5fa12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    training: {
      content: "**Blueprint As A Teaching Tool**\nThese templates were designed to **teach by doing**. Each blueprint highlighted live component structure, contained ADA alerts (contrast, tap size), used color-coded annotations to explain layout intent, and walked new designers step-by-step through creation.",
      images: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"]
    },
    
    kpis: {
      stats: [
        "Cut production time by 60%",
        "Onboarded designers (like Amber) in 1.5 months vs. 3",
        "ADA compliance built into all content from the start",
        "60+ brands now use these templates as default",
        "Reduced revision rounds by ~40% due to clarity and structure"
      ]
    },
    
    reflection: {
      content: "Design systems should be inclusive — not just scalable. By embedding accessibility into the foundation of our templates, I created a system that meets legal standards, supports internal education, and reduces production friction at every level.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    
    tags: ["Accessibility", "Training", "Templates"],
    
    psychology: {
      principle: "Inclusive Design",
      definition: "Designing for the diverse range of human abilities and backgrounds.",
      application: "We baked ADA standards (contrast, touch targets) directly into the token system, ensuring that 'accessible' is the default state, not an afterthought.",
    },
    ux_research: {
      method: "Heuristic Evaluation (Accessibility Audit)",
      hypothesis: "Standardizing ADA compliance at the component level will reduce QA failures by 90%.",
      finding: "Accessibility-related QA flags dropped to near zero, as the system prevented non-compliant combinations.",
    },
    system_architecture: {
      component_count: 25,
      adoption_percentage: 100,
      legacy_debt_reduction: "40% (Revisions)",
      topology: "Modular Design",
    },
  },
];
