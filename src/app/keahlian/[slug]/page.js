import Link from "next/link";
import { notFound } from "next/navigation";
import { keahlian } from "@/data/keahlian";

export function generateStaticParams() {
  return keahlian.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = keahlian.find((skill) => skill.slug === slug);

  return {
    title: item?.nama ?? "Keahlian tidak ditemukan",
    description: item?.deskripsi ?? "Keahlian yang dicari tidak ditemukan.",
  };
}

export default async function DetailKeahlian({ params }) {
  const { slug } = await params;
  const item = keahlian.find((skill) => skill.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <Link
        href="/keahlian"
        className="text-sm font-semibold text-aksen hover:underline"
      >
        &larr; Kembali ke daftar keahlian
      </Link>
      <article className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-aksen">
          Keahlian
        </p>
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          {item.nama}
        </h1>
        <p className="mt-3 text-slate-600">
          Level: <span className="font-semibold">{item.level}</span>
        </p>
        <p className="mt-6 max-w-3xl leading-7 text-slate-700">
          {item.deskripsi}
        </p>
      </article>
    </main>
  );
}
