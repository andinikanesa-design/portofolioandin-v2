import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

export const metadata = {
  title: "Proyek",
  description: "Kumpulan proyek belajar Andini Oktavia Dyah Putri.",
};

export default function DaftarProyek() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Proyek Saya
      </h1>
      <p className="mb-8 mt-3 text-slate-600">
        Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk
        melihat detailnya.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyek.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>
    </main>
  );
}