import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col gap-4">
        <p>Welcome to Getsafe&apos;s Insurance Services</p>
        <Link href="/buy/insurance/developer" className="underline">
          Buy Developer Insurance
        </Link>
        <Link href="/buy/insurance/designer" className="underline">
          Buy Designer Insurance
        </Link>
      </div>
    </main>
  );
}
