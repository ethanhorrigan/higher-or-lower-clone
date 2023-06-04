"use client";

import Image from "next/image";
import MainButtonComponent from "./MainButtonComponent";

function HomeComponent() {
  return (
    <div className="relative h-full w-full bg-[url('/xlarge.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Image
        src="/Higher_Or_Lower_logo.webp"
        width={200}
        height={200}
        alt="logo"
      />
      <h2 className="text-white">What gets Googled more?</h2>
      <MainButtonComponent />
    </div>
  );
}

export default HomeComponent;
