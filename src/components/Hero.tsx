import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511950539958&text=Oi%20vim%20pelo%20site%20e%20quero%20saber%20sobre%20Churros%20Congelados";

const benefits = [
  "Produto pronto para fritar",
  "Padronização e segurança alimentar",
  "Ideal para revenda e cardápios",
  "Pacotes de 50 e 100 unidades",
];

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Churros congelados artesanais para o seu{" "}
            <span className="text-primary">negócio vender mais</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fornecimento profissional de churros congelados, com padrão, praticidade e sabor que fideliza clientes.
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-sm md:text-base font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento no WhatsApp
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">
              Atendimento direto via WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;