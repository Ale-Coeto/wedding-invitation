
const CountdownElement = ({ time, label }: { time: number, label: string }) => {
    return (
        <div className="text-white text-shadow-2xs flex flex-col items-center">
            <div className=" text-lg font-light md:text-3xl">
                {time}
            </div>
            <div className="font-light text-xs md:text-normal">
                {label}
            </div>
        </div>
    )
}

export default CountdownElement;