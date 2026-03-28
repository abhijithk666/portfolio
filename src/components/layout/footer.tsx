export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-zinc-200/50 dark:border-zinc-800/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} Abhijith K. All rights reserved.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Designed & built by Abhijith K
        </p>
      </div>
    </footer>
  );
}
