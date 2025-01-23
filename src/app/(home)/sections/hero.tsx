"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState("app");

  const words = useMemo(() => ["App", "Website", "Blog", "Sistema"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <section className="min-h-screen">
      <div className="text-black space-y-14 text-left z-10">
        <span>Backbone</span>

        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
          A solução
          <br />
          para o seu <br />
          <span className="inline-block min-w-[3ch] transition-all duration-300">
            {currentWord}
          </span>
        </h1>

        <Link href="/#form" className="flex">
          <Button
            variant="outline"
            size="lg"
            className="bg-blue-50 text-xl md:text-base h-14 w-full md:w-auto"
          >
            Entrar em contacto
          </Button>
        </Link>
      </div>
    </section>
  );
}
