/**
 * v0 by Vercel.
 * @see https://v0.dev/t/owbX9QvP0Rh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

export default function Timer() {
  //   const [timeRemaining, setTimeRemaining] = useState(60 * 5);
  //   const [isRunning, setIsRunning] = useState(false);

  //   useEffect(() => {
  //     let interval: any;
  //     if (isRunning) {
  //       interval = setInterval(() => {
  //         setTimeRemaining((prevTime) => prevTime - 1);
  //       }, 1000);
  //     }
  //     return () => clearInterval(interval);
  //   }, [isRunning]);

  //   const formatTime = (seconds: number) => {
  //     const minutes = Math.floor(seconds / 60);
  //     const remainingSeconds = seconds % 60;
  //     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  //   };

  //   const handleStart = () => {
  //     setIsRunning((prevState) => !prevState);
  //   };

  //   const handleReset = () => {
  //     setTimeRemaining(60 * 5);
  //     setIsRunning(false);
  //   };

  const [electionDay, setElectionDay] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2024-11-26T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setElectionDay(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-16 bg-background">
      <div className="bg-card rounded-lg p-8 shadow-lg bg-red-500">
        <div>
          <h1 className="font-bold text-white text-center p-2 tracking-tighter sm:text-2xl xl:text-4xl/none ">
            Jangan lupa gunakan hak suara anda dalam <br /> Pilkada Serentak
            2024 😄{" "}
          </h1>
          <p className="text-center text-xl text-white text white p-3">
            Kita sebagai rakyat, turut andil dalam menentukan masa depan bangsa.
          </p>
        </div>
        <Card className="p-8 grid md:-rotate-2">
          <p className="text-xl p-2 mx-auto mb-3 inline-flex h-10 items-center justify-center rounded-md bg-red-500">
            27 November 2024
          </p>
          <p className="my-10 text-center text-3xl text-red-500 p-2 mx-auto mb-3 inline-flex h-10 items-center justify-center rounded-md md:my-0">
            Countdown sampai Pilkada 2024 📅{" "}
          </p>

          <div className="text-4xl text-center font-bold mt-12 md:mt-2">
            {days} Hari : {hours} Jam : {minutes} Menit : {seconds} Detik
          </div>
        </Card>
      </div>
    </div>
  );
}
