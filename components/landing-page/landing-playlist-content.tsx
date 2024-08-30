import Link from "next/link";
import Image from "next/image";
export default function Content() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Checkpoint...
              </h1>
              <p className=" text-muted-foreground md:text-xl text-justify">
                Udah Lumayan Paham? <br /> <br /> Selanjutnya perkuat
                pengetahuanmu dengan menonton video edukasi ini. Di sini, kamu
                akan mempelajari cara memilih informasi yang akurat, mengenali
                dan menghindari hoax, serta menjadi pemilih yang cerdas dan
                kritis.
                <span className="font-bold"> </span> Jadilah pemilih anti hoax
                dan ciptakan Pilkada Lampung yang bersih, jujur, dan adil!
                Gunakan hak pilihmu dengan bijak dan bertanggung jawab untuk
                masa depan Lampung yang lebih cerah!
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://youtube.com/playlist?list=PLF7VqZzmdYB5SKsCZBgQYxOAA_ont4E1C&si=dRyPOIkVhZy1G6jD"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Cekidot Klik disini..
                </Link>
              </div>
            </div>
          </div>
          {/* Hide image on smaller screens and make div full width */}
          <div className="hidden lg:block">
            <Image
              src="/Youtube-Logo.svg"
              width="510"
              height="510"
              alt="Youtube"
              style={{ objectFit: "contain" }}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
