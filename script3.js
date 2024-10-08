const input = document.querySelector('input')

input.addEventListener('focus', () => {
  console.log('focus')
})
input.addEventListener('blur', () => {
  console.log('blur')
})
input.addEventListener('input', (e) => {
  console.log(e.target.value)
  console.log('input')
})
input.addEventListener('change', () => {
  console.log('change')
})
input.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.key === 'x') {
    // e.preventDefault()
    e.stopPropagation()
  }
  // zastavuje následné události, ke kterým by jinak došlo
  console.log('keydown')
})
input.addEventListener('keyup', () => {
  console.log('keyup')
})

const a = document.querySelector('a')
a.addEventListener('click', (e) => {
  e.preventDefault()
})


/*
event.stopPropagation() - zastavuje bublání
event.preventDefault() - zastavuje logicky následné události
*/