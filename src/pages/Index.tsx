import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { SessionsShowcase } from "@/components/ui/sessions-showcase";
import { FreeSession } from "@/components/ui/free-session";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SessionsShowcase />
        <FreeSession />
      </main>
    </div>
  );
};

export default Index;
