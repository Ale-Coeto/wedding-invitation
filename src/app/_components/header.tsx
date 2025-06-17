interface HeaderProps {
    label: string;
    className?: string;
}

const Header = ({ label, className }: HeaderProps) => {
    return (
        <div className={`${className} font-bold`}>
            {label}
        </div>
    )
}

export default Header;