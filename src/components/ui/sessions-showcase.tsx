import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    id: 1,
    title: "Rise Again",
    subtitle: "Reclaiming Your Self-Worth",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Transform your relationship with self-worth and inner value."
  },
  {
    id: 2,
    title: "Cutting the Chains",
    subtitle: "Freedom from the Trauma Bond",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    description: "Break free from limiting patterns and reclaim your power."
  },
  {
    id: 3,
    title: "The Voice Within",
    subtitle: "Trusting Yourself Again",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    description: "Reconnect with your inner wisdom and authentic voice."
  },
  {
    id: 4,
    title: "Shield of Strength",
    subtitle: "Building Safe Boundaries",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    description: "Create healthy boundaries that protect and empower you."
  },
  {
    id: 5,
    title: "Lightness of Being",
    subtitle: "Releasing Shame and Guilt",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Let go of heavy emotions that no longer serve you."
  },
  {
    id: 6,
    title: "Inner Child's Garden",
    subtitle: "Healing Old Wounds",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    description: "Nurture and heal your inner child with compassion."
  },
  {
    id: 7,
    title: "Quieting the Storm",
    subtitle: "Deep Emotional Calm",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Find peace in the midst of emotional turbulence."
  },
  {
    id: 8,
    title: "Unbreakable",
    subtitle: "Stepping Into Your True Power",
    price: "£9.99",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    description: "Embrace your strength and step into your full potential."
  }
];

export const SessionsShowcase = () => {
  return (
    <section id="sessions" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Transformation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eight powerful hypnosis sessions designed to heal, strengthen, and guide you towards your most authentic self.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sessions.map((session) => (
            <Card key={session.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={session.image} 
                  alt={session.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
                  {session.id}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{session.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{session.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{session.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{session.price}</span>
                  <Button variant="outline" size="sm">Preview</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Complete Collection</h3>
            <p className="text-muted-foreground mb-6">Get all 8 transformative sessions plus exclusive bonuses</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-lg text-muted-foreground line-through">£79.92</span>
              <span className="text-3xl font-bold text-primary">£49.99</span>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">Save 38%</span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-12 py-4">
            Get The Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};