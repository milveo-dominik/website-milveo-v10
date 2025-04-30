"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function Content3d() {
  const images = [
    "/content/image-1.jpg",
    "/content/image-2.jpg",
    "/content/image-3.jpg",
    "/content/image-4.jpg",
    "/content/image-5.jpg",
    "/content/image-6.jpg",
    "/content/image-7.jpg",
    "/content/image-8.jpg",
    "/content/image-9.jpg",
    "/content/image-10.jpg",
    "/content/image-11.jpg",
    "/content/image-12.jpg",
    "/content/image-13.jpg",
    "/content/image-14.jpg",
    "/content/image-15.jpg",
    "/content/image-16.jpg",
    "/content/image-17.jpg",
    "/content/image-18.jpg",
    "/content/image-19.jpg",
    "/content/image-20.jpg",
    "/content/image-21.jpg",
    "/content/image-22.jpg",
    "/content/image-23.jpg",
    "/content/image-24.jpg",
    "/content/image-25.jpg",
    "/content/image-26.jpg",
    "/content/image-27.jpg",
    "/content/image-28.jpg",
    "/content/image-29.jpg",
    "/content/image-30.jpg",
    "/content/image-31.jpg",
  ];
  return (
    <div className="bg-gray-950/5 dark:bg-neutral-800 mx-auto my-10 p-2 rounded-3xl ring-1 ring-neutral-700/10 max-w-7xl">
      <ThreeDMarquee images={images} />
    </div>
  );
}
