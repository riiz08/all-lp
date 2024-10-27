import React from "react";
import { CarouselLettucy } from "./CarouselLettucy";
import { BuyButton } from "./BuyButton";

const GalleryProductLettucy = () => {
  return (
    <section className="py-6 px-8 text-center bg-[url('/assets/images/lettucy/bg-product.jpg')]">
      <h2 className="scroll-m-20 text-xl lg:text-3xl font-semibold tracking-tight first:mt-0">
        Lihat Lebih Dekat Jaket Coach Taslan Kami
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm lg:text-md text-muted-foreground">
        Tampil stylish dan siap untuk segala cuaca dengan desain minimalis dan
        kualitas premium.
      </p>
      <CarouselLettucy />
      <BuyButton
        name="coach-lettucy"
        price="123000"
        platform="tiktok"
        currency="IDR"
        quantity="1"
      />
    </section>
  );
};

export default GalleryProductLettucy;
