import { HeroBackgroundLogo } from "./HeroBackgroundLogo";

function HeroFooter() {
  return (
    <div className="w-full max-w-[800px] flex flex-col md:flex-row items-center md:items-start justify-between text-white mt-auto pt-[40px] md:pt-[100px] px-4 md:px-[35px] z-10">
      <div className="flex flex-col gap-[30px] md:gap-[62px] text-center md:text-left">
        {/* Located */}
        <div className="flex flex-col gap-[5px]">
          <p className="font-semibold text-[16px] md:text-[20px] tracking-[-1px]">LOCATED</p>
          <p className="font-medium text-[14px] md:text-[16px] tracking-[-0.48px] uppercase">PHOENIX ARIZONA</p>
        </div>
        
        {/* Contact */}
        <div className="flex flex-col gap-[5px]">
          <p className="font-semibold text-[16px] md:text-[20px] tracking-[-1px]">CONTACT</p>
          <div className="font-medium text-[14px] md:text-[16px] tracking-[-0.48px] uppercase flex flex-col">
            <span>602. 585. 6560</span>
            <span>MATVD.CO@GMAIL.COM</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[30px] text-center md:text-left mt-8 md:mt-0">
        <p className="font-semibold text-[16px] md:text-[20px] tracking-[-1px]">SOCIAL</p>
        <a href="http://linkedin.com/company/figma" className="font-medium text-[14px] md:text-[16px] tracking-[-0.48px] uppercase hover:underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex flex-col items-center justify-center pt-[100px] pb-[50px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-80">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/_videos/v1/9fbab25563d4ef676c4ed6e8027ad521968a871c" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <HeroBackgroundLogo />

      {/* Main Text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <h1 className="font-manteca text-white text-[50px] sm:text-[72px] md:text-[100px] lg:text-[134px] leading-[0.9] text-center uppercase tracking-[-2px] md:tracking-[-6px]">
          Design System<br />Architect
        </h1>
      </div>

      <HeroFooter />
    </div>
  );
}
