import EventBlock from "../eventBlock";
import Section from "../section"

const CeremoniesSection = () => {
    return (
        <Section>
            <div className="flex flex-col gap-14">
                <EventBlock
                    title="Ceremonia Religiosa"
                    description={[
                        "Parroquia Santa Engracia",
                        "Los Rosales 222, Santa Engracia, 66267",
                        "San Pedro Garza García, NL",
                    ]}
                    buttonLabel="Ubicación"
                    url="https://maps.app.goo.gl/C1ch45zwGx8YyBDB7"
                    icon="/images/icons/church.png"
                    iconDescription="4:30 PM"
                />
                <EventBlock
                    title="Recepción"
                    description={[
                        "El Ejecutivo Eventos",
                        "Río Danubio 395-B-Ote., Del Valle, 66220",
                        "San Pedro Garza García, NL",
                    ]}
                    buttonLabel="Ubicación"
                    url="https://maps.app.goo.gl/TMx7ryWhVgYeYGFs7"
                    icon="/images/icons/party.png"
                    iconDescription="7:00 PM"
                />
            </div>
        </Section>
    )
}

export default CeremoniesSection;