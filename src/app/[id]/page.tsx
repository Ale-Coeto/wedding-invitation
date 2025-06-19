import React from "react";
import Section from "../_components/section";
import CountdownSection from "../_components/countdown/countdownSection";
import DetailsSection from "../_components/details/detailsSection";
import CeremoniesSection from "../_components/ceremonies/ceremoniesSection";
import HousingSection from "../_components/housing/housingSection";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params);

    return (
        <div className="flex flex-col items-center">
            <CountdownSection />
            <DetailsSection />
            <CeremoniesSection />
            <HousingSection />
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
        </div>
    );
};

export default WeekPage;