import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "O sistema da Woodesk otimizou nossa operação e aumentou nossa produtividade.",
    name: "Mariana Oliveira",
    role: "Rede de Restaurantes",
  },
  {
    quote: "Com o CRM imobiliário da Woodesk nós fechamos mais negócios e temos mais controle do funil.",
    name: "Carlos Mendes",
    role: "Imobiliária Prime",
  },
  {
    quote: "A gestão do home care ficou muito mais simples e organizada. Excelente suporte!",
    name: "Fernanda Lima",
    role: "Vida em Casa",
  },
  {
    quote: "Emitimos notas e controlamos o estoque em minutos. A equipe toda adotou sem dificuldade.",
    name: "Ricardo Alves",
    role: "Comércio Central",
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, testimonials.length - 2);
  const visible = [0, 1, 2].map((i) => testimonials[(page + i) % testimonials.length]!);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Histórias reais, grandes resultados
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">O que nossos clientes dizem</h2>
        <p className="mt-3 text-muted-foreground">
          Empresas de diferentes segmentos já transformaram sua gestão com a Woodesk.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-brand sm:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {visible.map((t) => (
              <article
                key={t.name}
                className="rounded-xl border border-border bg-card p-6 text-left shadow-[0_10px_30px_-24px_oklch(0.24_0.06_259/0.6)]"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-brand">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-chart-4 text-chart-4" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Próximo"
            onClick={() => setPage((p) => (p + 1) % pages)}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-brand sm:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para depoimento ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === page ? "bg-brand" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
