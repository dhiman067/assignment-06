'use client'
import { exerciseContext } from '@/ContextApi/Context';
import { Ifit } from '@/type';
import { Calendar } from 'lucide-react';
import { Dispatch, SetStateAction, useContext } from 'react';
import { Bounce, Slide, toast, Zoom } from 'react-toastify';

const TodaysPlanBtn = ({ data }: { data: Ifit }) => {
    const state = useContext(exerciseContext)
    const { todaysPlan, setTodaysPlan } = state as { todaysPlan: Ifit[]; setTodaysPlan: Dispatch<SetStateAction<Ifit[]>> }
    const handleTodayPlan = () => {
        if (todaysPlan.some(t => t.id === data.id)) {
            toast.info(`${data.name} already added`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
            return
        }
        else {
            setTodaysPlan([...todaysPlan, data])
            toast.success(`${data.name} added`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
           
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