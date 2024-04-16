import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateBsa(weight: number, height: number) {
  return Math.min(Math.sqrt((weight * height) / 3600), 2).toFixed(2);
}
