import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-7uf95270qd";

function LogoPrimary() {
  return (
    <div className="h-[60px] md:h-[85px] relative shrink-0 w-[200px] md:w-[289px]" data-name="Logo/Primary">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 289 85">
        <g id="Logo/Primary">
          <g id="MICHAEL ANGELO TORRES">
            <path d={svgPaths.p11cbc880} fill="white" />
            <path d={svgPaths.p264e6b80} fill="white" />
            <path d={svgPaths.p23d081b0} fill="white" />
            <path d={svgPaths.p210010c0} fill="white" />
            <path d={svgPaths.p21cccc80} fill="white" />
            <path d={svgPaths.p710e10} fill="white" />
            <path d={svgPaths.p756680} fill="white" />
            <path d={svgPaths.p11b498f0} fill="white" />
            <path d={svgPaths.p36443000} fill="white" />
            <path d={svgPaths.p20d35840} fill="white" />
            <path d={svgPaths.p9045100} fill="white" />
            <path d={svgPaths.p1b432a00} fill="white" />
            <path d={svgPaths.pded8380} fill="white" />
            <path d={svgPaths.p1096d680} fill="white" />
            <path d={svgPaths.p3a2f0100} fill="white" />
            <path d={svgPaths.p2763df00} fill="white" />
            <path d={svgPaths.p3dc6700} fill="white" />
            <path d={svgPaths.pf70c00} fill="white" />
            <path d={svgPaths.p338b9100} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Work", "Resume", "Contact", "Hire me"];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm text-white">
      <div className="max-w-[1920px] mx-auto px-4 md:px-[64px] py-4 md:py-[24px] flex items-center justify-between">
        <LogoPrimary />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex font-['Instrument_Sans'] font-semibold gap-[32px] items-center text-[20px] tracking-[-1px]">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:opacity-70 transition-opacity">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black p-4 flex flex-col gap-4 text-center border-t border-gray-800">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="text-xl font-medium py-2 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
