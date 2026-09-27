/**
 * Title e meta description de cada página. Cada rota tem os seus,
 * para o Google não tratar as páginas internas como cópia da home.
 */
export type SeoMeta = {
  title: string
  description: string
}

export const SEO = {
  home: {
    title: 'Implantes dentários e periodontia em BH | Dr. Danilo Antunes',
    description:
      'Dr. Danilo Antunes, cirurgião-dentista (CRO-MG 27292) especialista em Implantodontia e Periodontia. Implantes, enxertos e próteses CAD/CAM no Funcionários, em BH.'
  },
  tratamentos: {
    title: 'Tratamentos com implantes dentários em Belo Horizonte | Dr. Danilo Antunes',
    description:
      'Implante dentário, carga imediata, protocolo, cirurgia guiada, enxerto ósseo, levantamento de seio maxilar, periodontia e próteses CAD/CAM em Belo Horizonte.'
  },
  especialidadesDanilo: {
    title: 'Especialista em implantes e periodontia | Dr. Danilo Antunes',
    description:
      'Formação, especialidades e tecnologias do Dr. Danilo Antunes, especialista em Implantodontia e Periodontia (CRO-MG 27292), em Belo Horizonte.'
  },
  especialidadesRosane: {
    title: 'Endodontia com microscopia | Dra. Rosane Lage',
    description:
      'A Dra. Rosane Lage (CRO-MG 29.518), especialista em Endodontia, atende no mesmo consultório com tratamento de canal com microscopia operatória, em BH.'
  },
  contato: {
    title: 'Contato e localização | Dr. Danilo Antunes',
    description:
      'Telefones, WhatsApp, Instagram e endereço do consultório do Dr. Danilo Antunes: Rua Gonçalves Dias, 82, sala 902, Funcionários, Belo Horizonte.'
  },
  convenios: {
    title: 'Convênios atendidos | Dr. Danilo Antunes',
    description:
      'Veja os convênios odontológicos atendidos no consultório do Dr. Danilo Antunes, no bairro Funcionários, em Belo Horizonte.'
  },
  fotos: {
    title: 'Fotos do consultório | Dr. Danilo Antunes',
    description:
      'Conheça o consultório do Dr. Danilo Antunes no bairro Funcionários, em Belo Horizonte: recepção, sala de espera e salas de atendimento.'
  },
  videos: {
    title: 'Vídeos sobre implantes dentários | Dr. Danilo Antunes',
    description:
      'Vídeos do Dr. Danilo Antunes sobre implante dentário, implante x ponte fixa, enxerto ósseo e biossegurança no consultório.'
  },
  privacidade: {
    title: 'Política de Privacidade | Dr. Danilo Antunes',
    description:
      'Como o site do Dr. Danilo Antunes coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).'
  }
}
