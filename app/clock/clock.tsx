"use client";

import { ReactNode, useEffect, useState } from "react";
import { TimeDisplay, Progress } from "@/src/clock";

export const ClockDisplay = (): ReactNode => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => { setTime(new Date()); }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (<><TimeDisplay time={time} /><Progress time={time} /></>);
};
