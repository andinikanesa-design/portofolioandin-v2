import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
    >
      <Image
        src={proyek.gambar}
        alt={`Pratinjau tugas ${proyek.judul}`}
        width={640}
        height={420}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {proyek.teknologi.map((teknologi) => (
            <span
              key={teknologi}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#203b60]"
            >
              {teknologi}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-lg font-semibold text-utama">
          {proyek.judul}
        </h2>
        <p className="mt-1 text-sm text-gray-600">{proyek.deskripsi}</p>
      </div>
    </Link>
  );
}
