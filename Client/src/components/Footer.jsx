export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-600 md:flex-row">
        <span>© {new Date().getFullYear()} MyWebApp</span>
        <div className="space-x-6">
          {['Twitter', 'GitHub', 'LinkedIn'].map((name) => (
            <a key={name} href="#" className="hover:text-primary-600 transition">
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
