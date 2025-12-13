import svgPaths from "../../imports/svg-xu693zs81f";
import { Projects } from "../Projects";

function LogoPrimary() {
  return (
    <div className="h-[85px] relative shrink-0 w-[289px]" data-name="Logo/Primary">
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
    <nav className="content-stretch flex font-['Instrument_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-center leading-[0] p-0 relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[-1px]" data-name="Nav">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none text-nowrap whitespace-pre cursor-pointer hover:text-gray-300 transition-colors">Work</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none text-nowrap whitespace-pre cursor-pointer hover:text-gray-300 transition-colors">Resume</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none text-nowrap whitespace-pre cursor-pointer hover:text-gray-300 transition-colors">Contact</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none text-nowrap whitespace-pre cursor-pointer hover:text-gray-300 transition-colors">Hire me</p>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="bg-[rgba(0,0,0,0.71)] content-stretch flex items-center justify-between max-w-[800px] px-[64px] py-[24px] relative shrink-0 w-[800px]" data-name="Header 1">
      <LogoContain />
      <Nav />
    </header>
  );
}

function LogoPrimary1() {
  return (
    <div className="absolute bottom-[0.16px] h-[359.836px] right-[0.08px] w-[420.919px]" data-name="Logo/Primary">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421 360">
        <g id="Logo/Primary">
          <g id="Vector">
            <path d={svgPaths.p2955c5f0} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p32830580} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p320f9e80} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p1ab2c00} fill="var(--fill-0, #928B8B)" />
            <path d={svgPaths.p7fb0a00} fill="var(--fill-0, #928B8B)" />
            <path clipRule="evenodd" d={svgPaths.p6b36100} fill="var(--fill-0, #928B8B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pa38cc00} fill="var(--fill-0, #928B8B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OfficeContain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-white w-[201px]" data-name="Office contain">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        LOCATED
      </p>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[16px] tracking-[-0.48px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PHOENIX ARIZONA
      </p>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[10px] items-start leading-[1.1] relative shrink-0 text-[16px] text-white tracking-[-0.48px] uppercase w-full" data-name="Contact links">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        602. 585. 6560
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        MATVD.CO@GMAIL.COM
      </p>
    </div>
  );
}

function ContactContain() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Contact contain">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[20px] text-white tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinks />
    </div>
  );
}

function OfficeContain1() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-[227px]" data-name="Office contain">
      <OfficeContain />
      <ContactContain />
    </div>
  );
}

function SocialContain() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 text-white w-[89px]" data-name="Social contain">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <a className="block font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] tracking-[-0.48px] uppercase w-full" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-[1.1]">LinkedIn</p>
      </a>
    </div>
  );
}

function FooterText() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[800px] pb-0 pt-[100px] px-[35px] relative shrink-0 w-[800px]" data-name="Footer text">
      <OfficeContain1 />
      <SocialContain />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(49,49,49,0)] h-[702px] items-center px-0 py-[55px] relative shrink-0 to-[#000000] w-full">
      <p className="font-['ED_Manteca:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[100px] text-center text-white tracking-[-5px] uppercase w-[min-content]">DESIGN SYSTEM ARCHITECT</p>
      <FooterText />
    </div>
  );
}

function IntroContent() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[108px] relative shrink-0 w-full" data-name="Intro content">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none max-w-[820px] relative shrink-0 text-[64px] text-black text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        I craft the visual architecture that shapes how your brand is seen, used, and remembered.
      </p>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Intro section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[15px] pt-[45px] px-[48px] relative w-full">
          <IntroContent />
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex items-start max-w-[633px] relative shrink-0 w-[633px]" data-name="Intro">
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[24px] text-black tracking-[-0.12px] w-[399px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 text-black w-[387px]" data-name="Stat 1">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[142px] tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        60%
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Faster design production with scalable systems boosts efficiency and accuracy in brand content.
      </p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 text-black w-[387px]" data-name="Stat 2">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[142px] tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        50+
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        My design systems support over 50 licensed and in-house brands, enhancing consistency by 95% and driving $120k+ in product launches.
      </p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 text-black w-[387px]" data-name="Stat 3">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[142px] tracking-[-7.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        850+
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] tracking-[-0.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Units sold in under 8 hours thanks to system-enhanced content, leading to higher conversion rates.
      </p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Stats">
      <Stat />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642 1">
            <path d="M0 0.5H642" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642 1">
            <path d="M0 0.5H642" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat2 />
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px] whitespace-pre cursor-pointer hover:text-black transition-colors" data-name="Text link">
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
    <div className="content-stretch flex flex-col gap-[73px] items-start max-w-[642px] relative shrink-0 w-full" data-name="Stats contain">
      <Stats />
      <TextLink />
    </div>
  );
}

function StatsContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stats content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[108px] items-start px-[63.8px] py-0 relative size-full">
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

export function TabletView() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Tablet">
      <div aria-hidden="true" className="absolute h-[835px] left-0 top-0 w-full" data-name="20250416_1923_Mesmerizing Black Sphere_simple_compose_01js0ry4wzepdrmn7zhfwqc9h5 1" role="presentation">
        <video aria-hidden="true" autoPlay muted loop playsInline className="absolute max-w-none object-cover size-full" controlsList="nodownload" role="presentation">
          <source src="/_videos/v1/9fbab25563d4ef676c4ed6e8027ad521968a871c" />
        </video>
      </div>
      <Header />
      <LogoPrimary1 />
      <Frame1 />
      <IntroSection />
      
      <Projects />

      <StatsSection />
    </div>
  );
}
