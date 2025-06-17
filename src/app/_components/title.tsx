interface TitleProps {
    label: string;
    className?: string;
}

const Title = ({ label, className }: TitleProps) => {
    return (
        <div className={`${className} uppercase text-xl font-bold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent`}>
            {label}
        </div>
    )
}

export default Title;