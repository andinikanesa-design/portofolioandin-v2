import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-aksen">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-utama">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-lg text-slate-600">
        Halaman yang Anda cari tidak tersedia atau alamatnya sudah berubah.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-utama px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}