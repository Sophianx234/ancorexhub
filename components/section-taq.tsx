const SectionTag = ({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) => (
  <div className="flex items-center gap-2 mb-3">
    <span
      className={`font-bold text-sm tracking-widest uppercase ${dark ? "text-tertiary" : "text-primary"}`}
    >
      <span className="italic"> //</span> <span className="dark:text-slate-400"> {text}</span>
    </span>
  </div>
);
export default SectionTag;