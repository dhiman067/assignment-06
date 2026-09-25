import Image from 'next/image';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import { Ifit } from '@/type';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { exerciseContext } from '@/ContextApi/Context';
import Link from 'next/link';

const TodaysPlanTab = ({today}:{today:Ifit}) => {
  const {todaysPlan,setTodaysPlan} = useContext(exerciseContext) as {todaysPlan:Ifit[]; setTodaysPlan:Dispatch<SetStateAction<Ifit[]>>}
  const handleRemoveFromTodayPlan = ()=>{
    if(todaysPlan.includes(today)){
      setTodaysPlan(todaysPlan.filter((t:Ifit) => t.id !== today.id))
      alert(`Removed ${today.name} from the plan`)
    }
  }

  const[markAsDone, setMarkAsDone] = useState<boolean>(false)
  const handleMarkAsDone =()=>{
    if(markAsDone){
      alert("Already marked as done")
    }
    else{
      
      setMarkAsDone(true)
      alert(`${today.name} marked as done`)
    }
  }
    return (
        <div className="w-full max-w-7xl mx-auto bg-[#0d0e14] border border-neutral-800/80 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
      
      {/* Left Area: Thumbnail + Workout Info */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Thumbnail Image */}
        <div className="relative w-28 sm:w-36 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800">
          <Image
            src={today.image}
            alt={today.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 112px, 144px"
          />
        </div>

        {/* Title, Subtitle & Quick Stats */}
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-white font-black text-base sm:text-lg tracking-wider uppercase truncate">
            {today.name}
          </h3>
          <p className="text-neutral-400 text-xs font-medium truncate">
            {today.equipment}
          </p>

          {/* Stats Bar */}
          <div className="flex items-center gap-3 text-neutral-300 text-xs font-semibold mt-0.5">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{today.duration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-neutral-400" />
              <span>{today.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-neutral-400" />
              <span>{today.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Area: Action Controls */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-neutral-800/60">
        {/* View Details Button */}
        <Link href={`/exercise/${today.id}`}>
        <button
          className="px-4 py-2 bg-[#12141c] hover:bg-neutral-800 text-neutral-200 font-semibold text-xs rounded-full border border-neutral-800 transition-colors cursor-pointer"
        >
          View Details
        </button>
        </Link>

        {/* Mark as Done Button */}
        <button
          onClick={handleMarkAsDone}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs rounded-full transition-colors cursor-pointer"
        >
          {markAsDone? (<div className='flex'>
            <Check className="w-4 h-4 stroke-[3]" />
          <span>Marked as Done</span>
          </div>) : <span>Mark as Done</span>}
          
        </button>

        {/* Remove/Close Icon Button */}
        <button
          onClick={handleRemoveFromTodayPlan}
          aria-label="Remove item"
          className="p-1.5 text-neutral-500 hover:text-neutral-300 transition-colors ml-1 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

    </div>
    );
};

export default TodaysPlanTab;