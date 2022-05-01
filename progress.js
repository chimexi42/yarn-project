const getRandomUserdata = (gender, limit) => {
    window.fetch(`https://randomuser.me/api/?results=${limit}&gender=${gender}`)
        .then(respose => {
            return respose.json()
        })
        .then(data => {
            console.log(data)

        })
}

document.querySelector('button').addEventListener('click', () => {
    const gender = document.querySelector('input[name=gender]:checked').value
    console.log('Gender:', gender)
    getRandomUserdata(gender, 5)
})

// getRandomUserdata()

// 4 ways to make API call in javascipt
// 1. XMl Request
console.log(window)

const request = new XMLHttpRequest();
console.log(request)

// request.open('https://jsonplaceholder.typicode.com/users')
// request.send()


let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday"
        break;
    case 1:
        day = "monday"
        break;
    case 2:
        day = "tuesday"
        break;
    case 3:
        day = "wedneday"
    case 4:
        day = "thursday"
        break;
    case 5:
        day = "friday"
        break;
    case 6:
        day = "saturday"
        break;
}


console.log(day)

const animal = 'spoon';

switch (animal) {
    case "cow":
    case "dog":
    case "Giraffe":
    case "pig":
        console.log("This animal will gp on Noah's Ark")
        break;

    case 'spoon':
        console.log("A spoon is not an animal")
        break;

    case "Dinosaur":
    default:
        console.log("this animal will not be on Noah's Ark")
}

console.log(animal)


// scroll even in js

window.addEventListener('scroll', () => {
    //    console.log("scrolled")
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    console.log(scrollable)
    const scrolled = window.scrollY
    //    console.log(scrolled)
    if (scrolled === scrollable) {
        alert('Youve reached the bottom')
    }
})


















