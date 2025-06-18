import { useEffect, useState } from "react";
import CountdownElement from "./countdownElement";
import Spinner from "../spinner";

const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date();
    const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
};

const Countdown = ({ targetDate }: { targetDate: Date }) => {
    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft || timeLeft.days < 0) {
        return (
            <Spinner />
        );
    }

    return (
        <div className="w-full text-shadow-2xs px-12 py-3 flex flex-row items-center rounded-full justify-center gap-8">
            {timeLeft.days > 0 && <CountdownElement time={timeLeft.days} label="Días" />}
            {(timeLeft.hours > 0 || timeLeft.days > 0) && (
                <CountdownElement time={timeLeft.hours} label="Horas" />
            )}
            {(timeLeft.hours > 0 || timeLeft.days > 0 || timeLeft.minutes > 0) && (
                <CountdownElement time={timeLeft.minutes} label="Minutos" />
            )}
            {(timeLeft.hours > 0 ||
                timeLeft.days > 0 ||
                timeLeft.minutes > 0 ||
                timeLeft.seconds > 0) && (
                    <CountdownElement time={timeLeft.seconds} label="Segundos" />
                )}
        </div>
    )
}

export default Countdown;
