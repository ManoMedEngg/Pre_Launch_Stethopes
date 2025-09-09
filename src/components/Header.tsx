import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onTryNow: () => void;
  onLogoClick: () => void;
}

export function Header({ onTryNow, onLogoClick }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-gray-900/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className="text-2xl font-pacifico text-white cursor-pointer"
            onClick={onLogoClick}
          >
            Stethopes
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("events")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
          <Button
            onClick={onTryNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Try Now
          </Button>
        </div>
      </div>
    </header>
  );
}