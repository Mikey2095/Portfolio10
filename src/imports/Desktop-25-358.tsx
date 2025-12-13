import svgPaths from "./svg-3ngjiqxtmw";
import imgImage from "figma:asset/90393dbc86ed710f4a687c1d34b9f0683d7a1d35.png";
import imgImage2 from "figma:asset/333b3340fadcdaa8146b5650815606191dbebfae.png";

function LogoPrimary() {
  return (
    <div className="h-[85.488px] relative shrink-0 w-[306.069px]" data-name="Logo/Primary">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 86">
        <g id="Logo/Primary">
          <g id="MICHAEL ANGELO TORRES">
            <path d={svgPaths.p35345b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3eec6370} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27e7ca00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p997a000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e143cc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33a13a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18d85cf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc0f7700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b3c8f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1cfaf680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28184980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p122d5a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ae9dd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26f6db00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc65df40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ba5d200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1825b880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p362d7940} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36336100} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LogoContain() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[356.2005615234375px] relative shrink-0" data-name="Logo contain">
      <LogoPrimary />
    </div>
  );
}

function Nav() {
  return (
    <nav className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-center leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.08px]" data-name="Nav">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Work</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Resume</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Contact</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Hire me</p>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-black content-stretch flex items-center justify-between px-[64px] py-[24px] relative shrink-0 w-[1280px]" data-name="Header 1">
      <LogoContain />
      <Nav />
    </header>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#434343] text-[0px] tracking-[-0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none text-[24px]">
          <span>{`I'm Michael Angelo Torres, born and raised in Phoenix, Arizona, I became passionate about design, technology and science early on. As a Design System Architect, I create systems and processes that connect user needs with design solutions, from sketches to prototypes, to `}</span>
          <span className="font-['Instrument_Sans:Medium',sans-serif] font-medium tracking-[-0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            0→1 Initiatives
          </span>
          <span>
            .<br aria-hidden="true" />
            <br aria-hidden="true" />
            {`I aim to provide users with an exceptional experience that builds trust in products and services. My expertise includes, Design System Architecture, Front end design, Product Design, User Experience/User Interface (UXUI) Design, 3D Modeling & Rendering. My solutions make a positive impact to your business.`}
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[37px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[64px] text-[rgba(0,0,0,0.55)] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h1 className="block leading-none">About me</h1>
      </div>
      <Text />
    </div>
  );
}

function Feature() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[37px] items-center justify-center pb-[120px] pt-0 px-[120px] relative w-full">
          <div className="aspect-[624/770.977] basis-0 grow min-h-px min-w-px opacity-95 relative rounded-[16px] shrink-0" data-name="Image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
              <div className="absolute bg-white inset-0 rounded-[16px]" />
              <img alt="" className="absolute max-w-none mix-blend-luminosity object-50%-50% object-cover rounded-[16px] size-full" src={imgImage} />
            </div>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="content-stretch flex flex-col items-start px-0 py-[55px] relative shrink-0 w-full" data-name="Intro">
      <Feature />
    </section>
  );
}

function Experience1() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[0] mb-[-17px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-nowrap tracking-[-0.09px] w-full" data-name="Experience 1">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">{`MVCD `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Master of Visual Communcation Design</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right">
        <p className="leading-[1.45] text-nowrap whitespace-pre">2021</p>
      </div>
    </div>
  );
}

function Experience2() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[0] mb-[-17px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-nowrap tracking-[-0.09px] w-full" data-name="Experience 2">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">BFA</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Bachelor of Fine Arts - Drawing</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right">
        <p className="leading-[1.45] text-nowrap whitespace-pre">2018</p>
      </div>
    </div>
  );
}

function Experience3() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[0] mb-[-17px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-nowrap tracking-[-0.09px] w-full" data-name="Experience 3">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">A.A</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.45] text-nowrap whitespace-pre">Associate of Arts</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right">
        <p className="leading-[1.45] text-nowrap whitespace-pre">2015</p>
      </div>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] pt-0 px-0 relative shrink-0 w-full" data-name="Rows">
      <Experience1 />
      <Experience2 />
      <Experience3 />
    </div>
  );
}

function Experience() {
  return (
    <section className="relative shrink-0 w-full" data-name="Experience">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[35px] items-start px-[120px] py-[40px] relative w-full">
          <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[64px] text-[rgba(0,0,0,0.55)] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h2 className="block leading-none">EDUCATION</h2>
          </div>
          <Rows />
        </div>
      </div>
    </section>
  );
}

function Experience6() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[0] mb-[-1px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full" data-name="Experience 1">
      <div className="flex flex-col justify-center relative shrink-0 w-[300px]">
        <p className="leading-[1.45]">Sr. Digital Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[300px]">
        <p className="leading-[1.45]">Bestway USA</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right w-[300px]">
        <p className="leading-[1.45]">2025</p>
      </div>
    </div>
  );
}

