import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Definition() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-black">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="grid max-w-4xl gap-6 sm:grid-cols-1 lg:grid-cols-1">
            <h4 className="text-6xl font-bold my-4 mx-auto text-white">
              Apa sih Pilkada 🗳️?{" "}
            </h4>
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
                      Apa sih Pilkada 🗳️?{" "}
                    </h4>
                    <p className="text-base my-2 mx-2">
                      Berdasarkan Peraturan Komisi Pemilihan Umum Nomor 9 Tahun
                      2022 Tentang Partisipasi Masyarakat Dalam Pemilu
                      (Pemilihan Umum) dan Pilkada (Pemilihan Kepala Daerah),
                      adalah pelaksanaan kedaulatan rakyat di wilayah provinsi
                      dan kabupaten/kota untuk memilih Gubernur dan Wakil
                      Gubernur, Bupati dan Wakil Bupati, dan/atau Walikota dan
                      Wakil Walikota secara langsung dan demokratis.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-justify text-white">
              <h4 className="text-3xl font-bold my-4 mx-auto text-center">
                Siapa penyelenggara Pilkada?{" "}
              </h4>
              <p className="text-xl my-2 mx-auto text-justify">
                Berdasarkan PKPU Nomor 12 Tahun 2023 tentang Tata Kerja Komisi
                Pemilihan Umum, Komisi Pemilihan Umum Provinsi, dan Komisi
                Pemilihan Umum Kabupaten/Kota, penyelenggara Pilkada terdiri
                dari KPU (Komisi Pemilihan Umum), Bawaslu(Badan Pengawas
                Pemilu), DKPP (Dewan Kehormatan Penyelenggara Pemilu).{" "}
              </p>
            </div>
            <h4 className="text-3xl text-white font-bold my-4 mx-auto text-center">
              Pilkada 2024 pilih apa aja sih?
            </h4>
            <div className="grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <Image
                    src="/Candidate.png"
                    width={1000}
                    height={120}
                    alt="candidate"
                    className="rounded-md"
                  />
                  <p className="text-center text-xl font-semibold">
                    <span className="text-green-400">
                      Gubernur dan Wakil Gubernur
                    </span>{" "}
                    <br />
                    untuk <span className="text-green-400">Provinsi</span>{" "}
                  </p>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <Image
                    src="/Candidate.png"
                    width={1000}
                    height={120}
                    alt="candidate"
                    className="rounded-md"
                  />
                  <p className="text-center text-xl font-semibold">
                    <span className="text-green-400">
                      Walikota dan Wakil Walikota
                    </span>{" "}
                    <br />
                    untuk <span className="text-green-400">
                      Kota Madya
                    </span>{" "}
                  </p>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <Image
                    src="/Candidate.png"
                    width={1000}
                    height={120}
                    alt="candidate"
                    className="rounded-md"
                  />
                  <p className="text-center text-xl font-semibold">
                    <span className="text-green-400">
                      Bupati dan Wakil Bupati
                    </span>{" "}
                    <br />
                    untuk <span className="text-green-400">Kabupaten</span>{" "}
                  </p>
                </div>
              </Card>
            </div>
            <p className="text-white">Yang kamu perlu tahu:</p>
            <p className="text-white">
              Peserta pilkada adalah{" "}
              <span className="text-green-400">
                pasangan calon yang diusulkan oleh partai politik atau gabungan
                partai politik
              </span>
              . Partai politik peserta Pilkada adalah partai politik yang telah
              memenuhi persyaratan sebagai peserta Pilkada untuk Gubernur dan
              Wakil Gubernur, Bupati dan Wakil Bupati, serta Wali Kota dan Wakil
              Wali Kota.
            </p>
            {/* <Card className="flex flex-col justify-between px-8 py-6">
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
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
}
