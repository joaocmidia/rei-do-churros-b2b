import { useState } from "react";
import { X } from "lucide-react";

const placeholders = [
  { id: 1, emoji: "🥖", label: "Churros dourados" },
  { id: 2, emoji: "🍫", label: "Churros com chocolate" },
  { id: 3, emoji: "🍯", label: "Churros com doce de leite" },
  { id: 4, emoji: "✨", label: "Mini churros" },
  { id: 5, emoji: "🎉", label: "Porção de churros" },
  { id: 6, emoji: "📦", label: "Embalagem" },
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="fotos" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Fotos dos Produtos
          </h2>
          <p className="text-muted-foreground">
            Veja nossos churros artesanais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {placeholders.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="aspect-square bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative bg-card rounded-2xl p-8 max-w-md w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-center">
                <span className="text-8xl block mb-4">
                  {placeholders.find((p) => p.id === selectedImage)?.emoji}
                </span>
                <p className="text-muted-foreground">
                  {placeholders.find((p) => p.id === selectedImage)?.label}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Foto real será adicionada em breve)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;