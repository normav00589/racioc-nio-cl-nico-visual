import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Download,
  Gift,
  Layers3,
  Lightbulb,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  SearchCheck,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import productHero from "@/assets/product-hero.png";
import bonusMapa from "@/assets/bonus-mapa.png";
import bonusPaineis from "@/assets/bonus-paineis.png";
import bonusChecklist from "@/assets/bonus-checklist.png";
import bonusEntrevista from "@/assets/bonus-entrevista.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "40 Casos Visuais de Psicodiagnóstico" },
      { name: "description", content: "Organize hipóteses, diferencie possibilidades e compreenda o raciocínio clínico com 40 casos visuais." },
      { property: "og:title", content: "40 Casos Visuais de Psicodiagnóstico" },
      { property: "og:description", content: "Uma biblioteca visual para estudar e consultar o raciocínio psicodiagnóstico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

const themes = [
  ["Atenção", "Diferencie desatenção por múltiplas causas."],
  ["Memória", "Investigue queixas, contexto e funcionamento."],
  ["Ansiedade", "Observe sinais, gatilhos e sobreposições."],
  ["Humor", "Compare alterações de humor e ansiedade."],
  ["Obsessões", "Distinga obsessões de preocupações recorrentes."],
  ["Impulsividade", "Analise manifestações em diferentes contextos."],
  ["Desenvolvimento", "Integre história, ambiente e funcionamento."],
  ["Personalidade", "Organize padrões sem conclusões precipitadas."],
];

const benefits = [
  ["🧭", "Tenha direção", "Saiba por onde começar diante de uma queixa."],
  ["🧩", "Conecte os dados", "Visualize relações entre sinais e hipóteses."],
  ["🔎", "Investigue melhor", "Identifique informações que ainda faltam."],
  ["⚖️", "Diferencie", "Compare possibilidades que parecem semelhantes."],
  ["🛑", "Evite atalhos", "Reconheça erros comuns de raciocínio."],
  ["💡", "Retenha mais", "Revise cada caso com uma síntese objetiva."],
];

const sampleCards = [
  { case: "CASO 05", title: "A queixa de desatenção", tag: "ATENÇÃO", note: "Uma queixa, diferentes caminhos de investigação." },
  { case: "CASO 12", title: "Preocupação ou obsessão?", tag: "COGNIÇÃO", note: "O conteúdo importa, mas a função também." },
  { case: "CASO 28", title: "Oscilações de humor", tag: "HUMOR", note: "Tempo, intensidade e contexto mudam a hipótese." },
  { case: "CASO 37", title: "Impulsividade em contexto", tag: "COMPORTAMENTO", note: "O mesmo sinal pode ter origens distintas." },
];

const mainItems = [
  "40 casos visuais em páginas A4 individuais",
  "Mapas de hipóteses e blocos de investigação",
  "Painéis de diferenciação clínica",
  "Alertas de raciocínio e sínteses de retenção",
  "Índice visual por famílias de casos",
  "PDF digital pronto para leitura e impressão",
];

const bonuses = [
  { image: bonusMapa, number: "01", title: "Mapa-Mestre do Processo Psicodiagnóstico", text: "Veja o caminho completo entre demanda, investigação, integração e devolutiva.", value: "R$ 27,00" },
  { image: bonusPaineis, number: "02", title: "10 Painéis de Diferenciação Clínica", text: "Comparativos rápidos para situações que frequentemente geram confusão.", value: "R$ 37,00" },
  { image: bonusChecklist, number: "03", title: "Checklist Visual de Organização do Caso", text: "Revise o que já existe, o que falta investigar e o que permanece aberto.", value: "R$ 17,00" },
  { image: bonusEntrevista, number: "04", title: "Guia Visual da Entrevista Inicial", text: "Organize áreas relevantes sem transformar a entrevista em interrogatório.", value: "R$ 27,00" },
];

const faqs = [
  ["Este material traz diagnósticos prontos?", "Não. Ele ensina a organizar informações, levantar possibilidades e identificar o que ainda precisa ser investigado antes de uma conclusão."],
  ["É apenas mais um resumo de Psicologia?", "Não. O material parte de situações clínicas concretas e trabalha hipóteses, investigação, diferenciação e integração visual."],
  ["Serve para quem ainda está na faculdade?", "Sim. Foi pensado especialmente para estudantes dos períodos intermediários e finais e estagiários em contato com casos clínicos."],
  ["Psicólogos formados também podem usar?", "Sim. É uma ferramenta rápida de consulta, revisão e apoio para discussões clínicas."],
  ["Quais temas aparecem nos casos?", "Atenção, memória, ansiedade, humor, obsessões, compulsões, comportamento, desenvolvimento, funcionamento social e personalidade, entre outros."],
  ["Como recebo o material?", "Após a confirmação do pagamento, o acesso ao material digital é liberado para download."],
  ["Consigo ler no celular?", "Sim. O PDF pode ser acessado por celular, tablet ou computador."],
  ["Posso imprimir?", "Sim. As páginas estão em formato A4 vertical, adequado para leitura digital e impressão."],
  ["Qual a diferença entre os planos?", "O Básico inclui os 40 casos e seus recursos principais. O Completo reúne o mesmo material e os quatro bônus exclusivos."],
  ["E se eu comprar e não gostar?", "Você tem 30 dias para solicitar o reembolso, sem burocracia, conforme os termos da plataforma de pagamento."],
];

const recentActivity = [
  { name: "Mariana", city: "Campinas, SP", plan: "Plano Completo" },
  { name: "Lucas", city: "Recife, PE", plan: "Plano Básico" },
  { name: "Ana", city: "Belo Horizonte, MG", plan: "Plano Completo" },
  { name: "Camila", city: "Curitiba, PR", plan: "Plano Completo" },
  { name: "Rafael", city: "Salvador, BA", plan: "Plano Básico" },
];

function BuyButton({ label = "QUERO ACESSAR OS 40 CASOS" }: { label?: string }) {
  return <a href="#planos" className="cta">{label}<ArrowRight size={18} aria-hidden="true" /></a>;
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return <div className="section-heading">{eyebrow && <span>{eyebrow}</span>}<h2>{children}</h2></div>;
}

function SampleRail() {
  const loop = [...sampleCards, ...sampleCards];
  return <div className="marquee" aria-label="Amostras dos casos"><div className="marquee-track">{loop.map((item, i) => <article className="sample-sheet" key={`${item.case}-${i}`} aria-hidden={i >= sampleCards.length}><div className="sample-top"><span>{item.case}</span><small>{item.tag}</small></div><div className="sample-map"><i /><i /><i /><b /><i /><i /></div><h3>{item.title}</h3><p>{item.note}</p><div className="sample-foot"><span>QUEIXA</span><ArrowRight size={13}/><span>HIPÓTESES</span><ArrowRight size={13}/><span>INVESTIGAR</span></div></article>)}</div></div>;
}

function RecentPurchaseNotice() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setVisible(true), 2500);
    const cycleTimer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % recentActivity.length);
        setVisible(true);
      }, 450);
    }, 6500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearInterval(cycleTimer);
    };
  }, []);

  const activity = recentActivity[index];

  return (
    <aside className={`purchase-notice ${visible ? "is-visible" : ""}`} aria-live="polite" aria-atomic="true">
      <div className="purchase-icon"><ShoppingBag size={18} aria-hidden="true" /></div>
      <div className="purchase-copy">
        <p><strong>{activity.name}</strong>, de {activity.city}</p>
        <span>escolheu o <b>{activity.plan}</b></span>
        <small>Atividade ilustrativa</small>
      </div>
    </aside>
  );
}

