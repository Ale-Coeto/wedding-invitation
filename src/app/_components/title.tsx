interface TitleProps {
    label: string;
    className?: string;
    lowercase?: boolean;
}

const Title = ({ label, className, lowercase }: TitleProps) => {
    const hasTextSize = className?.includes('text-') ?? false;
    const defaultTextSize = hasTextSize ? '' : 'text-xl';

    return (
        <div className={`${className} ${defaultTextSize} ${!lowercase && "uppercase"} font-bold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent`}>
            {label}
        </div>
    )
}

export default Title;