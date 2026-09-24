'use client'
import { exerciseContext } from '@/ContextApi/Context';
import { Ifit } from '@/type';
import { Bookmark } from 'lucide-react';
import { useContext } from 'react';


const SaveLaterBtn = ({data}:{data:Ifit}) => {
    const {saveLater, setSaveLater} = useContext(exerciseContext)
    const handleSaveLater = ()=>{
        if(saveLater.includes(data)){
            alert("already added")
            return
        }
        else{
            setSaveLater([...saveLater,data])
            alert(`${data.name} added`)
        }
    }
    return (
        <div>
            <button
                onClick={handleSaveLater}
            className="flex-1 min-w-[140px] bg-[#12141a] hover:bg-neutral-800 text-neutral-300 font-bold text-xs sm:text-sm tracking-wide py-3 px-4 rounded-xl border border-neutral-800 flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Bookmark className="w-4 h-4 stroke-[2]" />
              <span>Save for later</span>
            </button>
        </div>
    );
};

export default SaveLaterBtn;