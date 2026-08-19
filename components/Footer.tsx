export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300/70 bg-espresso-900 px-6 py-10 text-cream-200 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-lg tracking-wide text-cream-100">
          HelgaHome&amp;Style
        </p>
        <p className="text-sm text-cream-300/80">
          © {year} HelgaHome&amp;Style. Сделано с любовью.
        </p>
      </div>
    </footer>
  );
}
