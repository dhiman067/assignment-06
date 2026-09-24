'use client'
import { exerciseContext } from '@/ContextApi/Context';
import { Ifit } from '@/type';
import { Calendar } from 'lucide-react';
import { Dispatch, SetStateAction, useContext } from 'react';

const TodaysPlanBtn = ({data}:{data:Ifit}) => {
    const state = useContext(exerciseContext)
    const {todaysPlan,setTodaysPlan} = state as  {todaysPlan:Ifit[]; setTodaysPlan:Dispatch<SetStateAction<Ifit[]>>}
    console.log(todaysPlan);
    const handleTodayPlan = ()=>{
        if(todaysPlan.includes(data)){
            alert("already added")
            return
        }
        else{
            setTodaysPlan([...todaysPlan,data])
            alert(`${data.name} added`)
        }
    }
    return (
        <div>
            <button 
            onClick={handleTodayPlan}
            className="flex-1 min-w-[160px] bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs sm:text-sm tracking-wide py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Add to today&apos;s plan</span>
            </button>
        </div>
    );
};

export default TodaysPlanBtn;