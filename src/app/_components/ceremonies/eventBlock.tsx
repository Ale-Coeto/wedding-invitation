import Link from "next/link";
import Button from "../button";

interface EventProps {
    title: string;
    description: string[];
    buttonLabel?: string;
    url: string;
    underline?: boolean;
    icon?: string;
    iconDescription?: string;
}

const EventBlock = ({ title, description, url, icon, underline, buttonLabel, iconDescription }: EventProps) => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
                <div className="font-bold">
                    {title}
                </div>
                <div className="flex flex-col items-start text-sm text-text-light">
                    {description.map((line, index) => (
                        <div key={index} className="">
                            {line}
                        </div>
                    ))}
                </div>

                {buttonLabel && (
                    !underline ? (
                        <Button label={buttonLabel} url={url} className="mt-5" />
                    ) : (
                        <Link href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {buttonLabel}
                        </Link>
                    )
                )}
            </div>

            {icon && (
                <div className="flex flex-col items-center gap-2 justify-center">
                    <img src={icon} alt={iconDescription ?? "Icon"} className="w-12 md:w-16 aspect-auto" />
                    {iconDescription && <span className="text-sm text-text-light">{iconDescription}</span>}
                </div>
            )}
        </div>
    )
}

export default EventBlock;