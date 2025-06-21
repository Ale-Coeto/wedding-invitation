import type { ImageProps } from "~/types/types";

const StackedImages = ({ topImage, bottomImage }: { topImage: ImageProps, bottomImage: ImageProps }) => {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src={topImage.src}
        alt={topImage.alt ?? ''}
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
      <img
        src={bottomImage.src}
        alt={bottomImage.alt ?? ''}
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};
export default StackedImages;