import Link from "next/link";
import Section from "./section"

const Footer = () => {
    return (
        <Section imageSection>
            <Link href="https://www.linkedin.com/in/alecoeto/" target="_blank" className="flex justify-end w-full text-text-light text-right text-sm underline">
                ACS
            </Link>
        </Section>
    )
}

export default Footer;
