import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

import { Logo } from "./site-header";

const columns = [
  {
    title: "Soluções",
    links: ["ERP", "CRM Imobiliário", "Bares e Restaurantes", "Home Care", "Advogados", "PDV para Comércio"],
  },
  {
    title: "Institucional",
    links: ["Sobre a Woodesk", "Cases", "Planos", "Blog", "Contato"],
  },
  {
    title: "Suporte",
    links: ["Central de Ajuda", "Suporte Técnico", "Status da Plataforma", "Política de Privacidade", "Termos de Uso"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-1 text-xs text-muted-foreground">Tecnologia para negócios.</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Sistemas de gestão, CRM e ERP para diferentes segmentos. Mais eficiência, mais resultados, mais tempo
              para o que importa.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social Woodesk"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-background transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-navy">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold text-navy">Receba novidades</h3>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                required
                placeholder="Seu e-mail"
                aria-label="Seu e-mail"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Inscrever"
                className="flex h-9 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-primary-foreground transition-colors hover:bg-brand-dark"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              Fique por dentro das novidades e conteúdos da Woodesk.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2024 Woodesk. Todos os direitos reservados.</p>
          <p>Feito para negócios que não param.</p>
        </div>
      </div>
    </footer>
  );
}
