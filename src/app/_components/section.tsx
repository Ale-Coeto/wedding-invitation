import type { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full px-5 lg:w-2/3 xl:w-2/5">
            <div className="flex flex-row">
                <div className="bg-gradient-to-r w-full from-gold-dark to-gold-light h-1" />
                <div className="bg-gradient-to-r w-full from-gold-light to-gold-dark h-1" />
            </div>
            <div className="px-5 md:px-10 w-full py-16">
                {children}
            </div>
        </div>
    )
}

export default Section;