import React from 'react'

/**
 * Ano do copyright que não envelhece.
 *
 * `new Date().getFullYear()` sozinho não resolve num site estático: a
 * expressão roda no BUILD, não na visita. Foi o que aconteceu aqui — o
 * codigo ja usava getFullYear() e mesmo assim o rodape em producao exibia
 * 2024, congelado no ultimo deploy.
 *
 * Aqui o ano do build vai no HTML (valido para crawlers e para quem esta
 * sem JavaScript) e um script de uma linha corrige no cliente quando a
 * virada de ano acontece sem novo deploy. Sem hidratacao e sem componente
 * de cliente: sao ~80 bytes inline.
 */
const NextAnoAtual = () => {
  const anoDoBuild = new Date().getFullYear()

  return (
    <>
      <span id="ano-copyright">{anoDoBuild}</span>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "var e=document.getElementById('ano-copyright');if(e)e.textContent=new Date().getFullYear();"
        }}
      />
    </>
  )
}

export default NextAnoAtual
