import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const number = (value: number) => new Intl.NumberFormat("en-US").format(value);
export const percent = (value: number) => `${value.toFixed(value % 1 ? 1 : 0)}%`;
export const amount = (value: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
