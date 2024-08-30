import Link from "next/link";
export default function Definition() {
  return (
    <section className="py-12 md:py-12 lg:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Apa itu Pilkada
          </h2>
          <div className="prose prose-gray dark:prose-invert ">
            <h3 className="font-bold my-2 text-2xl">
              Kenapa Pilkada Lampung 2024 Penting?
            </h3>
            <p className="md:text-xl text-base  text-justify">
              <span className="font-bold">Setiap lima tahun sekali</span>,
              rakyat Indonesia di seluruh penjuru negeri, termasuk di Lampung,
              memiliki kesempatan emas untuk menentukan masa depan daerah mereka
              melalui{" "}
              <span className="font-bold">
                Pemilihan Kepala Daerah (Pilkada)
              </span>
              . Momen penting ini, yang diselenggarakan oleh{" "}
              <span className="font-bold">Komisi Pemilihan Umum (KPU)</span>,
              menghadirkan pilihan kepada{" "}
              <span className="font-bold">7 juta rakyat Lampung</span> untuk
              menentukan pemimpin yang akan membawa arah dan kemajuan daerah
              mereka.
              <br />
              <br />
              Pilkada bukan sekadar memilih pemimpin, tetapi juga{" "}
              <span className="font-bold">
                menentukan arah pembangunan dan kesejahteraan Lampung
              </span>{" "}
              di masa depan. Keputusan yang diambil dalam bilik suara Pilkada
              akan berdampak langsung pada berbagai aspek kehidupan masyarakat,
              seperti pendidikan, kesehatan, infrastruktur, ekonomi, dan sosial.
              <br />
              <br />
              Bagi sebagian orang, Pilkada mungkin terasa rumit dan
              membingungkan. Namun, jangan khawatir! Kamu bisa coba cek halaman
              satu ini agar kamu bisa paham mengenai apa itu Pilkada, bagaimana
              tahapannya, dan kapan pelaksanaannya.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/pilkada-101"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Pilkada 101
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
