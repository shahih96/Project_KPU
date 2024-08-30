"use client";

import Link from "next/link";
export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <BookIcon className="h-6 w-6" />
        <span className="mx-2 my-2">KPU Provinsi Lampung</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/pilkada-101"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pilkada-101
        </Link>
        <Link
          href="/login"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Kawal Pantarlih
        </Link>
      </nav>
    </header>
  );
}

function BookIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
