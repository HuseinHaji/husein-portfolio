export default function SectionDivider() {
    return (
      <div className="flex items-center gap-2 pt-4">
        <div className="h-px flex-1 bg-slate-100/60" />
        <div className="w-1 h-1 rounded-full bg-blue-600" />
        <div className="h-px flex-1 bg-slate-100/60" />
      </div>
    );
  }
  