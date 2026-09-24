'use client'

import { createContext, ReactNode, useState } from "react";

export const exerciseContext = createContext({})
const ExerciseContextProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan,setTodaysPlan] = useState([])
    const [saveLater, setSaveLater] = useState([])
    const sharedState ={
        todaysPlan,setTodaysPlan,saveLater,setSaveLater
    }
    return (
        <div>
            <exerciseContext.Provider value={sharedState}>
            {children}
            </exerciseContext.Provider>
        </div>
    );
};

export default ExerciseContextProvider;