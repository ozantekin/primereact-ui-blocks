"use client";
import { PrimeReactProvider } from "primereact/api";

import { ChildContainerProps } from "@/pr/types";

import "../assets/styles/globals.css";
import { RootContext } from "./context/RootContext";

import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";

export default function RootProvider({ children }: ChildContainerProps) {
  return (
    <PrimeReactProvider>
      <RootContext>{children}</RootContext>
    </PrimeReactProvider>
  );
}
