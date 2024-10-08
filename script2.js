const p = document.querySelector('p')

// const lis = Array.from(document.querySelectorAll('li'))

// lis.forEach((li) => {
//   li.addEventListener('click', (e) => {
//     p.textContent = 'Moje oblíbené ovoce je ' + li.textContent + '.'
//     console.log('li clicked', e.target)
//   })
// })

// // event bubbling

// const ul = document.querySelector('ul')
// ul.addEventListener('click', (e) => {
//   console.log('ul clicked', e.target)
// })

// document.body.addEventListener('click', (e) => {
//   console.log('body clicked', e.target)
// })

// document.addEventListener('click', (e) => {
//   console.log('document clicked', e.target)
// })

// event dellegation

const ul = document.querySelector('ul')

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    p.textContent = 'Moje oblíbené ovoce je ' + e.target.textContent + '.'
  }
})

// click outside
const menuDiv = document.querySelector('.menu')
const menuUl = document.querySelector('.menu ul')
const btn = document.querySelector('.menu button')

btn.addEventListener('click', (e) => {
  e.stopPropagation() // zastavuje bublání
  menuUl.classList.toggle('is-hidden')
})

document.addEventListener('click', (e) => {
  console.log(e)
  // leží event target v ul ????
  // pokud ano - neuděláme nic
  // pokud ne - změníme p
  if(!ul.contains(e.target)) {
    p.textContent = 'Nic mi nechutná.'
  }
  if (!menuDiv.contains(e.target)) {
    menuUl.classList.add('is-hidden')
  }

})

// bubbling events a non-bubbling events

// 'mouseover' - bublací, 'mouseenter' - nebublací
// 'mouseout', 'mouseleave'

