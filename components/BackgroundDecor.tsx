export default function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sage-200/25 blur-3xl" />
      <div className="absolute right-[-5rem] top-[18%] h-80 w-80 rounded-full bg-terracotta-200/20 blur-3xl" />
      <div className="absolute left-[15%] top-[42%] h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute bottom-32 right-[12%] h-96 w-96 rounded-full bg-sage-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-[-4rem] h-72 w-72 rounded-full bg-cream-300/40 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="180" cy="220" r="118" stroke="#c4a574" strokeWidth="1" />
        <circle cx="180" cy="220" r="78" stroke="#c4a574" strokeWidth="0.6" />
        <circle cx="1020" cy="640" r="160" stroke="#8b4a3a" strokeWidth="0.8" />
        <circle cx="980" cy="1280" r="90" stroke="#6b7b6e" strokeWidth="0.8" />
        <path
          d="M80 980 C 280 860, 420 1120, 620 980 S 980 860, 1140 980"
          stroke="#c4a574"
          strokeWidth="0.8"
        />
        <path
          d="M40 420 C 260 360, 480 500, 700 420 S 980 320, 1160 430"
          stroke="#6b7b6e"
          strokeWidth="0.6"
        />
      </svg>
    </div>
  );
}
