interface PadresProps {
    nombre1: string;
    nombre2: string;
    right?: boolean;
}

const Padres = ({ nombre1, nombre2, right }: PadresProps) => {
    return (
        <div className={`flex flex-col text-sm ${right ? 'items-end text-right' : 'items-start text-start'}`}>
            <div>
                {nombre1}
            </div>
            <div>
                {nombre2}
            </div>
        </div>
    )
}

export default Padres;