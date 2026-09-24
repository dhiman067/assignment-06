'use client'
import SaveForLater from "@/Components/Tab/SaveForLater";
import TodaysPlanTab from "@/Components/Tab/TodaysPlanTab";
import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";

import { useContext } from "react";


const MyPlanPage = () => {
    const { todaysPlan, saveLater } = useContext(exerciseContext) as {
        todaysPlan: Ifit[];
        saveLater: Ifit[];
    }

    return (
        <div className="container mx-auto my-5">
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
            <div className="tabs tabs-border w-full bg-[#121318] rounded-3xl">
                <input type="radio" name="my_tabs_2" className="tab text-white" aria-label="Today's Plan" />
                <div className="space-y-2 tab-content w-full text-white p-10">
                    {
                        todaysPlan.length === 0? "Nothing here yet":todaysPlan.map(today => <TodaysPlanTab key={today.id} today={today}></TodaysPlanTab>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-white" aria-label="Save for Later" defaultChecked />
                <div className="space-y-2 tab-content border-base-3 text-white  p-10">
                    {
                        saveLater.length === 0? "Nothing here yet":saveLater.map(later => <SaveForLater key={later.id} later={later}></SaveForLater>)
                    }
                </div>


            </div>
        </div>
    );
};

export default MyPlanPage;