import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import markAsset from "@/assets/woodesk-mark.png.asset.json";

const navItems = [
  { label: "Soluções", hasCaret: true },
  { label: "Segmentos", hasCaret: false },
  { label: "Recursos", hasCaret: false },
  { label: "Planos", hasCaret: false },
  { label: "Sobre", hasCaret: false },
  { label: "Contato", hasCaret: false },
];

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <span className="flex items-center gap-2">
      <img src={markAsset.url} alt="Woodesk" className={className} />
      <span className="text-xl font-extrabold tracking-tight text-navy">Woodesk</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
              {item.hasCaret ? <ChevronDown className="h-3.5 w-3.5" /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="rounded-lg border border-border px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-surface"
          >
            Entrar
          </a>
          <a
            href="#contato"
            className="rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Teste Grátis
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href="#" className="text-sm font-medium text-muted-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-3">
            <a href="#" className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm font-semibold text-navy">
              Entrar
            </a>
            <a href="#contato" className="flex-1 rounded-lg bg-brand px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
              Teste Grátis
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
