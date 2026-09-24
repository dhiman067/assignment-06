import { Ifit } from '@/type';
import Image from 'next/image';
import { Calendar, Bookmark } from 'lucide-react';

const ExerciseDetail = ({data}:{data:Ifit}) => {
    return (
        <div className="w-full max-w-5xl mx-auto bg-[#0a0b0e] p-4 sm:p-6 md:p-8 rounded-3xl border border-neutral-800/80 shadow-2xl my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: Image */}
        <div className="relative w-full min-h-[24rem] h-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50">
          <Image
            src={data.image}
            alt={data.name}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Information */}
        <div className="flex flex-col gap-6">
          
          {/* Title & Description */}
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-wide font-sans mb-3">
              {data.name}
            </h1>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2">
            {data.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

         
            {/* Specifications Table */}
          <div className="bg-[#12141a] rounded-xl border border-neutral-800/80 p-4 sm:p-5 flex flex-col gap-3">
            
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">EQUIPMENT</span>
                <span className="text-white font-medium">{data.equipment}</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">DIFFICULTY</span>
                <span className="text-white font-medium">{data.difficulty}</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">SETS</span>
                <span className="text-white font-medium">{data.sets}</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">REPS</span>
                <span className="text-white font-medium">{data.reps}</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">DURATION</span>
                <span className="text-white font-medium">{data.duration} min</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">CALORIES</span>
                <span className="text-white font-medium">{data.caloriesBurned} kcal</span>
              </div>
              <hr />
              <div
                
                className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="text-neutral-500 uppercase">RATING</span>
                <span className="text-white font-medium">{data.rating}</span>
              </div>
            
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-sm font-black uppercase tracking-wider">
              INSTRUCTIONS
            </h2>
            <ol className="flex flex-col gap-2">
              {data.instructions.map((step, index) => (
                <li
                  key={index}
                  className="text-neutral-300 text-xs sm:text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-neutral-500 font-semibold">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="flex-1 min-w-[160px] bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs sm:text-sm tracking-wide py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Add to today&apos;s plan</span>
            </button>

            <button className="flex-1 min-w-[140px] bg-[#12141a] hover:bg-neutral-800 text-neutral-300 font-bold text-xs sm:text-sm tracking-wide py-3 px-4 rounded-xl border border-neutral-800 flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Bookmark className="w-4 h-4 stroke-[2]" />
              <span>Save for later</span>
            </button>
          </div>

        </div>

      </div>
    </div>
    );
};

export default ExerciseDetail;