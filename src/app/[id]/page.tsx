import React from "react";
import Section from "../_components/section";
import CountdownSection from "../_components/countdown/countdownSection";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params);

    return (
        <div className="flex flex-col items-center">
            <CountdownSection />
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
        </div>
    );
};

export default WeekPage;