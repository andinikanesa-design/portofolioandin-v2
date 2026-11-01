import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Portofolio Andini Oktavia Dyah Putri",
    template: "%s | Andini Oktavia Dyah Putri",
  },
  description:
    "Portofolio Andini Oktavia Dyah Putri, siswi Rekayasa Perangkat Lunak dan calon Junior Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}