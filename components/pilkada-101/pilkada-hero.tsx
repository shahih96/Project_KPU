import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Pilkada 101
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Kenali apa itu Pilkada, siapa saja kandidatnya, dan kapan
                pelaksanaannya di sini!
              </p>
            </div>
          </div>
          <Image
            src="/img_election_logo.png"
            width="550"
            height="310"
            alt="Hero"
            style={{
              objectFit: "contain",
            }}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
