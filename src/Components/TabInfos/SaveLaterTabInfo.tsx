import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";
import { useContext } from "react";


const SaveLaterTabInfo = () => {
    const {saveLater} = useContext(exerciseContext) as {saveLater:Ifit[]}
    const time = saveLater.reduce((acc,value)=> acc + value.duration , 0)
    const calories = saveLater.reduce((acc,value)=> acc + value.caloriesBurned,0)
    return (
         <div className="w-full  mx-auto bg-[#0d0e14] border border-neutral-800/80 rounded-2xl p-6 sm:p-8 shadow-xl mb-5">
      <div className="grid grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-neutral-800/80">
        
        {/* Exercises Stat */}
        <div className="flex flex-col gap-2 sm:px-6 first:sm:pl-0">
          <span className="text-neutral-400 text-xs sm:text-sm font-medium">
            Exercises
          </span>
          <span className="text-[#ccff00] text-4xl sm:text-5xl font-black tracking-tight font-sans">
            {saveLater.length}
          </span>
        </div>

        {/* Minutes Stat */}
        <div className="flex flex-col gap-2 sm:px-6">
          <span className="text-neutral-400 text-xs sm:text-sm font-medium">
            Minutes
          </span>
          <span className="text-white text-4xl sm:text-5xl font-black tracking-tight font-sans">
            {time}
          </span>
        </div>

        {/* Calories Stat */}
        <div className="flex flex-col gap-2 sm:px-6 last:sm:pr-0">
          <span className="text-neutral-400 text-xs sm:text-sm font-medium">
            Calories
          </span>
          <span className="text-white text-4xl sm:text-5xl font-black tracking-tight font-sans">
            {calories}
          </span>
        </div>

      </div>
    </div>
    );
};

export default SaveLaterTabInfo;