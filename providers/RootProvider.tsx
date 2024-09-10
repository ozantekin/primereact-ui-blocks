"use client";

import { PrimeReactProvider } from "primereact/api";

import { ChildContainerProps } from "@/pr/types";

import "../assets/styles/globals.css";
import { RootContext } from "./context/RootContext";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

export default function RootProvider({ children }: ChildContainerProps) {
  return (
    <PrimeReactProvider>
      <RootContext>{children}</RootContext>
    </PrimeReactProvider>
  );
}
