# Site Woodesk — landing page igual ao mockup

Construir a página inicial reproduzindo fielmente o mockup enviado, usando a logo Woodesk anexada.

## Identidade visual

- Azul Woodesk (#1668E3 / azul vivo) como cor principal, azul-marinho escuro para títulos, fundo branco e cinza muito claro.
- Tipografia sem serifa, títulos bem pesados, textos em cinza médio.
- Cantos arredondados suaves, cartões com sombra leve, botões azuis sólidos e botões secundários em azul claro.
- A logo enviada é publicada como arquivo do projeto e aparece no topo e no rodapé.

## Seções (mesma ordem do mockup)

1. **Topo fixo**: logo + menu (Soluções, Segmentos, Recursos, Planos, Sobre, Contato) + "Entrar" e "Teste Grátis". Menu recolhível no celular.
2. **Hero**: "Tecnologia para negócios que vão mais longe.", texto de apoio, dois botões, três selos (Implementação rápida, Suporte especializado, Soluções para o seu segmento) e, à direita, a imagem do painel de gestão com o balão "Mais controle para o seu dia a dia" e a assinatura "Gestão sem limites".
3. **Soluções para cada negócio**: seis cartões com foto, ícone, título, descrição e "Saiba mais" (ERP, CRM Imobiliário, Bares e Restaurantes, Home Care, Advogados, PDV para Comércio).
4. **Tudo que você precisa para crescer**: lista de cinco itens com ícones, botão "Conheça todas as soluções" e foto à direita com os dois balões flutuantes.
5. **Números**: +5.000 clientes, +30 segmentos, +99% uptime, +98% satisfeitos.
6. **Depoimentos**: carrossel com três depoimentos, avatar, cargo, estrelas, setas e pontinhos.
7. **Faixa azul de conversão**: "Comece agora com a Woodesk" + botão "Teste Grátis" e as observações abaixo.
8. **Rodapé**: logo, texto curto, quatro colunas de links, campo de e-mail para novidades, redes sociais e linha de copyright.

## Imagens

As fotos do mockup (painel do sistema, homem no notebook, e as seis fotos de segmentos) serão geradas com o mesmo enquadramento e clima das originais. Se preferir usar fotos reais suas, é só enviar depois que eu troco.

## Detalhes técnicos

- Página única em `src/routes/index.tsx`, dividida em componentes por seção em `src/components/`.
- Tokens de cor/tipografia adicionados em `src/styles.css` (formato oklch), sem cores fixas nos componentes.
- Fonte carregada via `<link>` em `src/routes/__root.tsx`.
- Logo enviada via Lovable Assets, importada pelo ponteiro `.asset.json`.
- Carrossel de depoimentos com estado local; sem backend nesta etapa.
- Título/descrição/og próprios na rota inicial e HTML semântico com um único H1.
