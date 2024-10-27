import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const UserTestimoniLettucy = () => {
  return (
    <section className="py-6 px-8 flex items-center flex-col lg:flex-row justify-center">
      <div className="lg:w-1/2 text-center">
        <h2 className="scroll-m-20 text-xl lg:text-3xl font-semibold tracking-tight first:mt-0">
          Apa Kata Mereka Tentang Jaket Coach Kami?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm lg:text-md text-muted-foreground">
          Ratusan pelanggan puas dengan kualitas, kenyamanan, dan desain jaket
          coach Taslan kami
        </p>

        <Image
          src={"/assets/images/lettucy/dialog.png"}
          alt="Kenapa harus lettucy"
          width={1080}
          height={720}
          className="lg:w-96 mx-auto"
        />

        <small className="text-xs mt-6 lg:mt-4 font-medium leading-none">
          Ingin Merasakan Sendiri Kualitasnya?
          <Link
            href={"https://vt.tokopedia.com/t/ZSj8M6Y6w"}
            className="mx-1 hover:underline transition-all underline-offset-2 text-primary"
          >
            Pesan Sekarang
          </Link>
          dan Bergabunglah dengan Ratusan Pelanggan Kami yang Puas!
        </small>
      </div>
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col gap-4">
        <Card className="pt-4">
          <CardContent className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                sizes="80"
                src="/assets/images/lettucy/profile-2.jpg"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="scroll-m-20 text-sm lg:text-xl font-semibold tracking-tight">
                Andi Setiawan
              </h4>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="lg:leading-7 leading-5 text-xs lg:[&:not(:first-child)]:mt-2 text-muted-foreground">
                Jaket ini luar biasa! Saya suka bagaimana jaket ini tahan angin
                dan tetap ringan. Sangat cocok untuk perjalanan motor setiap
                hari. Desainnya juga keren, saya dapat banyak pujian!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="pt-4">
          <CardContent className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                sizes="80"
                src="/assets/images/lettucy/profile-1.jpg"
              />
              <AvatarFallback>RU</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="scroll-m-20 text-sm lg:text-xl font-semibold tracking-tight">
                Rina Utami
              </h4>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="lg:leading-7 leading-5 text-xs lg:[&:not(:first-child)]:mt-2 text-muted-foreground">
                Bahan Taslan-nya benar-benar berkualitas! Sablon jaket juga
                tidak luntur meski sudah beberapa kali dicuci. Jaket coach ini
                nyaman dipakai seharian. Worth every penny!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="pt-4">
          <CardContent className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                sizes="80"
                src="/assets/images/lettucy/profile-3.jpg"
              />
              <AvatarFallback>BP</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="scroll-m-20 text-sm lg:text-xl font-semibold tracking-tight">
                Budi Prasetyo
              </h4>
              <p>⭐️⭐️⭐️⭐️</p>
              <p className="lg:leading-7 leading-5 text-xs lg:[&:not(:first-child)]:mt-2 text-muted-foreground">
                Jaket yang sangat stylish dan nyaman dipakai. Saya suka
                desainnya yang minimalis tapi tetap trendi. Pengiriman cepat dan
                kualitas produk sesuai harapan!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserTestimoniLettucy;
