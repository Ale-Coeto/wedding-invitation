import EventBlock from "../eventBlock";
import Section from "../section";

const NotesSection = () => {
    return (
        <Section>
            <div className="flex flex-row justify-center items-center gap-10 h-full">
                <img src="/images/image3.jpg" alt="AidayVictor" className="w-1/3" />
                <div className="flex flex-col gap-8 h-full">
                    <EventBlock title={"Código de Vestimenta"} description={[
                        "Etiqueta rigurosa",
                        "Mujeres: Vestido largo",
                        "Hombres: Smoking"
                    ]} url={""} />
                    <EventBlock title={"Mesa de Regalos"} description={[
                        "Sobre",
                    ]} url={"https://www.liverpool.com.mx/tienda/home"} buttonLabel="Ir a mesa de regalos" underline />
                    <div className="italic">
                        *Solo adultos
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default NotesSection;
