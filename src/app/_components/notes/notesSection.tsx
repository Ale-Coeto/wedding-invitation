import Link from "next/link";
import EventBlock from "../eventBlock";
import Section from "../section";
import { IoMdBowtie } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";

const NotesSection = () => {
    return (
        <Section>
            <div className="flex flex-row justify-center items-center gap-10 h-full">
                <img src="/images/image3.jpg" alt="AidayVictor" className="w-1/3" />
                <div className="flex flex-col gap-8 h-full">
                    <div className="flex flex-col items-start">
                        <div className="font-bold">
                            Código de vestimenta
                        </div>
                        <div className="flex flex-col items-start text-sm text-text-light">
                            Etiqueta rigurosa
                        </div>
                        <div className="pt-2 flex flex-row items-center gap-1 text-2xl text-gold">
                            <IoMdBowtie />
                            <GiAmpleDress />
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="font-bold">
                            Mesa de regalos
                        </div>
                        <div className="text-sm text-text-light">
                            Liverpool 51561270
                        </div>
                        <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51561270" target="_blank" className="text-sm text-gold underline hover:text-gold-light">
                            Ir a la mesa de regalos
                        </Link>
                        <div className="pt-2 flex flex-row items-center gap-1 text-2xl text-gold">
                            <MdOutlineMail />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    )
}

export default NotesSection;
