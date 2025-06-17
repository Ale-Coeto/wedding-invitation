"use client";

interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ label, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${className} bg-gold hover:bg-gold-light text-white py-1 px-4 min-w-32 text-sm rounded-full`}>
            {label}
        </button>
    )
}

export default Button;