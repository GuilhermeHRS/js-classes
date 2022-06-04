

// get element by ID

const title = document.getElementById('page-title')
console.log(title)

// get element by class name 
const parag = document.getElementsByClassName('class')
console.log(parag[0])

// get element by tag name
const tags = document.getElementsByTagName('h2')

// query selector all

const tags2 = document.querySelectorAll('h2')

tags2.forEach(tag => {
    console.log(tag)
})