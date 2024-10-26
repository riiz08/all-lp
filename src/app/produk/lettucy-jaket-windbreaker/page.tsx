import DetailLettucy from "@/components/DetailLettucy";
import GalleryProductLettucy from "@/components/GalleryProductLettucy";
import HeroLettucy from "@/components/HeroLettucy";
import HowToBuy from "@/components/HowToBuy";
import ProductExellenceLettucy from "@/components/ProductExellenceLettucy";
import UserTestimoniLettucy from "@/components/UserTestimoniLettucy";

export default function LettucyJacket() {
  return (
    <main>
      <HeroLettucy />
      <ProductExellenceLettucy />
      <UserTestimoniLettucy />
      <GalleryProductLettucy />
      <DetailLettucy />
      <HowToBuy />
    </main>
  );
}
