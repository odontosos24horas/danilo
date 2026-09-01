import { NextFeatureProps } from '../../components/molecules/nextFeature'

/**
 * Convênios atendidos.
 *
 * `title` é obrigatório: o NextFeature usa esse campo como `alt` da imagem E
 * como o nome exibido abaixo da logo. Sem ele, o Google e os leitores de tela
 * só veem um arquivo PNG.
 *
 * O segundo grupo foi removido: continha apenas uma repetição do Saúde Caixa
 * e o bloco que o renderizava estava comentado no template.
 *
 * PENDENTE DANILO: confirmar se esses três seguem ativos e se falta algum.
 */
export const agreements = [
  [
    {
      title: 'TRT - 3ª Região',
      image: '/images/logos/convenios/logo_trt.png',
      width: 300,
      height: 106
    },
    {
      title: 'Saúde Caixa',
      image: '/images/logos/convenios/logo_saude_caixa.png',
      width: 366,
      height: 128
    },
    {
      title: 'Plan-Assiste',
      image: '/images/logos/convenios/logo_plan_assiste.png',
      width: 226,
      height: 72
    }
  ]
] as Array<Array<NextFeatureProps>>
