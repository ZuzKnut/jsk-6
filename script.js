const controls = ['firstname', 'lastname', 'city']

const getFormData = () => {
  const formData = {}
  controls.forEach(control => {
    const input = document.getElementById(control)
    formData[control] = input.value
  })
  return formData
}


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(getFormData())
  // validace ???
})

const ar = []
const obj = {}
obj.firstname = 'Karel'
obj.firstname = 'Honza'

