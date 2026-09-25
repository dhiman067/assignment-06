'use client'
import { exerciseContext } from '@/ContextApi/Context';
import { Ifit } from '@/type';
import { Bookmark } from 'lucide-react';
import { Dispatch, SetStateAction, useContext } from 'react';
import { toast, Zoom } from 'react-toastify';


const SaveLaterBtn = ({ data }: { data: Ifit }) => {
    const { saveLater, setSaveLater } = useContext(exerciseContext) as { saveLater: Ifit[]; setSaveLater: Dispatch<SetStateAction<Ifit[]>> }
    const handleSaveLater = () => {
        if (saveLater.some(s => s.id === data.id)) {
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
            setSaveLater([...saveLater, data])
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
                onClick={handleSaveLater}
                className="flex-1 min-w-[140px] bg-[#12141a] hover:bg-neutral-800 text-neutral-300 font-bold text-xs sm:text-sm tracking-wide py-3 px-4 rounded-xl border border-neutral-800 flex items-center justify-center gap-2 transition-colors cursor-pointer">
                <Bookmark className="w-4 h-4 stroke-[2]" />
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SaveLaterBtn;