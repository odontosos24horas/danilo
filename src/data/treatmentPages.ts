import { SeoMeta } from './seo'

/**
 * Páginas individuais de tratamento (/tratamentos/[slug]).
 *
 * RASCUNHO PARA REVISÃO DO DR. DANILO: textos informativos, sem promessa de
 * resultado. Indicação, prazos e técnica dependem sempre da avaliação de
 * cada paciente, e o texto deixa isso explícito.
 */
export type TreatmentPage = {
  slug: string
  nome: string
  titulo: string
  seo: SeoMeta
  resumo: string
  explicacao: string[]
  indicacoes: string[]
  limitacoes: string[]
}

export const treatmentPages: TreatmentPage[] = [
  {
    slug: 'implante-dentario',
    nome: 'Implante dentário',
    titulo: 'Implante dentário em Belo Horizonte',
    seo: {
      title: 'Implante dentário em Belo Horizonte | Dr. Danilo Antunes',
      description:
        'Como funciona o implante dentário, quando é indicado e quais são os cuidados. Avaliação com o Dr. Danilo Antunes, especialista em Implantodontia, em BH.'
    },
    resumo:
      'O implante dentário substitui a raiz de um dente perdido e serve de base para uma coroa, uma ponte ou uma prótese.',
    explicacao: [
      'O implante é um pino de titânio instalado no osso da maxila ou da mandíbula, no lugar da raiz do dente que foi perdido. Com o tempo, o osso se une à superfície do implante, processo chamado de osseointegração.',
      'Depois da osseointegração, o implante recebe uma coroa (para um dente), uma ponte (para vários dentes) ou uma prótese total. O planejamento é feito a partir do exame clínico, de radiografias e, em geral, de tomografia, que mostra a quantidade e a qualidade do osso disponível.',
      'O tempo total do tratamento varia de acordo com a região, a qualidade do osso e a necessidade de enxertos. Em alguns casos é possível instalar a coroa provisória no mesmo dia (carga imediata).'
    ],
    indicacoes: [
      'Perda de um ou mais dentes por cárie, fratura, doença periodontal ou trauma.',
      'Pacientes que usam ponte móvel ou dentadura e desejam mais estabilidade.',
      'Situações em que se quer evitar o desgaste de dentes vizinhos, necessário em uma ponte fixa convencional.'
    ],
    limitacoes: [
      'É preciso ter osso suficiente em altura e espessura; quando falta osso, pode ser necessário enxerto antes ou durante a cirurgia.',
      'Diabetes não controlado, tabagismo e algumas medicações podem aumentar o risco de complicações e exigem avaliação cuidadosa.',
      'O implante precisa de higiene diária e de consultas de manutenção, assim como os dentes naturais.'
    ]
  },
  {
    slug: 'protocolo-sobre-implantes',
    nome: 'Protocolo sobre implantes',
    titulo: 'Protocolo sobre implantes',
    seo: {
      title: 'Protocolo sobre implantes em BH | Dr. Danilo Antunes',
      description:
        'Prótese fixa de arcada completa apoiada em implantes: indicação, etapas e cuidados. Atendimento com o Dr. Danilo Antunes, em Belo Horizonte.'
    },
    resumo:
      'Prótese fixa que repõe todos os dentes de uma arcada, parafusada sobre implantes, sem a necessidade de retirar para dormir.',
    explicacao: [
      'O protocolo é uma prótese total fixa, parafusada sobre implantes instalados na arcada superior ou inferior. Diferentemente da dentadura convencional, ela não se apoia na gengiva e não é removida pelo paciente.',
      'O número de implantes e o tipo de prótese são definidos no planejamento, a partir da tomografia e do exame clínico. Em casos selecionados, o protocolo pode ser feito com carga imediata, com a prótese provisória instalada poucos dias após a cirurgia.',
      'Para quem prefere uma prótese removível com mais estabilidade, existe também a overdenture, uma prótese que se encaixa em implantes e pode ser retirada para higienização.'
    ],
    indicacoes: [
      'Pacientes que já perderam todos os dentes de uma arcada.',
      'Usuários de dentadura com pouca estabilidade ou dificuldade para mastigar.',
      'Dentes remanescentes muito comprometidos, sem possibilidade de tratamento, após avaliação.'
    ],
    limitacoes: [
      'Depende de quantidade de osso suficiente para os implantes; quando necessário, o planejamento inclui enxertos ou técnicas alternativas.',
      'A higienização exige escovas e acessórios específicos, e as consultas de manutenção são indispensáveis.',
      'O prazo entre a cirurgia e a prótese definitiva varia de acordo com cada caso.'
    ]
  },
  {
    slug: 'carga-imediata',
    nome: 'Implantes com carga imediata',
    titulo: 'Implantes com carga imediata',
    seo: {
      title: 'Implantes com carga imediata em BH | Dr. Danilo Antunes',
      description:
        'Entenda quando é possível instalar o dente provisório logo após o implante. Avaliação com o Dr. Danilo Antunes, especialista em Implantodontia, em BH.'
    },
    resumo:
      'Técnica em que o dente provisório é instalado sobre o implante no mesmo dia ou poucos dias após a cirurgia.',
    explicacao: [
      'Na técnica convencional, o implante fica alguns meses cicatrizando antes de receber a coroa. Na carga imediata, quando as condições permitem, uma prótese provisória é fixada logo após a cirurgia, e o paciente não fica sem dentes nesse período.',
      'A decisão depende principalmente da estabilidade que o implante alcança no momento da instalação, medida durante a cirurgia. Por isso, a carga imediata é sempre uma possibilidade avaliada caso a caso, e não uma garantia.',
      'Depois da osseointegração, a prótese provisória é substituída pela definitiva.'
    ],
    indicacoes: [
      'Dentes da região da frente, em que a estética é prioridade.',
      'Protocolos de arcada completa com implantes bem distribuídos.',
      'Pacientes com boa quantidade e qualidade de osso na região.'
    ],
    limitacoes: [
      'Nem todo implante atinge a estabilidade necessária; nesses casos, o implante cicatriza sem carga e a prótese é instalada depois.',
      'Nas primeiras semanas, é preciso seguir uma dieta mais macia para proteger o implante.',
      'Bruxismo (ranger os dentes) e pouca quantidade de osso podem contraindicar a técnica.'
    ]
  },
  {
    slug: 'cirurgia-guiada',
    nome: 'Cirurgia guiada',
    titulo: 'Cirurgia guiada para implantes',
    seo: {
      title: 'Cirurgia guiada e implante sem corte em BH | Dr. Danilo Antunes',
      description:
        'Implantes planejados digitalmente e instalados com guia cirúrgico, com menos incisões em casos selecionados. Com o Dr. Danilo Antunes, em Belo Horizonte.'
    },
    resumo:
      'Os implantes são planejados no computador e instalados com um guia cirúrgico que reproduz na boca a posição planejada.',
    explicacao: [
      'A cirurgia guiada combina a tomografia com o escaneamento digital da boca. Com esses dados, a posição, a inclinação e a profundidade de cada implante são definidas em um software de planejamento.',
      'A partir do planejamento é produzido um guia cirúrgico, que orienta as brocas durante a cirurgia. Em casos selecionados, o implante pode ser instalado sem abrir a gengiva, técnica conhecida como implante sem corte, o que tende a reduzir o desconforto no pós-operatório.',
      'O planejamento digital também ajuda a prever a prótese antes da cirurgia, alinhando a posição dos implantes ao resultado estético e funcional desejado.'
    ],
    indicacoes: [
      'Casos com pouco espaço entre dentes ou próximos a estruturas delicadas.',
      'Instalação de vários implantes, como em protocolos.',
      'Pacientes que buscam uma cirurgia menos invasiva, quando a anatomia permite.'
    ],
    limitacoes: [
      'Exige tomografia e escaneamento prévios, com uma etapa de planejamento antes da cirurgia.',
      'O implante sem corte depende de gengiva e osso adequados; quando há necessidade de enxerto, a gengiva precisa ser aberta.',
      'Abertura de boca muito limitada pode dificultar o uso do guia.'
    ]
  },
  {
    slug: 'enxerto-osseo',
    nome: 'Enxerto ósseo',
    titulo: 'Enxerto ósseo para implantes',
    seo: {
      title: 'Enxerto ósseo para implantes em BH | Dr. Danilo Antunes',
      description:
        'Quando falta osso para o implante, o enxerto pode reconstruir a região. Veja indicações e cuidados com o Dr. Danilo Antunes, em Belo Horizonte.'
    },
    resumo:
      'Reconstrução do osso da maxila ou da mandíbula para permitir a instalação de implantes quando o volume ósseo não é suficiente.',
    explicacao: [
      'Depois da perda de um dente, o osso que o sustentava tende a diminuir com o tempo. Quando não há altura ou espessura suficiente para o implante, o enxerto ósseo pode reconstruir a região.',
      'O material pode ser osso do próprio paciente, retirado de outra área da boca, ou biomateriais, como osso bovino processado. A escolha depende do tamanho do defeito e do planejamento de cada caso.',
      'Dependendo da situação, o enxerto é feito junto com o implante ou em uma cirurgia anterior. Quando é feito antes, aguarda-se a cicatrização, geralmente de alguns meses, para instalar o implante.'
    ],
    indicacoes: [
      'Perda óssea após extração, infecção, doença periodontal ou uso prolongado de prótese removível.',
      'Regiões em que o implante ficaria em posição inadequada para a prótese sem reconstrução.',
      'Defeitos ósseos identificados na tomografia durante o planejamento.'
    ],
    limitacoes: [
      'Aumenta o tempo total do tratamento, pois o enxerto precisa cicatrizar.',
      'Tabagismo e doenças sistêmicas não controladas reduzem a previsibilidade da cicatrização.',
      'Inchaço e desconforto nos primeiros dias são esperados e devem ser acompanhados.'
    ]
  },
  {
    slug: 'levantamento-de-seio-maxilar',
    nome: 'Levantamento de seio maxilar',
    titulo: 'Levantamento de seio maxilar',
    seo: {
      title: 'Levantamento de seio maxilar em BH | Dr. Danilo Antunes',
      description:
        'Enxerto na região do seio maxilar para permitir implantes nos dentes posteriores superiores. Com o Dr. Danilo Antunes, especialista em Implantodontia, em BH.'
    },
    resumo:
      'Enxerto feito dentro do seio maxilar para ganhar altura óssea e permitir implantes na região posterior superior.',
    explicacao: [
      'O seio maxilar é uma cavidade de ar localizada acima dos dentes posteriores superiores. Após a perda desses dentes, é comum que o seio se expanda e o osso disponível para o implante fique muito fino.',
      'No levantamento de seio, a membrana que reveste o seio é delicadamente elevada e o espaço criado é preenchido com material de enxerto. O osso formado passa a sustentar o implante.',
      'Conforme a altura de osso existente, o implante pode ser instalado na mesma cirurgia ou depois da cicatrização do enxerto, que normalmente leva alguns meses.'
    ],
    indicacoes: [
      'Perda de pré-molares e molares superiores com pouca altura óssea.',
      'Casos em que a tomografia mostra proximidade entre o seio e a crista óssea.'
    ],
    limitacoes: [
      'Sinusites ativas precisam ser tratadas antes da cirurgia.',
      'Nas primeiras semanas, recomenda-se evitar assoar o nariz com força, espirrar de boca fechada e viagens de avião.',
      'O tempo de tratamento é maior do que o de um implante sem enxerto.'
    ]
  },
  {
    slug: 'periodontia',
    nome: 'Periodontia',
    titulo: 'Periodontia: tratamento da gengiva',
    seo: {
      title: 'Periodontista em Belo Horizonte | Dr. Danilo Antunes',
      description:
        'Prevenção e tratamento de gengivite e periodontite, sangramento e retração gengival. Com o Dr. Danilo Antunes, especialista em Periodontia, em BH.'
    },
    resumo:
      'Prevenção e tratamento das doenças da gengiva e do osso que sustentam os dentes, como gengivite e periodontite.',
    explicacao: [
      'A periodontia cuida dos tecidos de suporte dos dentes: gengiva, ligamento periodontal e osso. A doença periodontal começa com o acúmulo de placa bacteriana e, se não tratada, pode levar à perda de osso e dos dentes.',
      'O tratamento começa com o diagnóstico, que inclui a medição das bolsas gengivais e radiografias. Na maioria dos casos, envolve raspagem e alisamento das raízes para remover a placa e o tártaro abaixo da gengiva, além de orientação de higiene.',
      'Casos mais avançados podem exigir cirurgias periodontais. Depois do tratamento, consultas de manutenção periódicas ajudam a manter a doença sob controle.'
    ],
    indicacoes: [
      'Sangramento ao escovar ou usar fio dental.',
      'Gengiva inchada, avermelhada ou retraída.',
      'Mau hálito persistente, dentes com mobilidade ou sensação de dentes "mais longos".',
      'Preparação para implantes e próteses, que dependem de gengiva e osso saudáveis.'
    ],
    limitacoes: [
      'O osso perdido pela periodontite não se recupera totalmente com o tratamento básico.',
      'O resultado depende da higiene diária e do comparecimento às consultas de manutenção.',
      'Tabagismo e diabetes não controlado dificultam o controle da doença.'
    ]
  },
  {
    slug: 'enxerto-gengival',
    nome: 'Enxerto gengival',
    titulo: 'Enxerto gengival e plástica gengival',
    seo: {
      title: 'Enxerto gengival em Belo Horizonte | Dr. Danilo Antunes',
      description:
        'Tratamento de retração gengival e gengiva fina com enxerto e cirurgia plástica periodontal. Avaliação com o Dr. Danilo Antunes, em Belo Horizonte.'
    },
    resumo:
      'Cirurgia plástica periodontal para recobrir raízes expostas e aumentar a espessura da gengiva.',
    explicacao: [
      'A retração gengival expõe a raiz do dente, o que pode causar sensibilidade, dificuldade de higiene e alteração estética. O enxerto gengival reposiciona ou acrescenta tecido para recobrir essas áreas.',
      'Normalmente o tecido é retirado do céu da boca do próprio paciente e posicionado na região tratada. Em alguns casos, podem ser usados substitutos de tecido.',
      'O enxerto também é usado ao redor de implantes, para aumentar a faixa de gengiva e facilitar a higiene e a estabilidade dos tecidos a longo prazo.'
    ],
    indicacoes: [
      'Retração gengival com raiz exposta e sensibilidade.',
      'Gengiva muito fina, com risco de novas retrações.',
      'Áreas ao redor de implantes com pouca gengiva.'
    ],
    limitacoes: [
      'O grau de recobrimento possível depende do tipo de retração e da quantidade de osso entre os dentes.',
      'A área doadora no céu da boca pode ficar sensível por alguns dias.',
      'É importante corrigir a causa da retração, como escovação traumática, para evitar recidiva.'
    ]
  },
  {
    slug: 'protese-sobre-implantes',
    nome: 'Próteses sobre implantes',
    titulo: 'Próteses sobre implantes',
    seo: {
      title: 'Próteses sobre implantes em BH | Dr. Danilo Antunes',
      description:
        'Coroas, pontes, protocolos e overdentures sobre implantes. Conheça as opções com o Dr. Danilo Antunes, especialista em Implantodontia, em Belo Horizonte.'
    },
    resumo:
      'Coroas, pontes, protocolos e overdentures instalados sobre implantes para repor um, vários ou todos os dentes.',
    explicacao: [
      'A prótese é a parte visível do tratamento com implantes. O tipo de prótese depende de quantos dentes precisam ser repostos, do número de implantes e das expectativas de cada paciente.',
      'As opções incluem coroa unitária (um dente), ponte sobre implantes (vários dentes com menos implantes), protocolo (arcada completa fixa) e overdenture (prótese removível que se encaixa em implantes).',
      'As próteses podem ser cimentadas ou parafusadas, e em muitos casos são planejadas e produzidas com fluxo digital (CAD/CAM), a partir do escaneamento da boca.'
    ],
    indicacoes: [
      'Reposição de dentes após a osseointegração dos implantes.',
      'Troca de próteses antigas sobre implantes, desgastadas ou com problemas de adaptação.'
    ],
    limitacoes: [
      'Próteses sobre implantes também sofrem desgaste e podem precisar de ajustes ou reparos ao longo do tempo.',
      'A higienização ao redor dos implantes exige atenção e, muitas vezes, acessórios específicos.',
      'Pacientes com bruxismo podem precisar de placa de proteção noturna.'
    ]
  },
  {
    slug: 'protese-cad-cam',
    nome: 'Prótese CAD/CAM',
    titulo: 'Prótese CAD/CAM e odontologia digital',
    seo: {
      title: 'Prótese CAD/CAM em Belo Horizonte | Dr. Danilo Antunes',
      description:
        'Coroas e próteses planejadas no computador e fresadas no consultório, a partir de escaneamento digital. Com o Dr. Danilo Antunes, em Belo Horizonte.'
    },
    resumo:
      'Próteses desenhadas no computador e fresadas em cerâmica, a partir do escaneamento digital da boca.',
    explicacao: [
      'No fluxo CAD/CAM, a boca é escaneada com um scanner intraoral, que gera um modelo 3D. A prótese é desenhada no computador (CAD) e produzida em uma fresadora (CAM) a partir de um bloco de cerâmica.',
      'O escaneamento substitui a moldagem convencional em muitos casos, o que costuma ser mais confortável. Dependendo do caso, coroas e facetas podem ser concluídas em uma única sessão.',
      'O consultório conta com scanner intraoral e fresadora, o que permite planejar e produzir parte das próteses no próprio local.'
    ],
    indicacoes: [
      'Coroas sobre dentes naturais ou sobre implantes.',
      'Facetas, onlays e restaurações indiretas em cerâmica.',
      'Planejamento digital de próteses e de cirurgias guiadas.'
    ],
    limitacoes: [
      'Nem todo caso pode ser concluído em uma sessão; próteses extensas podem exigir etapas de laboratório.',
      'A indicação do material e da técnica depende da avaliação da mordida e dos dentes envolvidos.'
    ]
  }
]

export const getTreatmentPage = (slug: string) => treatmentPages.find(page => page.slug === slug)
