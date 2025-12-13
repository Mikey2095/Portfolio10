import svgPathsDesktop from "../../imports/svg-7uf95270qd";
import svgPathsMobile from "../../imports/svg-uqwp77s1tu";

function DesktopLogo() {
  return (
    <div className="hidden md:block w-[600px] h-[555px] lg:w-[1012px] lg:h-[937px]">
      <svg className="block size-full" fill="none" viewBox="0 0 1013 937">
        <g id="Logo/Primary-Desktop">
          <g id="Vector">
            <path d={svgPathsDesktop.p2107fc00} fill="#928B8B" />
            <path d={svgPathsDesktop.p1a2031f0} fill="#928B8B" />
            <path d={svgPathsDesktop.p139bf900} fill="#928B8B" />
            <path d={svgPathsDesktop.p28878800} fill="#928B8B" />
            <path d={svgPathsDesktop.p1b3bb700} fill="#928B8B" />
            <path clipRule="evenodd" d={svgPathsDesktop.p7fc9a80} fill="#928B8B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPathsDesktop.p37bc6d40} fill="#928B8B" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MobileLogo() {
  return (
    <div className="block md:hidden w-[81px] h-[70px]">
      <svg className="block size-full" fill="none" viewBox="0 0 81 70">
        <g id="Logo/Primary-Mobile">
          <g id="Vector">
            <path d={svgPathsMobile.p2e0eea80} fill="#928B8B" />
            <path d={svgPathsMobile.p3228cf00} fill="#928B8B" />
            <path d={svgPathsMobile.p3caeb400} fill="#928B8B" />
            <path d={svgPathsMobile.p645ba00} fill="#928B8B" />
            <path d={svgPathsMobile.p299e6700} fill="#928B8B" />
            <path clipRule="evenodd" d={svgPathsMobile.p2c5d0d80} fill="#928B8B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPathsMobile.p3818e700} fill="#928B8B" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function BigLogo() {
  return (
    <div className="pointer-events-none opacity-50 md:opacity-30">
      <DesktopLogo />
      <MobileLogo />
    </div>
  );
}
