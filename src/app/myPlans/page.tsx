'use client'
import SaveForLater from "@/Components/Tab/SaveForLaterTab";
import TodaysPlanTab from "@/Components/Tab/TodaysPlanTab";
import SaveLaterTabInfo from "@/Components/TabInfos/SaveLaterTabInfo";
import TodaysPlanTabInfo from "@/Components/TabInfos/TodaysPlanTabInfo";
import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";
import Link from "next/link";

import { Dispatch, SetStateAction, useContext } from "react";

const MyPlanPage = () => {
    const { todaysPlan, saveLater, activeTab, setActiveTab } = useContext(exerciseContext) as {
        todaysPlan: Ifit[];
        saveLater: Ifit[];
        activeTab: string
        setActiveTab: Dispatch<SetStateAction<string>>
    }



    return (
        <div className="container mx-auto my-5 px-3">
            <div className="flex justify-end mb-4">
                <select
                    defaultValue="Server location"
                    className="select w-full max-w-xs rounded-xl border-neutral-700 bg-[#1a1c24] text-white shadow-sm"
                >
                    <option disabled={true}>Server location</option>
                    <option>North America</option>
                    <option>EU west</option>
                    <option>South East Asia</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">
                    MY PLAN
                </h1>
                <p className="mt-3 text-sm sm:text-base text-neutral-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>
            <div>
                {
                    activeTab === "tab-1" ? (<div>
                        <TodaysPlanTabInfo></TodaysPlanTabInfo>
                    </div>) : (<div>
                        <SaveLaterTabInfo></SaveLaterTabInfo>
                    </div>)
                }
            </div>
            <div className="tabs tabs-border w-full bg-[#121318] rounded-3xl">
                <input
                    onClick={() => setActiveTab("tab-1")}
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-neutral-400 checked:text-[#ccff00]   font-bold  text-[15px]"
                    aria-label="Today's Plan"
                    defaultChecked
                />
                <div className="space-y-2 tab-content w-full text-white p-10">
                    {
                        todaysPlan.length === 0 ? (<div className="flex flex-col items-center justify-center gap-4">
                            <h1 className="text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-slate-500">Browse the library and add a lift to get today moving.</p>
                            <Link href='/exercise'>
                                <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors cursor-pointer">
                                    BROWSE WORKOUTS
                                </button>
                            </Link>
                        </div>) : todaysPlan.map(today => <TodaysPlanTab key={today.id} today={today}></TodaysPlanTab>)
                    }
                </div>

                <input
                    onClick={() => setActiveTab("tab-2")}
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-neutral-400 checked:text-[#ccff00] font-bold  text-[15px]"
                    aria-label="Save for Later"
                />
                <div className="space-y-2 tab-content border-base-3 text-white  p-10">
                    {
                        saveLater.length === 0 ? (<div className="flex flex-col items-center justify-center gap-4">
                            <h1 className="text-3xl font-bold">NOTHING HERE YET</h1>
                            <p className="text-slate-500">Browse the library and add a lift to get today moving.</p>
                            <Link href='/exercise'>
                                <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wide px-6 py-3.5 rounded-lg transition-colors cursor-pointer">
                                    BROWSE WORKOUTS
                                </button>
                            </Link>
                        </div>) : saveLater.map(later => <SaveForLater key={later.id} later={later}></SaveForLater>)
                    }
                </div>
            </div>

        </div>


    );
};

export default MyPlanPage;