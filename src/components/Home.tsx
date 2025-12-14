import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-kkj6a6odoq";
import { useEffect, useRef } from "react";
import { WorkSection } from "./WorkSection";
import { SkillsSection } from "./SkillsSection";

function LogoPrimary() {
  return (
    <div className="h-[60px] md:h-[85px] relative shrink-0 w-[200px] md:w-[289px]" data-name="Logo/Primary">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289 85">
        <g id="Logo/Primary">
          <g id="MICHAEL ANGELO TORRES">
            <path d={svgPaths.p11cbc880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p264e6b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23d081b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p210010c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p21cccc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p710e10} fill="var(--fill-0, white)" />
            <path d={svgPaths.p756680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11b498f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36443000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20d35840} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9045100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b432a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pded8380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1096d680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a2f0100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2763df00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3dc6700} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf70c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p338b9100} fill="var(--fill-0, white)" />
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
    <nav className="content-stretch flex font-['Instrument_Sans',sans-serif] font-semibold gap-[16px] md:gap-[32px] items-center leading-[0] p-0 relative shrink-0 text-[14px] md:text-[20px] text-center text-nowrap text-white tracking-[-0.5px] md:tracking-[-1px]" data-name="Nav">
      {["Work", "About", "Contact", "Hire me"].map((item) => (
        <div key={item} className="flex flex-col justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
          {item === "Work" ? (
             <a href="#work" className="leading-none text-nowrap whitespace-pre">{item}</a>
          ) : item === "About" ? (
             <Link to="/about" className="leading-none text-nowrap whitespace-pre">{item}</Link>
          ) : (
             <p className="leading-none text-nowrap whitespace-pre">{item}</p>
          )}
        </div>
      ))}
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-[rgba(0,0,0,0.71)] relative shrink-0 w-full z-10" data-name="Header 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] md:px-[64px] py-[16px] md:py-[24px] relative w-full bg-[rgb(0,0,0)]">
          <LogoContain />
          <Nav />
        </div>
      </div>
    </header>
  );
}

function LogoPrimary1() {
  return (
    <div className="absolute bottom-[50px] h-[500px] md:h-[937px] right-[-50px] md:right-[-105.4px] w-full md:w-[1012.274px] opacity-20 md:opacity-50 mix-blend-overlay pointer-events-none" data-name="Logo/Primary">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1013 937">
        <g id="Logo/Primary">
          <g id="Vector">
            <path d={svgPaths.p2107fc00} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p1a2031f0} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p139bf900} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p28878800} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p1b3bb700} fill="var(--fill-0, #928B8B)" />
            <path clipRule="evenodd" d={svgPaths.p7fc9a80} fill="var(--fill-0, #928B8B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p37bc6d40} fill="var(--fill-0, #928B8B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OfficeContain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-white w-full md:w-[201px]" data-name="Office contain">
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[16px] md:text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        LOCATED
      </p>
      <p className="font-['Instrument_Sans',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.48px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PHOENIX ARIZONA
      </p>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans',sans-serif] font-medium gap-[10px] items-start leading-[1.1] relative shrink-0 text-[14px] md:text-[16px] text-white tracking-[-0.48px] uppercase w-full" data-name="Contact links">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        602. 585. 6560
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        MATVD.CO@GMAIL.COm
      </p>
    </div>
  );
}

function ContactContain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Contact contain">
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[16px] md:text-[20px] text-white tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinks />
    </div>
  );
}

function OfficeContain1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] md:gap-[62px] items-start relative shrink-0 w-full md:w-[227px]" data-name="Office contain">
      <OfficeContain />
      <ContactContain />
    </div>
  );
}

function SocialContain() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 text-white w-full md:w-[89px]" data-name="Social contain">
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[16px] md:text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <a className="block font-['Instrument_Sans',sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.48px] uppercase w-full hover:text-gray-300 transition-colors" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-[1.1]">LinkedIn</p>
      </a>
    </div>
  );
}

