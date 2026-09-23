import Image from 'next/image';
import bannerImg from "@/assets/banner.png";
const Banner = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#121318] border border-neutral-800/60 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[380px]">
        
        {/* Left Column: Content */}
        <div className="flex-1 max-w-xl z-10">
          {/* Subtitle / Category badge */}
          <span className="text-[#a3e635] text-xs md:text-sm font-bold uppercase tracking-wider block mb-4">
            WORKOUT LIBRARY
          </span>

          {/* Main Headline */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-sans">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Description Text */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Column: Image Placeholder */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80 flex items-center justify-center md:justify-end">
          {/* Replace src with your exercise illustration path */}
          <Image
            src={bannerImg} 
            alt="Workout Exercise Illustration"
            width={400}
            height={400}
            priority
            className="object-contain max-h-full w-auto drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
    );
};

export default Banner;