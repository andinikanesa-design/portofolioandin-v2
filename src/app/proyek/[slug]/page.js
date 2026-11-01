import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyek } from "@/data/proyek";

export function generateStaticParams() {
  return proyek.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((project) => project.slug === slug);

  return {
    title: item?.judul ?? "Proyek tidak ditemukan",
    description: item?.deskripsi ?? "Proyek yang dicari tidak ditemukan.",
  };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((project) => project.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <Link
        href="/proyek"
        className="text-sm font-semibold text-aksen hover:underline"
      >
        &larr; Kembali ke daftar proyek
      </Link>
      <article className="mt-5">
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          {item.judul}
        </h1>
        <p className="mt-2 text-slate-600">{item.kategori}</p>
        <Image
          src={item.gambar}
          alt={`Pratinjau tugas ${item.judul}`}
          width={640}
          height={420}
          priority
          className="mt-6 h-auto w-full rounded-xl border border-slate-200"
        />
        <p className="mt-6 leading-7 text-slate-700">{item.deskripsi}</p>
        <h2 className="mt-8 text-2xl font-bold text-utama">
          Teknologi yang digunakan
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.teknologi.map((teknologi) => (
            <li
              key={teknologi}
              className="rounded-full bg-white px-3 py-1 text-sm font-medium text-utama ring-1 ring-slate-200"
            >
              {teknologi}
            </li>
          ))}
        </ul>
        <h2 className="mt-8 text-2xl font-bold text-utama">
          Yang Saya Pelajari
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {item.fitur.map((fitur) => (
            <li key={fitur}>{fitur}</li>
          ))}
        </ul>
      </article>
    </main>
  );
}