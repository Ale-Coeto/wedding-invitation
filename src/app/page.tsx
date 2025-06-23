import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import Button from "./_components/button";
import Section from "./_components/section";
import Title from "./_components/title";
import Header from "./_components/header";
import CountdownSection from "./_components/countdown/countdownSection";
import DetailsSection from "./_components/details/detailsSection";
import CeremoniesSection from "./_components/ceremonies/ceremoniesSection";
import GallerySection from "./_components/gallery/gallerySection";
import Footer from "./_components/footer";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <div className="flex flex-col items-center">
      <CountdownSection />
      <DetailsSection />
      <GallerySection
        images={[{ src: "/images/image2.jpg", groupWithNext: true }]}
      />
      <CeremoniesSection />
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
    </div>
  );
}
