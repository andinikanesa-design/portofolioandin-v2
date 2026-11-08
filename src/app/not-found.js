import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-72px-72px)] flex-col items-center justify-center bg-[#f0f8ed] px-5 text-center">
      <h1 className="text-7xl font-extrabold text-red-700">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-[#203b60]">
        Halaman tidak ditemukan
      </h2>

      <p className="mt-5 max-w-md text-gray-500">
        Alamat atau halaman web yang Anda cari tidak ada,
        telah dihapus, atau sedang dipindahkan.
      </p>

      <Link
        href="/"
        className="mt-7 rounded-lg bg-[#10263d] px-6 py-3 font-semibold text-white shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}