function Experience5() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[0] mb-[-1px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full" data-name="Experience 5">
      <div className="flex flex-col justify-center relative shrink-0 w-[300px]">
        <p className="leading-[1.45]">Digital Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[300px]">
        <p className="leading-[1.45]">Bestway USA</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right w-[300px]">
        <p className="leading-[1.45]">2022 to 2024</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-center text-nowrap tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">
          <span>{`Hispanic Heritage Month Campaign - `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">{`ASU Marketing `}</span>
        </p>
      </div>
    </div>
  );
}

function Experience7() {
  return (
    <div className="content-stretch flex items-start justify-between mb-[-1px] pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Experience 3">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[300px]">
        <p className="leading-[1.45]">Special Project</p>
      </div>
      <Frame />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-right tracking-[-0.09px] w-[300px]">
        <p className="leading-[1.45]">2021</p>
      </div>
    </div>
  );
}

function Experience4() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[0] mb-[-1px] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full" data-name="Experience 4">
      <div className="flex flex-col justify-center relative shrink-0 w-[300px]">
        <p className="leading-[1.45]">Online Instructor (Summer)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[300px]">
        <p className="leading-[1.45]">ASU Design School</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right w-[300px]">
        <p className="leading-[1.45]">2021</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[384px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-center text-nowrap tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">
          <span>{`The Mint Cannabis - `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium not-italic">Marketing</span>
        </p>
      </div>
    </div>
  );
}

function Experience8() {
  return (
    <div className="content-stretch flex items-start justify-between mb-[-1px] pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Experience 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[300px]">
        <p className="leading-[1.45]">Visual Designer</p>
      </div>
      <Frame2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-right tracking-[-0.09px] w-[300px]">
        <p className="leading-[1.45]">2019-2021</p>
      </div>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Rows">
      <Experience6 />
      <Experience5 />
      <Experience7 />
      <Experience4 />
      <Experience8 />
    </div>
  );
}

function Experience9() {
  return (
    <section className="relative shrink-0 w-full" data-name="Experience">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[35px] items-start px-[120px] py-[40px] relative w-full">
          <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[64px] text-[rgba(0,0,0,0.55)] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h2 className="block leading-none">EXPERIENCE</h2>
          </div>
          <Rows1 />
        </div>
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-[381px] items-start justify-center leading-[0] min-h-px min-w-px relative shrink-0" data-name="Main content">
      <div className="flex flex-col font-['ED_Manteca:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[37px] text-black text-nowrap tracking-[-1.11px]">
        <h2 className="block leading-none whitespace-pre">Interests and hobbies</h2>
      </div>
      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#434343] text-[24px] tracking-[-0.12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none whitespace-pre-wrap">{`Beyond my professional experience, I enjoy going to the gym, concerts and even traveling when I have the time. These interests allow me to  be more clear minded and open opportunities when exploring new creative ideas. They are an important part of who I am and how I bring fresh perspectives to my work.`}</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="size-full">
        <div className="content-stretch flex gap-[25px] items-start px-[120px] py-[80px] relative w-full">
          <div className="basis-0 grow h-[381px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
          </div>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="h-[465px] relative shrink-0 w-full" data-name="Gallery">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex flex-wrap gap-[4px] items-center justify-center px-[120px] py-0 relative size-full">
          <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image 1">
            <video autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop playsInline>
              <source src="/_videos/v1/663aac46ae5a6952f751d30a88472677069619c7" />
            </video>
          </div>
          <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image 5">
            <video autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop playsInline>
              <source src="/_videos/v1/7953de12ee612bb3d6a1863b0a930dab2820cbde" />
            </video>
          </div>
          <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image 4">
            <video autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop playsInline>
              <source src="/_videos/v1/50a7b7a465b3b02f1b929bd2599c4223ca47274a" />
            </video>
          </div>
          <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image 3">
            <video autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controlsList="nodownload" loop playsInline>
              <source src="/_videos/v1/b37deb84e296249b8923e1f6665d2a2c9ca522be" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

function Interests() {
  return (
    <section className="content-stretch flex flex-col items-start pb-[71px] pt-0 px-0 relative shrink-0 w-full" data-name="Interests">
      <Body />
      <Gallery />
    </section>
  );
}

function Container() {
  return (
    <main className="bg-white content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Container" tabIndex="-1">
      <Intro />
      <Experience />
      <Experience9 />
      <Interests />
    </main>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[rgba(0,0,0,0.71)] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Desktop">
      <Header />
      <Container />
    </div>
  );
}