import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Sudah siap?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-center">
              Setelah belajar tentang apa itu Pilkada dan bagaimana cara kita
              mengatasi Hoax dan Mis-informasi, sudah saatnya kamu siap untuk
              menjadi seorang pemilih di Pilkada 2024 nanti. <br />
              Namun, terdapat beberapa tahapan yang harus di lalui agar kamu
              dapat terdaftar sebagai pemilih di Pilkada 2024 nanti.
            </p>
          </div>
          <div className="grid max-w-4xl gap-6 sm:grid-cols-1 lg:grid-cols-1">
            <Card className="flex flex-col justify-between px-8 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/CheckList-Image.svg"}
                    width={200}
                    height={200}
                    alt="To-do list"
                  />
                  <div className="text-justify">
                    <h4 className="text-2xl font-bold my-4 mx-2">
                      Pastikan kamu telah terdaftar sebagai Daftar Pemilih Tetap
                      (DPT)
                    </h4>
                    <p className="text-base my-2 mx-2">
                      Gunakan NIK atau Nomor Paspor untuk cek DPT kamu, dan
                      jangan lupa catat nama Kabupaten/Kota serta kecamatan yang
                      terdaftar.
                    </p>
                    <Link
                      href="https://cekdptonline.kpu.go.id/"
                      className="my-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Cek Dpt Online
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col justify-between px-8 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/Young_Man.png"}
                    width={200}
                    height={200}
                    alt="To-do list"
                  />

                  <div className="text-justify">
                    <h4 className="text-2xl font-bold my-4 mx-2">
                      Masa Pencatatan data Pemilih oleh petugas <br /> (24 Juni
                      - 24 Juli)
                    </h4>
                    <p className="text-base my-2 mx-2">
                      Pada masa ini, petugas Pantarlih akan datang untuk
                      pendataan para pemilih di Pilkada 2024, Pastikan untuk
                      tetap stay up-to-date dengan selalu mengecek{" "}
                      <Link
                        href="https://www.instagram.com/kpu_lampung/"
                        className="text-blue-700"
                      >
                        Instagram KPU Lampung.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col justify-between px-8 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/Eye_Logo.png"}
                    width={200}
                    height={200}
                    alt="To-do list"
                  />
                  <div className="text-justify">
                    <h4 className="text-2xl font-bold my-4 mx-2">
                      Amati Calon Pasangan dan Kampanyenya <br /> (23 September
                      - 24 November)
                    </h4>
                    <p className="text-base my-2 mx-2">
                      Amati calon pasangan, dan lihat bagaimana para Calon
                      tersebut menyampaikan gagasan dan rencananya..
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col justify-between px-8 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img_election_logo.png"}
                    width={200}
                    height={200}
                    alt="Election day"
                  />
                  <div className="text-justify">
                    <h4 className="text-2xl font-bold my-4 mx-2">
                      Kamu sudah siap datang ke TPS (27 November 2024){" "}
                    </h4>
                    <p className="text-base my-2 mx-2">
                      Hari Pilkada sudah tiba, dan sudah saat nya bagi kamu
                      untuk menentukan pilihan mu demi Lampung yang lebih baik
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
