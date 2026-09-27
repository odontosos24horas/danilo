import { NextCallToActionProps } from '../../components/organisms/nextCallToAction'

export const nextCallToActionItems = [
  {
    title: 'Odontologia Digital',
    titleColor: 'next-tertiary',
    text: 'Com o sistema Cerec, em muitos casos é possível concluir próteses em cerâmica (coroas e facetas) em uma única sessão. O escaneamento digital substitui a moldagem convencional e dispensa etapas do processo tradicional, como o uso de provisórios.',
    textColor: 'white',
    background: 'next-primary',
    image: '/images/home/teeth.svg',
    imageAlt: 'Ilustração de dentes em cerâmica',
    width: 450,
    height: 442,
    content: 'image'
  },
  {
    title: 'Quem somos',
    text: 'Em um consultório amplo e confortável no bairro Funcionários, em Belo Horizonte, o Dr. Danilo Antunes atende em Implantodontia e Periodontia, e a Dra. Rosane Lage em Endodontia com microscopia operatória. Cada tratamento é planejado de forma individual, com protocolos rigorosos de higienização e esterilização de instrumentos e equipamentos, para que você se sinta seguro e bem acolhido em todas as etapas. Seja bem-vindo(a) ao nosso site e conheça um pouco do nosso trabalho.',
    image: '/images/home/urgencias.jpg',
    imageAlt: 'Recepção do consultório',
    width: 720,
    height: 535,
    content: 'carousel'
  },
  {
    title: 'Dr. Danilo',
    text: 'Dr. Danilo Antunes — Cirurgião-dentista — CRO-MG 27292 — Especialista em Implantodontia e Periodontia.\n\nFormado em 2000 pela UEMG - Lavras, o Dr. Danilo Antunes fez, ao longo dos anos, diversos cursos de aperfeiçoamento e especialização em Implantodontia e Periodontia:\n- 2001: aperfeiçoamento em Implantodontia - CEO-IPSEMG;\n- 2002: especialização em Periodontia, concluída em agosto de 2003 - CEO-IPSEMG;\n- 2005: pós-graduação em Implantodontia - ABO-MG;\n- 2006: pós-graduação em cirurgias avançadas em Implantodontia - ABO-MG;\n- 2007: especialização em Implantodontia, concluída em agosto de 2009 - ABCD-MG;\n- 2010: pós-graduação em cirurgia avançada em Implantodontia - Núcleo;\n- 2011: técnica de implante com cirurgia guiada (conhecida como implante sem corte);\n- 2017: membro do ITI (International Team for Implantology);\n- 2020: início na odontologia digital, com scanner intraoral e fresadora;\n- 2021: curso de cirurgia plástica periodontal com Vanessa Frazão.\nAlém disso, participa regularmente de cursos de atualização em Implantodontia.',
    image: '/images/danilo.jpeg',
    imageAlt: 'Dr. Danilo Antunes sentado à mesa do consultório',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark',
    textButton: 'Ver especialidades do Dr. Danilo',
    url: '/especialidades/danilo',
    directionBase: 'row',
    specialties: [
      {
        id: 1,
        title: 'IMPLANTODONTIA',
        text: 'A falta de um ou mais dentes afeta a saúde e o bem-estar. Dificuldade para mastigar e falar e mudanças na aparência estão entre os principais impactos da perda dentária.\nO implante dentário é uma das formas mais eficazes de repor dentes perdidos, devolvendo função mastigatória, estética e segurança para sorrir. A indicação depende de uma avaliação individual, que considera a saúde geral, a quantidade de osso e a condição da gengiva.',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'PERIODONTIA',
        text: 'A Periodontia é uma área odontológica responsável pela prevenção e tratamento das doenças que acometem os tecidos de sustentação e proteção dos dentes, dos quais fazem parte o ligamento periodontal, o osso e a gengiva ao redor do elemento dental. Gengiva e osso saudáveis são a base para o sucesso de outros tratamentos, incluindo os implantes.',
        image: '/images/icons/feature_tooth.svg'
      }
    ],
    features: [
      {
        id: 1,
        title: 'PRÓTESE FIXA UTILIZANDO O CAD/CAM',
        text: 'A arcada dentária é escaneada digitalmente e uma imagem 3D é enviada ao computador, onde a prótese é planejada e depois fresada. O escaneamento substitui a moldagem convencional em muitos casos, reduz etapas e torna a consulta mais confortável para o paciente.',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'CIRURGIA GUIADA',
        text: 'Com base em tomografia e escaneamento digital, a posição dos implantes é planejada no computador antes da cirurgia e transferida para a boca por meio de um guia. Em casos selecionados, permite instalar implantes sem abrir a gengiva (o chamado implante sem corte).',
        image: '/images/icons/feature_tooth.svg'
      },
      {
        id: 3,
        title: 'RECONSTRUÇÃO ÓSSEA E GENGIVAL',
        text: 'Quando falta osso ou gengiva para receber um implante, técnicas como enxerto ósseo, levantamento de seio maxilar e enxerto gengival podem recriar a base necessária. A indicação é definida após avaliação clínica e exames de imagem.',
        image: '/images/icons/feature_hive.svg'
      }
    ]
  },
  {
    title: 'Dra. Rosane',
    text: 'Dra. Rosane Lage — Cirurgiã-dentista — CRO-MG 29.518 — Especialista em Endodontia.\n\nA Dra. Rosane Lage atua na odontologia desde 2002, quando concluiu a graduação. Especializou-se em Endodontia e utiliza a microscopia operatória no tratamento de canal, recurso que amplia e ilumina o interior do dente e contribui para um tratamento mais preciso.\n\nSeu consultório foi planejado para oferecer conforto e segurança ao paciente, com atendimento cuidadoso em todas as etapas, do diagnóstico ao acompanhamento.',
    image: '/images/rosane.jpeg',
    imageAlt: 'Dra. Rosane Lage no consultório, ao lado da cadeira odontológica',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark',
    textButton: 'Ver especialidades da Dra. Rosane',
    url: '/especialidades/rosane',
    features: [
      {
        id: 1,
        title: 'RETRATAMENTO DE CANAL',
        text: 'Quando um dente já tratado volta a apresentar dor, inchaço ou lesão na radiografia, o tratamento pode ser refeito: o material antigo é removido, os canais são novamente limpos e desinfetados e o dente é selado outra vez.',
        image: '/images/icons/feature_tooth.svg'
      },
      {
        id: 2,
        title: 'DIAGNÓSTICO DA DOR DE DENTE',
        text: 'Exame clínico, testes de sensibilidade e exames de imagem ajudam a identificar se a dor tem origem na polpa, na raiz ou em outra estrutura. Um diagnóstico correto evita tratamentos desnecessários.',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 3,
        title: 'PRESERVAÇÃO DO DENTE NATURAL',
        text: 'Sempre que possível, a endodontia busca manter o dente natural. Cada caso é avaliado individualmente para indicar se o dente pode ser tratado e preservado com segurança.',
        image: '/images/icons/feature_hive.svg'
      }
    ],
    specialties: [
      {
        id: 1,
        title: 'ENDODONTIA',
        text: 'Endodontia é a especialidade da Odontologia que cuida da prevenção, do diagnóstico e do tratamento das doenças da polpa dentária (o tecido interno do dente, conhecido como nervo) e de suas repercussões nos tecidos ao redor da raiz.\nO tratamento endodôntico mais conhecido é o tratamento de canal, indicado quando a polpa está inflamada ou infectada, por cárie profunda, trauma ou outras causas.',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'MICROSCOPIA ENDODÔNTICA',
        text: 'A microscopia endodôntica é a realização do tratamento de canal com o auxílio de um microscópio operatório, que amplia a imagem em várias vezes e ilumina diretamente o interior do dente.\n\nPor que isso importa: os canais da raiz são estreitos, podem ser curvos, calcificados ou em número maior que o habitual. Com a visão ampliada, é possível localizar canais que passariam despercebidos, identificar trincas e realizar a limpeza e o selamento com mais precisão.\n\nQuando é mais indicada: dentes com anatomia complexa, canais calcificados, retratamentos de canal e casos de dor persistente sem causa aparente. A indicação é definida após avaliação clínica e exames de imagem.',
        image: '/images/icons/feature_tooth.svg'
      }
    ]
  }
] as unknown as Array<NextCallToActionProps>
