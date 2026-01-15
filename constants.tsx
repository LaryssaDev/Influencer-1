import { SlideData, SlideType } from './types';

export const EBOOK_LINK = "https://pay.hub.la/mlyWEVZjhoA1z9vGfdYB";

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "Torne-se um Influencer",
    subtitle: "Mesmo Começando do Zero",
    description: "Um guia visual para inspirar sua jornada digital.",
    image: "https://picsum.photos/800/1200",
    ctaText: "Começar Jornada",
  },
  {
    id: 2,
    type: SlideType.CONTENT,
    title: "Todo Influencer Começa Pequeno",
    description: "Ninguém nasce com 1 milhão de seguidores. Os maiores nomes de hoje gravavam vídeos ruins no quarto dos fundos ontem.",
    image: "https://picsum.photos/800/1201",
    bullets: [
      "Não compare seus bastidores com o palco dos outros.",
      "O segredo não é sorte, é começar.",
      "Seu primeiro vídeo não será perfeito, e tudo bem."
    ],
    highlight: "O único erro real é não começar."
  },
  {
    id: 3,
    type: SlideType.INTERACTIVE_CHECKLIST,
    title: "O que te impede hoje?",
    subtitle: "As maiores dores de quem está começando",
    description: "Toque nas barreiras que você sente agora:",
    bullets: [
      "Tenho vergonha da câmera",
      "Não tenho iPhone/Câmera cara",
      "Tenho medo do julgamento",
      "Não sei o que postar",
      "Tenho poucos seguidores"
    ]
  },
  {
    id: 4,
    type: SlideType.AI_GENERATOR,
    title: "Ideias Infinitas",
    subtitle: "Nunca mais sofra com bloqueio criativo.",
    description: "Use nossa IA para gerar 3 ideias de conteúdo para o seu nicho agora mesmo.",
    highlight: "Experimente a tecnologia a seu favor."
  },
  {
    id: 5,
    type: SlideType.CONTENT,
    title: "A Regra dos 5 Segundos",
    description: "A retenção é a chave. Você precisa capturar a atenção imediatamente.",
    image: "https://picsum.photos/800/1202",
    bullets: [
      "Use um gancho visual ou sonoro forte.",
      "Faça uma pergunta polêmica ou curiosa.",
      "Mostre o resultado final logo no início."
    ],
    highlight: "Sem gancho = Sem visualização."
  },
  {
    id: 6,
    type: SlideType.CHART,
    title: "Constância > Perfeição",
    description: "O algoritmo premia quem aparece todo dia, não quem faz um vídeo 'Oscar' uma vez por ano.",
    highlight: "Feito é melhor que perfeito."
  },
  {
    id: 7,
    type: SlideType.CONTENT,
    title: "Rotina Simples",
    subtitle: "Como postar sem surtar",
    image: "https://picsum.photos/800/1203",
    bullets: [
      "Segunda: Pesquisa e Roteiro",
      "Terça: Gravação em lote (3 a 5 vídeos)",
      "Quarta: Edição rápida",
      "Quinta a Domingo: Postar e interagir nos stories"
    ]
  },
  {
    id: 8,
    type: SlideType.CONTENT,
    title: "Melhores Horários",
    description: "Embora varie, existem padrões globais para iniciantes testarem.",
    image: "https://picsum.photos/800/1204",
    bullets: [
      "12:00 - Horário de almoço",
      "18:00 - Saída do trabalho/escola",
      "21:00 - Relaxamento noturno"
    ],
    highlight: "Teste e analise seus próprios dados."
  },
  {
    id: 9,
    type: SlideType.CONTENT,
    title: "Mentalidade de Crescimento",
    subtitle: "Você é uma empresa de mídia.",
    image: "https://picsum.photos/800/1205",
    description: "Não trate como hobby se quer resultados de profissional.",
    bullets: [
      "Invista em conhecimento.",
      "Analise métricas sem emoção.",
      "Celebre pequenas vitórias."
    ]
  },
  {
    id: 10,
    type: SlideType.OFFER,
    title: "Influencer Começa Pequeno",
    subtitle: "O guia definitivo para destravar seu crescimento.",
    description: "Um e-book prático, direto ao ponto, feito para quem não tem equipamentos caros.",
    image: "https://picsum.photos/800/1206",
    ctaText: "Quero Crescer Agora - R$ 39,70",
    ctaLink: EBOOK_LINK,
    bullets: [
      "📚 Banco de Ideias Virais",
      "🚀 Estratégias de Crescimento Rápido",
      "📅 Planner de Rotina",
      "🧠 Hacks de Mentalidade"
    ]
  },
  {
    id: 11,
    type: SlideType.CTA,
    title: "Seu Futuro Começa Hoje",
    description: "Não deixe para amanhã a influência que você pode construir hoje.",
    ctaText: "GARANTIR MEU E-BOOK",
    ctaLink: EBOOK_LINK,
    image: "https://picsum.photos/800/1207"
  }
];