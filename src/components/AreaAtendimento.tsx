import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511950539958&text=Oi%20vim%20pelo%20site%20e%20quero%20saber%20sobre%20Churros%20Congelados";
const AreaAtendimento = () => {
  return <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Área de Atendimento
          </h2>
          <p className="text-muted-foreground text-lg mb-8">Atendemos <strong className="text-foreground">Jundiaí e região</strong>.
Para mais informações, fale com a gente no WhatsApp.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default AreaAtendimento;
