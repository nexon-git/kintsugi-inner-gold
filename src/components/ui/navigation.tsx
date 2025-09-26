import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-primary">The Kintsugi Method</h2>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#sessions" className="text-foreground hover:text-primary transition-colors duration-300">
              Sessions
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Free Session
            </Button>
            <Button size="sm">
              Buy Collection
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};