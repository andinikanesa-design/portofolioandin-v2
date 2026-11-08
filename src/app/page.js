import Link from "next/link";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import { keahlian } from "@/data/keahlian";
import { proyek } from "@/data/proyek";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-6 py-12">
      <Hero
        nama="Andini Oktavia Dyah Putri"
        tagline="Siswi kelas X SMK, calon Junior Web Developer di Kelas Industri."
      />

      <section id="keahlian" className="scroll-mt-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-utama">Keahlian</h2>
            <p className="mt-1 text-slate-600">
              Hal-hal yang sedang saya pelajari dan kembangkan.
            </p>
          </div>
          <Link
            href="/keahlian"
            className="font-semibold text-aksen hover:underline"
          >
            Semua keahlian &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {keahlian.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/keahlian/${item.slug}`}
              className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
            >
              <SkillCard nama={item.nama} level={item.level} />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-utama">Proyek</h2>
            <p className="mt-1 text-slate-600">
              Beberapa hasil belajar saya di Kelas Industri UBIG.
            </p>
          </div>
          <Link
            href="/proyek"
            className="font-semibold text-aksen hover:underline"
          >
            Semua proyek &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyek.slice(0, 3).map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
      </section>
    </main>
  );
}