import { CircleDot, Snowflake, Timer, Package, TrendingUp } from "lucide-react";

const diferenciais = [
  {
    icon: CircleDot,
    title: "Receita artesanal",
    description: "Massa exclusiva, desenvolvida ao longo de mais de 30 anos, com textura leve, crocante por fora e macia por dentro.",
  },
  {
    icon: Snowflake,
    title: "Congelamento profissional",
    description: "Processo de ultracongelamento e armazenamento, preservando sabor, textura e segurança alimentar.",
  },
  {
    icon: Timer,
    title: "Praticidade operacional",
    description: "Produto pronto para fritar. Sem preparo, sem desperdício e sem variação de resultado.",
  },
  {
    icon: Package,
    title: "Padronização",
    description: "Mesmo tamanho, mesmo peso e mesmo padrão em todas as unidades.",
  },
  {
    icon: TrendingUp,
    title: "Excelente margem",
    description: "Produto de alta aceitação, ideal para aumentar ticket médio e vendas por impulso.",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais Rei do Churros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O que torna nossos churros especiais para o seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {diferenciais.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;