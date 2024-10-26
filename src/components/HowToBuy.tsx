import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent } from "./ui/card";

const HowToBuy = () => {
  return (
    <section className="flex items-center gap-4 justify-center py-6 px-8">
      <Card className="w-1/2 py-2 px-4 h-[400]">
        <CardContent>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            Cara Mudah untuk Memesan Jaket Coach Taslan Anda
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <div className="font-semibold mb-1">Beli Sekarang</div>
              <p className="text-sm font-medium leading-none">
                Klik beli sekarang lalu akan di arahkan ke tiktok shop
              </p>
            </li>
            <li>
              <div className="font-semibold mb-1">
                Pilih produk favorit anda
              </div>
              <p className="text-sm font-medium leading-none">
                Telusuri koleksi jaket coach dan pilih model serta ukuran yang
                sesuai dengan gaya Anda.
              </p>
            </li>
            <li>
              <div className="font-semibold mb-1">
                Tambahkan ke Keranjang & Lakukan Checkout
              </div>
              <p className="text-sm font-medium leading-none">
                Klik Tambah ke Keranjang dan lanjutkan ke halaman checkout untuk
                melengkapi detail pembelian.
              </p>
            </li>
            <li>
              <div className="font-semibold mb-1">Pilih Metode Pembayaran</div>
              <p className="text-sm font-medium leading-none">
                Kami menyediakan berbagai opsi pembayaran, termasuk transfer
                bank, kartu kredit, dan e-wallet. Pilih metode yang paling
                nyaman untuk Anda.
              </p>
            </li>
            <li>
              <div className="font-semibold mb-1">
                Terima Pesanan di Rumah Anda
              </div>
              <p className="text-sm font-medium leading-none">
                Setelah pembayaran dikonfirmasi, pesanan Anda akan segera
                dikirim dan tiba dalam beberapa hari kerja.
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-1/2 py-2 px-4 min-h-[400]">
        <CardContent>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apakah jaket ini tahan air?</AccordionTrigger>
              <AccordionContent>
                Ya, jaket coach ini terbuat dari bahan Taslan yang tahan air,
                sehingga sangat cocok untuk digunakan saat cuaca hujan ringan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Bagaimana cara mencuci jaket ini?
              </AccordionTrigger>
              <AccordionContent>
                Jaket bisa dicuci menggunakan mesin atau tangan, sebaiknya
                gunakan air dingin dan hindari penggunaan pemutih untuk menjaga
                kualitas sablon dan bahan Taslan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Apakah tersedia ukuran besar?</AccordionTrigger>
              <AccordionContent>
                Ya, kami menyediakan berbagai ukuran mulai dari S hingga XL.
                Pastikan untuk memeriksa tabel ukuran pada halaman produk
                sebelum memesan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Berapa lama waktu pengiriman?</AccordionTrigger>
              <AccordionContent>
                Waktu pengiriman tergantung lokasi Anda, namun biasanya memakan
                waktu antara 2-5 hari kerja untuk wilayah domestik.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Apa yang harus dilakukan jika produk cacat atau ukuran tidak
                sesuai?
              </AccordionTrigger>
              <AccordionContent>
                Jika terjadi masalah dengan produk, Anda dapat menghubungi
                layanan pelanggan kami dalam waktu 7 hari setelah menerima
                pesanan untuk prosedur penukaran atau pengembalian.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default HowToBuy;
