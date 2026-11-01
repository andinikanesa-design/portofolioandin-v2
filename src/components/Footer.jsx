export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama px-6 py-5 text-center text-latar">
      <p>
        &copy; {tahun} Andini Oktavia Dyah Putri. Dibuat dengan Next.js di Kelas
        Industri UBIG.
      </p>
    </footer>
  );
}
