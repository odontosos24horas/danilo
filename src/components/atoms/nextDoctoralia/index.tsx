import React from 'react'

import Script from 'next/script'

import { Box } from '@chakra-ui/react'

type Props = {
  /** Slug do profissional no Doctoralia, como aparece na URL do perfil. */
  slug: string
  /** Nome exibido no link, que é o texto de fallback antes do widget montar. */
  nome: string
}

/**
 * Widget de avaliações do Doctoralia.
 *
 * O script do Docplanner procura elementos `.zl-url` quando carrega e troca o
 * link pelo widget. Por isso a âncora precisa existir no HTML antes: se o
 * widget não montar (script bloqueado, rede ruim), o que fica na página é um
 * link funcional para o perfil, não um espaço vazio.
 *
 * Carregado com `afterInteractive` e `strategy` do next/script, em vez da
 * inserção manual no DOM dentro de useEffect que existe no site do Dr. Danilo:
 * lá o script era injetado com `process.nextTick`, que no navegador é polyfill
 * do webpack e não acrescenta nada — o useEffect já roda só no cliente.
 *
 * `rel="nofollow"` porque é link para perfil externo de terceiro.
 */
const NextDoctoralia = ({ slug, nome }: Props) => {
  const perfil = `https://www.doctoralia.com.br/${slug}/dentista/belo-horizonte`

  return (
    <Box bg={'next-gray-dark'}>
      <a
        id="zl-url"
        className="zl-url"
        href={perfil}
        rel="nofollow"
        data-zlw-doctor={slug}
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
      >
        {nome} - Doctoralia.com.br
      </a>
      <Script
        id="zl-widget-s"
        src="https://platform.docplanner.com/js/widget.js"
        strategy="afterInteractive"
      />
    </Box>
  )
}

export default NextDoctoralia
