
import Image from 'next/image';
import footerlogo from "@/assets/logo.png";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer className="w-full bg-[#0a0a0a] border-t border-neutral-800 text-neutral-400 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center gap-2">
          {/* Replace src with your actual logo path */}
          <Image
            src={footerlogo} 
            alt="FITLOG Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span className="text-white font-black tracking-wider uppercase text-base">
            FITLOG
          </span>
        </div>

        {/* Right: Copyright & Tagline */}
        <div className="text-xs sm:text-sm text-neutral-500 text-center sm:text-right font-normal">
          © {year} FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
        </div>
    );
};

export default Footer;