import { Ifit } from '@/type';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

const ExerciseCard = ({exercise}:{exercise:Ifit}) => {
    return (
      <Link
       href={`/exercise/${exercise.id}`}
       className="block w-full max-w-[30rem]"
      >
       <div className="w-full rounded-2xl bg-[#121318] border border-neutral-800/80 overflow-hidden shadow-lg hover:border-neutral-700 transition-colors">
      
      {/* Top Image Banner */}
      <div className="relative w-full h-48 sm:h-80 bg-neutral-900 overflow-hidden">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex flex-col gap-4">
        
        {/* Muscle Group Badges */}
        <div className="flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-[#ccff00] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title & Equipment */}
        <div>
          <h3 className="text-white font-black text-xl uppercase tracking-wider font-sans leading-tight">
            {exercise.name}
          </h3>
          <p className="text-neutral-400 text-sm mt-1 font-medium">
            {exercise.equipment}
          </p>
        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-neutral-800/80 my-1" />

        {/* Workout Stats Footer Row */}
        <div className="flex items-center gap-5 text-neutral-300 text-xs font-semibold">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-neutral-400 stroke-[2]" />
            <span>{exercise.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-neutral-400 stroke-[2]" />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-neutral-400 stroke-[2]" />
            <span>{exercise.rating}</span>
          </div>
        </div>

      </div>
    </div>
       </Link>
    );
};

export default ExerciseCard;