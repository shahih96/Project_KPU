"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/landing-page/landing-hero";
import Definition from "@/components/landing-page/landing-pilkada-def";
import Content from "@/components/landing-page/landing-playlist-content";
import Steps from "@/components/landing-page/landing-steps";
import Timer from "@/components/timer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Hero />
        <Definition />
        <Content />
        <Steps />
        <Timer />
      </main>
      <Footer />
    </div>
  );
}
