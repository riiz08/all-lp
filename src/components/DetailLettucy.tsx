import {
  BoxIcon,
  CloudDrizzleIcon,
  PaletteIcon,
  ShirtIcon,
  WashingMachineIcon,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const DetailLettucy = () => {
  return (
    <section className="py-6 px-8">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Deskripsi Detail Jaket Coach Taslan
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
        Kualitas dan Fungsionalitas dalam Setiap Jahitan
      </p>
      <div className="py-6 flex items-center justify-center gap-8 flex-wrap">
        <Card className="max-w-lg hover:scale-105 transition-all cursor-pointer">
          <CardContent className="flex items-center justify-center gap-4">
            <CloudDrizzleIcon size={150} />
            <div>
              <div className="font-semibold text-lg">Material Berkualitas</div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                Jaket ini terbuat dari Taslan, material yang terkenal dengan
                ketahanan terhadap air dan angin. Ideal untuk penggunaan
                sehari-hari dalam berbagai cuaca.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-lg hover:scale-105 transition-all cursor-pointer">
          <CardContent className="flex items-center justify-center gap-4">
            <ShirtIcon size={150} />
            <div>
              <div className="font-semibold text-lg">Desain Stylish</div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                Dengan desain minimalis, jaket ini cocok dipadukan dengan
                berbagai gaya berpakaian, dari casual hingga semi-formal.
                Tersedia dalam beberapa pilihan warna yang trendy.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-lg hover:scale-105 transition-all cursor-pointer">
          <CardContent className="flex items-center justify-center gap-4">
            <PaletteIcon size={150} />
            <div>
              <div className="font-semibold text-lg">Sablon Tahan Lama</div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                Menggunakan teknologi sablon terbaru, memastikan desain tetap
                tajam dan tidak pudar meski setelah dicuci berkali-kali.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-lg hover:scale-105 transition-all cursor-pointer">
          <CardContent className="flex items-center justify-center gap-4">
            <BoxIcon size={150} />
            <div>
              <div className="font-semibold text-lg">Fitur Praktis</div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                Dilengkapi dengan kantong praktis yang dapat menyimpan
                barang-barang kecil seperti ponsel atau dompet, sehingga Anda
                tetap nyaman saat beraktivitas
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-lg hover:scale-105 transition-all cursor-pointer">
          <CardContent className="flex items-center justify-center gap-4">
            <WashingMachineIcon size={150} />
            <div>
              <div className="font-semibold text-lg">Perawatan Mudah</div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground">
                Jaket ini mudah dicuci dan tidak memerlukan perawatan khusus,
                sehingga cocok untuk gaya hidup yang sibuk.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DetailLettucy;
