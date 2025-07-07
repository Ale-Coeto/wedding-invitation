import Section from "../section";
import Title from "../title";
import Padres from "./padres";

const DetailsSection = () => {
    return (
        <div className="relative w-full flex flex-col items-center overflow-hidden pb-6">
            <Section>
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="text-lg pb-5 italic font-semibold">
                        Con la bendición de Dios y de nuestros padres
                    </div>

                    <div className="w-full flex flex-col lg:items-center lg:flex-row gap-6 justify-between lg:px-10 text-text-light">
                        <Padres nombre1="Miguel Coeto Lucero" nombre2="Aída Ruth Sánchez Jiménez" />
                        <Padres right nombre1="Víctor Manuel García Uriegas" nombre2="Norma Alicia Vidal Vázquez" />
                    </div>

                    <div className="text-lg pt-12 pb-10">
                        Los invitamos a la celebración de nuestro matrimonio el día:
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <Title label="Sábado" className="text-lg" />
                        {/* <div className="text-text text-md font-sans font-light pr-3 pl-6">|</div> */}
                        <div className="flex flex-col items-center justify-end px-3">
                            <Title label="11" className="text-3xl pt-5" />
                            <div className="text-text-light text-sm">
                                2025
                            </div>
                        </div>
                        {/* <div className="text-text text-md font-sans font-light pr-6 pl-3">|</div> */}
                        <Title label="Octubre" className="text-lg" />
                    </div>

                </div>
            </Section>

            <div className="absolute left-0 top-2/5 -translate-x-6 pt-20 md:w-2/5 md:pt-10 md:pr-10 md:flex md:justify-end">
                <img src="/images/icons/leaf-left.png" alt="Flores" className="w-24" />
            </div>
            <div className="absolute right-0 top-2/5 translate-x-6 pt-20 md:w-2/5 md:pt-10 md:pl-10 md:flex md:justify-start">
                <img src="/images/icons/leaf-right.png" alt="Flores" className="w-24" />
            </div>
            {/* <div className="absolute right-0 top-1/2 m-10 pt-20 md:w-2/5 md:pt-10 md:pl-10 md:flex md:justify-start">
                <img src="/images/icons/leaf-right.png" alt="Flores" className="w-24" />
            </div> */}
        </div>
    )
}

export default DetailsSection;