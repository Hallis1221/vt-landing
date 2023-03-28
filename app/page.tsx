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
          <h1>ss</h1>
        </AnimatedNavbar>
      </div>
    </>
  );
}

