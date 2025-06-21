import Button from "../button";
import Section from "../section"
import Title from "../title";

const ConfirmationSection = ({id}: {id: string}) => {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center">
                <Title label="Confirmación" className="pb-6" />
                <p className="text-center text-text italic">
                    Queremos compartir este momento contigo, <br />
                    Ayúdanos confirmando tu asistencia
                </p>
                <div className="font-bold pt-10 pb-0">
                    Juan Miguel
                </div>
                <div className="pt-0">
                    2 pases
                </div>
                <div className="flex flex-row justify-center gap-4 pt-10">
                    <Button label="Cancelar" secondary />
                    <Button label="Confirmar" />
                </div>
            </div>
        </Section>
    )
}

export default ConfirmationSection;