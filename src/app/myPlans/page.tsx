'use client'
import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";
import { useContext } from "react";


const MyPlanPage = () => {
    const {todaysPlan} = useContext(exerciseContext)
    return (
        <div>
            {
                todaysPlan.map((today:Ifit) =>today.name)
            }
        </div>
    );
};

export default MyPlanPage;