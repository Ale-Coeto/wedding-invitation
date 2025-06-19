"use client";

import Countdown from "./countdown";

const CountdownSection = () => {
    const targetDate = new Date("2025-10-11T16:30:00Z");

    return (
        <div className="w-full px-5 pt-5 md:pt-10 md:w-1/2 xl:w-2/5 pb-12">
            <div className="relative">
                <img src="/images/image1.jpg" alt="Aída y Víctor" className=" object-contain" />
                <div className="absolute inset-0 bg-black opacity-35"></div>

                <div className="text-white absolute top-0 w-full h-full flex flex-col items-center justify-between pt-5 md:pt-8 pb-1">
                    <div className="text-2xl text-shadow-2xs">
                        Aída y Víctor
                    </div>
                    <Countdown targetDate={targetDate} />
                </div>
            </div>
        </div>
    )
}

export default CountdownSection;