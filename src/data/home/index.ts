import { NextCallToActionProps } from '../../components/organisms/nextCallToAction'

const number = '5531997376623'
export const nextSocialNetwork = {
  whatsapp: {
    url: `https://api.whatsapp.com/send?phone=${number}&text=Ol%C3%A1,%20Odonto%20SOS!`
  }
}

export const nextHeroItem = {
  words: 'TECNOLOGIA | DESIGN | MARKETING',
  title: 'Transforme suas ideias em negócios de sucesso',
  text: 'Tenha nosso time ao seu lado para fazer seus planos virarem realidade. Foque onde precisa enquanto nossos especialistas cuidam de tudo para o seu negócio evoluir como você sempre quis.',
  textButton: 'Quero revolucionar minha empresa',
  url: `${nextSocialNetwork.whatsapp.url}`
}

export const nextCallToActionItems = [
  {
    title: 'Odontologia Digital',
    titleColor: 'next-tertiary',
    text: 'O Sistema Cerec pode solucionar sua situação clínica em apenas 1 dia. Esse sistema oferece precisão e rapidez em trabalhos com Prótese Dentária em porcelana(coroas e facetas) eliminando etapas do processo tradicional da confecção como moldagens e até mesmo a utilização de provisórios.',
    textColor: 'white',
    background: 'next-primary',
    image: '/images/home/teeth.svg',
    width: 450,
    height: 442,
    content: 'image'
  },
  {
    title: 'Quem somos',
    text: 'Com um consultório amplo e agradável, localizado em um dos pontos nobres de Belo Horizonte, realizamos atendimentos especializados em Implantodontia e Periodontia através de tratamentos personalizados, com a qualidade que você merece. Aqui você se sentirá seguro de que todos os processos de higienização e esterilização de equipamentos são realizados adequadamente, além do cumprimento de todos os cuidados necessários para lhe proporcionar tranquilidade e conforto e a segurança de um tratamento muito bem feito. Seja muito bem-vindo (a) ao nosso site e conheça nele um pouco sobre o que fazemos.',
    image: '/images/home/urgencias.jpg',
    width: 720,
    height: 535,
    content: 'carousel'
  },
  {
    title: 'Dr. Danilo',
    text: 'Formado em 2000 pela UEMG- Lavras, o Dr. Danilo Antunes ao longo desses anos fez vários cursos de aperfeiçoamento e especialização nas áreas de Implantodontia e Periodontia.\n- 2001 aperfeiçoamento em Implantodontia- CEO-IPSEMG\n- 2002 especialização em Periodontia, finalizada em agosto/2003- CEO-IPSEMG; \n- 2005 pós em Implantodontia pela ABO-MG;\n- 2006 pós em cirurgias avançadas em Implantodontia pela ABO-MG; - 2007 especialização em Implantodontia finalizada em agosto de 2009 pela ABCD_MG;\n- 2010 pós em cirurgia avançada em Implantodontia pelo Núcleo;\n- 2011 Técnica de Implante com cirurgia Guiada( o famoso implante sem corte). Vários cursos de atualização na área de implantodontia ao longo destes anos.\nMembro do ITI desde 2017\n- 2020 Ingressou na Odontologia digital adquirindo scanner intra oral e fresadora\n- 2021 Curso de Cirurgia plástica periodontal com Vanessa Frazão',
    image: '/images/danilo.jpeg',
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
        text: 'Implante dentário renova o sorriso e a vida. A falta de um ou mais dentes afeta a saúde e bem estar de uma pessoa. A dificuldade de mastigação e na fala e a mudança na aparência são os principais impactos que surgem da falta de um ou mais dentes.\nA reposição de dentes com implantes dentários é certamente a melhor forma de de restabelecer a qualidade de vida e autoestima de quem sofre pela ausência de dentes.\nTer um sorriso completo traz ao paciente a sensação de voltar a sorrir novamente sem medo, melhorando a qualidade de vida bem como autoestima.'
      },
      {
        id: 2,
        title: 'PERIODONTIA',
        text: 'A Periodontia é uma área odontológica responsável pela prevenção e tratamento das doenças que acometem os tecidos de sustentação e proteção dos dentes, dos quais fazem parte o ligamento periodontal, o osso e a gengiva ao redor do elemento dental. É a base para inúmeras especialidades odontológicas.'
      }
    ],
    features: [
      {
        id: 1,
        title: 'PRÓTESE FIXA UTILIZANDO O CAD CAM',
        text: 'No procedimento a arcada dentária do paciente é escaneada digitalmente e conforme isso acontece uma imagem 3D é transmitida para o computador. O equipamento reproduz imagens de altíssima precisão, eliminando erros manuais e a necessidade do retrabalho para corrigir erros de moldagem. Todo o processo é muito confortável para o paciente proporcionando uma melhor experiência na consulta e nos resultados! ',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'SEDAÇÃO INALATÓRIA',
        text: 'A Sedação Inalatória garante o máximo de segurança ao paciente com relação à dor, ao medo e à tensão pré-cirurgia. É uma técnica de sedação segura pois é titulada gradativamente e o paciente ao final, sai do consultório da mesma forma que entrou.No aspecto físico, todos os sentidos do paciente são monitorados durante o procedimento pelo dentista responsável. Em casos de maior risco, tendo sempre a postos equipamento de verificação cardíaca, para monitorar.',
        image: '/images/icons/feature_tooth.svg'
      },
      {
        id: 3,
        title: 'TRANSPLANTE CELULAR ODONTOLÓGICO',
        text: 'O Transplante celular odontológico é um método que potencializa enxertos ósseos, tornando-os mais simplificados. Isso permite a diminuição da invasão cirúrgica, a redução do tempo de espera para a instalação de implantes, traz previsibilidade aos resultados e oferece segurança sobre as reações imunológicas.',
        image: '/images/icons/feature_hive.svg'
      }
    ]
  },
  {
    title: 'Dra. Rosane',
    text: 'A Dra. Rosane Lage atua no mercado da odontologia desde 2002 quando concluiu a sua graduação.Desta forma ,vem se destacando sempre pela seriedade, dedicação e excelentes resultados alcançados. A fim de diferenciar seus tratamentos e melhorar ainda mais a qualidade do atendimento de seus pacientes a Dra. Rosane Lage, se especializou em endodontia e desde então utiliza o que há de mais moderno na odontologia. E uma delas é a microscopia operatória (uma tecnologia ainda rara) no tratamento endodôntico (canal). Pensando sempre no bem estar do paciente a Dra. Rosane Lage preparou um consultório moderno e bem equipado, planejado para proporcionar uma sensação de conforto e bem estar atendendo aos mais altos padrões de qualidade e excelência.Tudo isso com o objetivo de viabilizar o melhor tratamento odontológico seja qual for a necessidade.',
    image: '/images/rosane.jpeg',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark',
    textButton: 'Ver especialidades da Dra. Rosane',
    url: '/especialidades/rosane',
    features: [
      {
        id: 1,
        title: 'PRÓTESE FIXA UTILIZANDO O CAD CAM',
        text: 'A tecnologia CAD-CAM surgiu para facilitar o planejamento, o designer e a produção de vários projetos. É um equipamento que permite ao dentista digitalizar, desenhar em detalhes a anatomia das arcadas dentárias conseguindo assim produzir próteses em porcelana em minutos. Com este equipamento, o profissional pode entregar a prótese definitiva em uma sessão. Esse processo acelera o tratamento, com maior custo benefício.',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'Sedação inalatória com óxido nitroso',
        text: ' Um procedimento muito indicado para pessoas com medo de ir ao dentista, ansiedade e procedimentos longos para proporcionar um maior relaxamento. Ele proporciona um maior conforto durante a consulta. A Sedação Inalatória garante o máximo de segurança ao paciente com relação à dor e ao medo. É uma técnica de sedação segura pois é titulada gradativamente e o paciente ao final, saí do consultório da mesma forma que entrou. No aspecto físico, todos os sentidos do paciente são monitorados durante o procedimento pelo dentista responsável. Em casos de maior risco, tendo sempre a postos equipamento de verificação cardíaca, para monitorar. ',
        image: '/images/icons/feature_tooth.svg'
      }
    ],
    specialties: [
      {
        id: 1,
        title: 'ENDODONTIA',
        text: 'Endodontia é a especialidade da Odontologia que trata da prevenção, diagnóstico e tratamento das enfermidades da polpa e de suas repercussões sobre os tecidos da região periapical”.\nÉ um campo da Odontologia que trata da morfologia, fisiologia e patologia da polpa dental humana e dos tecidos periapicais”',
        image: '/images/icons/feature_cube.svg'
      },
      {
        id: 2,
        title: 'MICROSCOPIA ENDODÔNTICA',
        text: 'A microscopia endodôntica nada mais é do que uma técnica para realizar tratamento de canal com auxílio de um microscópio. É uma técnica capaz de detectar de forma aprimorada o sistema de canais radiculares e suas variações anatômicas, garantindo maior precisão e segurança durante o tratamento de canal.\nO sucesso do tratamento de canal está diretamente relacionado à limpeza adequada dos canais radiculares podendo ser em uma região extremamente pequena e de difícil de visualização, o que faz a microscopia endodôntica ser essencial na realização do tratamento, pois o microscópio assegura maior precisão, qualidade e segurança ao procedimento.',
        image: '/images/icons/feature_tooth.svg'
      }
    ]
  }
] as unknown as Array<NextCallToActionProps>
