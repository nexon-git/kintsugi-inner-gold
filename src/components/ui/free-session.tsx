import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const FreeSession = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-sunset border-none shadow-deep">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Experience the power of The Kintsugi Method with our free session "Your Perfect Day" - a gentle introduction to transformation.
              </p>
              
              <div className="bg-background/20 backdrop-blur-sm rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Your Perfect Day</h3>
                <p className="text-primary-foreground/80 mb-6">
                  A visualization journey that helps you connect with your dreams and possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-background/50 border-primary-foreground/30 text-foreground placeholder:text-muted-foreground"
                  />
                  <Button variant="heroSecondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Get Free Session
                  </Button>
                </div>
              </div>

              <p className="text-sm text-primary-foreground/70">
                No spam, ever. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};