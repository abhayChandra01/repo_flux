"use client";
import Business from "@/components/BusinessComponent/Business";
import Development from "@/components/DevelopmentComponent/Development";
import Homepage from "@/components/Homepage/Homepage";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Homepage />

      <Business />

      <Development />
    </div>
  );
}
