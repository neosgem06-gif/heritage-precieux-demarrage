import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import DepotForm from "@/components/DepotForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Date d'ouverture : mi-novembre 2025 (15 novembre 2025)
  const openingDate = new Date("2025-11-15T10:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = openingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [openingDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par votre API)
    setTimeout(() => {
      toast.success("Merci ! Vous serez informé(e) de notre ouverture.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container py-6 md:py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-serif text-primary">
              Héritage Précieux
            </h1>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container flex-1 flex flex-col justify-center py-12 md:py-0">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Titre principal */}
            <div className="space-y-4">
              <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] font-light">
                Bientôt à Nice
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight">
                Héritage Précieux
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Dépôt-Vente de Luxe Vintage
              </p>
            </div>

            {/* Compte à rebours */}
            <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-primary">
                  {timeLeft.days}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Jours
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-primary">
                  {timeLeft.hours}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Heures
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-primary">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Minutes
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-primary">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  Secondes
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-foreground/80">
                Découvrez notre collection exclusive de sacs iconiques <span className="text-primary font-medium">Chanel</span>, <span className="text-primary font-medium">Hermès</span>, <span className="text-primary font-medium">Dior</span>, de bijoux et montres vintage de créateurs.
              </p>
              
              {/* Innovation Vintage Me */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">Vintage Me</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Notre innovation exclusive : <span className="text-foreground font-medium">essayage virtuel par Intelligence Artificielle</span>. Visualisez comment les pièces vous vont avant même de les essayer.
                </p>
              </div>
            </div>

            {/* Newsletter - Zone mise en avant */}
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40 rounded-2xl p-8 md:p-10 shadow-2xl shadow-primary/20">
                <div className="space-y-5">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-primary">
                      Ne Manquez Pas l'Ouverture
                    </h3>
                    <p className="text-base md:text-lg text-foreground/90">
                      Inscrivez-vous pour recevoir une invitation exclusive et découvrir nos premières pièces en avant-première
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 bg-background/50 border-primary/50 text-foreground placeholder:text-muted-foreground focus:border-primary text-base"
                      disabled={isSubmitting}
                    />
                    <Button 
                      type="submit" 
                      size="lg"
                      className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base shadow-lg shadow-primary/30"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi..." : "M'inscrire"}
                    </Button>
                  </form>
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Vos données sont protégées et ne seront jamais partagées
                  </p>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="space-y-2 text-sm md:text-base text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Avenue Alfred Borriglione, Nice
              </p>
              <p className="text-xs text-muted-foreground/70">
                (Proximité Faculté de Médecine et Campus Valrose)
              </p>
            </div>

            {/* FAQ */}
            <div className="pt-12 border-t border-border">
              <FAQ />
            </div>

            {/* Dépôt-Vente */}
            <div className="space-y-4 max-w-2xl mx-auto pt-12 border-t border-border">
              <div className="text-center space-y-3">
                <h3 className="text-xl md:text-2xl font-serif text-primary">
                  Vous Possédez des Pièces de Luxe ?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Confiez-nous vos sacs, bijoux et montres de créateurs. Nous les vendons pour vous en toute sécurité.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <DepotForm />
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary/80 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.ebay.fr" target="_blank" rel="noopener noreferrer">
                    Voir notre boutique eBay
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container py-6 md:py-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Héritage Précieux. Transaction réalisée par <span className="text-[#E67E22] font-medium">ACE</span>.
          </p>
        </footer>
      </div>
    </div>
  );
}

