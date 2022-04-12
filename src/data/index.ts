import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'

const number = '5531995830442'

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
    title: 'QUEM SOMOS',
    text: 'Somos um grupo de profissionais da odontologia altamente capacitados com o intuito de oferecer a você e sua família um atendimento de urgência de alta qualidade e segurança. Localizados num dos pontos mais nobres e acessíveis de Belo Horizonte. Estamos abertos 24 horas te esperando quando mais você precisar.',
    image: '/images/home/tattoo_pop.jpeg',
    textButton: 'VEJA COMO CHEGAR',
    url: '#comochegar',
    width: 720,
    height: 493,
    content: 'image'
  },
  {
    title: 'URGÊNCIAS ODONTOLÓGICAS',
    text: 'O QUE VEM A SER URGÊNCIA ODONTOLÓGICA? É todo aquele procedimento que necessita de atendimento imediato para minimizar o sofrimento do paciente. Para posteriormente, em um adequado momento, procurar o seu dentista e solucionar o problema em definitivo.',
    image: '/images/home/urgencias.jpg',
    textButton: 'VEJA COMO CHEGAR',
    url: '#comochegar',
    width: 720,
    height: 535,
    directionMd: 'row-reverse',
    content: 'image'
  },
  {
    title: 'TRABALHE CONOSCO',
    width: 595,
    height: 528,
    image: '/images/home/image_left.png',
    directionMd: 'row-reverse',
    content: 'form'
  },
  {
    title: 'VEJA COMO CHEGAR',
    text: 'Estamos localizados na rua Cláudio Manoel, 223 - Funcionários - Belo Horizonte - Minas Gerais.  Confira nossa localização no mapa e calcule sua rota.',
    textButton: '(31) 3586-0900',
    url: 'tel:3135860900',
    width: 595,
    height: 528,
    image: '/images/home/image_left.png',
    content: 'map'
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
    image: '/images/logos/logo_amil.png',
    width: 138,
    height: 99
  },
  {
    image: '/images/logos/logo_bradesco.png',
    width: 168,
    height: 105
  },
  {
    image: '/images/logos/logo_copass.png',
    width: 202,
    height: 234
  },
  {
    image: '/images/logos/logo_geap.png',
    width: 233,
    height: 123
  },
  {
    image: '/images/logos/logo_inpao.png',
    width: 309,
    height: 130
  },
  {
    image: '/images/logos/logo_ipsm.png',
    width: 194,
    height: 203
  },
  {
    image: '/images/logos/logo_metlife.png',
    width: 371,
    height: 110
  },
  {
    image: '/images/logos/logo_odontoprev.png',
    width: 294,
    height: 158
  },
  {
    image: '/images/logos/logo_plan_assiste.png',
    width: 368,
    height: 117
  },
  {
    image: '/images/logos/logo_porto_saude.png',
    width: 160,
    height: 84
  },
  {
    image: '/images/logos/logo_rede_odonto.png',
    width: 183,
    height: 238
  },
  {
    image: '/images/logos/logo_saude_caixa.png',
    width: 366,
    height: 151
  },
  {
    image: '/images/logos/logo_unna.png',
    width: 198,
    height: 189
  },
  {
    image: '/images/logos/logo_bacen.png',
    width: 300,
    height: 200
  },
  {
    image: '/images/logos/logo_hapvida.png',
    width: 227,
    height: 152
  },
  {
    image: '/images/logos/logo_interodonto.png',
    width: 300,
    height: 170
  },
  {
    image: '/images/logos/logo_unimedodonto.png',
    width: 300,
    height: 143
  },
  {
    image: '/images/logos/logo_primavida.png',
    width: 263,
    height: 187
  },
  {
    image: '/images/logos/logo_sulamericaodonto.png',
    width: 305,
    height: 160
  },
  {
    image: '/images/logos/logo_goldencross.png',
    width: 300,
    height: 90
  },
  {
    image: '/images/logos/logo_trt.png',
    width: 300,
    height: 106
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
    text:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      '/images/home/team/daniel.svg'
  },
  {
    name: 'Luiz',
    role: 'Musician',
    text:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      '/images/home/team/bruna.svg'
  }
] as unknown as Array<Record<string, string>>
