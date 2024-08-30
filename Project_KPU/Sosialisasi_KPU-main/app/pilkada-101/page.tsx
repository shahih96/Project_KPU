import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/pilkada-101/pilkada-hero";
import Definition from "@/components/pilkada-101/pilkada-def";
import Timer from "@/components/timer";

export default function Component() {
  return (
    <main>
      <Header />
      <Hero />
      <Definition />
      <Timer />
      <Footer />
    </main>
  );
}
