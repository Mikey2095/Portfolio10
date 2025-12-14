import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-3ngjiqxtmw";

// Placeholder Images
const imgPortrait = "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/PortraitImage.jpg";
const imgInterests = "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/Interest.jpg";

const videoLinks = [
  "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/IMG_4735.mp4",
  "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/IMG_4472.mov",
  "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/IMG_4126.mp4",
  "https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/IMG_3971.mov"
];

function LogoPrimary() {
  return (
    <div className="h-[85.488px] relative shrink-0 w-[306.069px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 86">
        <g id="Logo/Primary">
          <g id="MICHAEL ANGELO TORRES">
            <path d={svgPaths.p35345b00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p3eec6370} fill="currentColor" className="text-white" />
            <path d={svgPaths.p27e7ca00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p997a000} fill="currentColor" className="text-white" />
            <path d={svgPaths.p1e143cc0} fill="currentColor" className="text-white" />
            <path d={svgPaths.p33a13a00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p18d85cf0} fill="currentColor" className="text-white" />
            <path d={svgPaths.pc0f7700} fill="currentColor" className="text-white" />
            <path d={svgPaths.p3b3c8f00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p1cfaf680} fill="currentColor" className="text-white" />
            <path d={svgPaths.p28184980} fill="currentColor" className="text-white" />
            <path d={svgPaths.p122d5a00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p1ae9dd00} fill="currentColor" className="text-white" />
            <path d={svgPaths.p26f6db00} fill="currentColor" className="text-white" />
            <path d={svgPaths.pc65df40} fill="currentColor" className="text-white" />
            <path d={svgPaths.p3ba5d200} fill="currentColor" className="text-white" />
            <path d={svgPaths.p1825b880} fill="currentColor" className="text-white" />
            <path d={svgPaths.p362d7940} fill="currentColor" className="text-white" />
            <path d={svgPaths.p36336100} fill="currentColor" className="text-white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex font-['Instrument_Sans',sans-serif] font-medium gap-[32px] items-center text-[16px] text-white tracking-[-0.08px]">
      <Link to="/" className="hover:opacity-70 transition-opacity">Work</Link>
      <Link to="/about" className="hover:opacity-70 transition-opacity text-gray-300">About</Link>
      <Link to="#" className="hover:opacity-70 transition-opacity">Contact</Link>
      <Link to="#" className="hover:opacity-70 transition-opacity">Hire me</Link>
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-black flex items-center justify-between px-[20px] md:px-[64px] py-[24px] w-full max-w-[1280px] mx-auto">
      <Link to="/">
        <LogoPrimary />
      </Link>
      <Nav />
    </header>
  );
}

function AboutText() {
  return (
    <div className="flex flex-col items-start justify-center w-full text-[#434343]">
      <p className="font-['Instrument_Sans',sans-serif] text-[18px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.12px]">
        <span>{`I'm Michael Angelo Torres, born and raised in Phoenix, Arizona, I became passionate about design, technology and science early on. As a Design System Architect, I create systems and processes that connect user needs with design solutions, from sketches to prototypes, to `}</span>
        <span className="font-bold">0→1 Initiatives</span>
        <span>
          .<br /><br />
          {`I aim to provide users with an exceptional experience that builds trust in products and services. My expertise includes, Design System Architecture, Front end design, Product Design, User Experience/User Interface (UXUI) Design, 3D Modeling & Rendering. My solutions make a positive impact to your business.`}
        </span>
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[120px] py-[40px] md:py-[55px]">
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[37px] items-center justify-center">
        <div className="aspect-[624/770] w-full md:flex-1 relative rounded-[16px] overflow-hidden bg-gray-200">
           <img alt="Portrait" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src={imgPortrait} />
        </div>
        <div className="w-full md:flex-1 flex flex-col gap-[20px] md:gap-[37px]">
          <h1 className="font-['Instrument_Sans',sans-serif] text-[40px] md:text-[64px] text-[rgba(0,0,0,0.55)] uppercase leading-none">About me</h1>
          <AboutText />
        </div>
      </div>
    </section>
  );
}

function EducationRow({ code, title, year }: { code: string; title: string; year: string }) {
  return (
    <div className="flex flex-col md:flex-row font-['Instrument_Sans',sans-serif] font-medium items-start md:items-center justify-between text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] border-b border-gray-200 py-[24px] gap-2 md:gap-0">
      <div className="w-full md:w-24 shrink-0 font-bold md:font-medium">{code}</div>
      <div className="grow">{title}</div>
      <div className="shrink-0 text-gray-400 md:text-inherit">{year}</div>
    </div>
  );
}

function EducationSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[120px] py-[40px]">
      <div className="flex flex-col gap-[35px]">
        <h2 className="font-['Instrument_Sans',sans-serif] text-[40px] md:text-[64px] text-[rgba(0,0,0,0.55)] uppercase leading-none">EDUCATION</h2>
        <div className="w-full">
          <EducationRow code="MVCD" title="Master of Visual Communcation Design" year="2021" />
          <EducationRow code="BFA" title="Bachelor of Fine Arts - Drawing" year="2018" />
          <EducationRow code="A.A" title="Associate of Arts" year="2015" />
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ role, company, year }: { role: string; company: string | React.ReactNode; year: string }) {
  return (
    <div className="flex flex-col md:flex-row font-['Instrument_Sans',sans-serif] font-medium items-start md:items-center justify-between text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] border-b border-gray-200 py-[24px] gap-2 md:gap-0">
      <div className="w-full md:w-[300px] shrink-0 font-bold md:font-medium">{role}</div>
      <div className="w-full md:w-[300px] shrink-0 md:text-center text-gray-600">{company}</div>
      <div className="w-full md:w-[300px] shrink-0 md:text-right text-gray-400 md:text-inherit">{year}</div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[120px] py-[40px]">
      <div className="flex flex-col gap-[35px]">
        <h2 className="font-['Instrument_Sans',sans-serif] text-[40px] md:text-[64px] text-[rgba(0,0,0,0.55)] uppercase leading-none">EXPERIENCE</h2>
        <div className="w-full">
           <ExperienceRow role="Sr. Digital Designer" company="Bestway USA" year="2025" />
           <ExperienceRow role="Digital Designer" company="Bestway USA" year="2022 to 2024" />
           <ExperienceRow 
             role="Special Project" 
             company={<span>Hispanic Heritage Month Campaign - <span className="font-bold">ASU Marketing</span></span>} 
             year="2021" 
           />
           <ExperienceRow role="Online Instructor (Summer)" company="ASU Design School" year="2021" />
           <ExperienceRow 
             role="Visual Designer" 
             company={<span>The Mint Cannabis - <span className="font-bold">Marketing</span></span>} 
             year="2019-2021" 
           />
        </div>
      </div>
    </section>
  );
}

function InterestsSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-[20px] md:px-[120px] py-[40px] md:py-[80px]">
      {/* Top Part: Image + Text */}
      <div className="flex flex-col md:flex-row gap-[25px] items-start mb-[25px]">
         <div className="w-full md:flex-1 h-[300px] md:h-[381px] rounded-[16px] overflow-hidden bg-gray-200">
           <img alt="Interests" className="w-full h-full object-cover" src={imgInterests} />
         </div>
         <div className="w-full md:flex-1 flex flex-col justify-center h-auto md:h-[381px] gap-[24px]">
            <h2 className="font-['ED_Manteca',sans-serif] text-[30px] md:text-[37px] text-black tracking-[-1.11px]">
              Interests and hobbies
            </h2>
            <p className="font-['Instrument_Sans',sans-serif] text-[18px] md:text-[24px] font-medium text-[#434343] tracking-[-0.12px] leading-tight">
              {`Beyond my professional experience, I enjoy going to the gym, concerts and even traveling when I have the time. These interests allow me to be more clear minded and open opportunities when exploring new creative ideas. They are an important part of who I am and how I bring fresh perspectives to my work.`}
            </p>
         </div>
      </div>

      {/* Gallery Grid (Video Placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4px] h-auto md:h-[465px]">
        {videoLinks.map((videoUrl, index) => (
          <div key={index} className="relative aspect-video md:aspect-auto h-auto md:h-full rounded-[16px] overflow-hidden bg-gray-900 group">
             <video 
               className="w-full h-full object-cover"
               autoPlay
               muted
               loop
               playsInline
             >
               <source src={videoUrl} type={videoUrl.endsWith('.mov') ? "video/quicktime" : "video/mp4"} />
             </video>
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center">
      <Header />
      <main className="w-full flex flex-col items-center">
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <InterestsSection />
      </main>
    </div>
  );
}
