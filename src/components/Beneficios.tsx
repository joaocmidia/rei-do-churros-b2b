import { Check } from "lucide-react";

const beneficios = [
  "Produto com forte apelo emocional",
  "Fácil preparo",
  "Zero desperdício",
  "Excelente aceitação",
  "Baixa complexidade operacional",
  "Ideal para delivery",
  "Aumenta ticket médio",
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Por que incluir churros congelados no seu cardápio
            </h2>
            <p className="text-muted-foreground">
              Vantagens claras para o seu negócio
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              {beneficios.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;