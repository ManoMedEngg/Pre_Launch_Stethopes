import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label className="relative inline-block w-14 h-7 cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="opacity-0 w-0 h-0"
      />
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 transition-all duration-400 rounded-full">
        <span className="absolute h-5 w-5 left-1 bottom-1 bg-white transition-all duration-400 rounded-full transform translate-x-0 dark:translate-x-7"></span>
      </span>
    </label>
  );
}