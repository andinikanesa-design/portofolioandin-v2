import Image from "next/image";
import FilterProyek from "@/components/Filterproyek"; 
import { proyek } from "@/data/proyek"; 

export const metadata = {  
  title: "Proyek",  
  description: "Daftar proyek HTML, CSS, dan JavaScript karya Andini Oktavia Dyah Putri", 
}; 

export default function DaftarProyek() {  
  return (    
    <main className="mx-auto w-full max-w-5xl px-4 py-10">      
      <header className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src="/andyn.png"
          alt="Foto Andini Oktavia Dyah Putri"
          width={160}
          height={160}
          className="h-32 w-32 shrink-0 rounded-full border-4 border-red-600 object-cover object-[65%_center]"
        />
        <div>
          <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Proyek Saya</h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat detailnya.</p>
        </div>
      </header>
      
      <FilterProyek proyek={proyek} />    
    </main>  
  );
}