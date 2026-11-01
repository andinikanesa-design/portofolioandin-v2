import Link from "next/link";

export const metadata = {
  title: "Tentang Saya",
  description: "Kenali Andini Oktavia Dyah Putri dan cita-citanya.",
};

export default function Tentang() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-aksen">
          Tentang
        </p>
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          Andini Oktavia Dyah Putri
        </h1>
        <p className="mt-5 max-w-3xl leading-7 text-slate-700">
          Saya adalah siswi Rekayasa Perangkat Lunak di SMKN 1 Kepanjen yang
          senang mencoba hal baru di dunia teknologi. Saat ini saya sedang
          belajar membuat website dan ingin mengembangkan kemampuan agar dapat
          membuat karya digital yang bermanfaat.
        </p>
        <h2 className="mt-8 text-xl font-bold text-utama">Cita-cita</h2>
        <p className="mt-2 leading-7 text-slate-700">
          Saya bercita-cita menjadi Full Stack Web Developer. Untuk
          mencapainya, saya terus belajar pemrograman, berlatih membuat proyek,
          dan mengembangkan kemampuan web development.
        </p>
        <Link
          href="/keahlian"
          className="mt-6 inline-block rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition hover:bg-rose-800"
        >
          Lihat keahlian saya
        </Link>
      </section>
    </main>
  );
}