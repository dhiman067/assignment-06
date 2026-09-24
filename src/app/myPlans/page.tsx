'use client'
import SaveForLater from "@/Components/Tab/SaveForLaterTab";
import TodaysPlanTab from "@/Components/Tab/TodaysPlanTab";
import TabInfo from "@/Components/TabInfos/TabInfo";
import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";

import { Dispatch, SetStateAction, useContext, useState } from "react";


const MyPlanPage = () => {
    const { todaysPlan, saveLater,activeTab, setActiveTab } = useContext(exerciseContext) as {
        todaysPlan: Ifit[];
        saveLater: Ifit[];
        activeTab:string
        setActiveTab:Dispatch<SetStateAction<string>>
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
            <div>
                {
                    activeTab==="tab-1"?(<div>
                        <TabInfo></TabInfo>
                    </div>):(<p>this is tab 2</p>)
                }
            </div>
            <div className="tabs tabs-border w-full bg-[#121318] rounded-3xl">
                <input onClick={()=>setActiveTab("tab-1")} type="radio" name="my_tabs_2" className="tab text-white" aria-label="Today's Plan" defaultChecked/>
                <div className="space-y-2 tab-content w-full text-white p-10">
                    {
                        todaysPlan.length === 0? "Nothing here yet":todaysPlan.map(today => <TodaysPlanTab key={today.id} today={today}></TodaysPlanTab>)
                    }
                </div>
                

                <input onClick={()=>setActiveTab("tab-2")} type="radio" name="my_tabs_2" className="tab text-white" aria-label="Save for Later"  />
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