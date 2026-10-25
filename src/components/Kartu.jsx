export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-[#203b60]">
        {judul}
      </h2>

      <div className="text-[15px] leading-6 text-[#405675]">
        {children}
      </div>
    </section>
  );
}