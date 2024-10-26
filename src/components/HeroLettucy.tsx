import Image from "next/image";
import { Badge } from "./ui/badge";
import { BuyButton } from "./BuyButton";

const HeroLettucy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-10 bg-[url('/assets/images/lettucy/hero-bg.png')] bg-cover bg-center">
      <div className="w-1/2">
        <Badge variant="secondary">Dapatkan diskon hingga 40%</Badge>
        <h1 className="scroll-m-20 mb-6 mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Buktikan Gaya Anda dengan Jaket Coach yang Ikonis!
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground mb-4">
          Kenakan jaket coach premium berbahan Taslan yang tahan angin dan air,
          dilengkapi dengan sablon berkualitas tinggi untuk gaya dan kenyamanan
          maksimal. Tampil stylish di segala cuaca, sempurna untuk menemani
          aktivitas harian Anda!
        </p>
        <BuyButton
          name="coach-lettucy"
          price="123000"
          platform="tiktok"
          currency="IDR"
          quantity="1"
        />
      </div>
      <Image
        src={"/assets/images/lettucy/all-coach.png"}
        alt="Jaket Coach Lettucy"
        height={1080}
        width={720}
        className="w-1/2"
      />
    </div>
  );
};

export default HeroLettucy;
