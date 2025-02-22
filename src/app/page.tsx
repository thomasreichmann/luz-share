"use client";

import { calculateDaysSinceDate } from "@/utils/dateUtils";
import Image from "next/image";
import logo from "./logo-share-footer.svg";

export default function Home() {
  const daysSinceOutage = calculateDaysSinceDate("2025-02-22");

  return (
    <div className="flex flex-col min-h-screen justify-between items-center pt-12">
      <header>
        <Image alt="A Share" src={logo} />
      </header>

      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center">
          Dias sem cair a luz na Share Butantã
        </h1>
        <p className="text-2xl font-bold">
          {daysSinceOutage} dia{daysSinceOutage === 1 ? "" : "s"}
        </p>
      </main>

      <footer className="text-center text-gray-500 italic text-sm p-8 flex flex-col gap-4 sm:gap-1">
        <p>
          &quot;A Share busca atingir altos níveis de satisfação dos residentes,
          dos seus pais e de seus colaboradores.&quot;
        </p>
        <p>
          &quot;dispõe de toda a estrutura necessária para desenvolver projetos
          da melhor forma para o mercado de estudantes.&quot;
        </p>
        <p>
          &quot; Aqui a experiência é completa em todos os sentidos e em todas
          as suas formas. Com uma estrutura que oferece tranquilidade para você
          viver sem preocupações e seu bem-estar sempre em primeiro lugar e
          alinhado às suas necessidades.&quot;
        </p>
      </footer>
    </div>
  );
}
