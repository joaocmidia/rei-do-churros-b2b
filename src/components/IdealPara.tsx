import { Coffee, Croissant, Sandwich, Cake, UtensilsCrossed, Building2, Truck, PartyPopper } from "lucide-react";

const segments = [
  { icon: Coffee, label: "Cafeterias" },
  { icon: Croissant, label: "Padarias" },
  { icon: Sandwich, label: "Lanchonetes" },
  { icon: Cake, label: "Docerias" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Building2, label: "Dark Kitchens" },
  { icon: Truck, label: "Food Trucks" },
  { icon: PartyPopper, label: "Buffets e Eventos" },
];

const IdealPara = () => {
  return (
    <section id="indicado-para" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Ideal para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Nossos churros congelados foram desenvolvidos para atender negócios que buscam qualidade, praticidade e alto giro, sem complicar a operação.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {segments.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealPara;