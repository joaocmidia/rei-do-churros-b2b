import { Check } from "lucide-react";
import churrosTradicional from "@/assets/churros-tradicional.jpeg";
import churrosEspanhol from "@/assets/churros-espanhol.jpeg";
import miniChurros from "@/assets/mini-churros.jpeg";
const produtos = [{
  name: "Churros Tradicional",
  size: "16cm",
  description: "Churros tradicional congelado, apenas a massa, ideal para rechear após a fritura com doce de leite, chocolate, creme ou recheio de sua preferência.",
  specs: ["Massa artesanal", "Pronto para fritar", "16 cm", "Pacotes com 50 ou 100 unidades"],
  image: churrosTradicional
}, {
  name: "Churros Espanhol",
  size: "16cm",
  description: "Churros no estilo espanhol, perfeitos para servir em porções e acompanhar com caldas ou doces.",
  specs: ["Versátil", "Ideal para porções e combos", "Congelado, pronto para fritar", "Pacotes com 50 ou 100 unidades"],
  image: churrosEspanhol
}, {
  name: "Mini Churros Doce de Leite",
  size: "20g",
  description: "Mini churros recheados com doce de leite, já prontos, padronizados e ideais para porções, sobremesas e delivery.",
  specs: ["Recheado", "20g por unidade", "Alto giro", "Pacotes com 50 ou 100 unidades"],
  image: miniChurros
}];
const Produtos = () => {
  return <section id="produtos" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos Congelados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Variedade para atender diferentes necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {produtos.map(produto => <div key={produto.name} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all group">
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <img src={produto.image} alt={produto.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{produto.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-accent/20 text-accent-foreground rounded-full">
                    {produto.size}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {produto.description}
                </p>
                <ul className="space-y-2">
                  {produto.specs.map(spec => <li key={spec} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Produtos;