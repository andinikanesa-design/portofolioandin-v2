export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 py-3 sm:flex-row sm:gap-7">
      <img
        src="/andyn.png"
        alt="Foto profil Emmaula"
        className="h-44 w-44 shrink-0 rounded-full border-4 border-[#cf1020] bg-white object-cover p-1"
      />

      <div className="flex-1">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#203b60] sm:text-5xl">
          Halo, saya {nama}!
        </h1>

        <p className="mt-3 text-base leading-7 text-[#203b60]">
          {tagline}
        </p>

        <nav className="mt-5 flex flex-wrap gap-3">
          <a
            href="#tentang"
            className="rounded-lg bg-[#cf1020] px-4 py-2.5 font-semibold text-white transition hover:bg-red-800"
          >
            Tentang saya
          </a>

          <a
            href="#keahlian"
            className="rounded-lg border border-[#203b60] px-4 py-2.5 font-semibold text-[#203b60] transition hover:bg-white"
          >
            Lihat keahlian
          </a>
        </nav>
      </div>
    </section>
  );
}