function SalesPage() {
  return <main className="sales-page">
    <section className="hero section-dark">
      <div className="shell hero-inner">
        <div className="hero-copy">
          <span className="kicker">PSICOLOGIA • RACIOCÍNIO CLÍNICO</span>
          <h1><strong>40 Casos Visuais</strong> de Psicodiagnóstico</h1>
          <div className="title-rule" />
          <p className="hero-lead">Organize hipóteses, diferencie possibilidades e entenda o raciocínio clínico sem depender de resumos soltos ou páginas excessivamente teóricas.</p>
        </div>
        <img className="hero-product" src={productHero} alt="Livro digital, páginas clínicas e tablet dos 40 Casos Visuais de Psicodiagnóstico" width={1024} height={1024} fetchPriority="high" />
        <div className="hero-action"><p>Cada caso transforma uma situação concreta em um caminho visual: <strong>queixa → sinais → hipóteses → investigação → integração.</strong></p><BuyButton /><small><MonitorSmartphone size={15}/> Acesso imediato pelo celular, tablet ou computador</small></div>
      </div>
    </section>

    <section className="section-light"><div className="shell"><SectionTitle eyebrow="UMA BIBLIOTECA PARA CONSULTAR">O que você vai encontrar</SectionTitle><SampleRail/><p className="intro">Situações clínicas que ajudam você a enxergar além do sintoma isolado e organizar o que realmente importa em cada caso.</p><div className="theme-grid">{themes.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><BuyButton /></div></section>

    <section className="section-dark"><div className="shell"><SectionTitle eyebrow="CLAREZA PARA ESTUDAR E DISCUTIR">Por que este material é tão valioso?</SectionTitle><div className="benefit-grid">{benefits.map(([emoji,title,text]) => <article key={title}><span>{emoji}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="problem-section"><div className="problem-band">SABER A TEORIA NÃO BASTA QUANDO O CASO CHEGA</div><div className="shell"><div className="problem-card"><BrainCircuit size={44}/><h2>Você conhece os conceitos.<br/>Mas trava para organizar o caso?</h2><p>Os 40 Casos Visuais mostram como sair de informações dispersas e construir um raciocínio organizado, sem pular etapas nem fechar diagnósticos cedo demais.</p><BuyButton label="QUERO ORGANIZAR MEU RACIOCÍNIO" /></div></div></section>

    <section className="sample-section section-dark"><div className="shell"><SectionTitle eyebrow="VEJA COMO O CONTEÚDO É ORGANIZADO">Uma página. Um caso. Um caminho visual.</SectionTitle><SampleRail/></div></section>

    <section className="section-light"><div className="shell"><SectionTitle eyebrow="FEITO PARA A SUA ROTINA">Ideal para você que deseja</SectionTitle><div className="desire-grid">{[["🎯","Formular hipóteses","sem se prender à primeira impressão"],["🧠","Pensar clinicamente","em vez de apenas decorar conceitos"],["🗂️","Organizar informações","de entrevistas, queixas e contextos"],["🔬","Investigar com propósito","sabendo quais dados ainda faltam"],["💬","Discutir casos","com mais clareza e fundamento"],["📚","Revisar rapidamente","com uma ferramenta visual e prática"]].map(([e,t,d])=><article key={t}><span>{e}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

    <section className="receive section-dark"><div className="shell receive-grid"><div><span className="access-badge"><Clock3 size={14}/> ACESSO IMEDIATO</span><SectionTitle>Tudo o que você vai receber</SectionTitle><img src={productHero} alt="Conjunto digital dos 40 Casos Visuais" width={1024} height={1024} loading="lazy" /></div><div><ul className="main-list">{mainItems.map(item=><li key={item}><CircleCheck size={19}/><span>{item}</span></li>)}</ul><div className="confirm-grid">{["Atenção e memória","Ansiedade e humor","Obsessões e compulsões","Comportamento","Desenvolvimento","Personalidade"].map((x,i)=><span key={x}>{["🧠","🌊","🔄","⚡","🌱","🧩"][i]} {x}</span>)}</div></div></div></section>

    <section className="bonus-section section-light"><div className="shell"><SectionTitle eyebrow="SOMENTE NO PLANO COMPLETO">Bônus exclusivos para aprofundar seu estudo</SectionTitle><div className="bonus-count"><Gift size={17}/> 4 BÔNUS INCLUÍDOS</div><div className="bonus-grid">{bonuses.map(b=><article key={b.number}><div className="bonus-stars"><Star/><Star/><Star/></div><img src={b.image} alt={b.title} width={816} height={816} loading="lazy"/><span>BÔNUS Nº {b.number}</span><h3>{b.title}</h3><p>{b.text}</p><div><s>{b.value}</s><strong> GRÁTIS</strong></div></article>)}</div></div></section>

    <section id="planos" className="plans section-dark"><div className="shell"><SectionTitle eyebrow="CONDIÇÃO ESPECIAL POR TEMPO LIMITADO">Escolha a opção ideal para você</SectionTitle><div className="plan-stack">
      <article className="plan-card basic"><header><span>PLANO BÁSICO</span><h3>Para começar a organizar seu raciocínio</h3><p>O material principal completo para estudo e consulta.</p></header><ul>{mainItems.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><div className="price"><small>De <s>R$ 49,90</s> por</small><strong><sup>R$</sup> 19<small>,90</small></strong><span>pagamento único</span></div><a className="cta secondary-cta" href="#acesso">ESCOLHER PLANO BÁSICO<ArrowRight size={18}/></a></article>
      <article className="plan-card complete"><div className="best">MAIS VENDIDO</div><header><span>PLANO COMPLETO</span><h3>O sistema visual completo</h3><p>Casos, ferramentas de organização e bônus exclusivos.</p></header><img src={productHero} alt="Plano Completo dos 40 Casos Visuais" width={1024} height={1024} loading="lazy"/><ul>{mainItems.map(x=><li key={x}><Check size={17}/>{x}</li>)}{bonuses.map(x=><li className="bonus-line" key={x.title}><Gift size={17}/>{x.title}</li>)}</ul><div className="price"><small>De <s>R$ 97,00</s> por</small><strong><sup>R$</sup> 37<small>,90</small></strong><span>pagamento único</span></div><a className="cta" href="#acesso">QUERO O PLANO COMPLETO<ArrowRight size={18}/></a></article>
    </div><p className="closing">Por menos que o preço de um livro, você leva uma biblioteca visual inteira para consultar sempre que precisar.</p></div></section>

    <section className="guarantee section-light"><div className="shell guarantee-inner"><div className="seal"><ShieldCheck/><strong>30</strong><span>DIAS DE<br/>GARANTIA</span></div><div><SectionTitle eyebrow="RISCO ZERO PARA VOCÊ">Estude por 30 dias com tranquilidade</SectionTitle><p>Acesse o material, explore os casos e veja se ele ajuda a organizar seu raciocínio. Se não fizer sentido para você, solicite o reembolso dentro de 30 dias, sem burocracia.</p></div></div></section>

    <section id="acesso" className="steps section-dark"><div className="shell"><SectionTitle eyebrow="SIMPLES, RÁPIDO E DIGITAL">Como funciona o acesso</SectionTitle><p className="intro">Em poucos passos, o material estará disponível para você.</p><div className="step-grid">{[
      ["Escolha seu plano", ["Básico ou Completo"]],
      ["Finalize a compra", ["Pagamento seguro", "Confirmação rápida"]],
      ["Receba o acesso", ["Link enviado após a confirmação", "Acesso digital"]],
      ["Comece a estudar", ["Celular, tablet ou computador", "Leia ou imprima em A4"]],
    ].map(([title,items],i)=><article key={title as string}><span>{i+1}</span><h3>{title as string}</h3><ul>{(items as string[]).map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul></article>)}</div><BuyButton label="ESCOLHER MEU PLANO AGORA"/></div></section>

    <section className="faq section-light"><div className="shell"><SectionTitle eyebrow="PERGUNTAS FREQUENTES">Ainda ficou com alguma dúvida?</SectionTitle><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</div></div></section>

    <footer><div className="shell"><BrainCircuit/><p>© 2026 — 40 Casos Visuais de Psicodiagnóstico. Todos os direitos reservados.</p><small>Este site não é afiliado ao Facebook, Instagram, Google ou a qualquer uma de suas empresas. O material é protegido por direitos autorais. É proibida a reprodução, distribuição ou comercialização não autorizada, total ou parcial.</small></div></footer>
    <RecentPurchaseNotice />
  </main>;
}