function FooterText() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-12 md:gap-0 items-start justify-between max-w-[800px] pb-0 pt-[50px] md:pt-[100px] px-[20px] md:px-[35px] relative shrink-0 w-full md:w-[800px]" data-name="Footer text">
      <OfficeContain1 />
      <SocialContain />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col min-h-[50vh] md:h-[702px] items-center px-[20px] md:px-0 py-[55px] relative shrink-0 w-full z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.unsplash.com/photo-1640346876473-f76a73c71539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1NjU2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          className="h-full w-full object-cover"
        >
          <source src="https://raw.githubusercontent.com/Mikey2095/Portfolio10/main/src/assets/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(49,49,49,0)] to-[#000000]" />
      </div>
      <h1 className="font-['ED_Manteca',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[40px] md:text-[80px] lg:text-[134px] text-center text-white tracking-[-2px] md:tracking-[-6.7px] uppercase w-[min-content] select-none">DESIGN SYSTEM ARCHITECT</h1>
      <FooterText />
    </div>
  );
}

function IntroContent() {
  return (
    <div className="content-stretch flex flex-col items-center gap-[30px] px-0 py-[50px] md:py-[108px] relative shrink-0 w-full" data-name="Intro content">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Instrument_Sans',sans-serif] font-bold leading-none max-w-[1000px] relative shrink-0 text-[32px] md:text-[64px] text-black text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        I architect design systems that transform production, collaboration, and decision-making at scale.
      </p>
      <p>"I make sure everyone knows when to stop, go, and merge—so work moves faster."</p>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Intro section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[15px] pt-[20px] md:pt-[45px] px-[20px] md:px-[48px] relative w-full">
          <IntroContent />
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex items-start max-w-[633px] relative shrink-0" data-name="Intro">
      <p className="basis-0 font-['Instrument_Sans',sans-serif] font-medium grow leading-tight md:leading-none min-h-px min-w-px relative shrink-0 text-[18px] md:text-[24px] text-black tracking-[-0.12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I build systems that do more than organize design — they unify teams, tell consistent brand stories, and convert at scale.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        From 50+ brand systems to 8-hour product sellouts, my work turns structure into strategy—and strategy into results.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Intro />
    </div>
  );
}

function Stat() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] md:gap-[17px] items-start relative shrink-0 text-black w-full" data-name="Stat 1">
      <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[60px] md:text-[142px] tracking-[-3px] md:tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        60%
      </p>
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] md:text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Faster design production with scalable systems boosts efficiency and accuracy in brand content.
      </p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] md:gap-[17px] items-start relative shrink-0 text-black w-full" data-name="Stat 2">
      <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[60px] md:text-[142px] tracking-[-3px] md:tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        50+
      </p>
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] md:text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        My design systems support over 50 licensed and in-house brands, enhancing consistency by 95% and driving $120k+ in product launches.
      </p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] md:gap-[17px] items-start relative shrink-0 text-black w-full" data-name="Stat 3">
      <p className="font-['Instrument_Sans',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[60px] md:text-[142px] tracking-[-3px] md:tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        850+
      </p>
      <p className="font-['Instrument_Sans',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] md:text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Units sold in under 8 hours thanks to system-enhanced content, leading to higher conversion rates.
      </p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full md:w-[432px]" data-name="Stats">
      <Stat />
      <div className="h-0 relative shrink-0 w-full md:w-[432px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 1">
            <path d="M0 0.5H432" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat1 />
      <div className="h-0 relative shrink-0 w-full md:w-[432px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 1">
            <path d="M0 0.5H432" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat2 />
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans',sans-serif] font-medium gap-[3px] items-center leading-[1.1] relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px] whitespace-pre cursor-pointer hover:text-black transition-colors" data-name="Text link">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        More
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function StatsContain() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[73px] items-start max-w-[642px] relative shrink-0 w-full md:w-[432px]" data-name="Stats contain">
      <Stats />
      <TextLink />
    </div>
  );
}

function StatsContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stats content">
      <div className="size-full">
        <div className="content-stretch flex flex-col md:flex-row gap-[50px] md:gap-[50px] items-start md:px-[63.8px] py-[0px] relative w-full px-0">
          <Frame />
          <StatsContain />
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Stats section">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[15px] py-[50px] relative w-full">
          <StatsContent />
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative min-h-screen w-full overflow-x-hidden" data-name="Desktop">
      <Header />
      <LogoPrimary1 />
      <Frame1 />
      <IntroSection />
      <WorkSection />
      <SkillsSection />
      <StatsSection />
    </div>
  );
}
