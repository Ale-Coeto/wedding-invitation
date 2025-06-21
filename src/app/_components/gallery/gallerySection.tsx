import type { ImageProps } from "~/types/types";
import Section from "../section"
import StackedImages from "./stackedImages";


interface GallerySectionProps {
    images: ImageProps[];
}

const GallerySection = ({ images }: GallerySectionProps) => {

    if (!images || images.length === 0) {
        return null;
    }

    const single = images.length === 1;

    return (
        <Section imageSection>
            <div>
                {!single ? (
                    <div className="flex overflow-x-auto space-x-4 pb-10">
                        {images.map((current, i) => {
                            if (i > 0 && images[i - 1]?.groupWithNext) return null;

                            const shouldGroup = current.groupWithNext && i + 1 < images.length;
                            const nextImage = images[i + 1];

                            return (
                                <div key={`img-${i}`} className="flex-shrink-0 w-64">
                                    {shouldGroup && nextImage ? (
                                        <StackedImages
                                            topImage={current}
                                            bottomImage={nextImage}
                                        />
                                    ) : (
                                        <img
                                            src={current.src}
                                            alt={current.alt ?? current.src}
                                            className="w-full h-auto object-cover rounded-lg shadow-md"
                                        />
                                    )}
                                </div>
                            );
                        }).filter(Boolean)}
                    </div>
                ) : (
                    <div>
                        {images[0] && (
                            <img
                                src={images[0].src}
                                alt="Gallery image"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}

export default GallerySection;