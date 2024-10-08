/*
operátor typeof
____________________________
- string  'string'
- number  'number'
- undefined 'undefined'
- boolean 'boolean'
- object  'object'
- null    'object'
- array   'object'
- NaN     'number'
- function 'function'
*/

/*
jak kontrolovat datové typy - promenna myVar
- string  if (typeof myVar === 'string')
- undefined   if (myVar === undefined)
- boolean   if (typeof myVar === 'boolean')
- null  if (myVar === null)
- function if (typeof myVar === 'function')
- NaN if (Number.isNaN(myVar))
- number  if ((typeof myVar === 'number') && !Number.isNaN(myVar))
- array   if (Array.isArray(myVar))
- object if ((typeof myVar === 'object) && myVar !== null && !Array.isArray(myVar))

*/

const myEl = document.querySelector('.my-special-class')
if (typeof myEl === 'object') { // je to k ničemu, neřeší problém
  myEl.addEventListener('click', () => {})
}