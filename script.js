const elementH1 = document.querySelector('h1')
const elementA = document.querySelector('a')

elementH1.innerText = 'Novo titulo h1'
elementA.innerText = 'Link'

// innerHTML lista ordenada

const listaOrdenada = document.querySelector('ol')

listaOrdenada.innerHTML = `
<li>Elemento simples</li>
<li>Elemento simples</li>
<li>Elemento simples</li>
`
 // innerHTML lista não ordenada

 const listaNãoOrdenada = document.querySelector('ul')

 listaNãoOrdenada.innerHTML = `
 <li>https://aws.amazon.com/pt/?nc2=h_lg<li>
 <li>https://prozeducacao.com.br<li>
 <li>https://www.linkedin.com<li>

 `