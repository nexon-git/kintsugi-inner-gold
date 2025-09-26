import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kintsugi.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            The Kintsugi Method
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformative hypnosis sessions that help you heal, grow, and discover your inner strength through the ancient art of beautiful repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore The Collection
            </Button>
            <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};