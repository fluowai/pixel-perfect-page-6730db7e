import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  CreditCard,
  Gavel,
  Headphones,
  Heart,
  LifeBuoy,
  Package,
  Rocket,
  Users,
  UtensilsCrossed,
  Wallet,
  Workflow,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Testimonials } from "@/components/testimonials";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import featureMan from "@/assets/feature-man.jpg";
import segErp from "@/assets/seg-erp.jpg";
import segImob from "@/assets/seg-imob.jpg";
import segBar from "@/assets/seg-bar.jpg";
import segHomecare from "@/assets/seg-homecare.jpg";
import segAdvogados from "@/assets/seg-advogados.jpg";
import segPdv from "@/assets/seg-pdv.jpg";

const title = "Woodesk — Tecnologia para negócios que vão mais longe";
const description =
  "Sistemas completos de gestão, CRM e ERP para diferentes segmentos: ajudamos empresas a atender melhor, vender mais e crescer com eficiência.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const segments = [
  {
    icon: Package,
    image: segErp,
    title: "ERP",
    text: "Gestão completa para sua empresa, do estoque ao financeiro.",
  },
  {
    icon: Building2,
    image: segImob,
    title: "CRM Imobiliário",
    text: "Mais vendas, mais relacionamento, mais oportunidades.",
  },
  {
    icon: UtensilsCrossed,
    image: segBar,
    title: "Bares e Restaurantes",
    text: "Pedidos, mesas, estoque e financeiro em um só lugar.",
  },
  {
    icon: Heart,
    image: segHomecare,
    title: "Home Care",
    text: "Gestão de pacientes, equipes e atendimentos domiciliares.",
  },
  {
    icon: Gavel,
    image: segAdvogados,
    title: "Advogados",
    text: "Organize processos, clientes e prazos com mais eficiência.",
  },
  {
    icon: CreditCard,
    image: segPdv,
    title: "PDV para Comércio",
    text: "Vendas rápidas, controle e praticidade na emissão de notas.",
  },
];

const features = [
  { icon: Users, label: "Atendimento e CRM" },
  { icon: Wallet, label: "Gestão de vendas e financeiro" },
  { icon: Workflow, label: "Automação de processos" },
  { icon: BarChart3, label: "Relatórios inteligentes" },
  { icon: LifeBuoy, label: "Suporte especializado" },
];

const stats = [
  { value: "+5.000", label: "Clientes ativos" },
  { value: "+30", label: "Segmentos atendidos" },
  { value: "+99%", label: "Uptime da plataforma" },
  { value: "+98%", label: "Clientes satisfeitos" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-soft/70 to-background">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:py-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Uma plataforma, infinitas possibilidades
              </p>
              <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold text-navy sm:text-5xl">
                Tecnologia
                <br />
                para negócios
                <br />
                que vão <span className="text-brand">mais longe.</span>
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                A Woodesk oferece sistemas completos de gestão, CRM e ERP para diferentes segmentos, ajudando
                empresas a atender melhor, vender mais e crescer com eficiência.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
                >
                  Teste Grátis
                </a>
                <a
                  href="#contato"
                  className="rounded-lg bg-brand-soft px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft/70"
                >
                  Fale com um especialista
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  { icon: Rocket, a: "Implementação", b: "rápida" },
                  { icon: Headphones, a: "Suporte", b: "especializado" },
                  { icon: ClipboardList, a: "Soluções", b: "para o seu segmento" },
                ].map(({ icon: Icon, a, b }) => (
                  <li key={a} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs leading-tight text-muted-foreground">
                      {a}
                      <br />
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src={heroDashboard}
                alt="Painel de gestão Woodesk com indicadores de clientes, vendas e atendimentos"
                width={1280}
                height={912}
                className="w-full rounded-xl border border-border shadow-[0_30px_60px_-30px_oklch(0.24_0.06_259/0.45)]"
              />
              <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[0_20px_40px_-24px_oklch(0.24_0.06_259/0.6)] sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <BarChart3 className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight font-medium text-navy">
                  Mais controle
                  <br />
                  para o seu dia a dia
                </span>
              </div>
              <p className="mt-8 text-right font-serif text-xl text-brand italic lg:mt-4">Gestão sem limites</p>
            </div>
          </div>
        </section>

        {/* Segmentos */}
        <section className="bg-background py-20" id="segmentos">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Diferentes segmentos, uma mesma tecnologia
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                Soluções para <span className="text-brand">cada negócio</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Sistemas completos, pensados para a realidade de cada segmento.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {segments.map(({ icon: Icon, image, title: name, text }) => (
                <article
                  key={name}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_14px_34px_-28px_oklch(0.24_0.06_259/0.8)]"
                >
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="h-32 w-full object-cover"
                  />
                  <div className="relative p-5 pt-8">
                    <span className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-brand shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-navy">{name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
                    <a
                      href="#contato"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tudo que você precisa */}
        <section className="bg-background pb-20">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Mais do que sistemas, resultados
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-extrabold text-navy sm:text-4xl">
                Tudo que você precisa
                <br />
                para crescer, em um <span className="text-brand">só lugar</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A Woodesk integra pessoas, processos e tecnologia para simplificar a gestão da sua empresa,
                independentemente do segmento.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-navy">{label}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#segmentos"
                className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
              >
                Conheça todas as soluções
              </a>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] bg-brand-soft/60 p-4">
                <img
                  src={featureMan}
                  alt="Empresário usando o sistema Woodesk no notebook"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="absolute bottom-8 -left-2 hidden items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[0_20px_40px_-24px_oklch(0.24_0.06_259/0.6)] sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <BarChart3 className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight font-medium text-navy">
                  Gestão inteligente
                  <br />
                  para um futuro maior
                </span>
              </div>
              <div className="absolute -right-2 -bottom-4 hidden items-center gap-3 rounded-xl bg-navy px-4 py-3 text-background shadow-lg sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/30">
                  <ClipboardList className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight font-medium">
                  Mais eficiência
                  <br />
                  Mais tempo
                  <br />
                  Mais resultados
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Números que impulsionam
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Empresas que confiam na <span className="text-brand">Woodesk</span>
            </h2>

            <div className="mt-10 grid gap-8 rounded-xl border border-border bg-card px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? "lg:border-l lg:border-border" : ""}>
                  <p className="text-3xl font-extrabold text-brand">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA */}
        <section id="contato" className="bg-background pb-20">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-r from-brand-dark to-brand px-8 py-12 text-primary-foreground lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80">
                  Pronto para levar seu negócio mais longe?
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Comece agora com a Woodesk</h2>
                <p className="mt-3 text-sm opacity-90">
                  Teste gratuitamente e descubra como a tecnologia pode transformar sua gestão.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="block rounded-lg bg-background px-8 py-3 text-sm font-bold text-brand transition-opacity hover:opacity-90"
                >
                  Teste Grátis
                </a>
                <p className="mt-3 text-xs opacity-80">
                  Sem cartão de crédito &nbsp;•&nbsp; Cancelamento a qualquer momento
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
