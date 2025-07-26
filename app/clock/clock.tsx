"use client";

import { ReactNode, useEffect, useState } from "react";

export const TimeDisplay = (param: {
    time: Date
}) => {
    const formatTimeString = (value: number) => {
        return value.toString().padStart(2, '0')
    }

    const currentDay = param.time.getDate()
    const currentMonth = param.time.toLocaleString(undefined, { month: 'short' });
    const currentDayName = param.time.toLocaleString(undefined, { weekday: 'short' });
    const currentYear = param.time.getFullYear();
    const currentHour = formatTimeString(param.time.getHours());
    const currentMinute = formatTimeString(param.time.getMinutes());
    const currentSeconds = formatTimeString(param.time.getSeconds());

    return (<table className="text-lg">
        <tbody>
            <tr>
                <td className="pr-2">Today is </td>
                <td className="text-accent">{currentDayName} {currentDay} {currentMonth} {currentYear}</td>
            </tr>
            <tr>
                <td></td>
                <td suppressHydrationWarning className="text-accent">{currentHour}:{currentMinute}:{currentSeconds}</td>
            </tr>
        </tbody>
    </table >)
}

export const Progress = (param: {
    time: Date
}) => {
    const year = param.time.getFullYear();
    const day1: Date = new Date(Date.UTC(year, 0, 1));
    const difference = Math.abs(day1.getTime() - param.time.getTime());
    const persentage = (difference / 1e3 / 60 / 60 / 24 / 365) * 100;

    return (<div className="mt-4">
        <div className="border-[3px] border-text relative h-[30px] mb-2 sm:w-[350px]">
            <div suppressHydrationWarning style={{ width: persentage + '%' }} className={`bg-accent h-full animate-pulse`}></div>
        </div>
        <span className="text-lg">{year} is <span className="text-accent">{persentage.toFixed(2)}%</span> completed</span>
    </div>)
}


export const ClockDisplay = (): ReactNode => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => { setTime(new Date()); }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (<><TimeDisplay time={time} /><Progress time={time} /></>);
};
