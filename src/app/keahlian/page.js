import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Keahlian",
  description: "Daftar keahlian dan kompetensi Andini Oktavia Dyah Putri.",
};

export default function HalamanKeahlian() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Keahlian Saya
      </h1>
      <p className="mb-8 mt-3 text-slate-600">
        Daftar kompetensi dan keahlian pengembangan web yang sedang saya
        pelajari. Pilih keahlian untuk membaca detailnya.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {keahlian.map((item) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-aksen hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-utama group-hover:text-aksen">
              {item.nama}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Level: <span className="font-semibold">{item.level}</span>
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-aksen">
              Lihat detail &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}