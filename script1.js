const btn = document.querySelector('button')

btn.addEventListener('click', (eventObject) => {
  console.log(eventObject)
  const square = document.querySelector('.square')
  square.classList.toggle('bg-pink')

  // if (btn.textContent === 'make it pink') {
  //   btn.textContent = 'make it white'
  // } else {
  //   btn.textContent = 'make it pink'
  // }

  btn.textContent = btn.textContent === 'make it pink' ? 'make it white' : 'make it pink'

})

const btns = document.querySelectorAll('button') // NodeList - 3 prvky
const plus = btns[1]
const minus = btns[2]
const numberSquare = document.querySelectorAll('.square')[1]

plus.addEventListener('click', () => {
  // incrementovat obsah square o 1
  numberSquare.textContent = + numberSquare.textContent + 1
})

minus.addEventListener('click', () => {
  // decrementovat obsah square o 1
  numberSquare.textContent = + numberSquare.textContent - 1
})

