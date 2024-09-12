import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function pr(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
