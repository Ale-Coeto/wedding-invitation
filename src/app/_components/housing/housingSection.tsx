import EventBlock from "../eventBlock";
import Section from "../section"

const HousingSection = () => {
    return (
        <Section>
            <EventBlock
                title="Hospedaje"
                description={[
                    "Antaris Valle",
                    "Río Danubio Oriente 400, Del Valle, 66220",
                    "San Pedro Garza García, N.L., México",
                    "____",
                    "Al hacer reservación, mencionar que asistes a la boda de Aida y Víctor para obtener tarifa preferencial.",
                ]}
                buttonLabel="Ubicación"
                url="https://maps.app.goo.gl/9kTHPqSeYffAsE8W7"
                icon="/images/icons/hotel.png"
                iconDescription=""
            />
        </Section>
    )
}

export default HousingSection;