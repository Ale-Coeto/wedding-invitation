import EventBlock from "../eventBlock";
import Section from "../section"

const HousingSection = () => {
    return (
        <Section>
            <EventBlock
                title="Antaris"
                description={[
                    "Hotel Fiesta Americana Monterrey Pabellón M",
                    "Av. Constitución 300 Ote., Centro, 64000",
                    "Monterrey, N.L.",
                ]}
                buttonLabel="Ubicación"
                url="https://goo.gl/maps/1b7d8c5Z2f6z9x3F6"
                icon="/images/icons/hotel.png"
                iconDescription=""
            />
        </Section>
    )
}

export default HousingSection;