'use client'
import { exerciseContext } from '@/ContextApi/Context';
import { Ifit } from '@/type';
import React, { useContext } from 'react';

const TabInfo = () => {
    const {todaysPlan} = useContext(exerciseContext) as {todaysPlan:Ifit[]}
    const time = todaysPlan.reduce((acc,value)=> acc + value.duration,0)
    return (
        <div>
            {time}
        </div>
    );
};

export default TabInfo;