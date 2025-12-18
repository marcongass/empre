"use client";

import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initAos = () => {
      // @ts-ignore
      if ((window as any).AOS && typeof (window as any).AOS.init === "function") {
        // @ts-ignore
        (window as any).AOS.init({ duration: 1000, once: true, offset: 100 });
        return true;
      }
      return false;
    };

    if (!initAos()) {
      const id = setInterval(() => {
        if (initAos()) clearInterval(id);
      }, 120);
      return () => clearInterval(id);
    }
  }, []);

  return null;
}
