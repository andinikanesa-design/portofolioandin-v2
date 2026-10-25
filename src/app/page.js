import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f8ed] font-sans text-[#203b60]">
      <div className="mx-auto max-w-4xl space-y-6 px-5 py-12">
        <Hero
          nama="Andini Oktavia Dyah Putri"
          tagline="Siswi kelas X SMK, calon Junior Web Developer di Kelas Industri."
        />

        <div id="tentang">
          <Kartu judul="Tentang Saya">
            Saya adalah siswi Rekayasa Perangkat Lunak di SMKN 1
            Kepanjen dan senang mencoba hal baru di dunia teknologi.
            Saya ingin mengembangkan kemampuan membuat website
            yang bermanfaat.
          </Kartu>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-inside list-disc space-y-1">
              <li>Memasak</li>
              <li>Belajar pemrograman</li>
              <li>Mengembangkan website</li>
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            Menjadi <strong>Full Stack Web Developer</strong>.
            Langkah yang saya rencanakan:
            <ol className="mt-2 list-inside list-decimal space-y-1">
              <li>Mempelajari pemrograman secara konsisten</li>
              <li>Membuat proyek website</li>
              <li>Mengembangkan kemampuan web development</li>
            </ol>
          </Kartu>
        </div>

        <div id="keahlian">
          <Kartu judul="Keahlian">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.nama}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
            </div>
          </Kartu>
        </div>

        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg text-left">
              <thead className="bg-[#243f8b] text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-100">
                  <td className="p-3">Senin</td>
                  <td className="p-3">19.00–20.00</td>
                  <td className="p-3">Membaca ulang modul</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">Selasa</td>
                  <td className="p-3">19.00–21.00</td>
                  <td className="p-3">Mengerjakan tugas praktik</td>
                </tr>
                <tr>
                  <td className="p-3">Rabu</td>
                  <td className="p-3">19.30–20.30</td>
                  <td className="p-3">Merekam video dan menulis laporan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>

      <footer className="bg-[#243f8b] px-4 py-5 text-center text-sm text-white">
        © 2026 Andini Oktavia Dyah Putri. Dibuat dengan Next.js di Kelas Industri.
      </footer>
    </main>
  );
}