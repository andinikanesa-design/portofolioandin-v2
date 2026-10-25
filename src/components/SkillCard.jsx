export default function SkillCard({ nama, level }) {
  return (
    <div className="min-h-[100px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-medium text-[#203b60]">
        {nama}
      </h3>
      <p className="mt-2 text-sm text-[#405675]">
        Level: {level}
      </p>
    </div>
  );
}