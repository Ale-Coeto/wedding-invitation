interface TitleProps {
    label: string;
    className?: string;
}

const Title = ({ label, className }: TitleProps) => {
    const hasTextSize = className?.includes('text-') ?? false;
    const defaultTextSize = hasTextSize ? '' : 'text-xl';

    return (
        <div className={`${className} ${defaultTextSize} uppercase font-bold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent`}>
            {label}
        </div>
    )
}

export default Title;