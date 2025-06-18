import type { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full px-5 md:w-1/2 xl:w-2/5">
            <div className="flex flex-row py-8">
                <div className="bg-gradient-to-r w-full from-gold-dark to-gold-light h-1" />
                <div className="bg-gradient-to-r w-full from-gold-light to-gold-dark h-1" />
            </div>
            <div className="px-5 w-full">
                {children}
            </div>
        </div>
    )
}

export default Section;