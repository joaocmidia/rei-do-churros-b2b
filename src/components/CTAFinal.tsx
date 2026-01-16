import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511950539958&text=Oi%20vim%20pelo%20site%20e%20quero%20saber%20sobre%20Churros%20Congelados";

const CTAFinal = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Tenha churros artesanais no seu cardápio e aumente suas vendas agora mesmo!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Solicite seu orçamento sem compromisso
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicite um orçamento agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;