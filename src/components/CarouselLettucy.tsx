import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function CarouselLettucy() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[80%] mx-auto my-6"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="flex relative aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/roarrr.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="flex relative aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/become-rock-star-coach.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="flex relative aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/destruction.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="flex relative aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/lettucy-streetwear.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="relative flex aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/ryujin-coach.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="relative flex aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/the-gratest-sun.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent className="flex relative aspect-square items-center justify-center p-6">
              <Badge className="absolute top-0 z-10" variant={"destructive"}>
                Diskon Hingga 40%
              </Badge>
              <Image
                src={"/assets/images/lettucy/white-coach.png"}
                alt="Produk Lettucy"
                width={1080}
                height={720}
                className="w-96 hover:scale-110 transition-all"
              />
              <Badge className="absolute bottom-2 left-4" variant={"secondary"}>
                Rp 110.000
              </Badge>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
