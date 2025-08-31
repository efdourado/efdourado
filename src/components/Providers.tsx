"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ReactNode } from "react";
import "../i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
); }