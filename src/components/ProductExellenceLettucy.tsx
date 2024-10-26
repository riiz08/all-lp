import {
  DropletsIcon,
  PaletteIcon,
  ScaleIcon,
  ShirtIcon,
  WashingMachineIcon,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

const ProductExellenceLettucy = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6">
      <div className="text-center">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Keunggulan Jaket Coach Taslan yang Wajib Anda Miliki
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
          Tampil Stylish dan Nyaman dengan Bahan Premium serta Desain Fungsional
        </p>
      </div>
      <div className="py-6 flex items-center gap-4 flex-wrap">
        <Card className="max-w-60 min-h-60 hover:scale-105 transition-all cursor-pointer">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="text-center text-md">
              <DropletsIcon className="mx-auto mb-2" /> Tahan Air
            </CardTitle>
            <CardDescription className="text-center mt-4">
              Jaket coach kami terbuat dari bahan Taslan berkualitas tinggi yang
              tahan air dan angin, menjaga tubuh tetap kering dan nyaman di
              segala cuaca
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="max-w-60 min-h-60 hover:scale-105 transition-all cursor-pointer">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="text-center text-md">
              <PaletteIcon className="mx-auto mb-2" /> Sablon Berkualitas Tinggi
            </CardTitle>
            <CardDescription className="text-center mt-4">
              Didesain dengan teknik sablon terbaik, memastikan gambar tidak
              mudah pudar dan tetap terlihat keren meski sering digunakan.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="max-w-60 min-h-60 hover:scale-105 transition-all cursor-pointer">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="text-center text-md">
              <ScaleIcon className="mx-auto mb-2" /> Ringan & Nyaman Dipakai
            </CardTitle>
            <CardDescription className="text-center mt-4">
              Meski tahan cuaca, jaket ini tetap ringan dan mudah dipakai,
              memberikan kenyamanan sepanjang hari tanpa rasa berat.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="max-w-60 min-h-60 max-h-60 hover:scale-105 transition-all cursor-pointer">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="text-center text-md">
              <ShirtIcon className="mx-auto mb-2" /> Desain Stylish
            </CardTitle>
            <CardDescription className="text-center mt-4">
              Cocok untuk berbagai kesempatan, desain jaket coach kami
              menawarkan gaya minimalis yang tetap stylish untuk dipadukan
              dengan pakaian kasual hingga semi-formal.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="max-w-60 min-h-60 hover:scale-105 transition-all cursor-pointer">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="text-center text-md">
              <WashingMachineIcon className="mx-auto mb-2" /> Mudah Dirawat
            </CardTitle>
            <CardDescription className="text-center mt-4">
              Jaket ini tidak hanya tahan lama, tetapi juga mudah dirawat. Cukup
              cuci dengan tangan atau mesin tanpa khawatir rusak.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Button asChild variant={"link"}>
        <Link href={"https://vt.tokopedia.com/t/ZSj8M6Y6w"}>
          Jelajahi Semua Keunggulan Jaket Coach Kami dan Dapatkan Sekarang!
        </Link>
      </Button>
    </section>
  );
};

export default ProductExellenceLettucy;
