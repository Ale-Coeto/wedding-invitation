import Link from "next/link";
import Section from "./section"

const Footer = () => {
    return (
        <Section imageSection>
            <Link href="https://www.linkedin.com/in/alecoeto/" target="_blank" className="text-text-light text-right text-sm">
                By: Ale Coeto
            </Link>
        </Section>
    )
}

export default Footer;
