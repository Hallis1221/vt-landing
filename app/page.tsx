"use client";

import AnimatedNavbar from "@/components/navbar/animated";
import { Raleway } from "next/font/google";
import React from "react";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={raleway.className}>
        <AnimatedNavbar>
          <div className="h-3/6  flex flex-col justify-center items-center">
              <h1 className="text-[#3d2f33] text-6xl  text-center w-4/6">
                Helping companies create without limits.
              </h1>
          </div>
        </AnimatedNavbar>
      </div>
    </>
  );
}
