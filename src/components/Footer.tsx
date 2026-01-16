import logo from "@/assets/logo-reidochurros.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="Rei do Churros" className="h-10 w-auto brightness-0 invert" />
          <p className="text-muted text-sm text-center">
            © {currentYear} Rei do Churros. Todos os direitos reservados.
          </p>
          <p className="text-muted/60 text-xs">
            Churros congelados artesanais para seu negócio • Jundiaí, SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;