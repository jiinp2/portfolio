import { Sun, Moon } from "lucide-react";

function PageToggle({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex h-8 w-16 cursor-pointer rounded-full border border-transparent bg-gray-100 outline-none transition-[background-color,border-color] duration-300 dark:border-zinc-700 dark:bg-[#2a2a2a]"
      aria-label="Toggle color theme"
    >
      <div className="absolute top-1 flex h-6 w-6 translate-x-1 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:translate-x-9">
        <Sun
          className="absolute scale-100 rotate-0 text-amber-500 opacity-100 transition-[transform,opacity] duration-200 dark:scale-0 dark:rotate-180 dark:opacity-0"
          size={16}
        />
        <Moon
          className="absolute scale-0 -rotate-180 text-indigo-400 opacity-0 transition-[transform,opacity] duration-200 dark:scale-100 dark:rotate-0 dark:opacity-100"
          size={16}
        />
      </div>
    </button>
  );
}

export default PageToggle;
