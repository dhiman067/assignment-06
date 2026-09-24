'use client'

import { createContext, ReactNode, useState } from "react";

export const exerciseContext = createContext({})
const ExerciseContextProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan,setTodaysPlan] = useState([])
    const [saveLater, setSaveLater] = useState([])
    const [activeTab, setActiveTab] = useState<'tab-1' | 'tab-2'>('tab-1')
    const sharedState ={
        todaysPlan,setTodaysPlan,saveLater,setSaveLater,activeTab, setActiveTab
    }
    return (
        <exerciseContext.Provider value={sharedState}>
        {children}
        </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;