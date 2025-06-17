import React from "react";
import Section from "../_components/section";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params);

    return (
        <div>
            <Section>
                {id}
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
            <Section>
                <div className="h-screen">
                    he
                </div>
            </Section>
        </div>
    );
};

export default WeekPage;