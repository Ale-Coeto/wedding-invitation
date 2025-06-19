"use client";

import Link from "next/link";

interface ButtonProps {
    label: string;
    className?: string;
    url?: string;
    onClick?: () => void;
}

const Button = ({ label, onClick, url, className }: ButtonProps) => {
    return (
        url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer" className={`${className} text-center bg-gold hover:bg-gold-light text-white py-1 px-4 min-w-32 text-sm rounded-full`}>
                {label}
            </Link>
        ) : (
            <button onClick={onClick} className={`${className} bg-gold hover:bg-gold-light text-white py-1 px-4 min-w-32 text-sm rounded-full`}>
                {label}
            </button >
        )
    )
}

export default Button;