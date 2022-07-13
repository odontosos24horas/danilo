import { NextCallToActionProps } from '../components/organisms/nextCallToAction'

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
    url: '/especialidades/danilo'
  },
  {
    title: 'Dr. Rosane',
    text: 'A Dra. Rosane Lage atua no mercado da odontologia desde 2002 quando concluiu a sua graduação.Desta forma ,vem se destacando sempre pela seriedade, dedicação e excelentes resultados alcançados. A fim de diferenciar seus tratamentos e melhorar ainda mais a qualidade do atendimento de seus pacientes a Dra. Rosane Lage, se especializou em endodontia e desde então utiliza o que há de mais moderno na odontologia. E uma delas é a microscopia operatória (uma tecnologia ainda rara) no tratamento endodôntico (canal). Pensando sempre no bem estar do paciente a Dra. Rosane Lage preparou um consultório moderno e bem equipado, planejado para proporcionar uma sensação de conforto e bem estar atendendo aos mais altos padrões de qualidade e excelência.Tudo isso com o objetivo de viabilizar o melhor tratamento odontológico seja qual for a necessidade.',
    image: '/images/rosane.jpeg',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark',
    textButton: 'Ver especialidades da Dra. Rosane',
    url: '/especialidades/rosane'
  }
] as unknown as Array<NextCallToActionProps>

export const nextTechnologyItems = [
  {
    image: '/images/logos/convenios/logo_plan_assiste.png',
    width: 226,
    height: 72
  },
  {
    image: '/images/logos/convenios/logo_copass.png',
    width: 116,
    height: 128
  },
  {
    image: '/images/logos/convenios/logo_ipsm.png',
    width: 130,
    height: 137
  }
]
