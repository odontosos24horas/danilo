import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'

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
    text: 'Formado em 2000 pela UEMG- Lavras, o Dr. Danilo Antunes ao longo desses anos fez vários cursos de aperfeiçoamento e especialização nas áreas de Implantodontia e Periodontia. - 2001 aperfeiçoamento em Implantodontia- CEO-IPSEMG; - 2002 especialização em Periodontia, finalizada em agosto/2003- CEO-IPSEMG; - 2005 pós em Implantodontia pela ABO-MG; - 2006 pós em cirurgias avançadas em Implantodontia pela ABO-MG; - 2007 especialização em Implantodontia finalizada em agosto de 2009 pela ABCD_MG; - 2010 pós em cirurgia avançada em Implantodontia pelo Núcleo; - 2011 Palestra da Técnica de Implante com cirurgia Guiada( o famoso implante sem corte).',
    image: '/images/profile.jpg',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark'
  },
  {
    title: 'Dr. Rosane',
    text: 'A Dra. Rosane Lage conta com mais de 16 anos de experiência se destacando sempre pela seriedade, tratamentos acessíveis e excelentes resultados alcançados. A fim de diferenciar seus tratamentos e melhorar ainda mais a qualidade do atendimento de seus pacientes a Dra. Rosane Lage, utiliza o que há de mais moderno na odontologia. E uma das mais recentes novidades é a microscopia odontológica (uma tecnologia ainda rara) no tratamento endodôntico (canal). Pensando sempre no bem estar do paciente a Dra. Rosane Lage preparou um consultório moderno e bem equipado, planejado para proporcionar uma sensação de conforto e bem estar atendendo aos mais altos padrões de qualidade. Tudo isso com o  objetivo de viabilizar o melhor tratamento dentário seja qual for a necessidade.',
    image: '/images/profile.jpg',
    width: 488,
    height: 566,
    content: 'image',
    background: 'next-gray-dark'
  },
  {
    title: 'Especialidades',
    image: '/images/specialties.jpg',
    width: 669,
    height: 446,
    content: 'image',
    background: 'next-gray-dark'
  }
] as unknown as Array<NextCallToActionProps>

export const nextFeatureItems = [
  {
    title: 'Tecnologia',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Design',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Apps',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Sites Otimizados',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Inteligência Artificial',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Marketing',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  }
] as unknown as Array<NextFeatureProps>

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

export const nextTeamItems = [
  {
    name: 'Pedro Duarte',
    role: 'CEO (Chief Executive Officer)',
    text: 'Sabe o que eu adoro na minha vida? Eu sei qual é o meu PORQUÊ. Procuro me levantar todo dia para fazer alguma coisa que pode devolver às pessoas o seu bem precioso, o TEMPO. Acredito que pensando diferente conseguimos utilizar esse recurso finito de uma melhor forma. O mais interessante é que temos diferentes maneiras para conseguir devolver o tempo as pessoas e uma delas é utilizarmos a tecnologia. Por isso sou Bacharel em Ciência da Computação pela Universidade Federal de Ouro Preto — UFOP. Fui presidente da empresa júnior Voluta Soluções Digitais — UFOP. Presidente do Centro Acadêmico do Curso de Ciência da Computação — UFOP gestão 2013/14. Professor pelo programa PRONATEC e pela Let’s Code, escola de programação. Especialista AMP Cognizant/Google e desenvolvedor front-end na Toro Investimentos. Tenho muita sorte de ter trabalhado em lugares que me ajudaram e me ajudam nesse porquê.',
    avatar: '/images/home/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/phdduarte/',
    instagram: 'https://www.instagram.com/phdduarte/',
    youtube: 'https://www.youtube.com/watch?v=-TqTAxrOxaM'
  },
  {
    name: 'Daniel Rodrigues',
    role: 'CPO (Chief Product Officer)',
    text: "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar: '/images/home/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/daniel-rodrigues-5a6007121/',
    instagram: 'https://www.instagram.com/danielkeoma/'
  },
  {
    name: 'Priscilla',
    role: 'Movie star',
    text: "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar: '/images/home/team/daniel.svg'
  },
  {
    name: 'Luiz',
    role: 'Musician',
    text: 'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar: '/images/home/team/bruna.svg'
  }
] as unknown as Array<Record<string, string>>
