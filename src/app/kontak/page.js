import Link from "next/link";

export const metadata = {
  title: "Kontak",
  description: "Informasi kontak Andini Oktavia Dyah Putri.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 font-sans text-slate-800">
      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
          Kontak
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Terima kasih sudah mengunjungi portofolio saya. Saya senang belajar
          tentang pengembangan web dan terbuka untuk berdiskusi mengenai
          proyek-proyek yang saya buat.
        </p>
        <p className="mt-4 text-slate-600">
          Email:{" "}
          <a
            href="mailto:andinikanesa@gmail.com"
            className="font-semibold text-rose-700 hover:underline"
          >
            andinikanesa@gmail.com
          </a>
        </p>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-rose-700 px-5 py-3 font-semibold text-white transition hover:bg-rose-800"
        >
          Lihat proyek saya
        </Link>
      </section>
    </main>
  );
}