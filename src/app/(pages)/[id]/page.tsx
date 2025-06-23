import React from "react";
import CountdownSection from "../../_components/countdown/countdownSection";
import DetailsSection from "../../_components/details/detailsSection";
import CeremoniesSection from "../../_components/ceremonies/ceremoniesSection";
import HousingSection from "../../_components/housing/housingSection";
import GallerySection from "../../_components/gallery/gallerySection";
import Footer from "../../_components/footer";
import ConfirmationSection from "../../_components/confirmation/confirmationSection";
import NotesSection from "../../_components/notes/notesSection";
import BackgroundMusic from "~/app/_components/music";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params);

    return (
        <div className="flex flex-col items-center">
            <CountdownSection />
            <DetailsSection />
            <GallerySection
                images={[{ src: "/images/image2.jpg", groupWithNext: true }]}
            />
            <CeremoniesSection />
            <NotesSection />
            <ConfirmationSection id={id} />
            <GallerySection
                images={[{ src: "/images/image4.jpg", groupWithNext: true }]}
            />
            <HousingSection />
            <GallerySection
                images={[
                    { src: "/images/gallery/image1.jpg", groupWithNext: true },
                    { src: "/images/gallery/image2.jpg" },
                    { src: "/images/gallery/image3.jpg" },
                    { src: "/images/gallery/image4.jpg", groupWithNext: true },
                    { src: "/images/gallery/image5.jpg" },
                    { src: "/images/gallery/image6.jpg" },
                ]}
            />
            <Footer />
            <BackgroundMusic />
        </div>
    );
};

export default WeekPage;