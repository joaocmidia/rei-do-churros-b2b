import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IdealPara from "@/components/IdealPara";
import Diferenciais from "@/components/Diferenciais";
import Produtos from "@/components/Produtos";
import Beneficios from "@/components/Beneficios";
import Galeria from "@/components/Galeria";
import AreaAtendimento from "@/components/AreaAtendimento";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <IdealPara />
        <Diferenciais />
        <Produtos />
        <Beneficios />
        <Galeria />
        <AreaAtendimento />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;