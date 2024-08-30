import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6 lg:max-w-7xl">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/kpu_logo.png" width={90} height={90} alt="Logo KPU" />
          </Link>
          <p className="text-muted-foreground">KPU Provinsi Lampung</p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <nav className="grid gap-1">
            <Link
              href="https://lampung.kpu.go.id/"
              className="hover:underline"
              prefetch={false}
            >
              Site
            </Link>
            <Link
              href="https://www.instagram.com/kpu_lampung/"
              className="hover:underline"
              prefetch={false}
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/kpuprovinsilampung"
              className="hover:underline"
              prefetch={false}
            >
              Facebook
            </Link>
            <Link
              href="https://x.com/kpu_lampung"
              className="hover:underline"
              prefetch={false}
            >
              X / Twitter
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="text-muted-foreground">
            Jl. Gajah Mada No. 15 Tanjung Karang, Lampung
          </p>
          <p className="text-muted-foreground">Email: prop_lampung@kpu.go.id</p>
          <p className="text-muted-foreground"> Telp/Fax: (0721) 250960</p>
        </div>
      </div>
    </footer>
  );
}
