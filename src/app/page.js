import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">

      <span className="font-bold text-5xl text-red-500">
        HOLA MUNDO
      </span>

      <Header />

    </main>
  );
}