
let arr = [67, true, false, '45', '56']
arr = arr.sort(()=> 0.5 - Math.random())
console.log(arr)

const nullVal = null;
const emptyString = false
const someNum = 13;


const a = nullVal ?? " A default"
const b = emptyString ?? "B default"
const c = someNum ?? "C default"

console.log(a)
console.log(b)
console.log(c)

console.error(new Error('Whoops, something bad happened'));

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);


var arrNum = [-3, 342, 0, -54, 1256, 4678, 7]
var max = Math.max.apply(Math, arrNum)
var min = Math.min.apply(Math, arrNum)


console.log(max)
console.log(min)

let animals = ['Cat', 'Mouse']

let moreAnimals = ['Dog', 'Horse', 'Chicken']

let newArray = Array.prototype.push.apply(animals, moreAnimals)
console.log(newArray)

const tooLong = 3.14555666635552444
const perfect = tooLong.toFixed(3)
// const perfect = tooLong.toLocaleString()
console.log(perfect)

// for (const animal of animals){
//     console.log(animal)
// }

for(let i =0; i< animals.length; i++){
    const animal = animals[i]
    console.log(animal)
}

let elements = [24, 'You', 666, 'are', 35, 'Breathtaking', 420]
let random =elements[Math.floor(Math.random() * elements.length)]
console.log(random)

let oxygen = 9;
let diver = oxygen< 10? "Alert: Low Energy" : "Message: Enough Energy"
console.log(diver)

const player = {
    name: "Jeremy Paschal", 
    rating:77,
    kick: ()=>{
        return "GOOOOOAL"
    },
    pass: (teamate) => {
        return `Passed to ${teamate}`
    }

}

console.log(player?.teamate)
console.log(player?.kick?.())
console.log(player?.celebrate?.())
console.log(player.kick())
console.log(player.pass('chima'))

console.log(player.rating)

const isAnagram= (word_1, word_2)=>{
    const normalize = (str)=>{
        str.toLowerCase()
            .normalize('NFD')
            .split("")
            .sort()
            .join('')
    return normalize(word_1 === word_2)

    }
}

const forest ={
    locations: "Sweden",
    animal : 12,
    animalTypes: ['bear', 'owl']
}

const { locations, animal } = forest
const [bear, owl] = forest.animalTypes
console.log(locations, animal)

console.log(bear)
console.log(owl)



const countries = {
    country: 'England', 
    town: "Liverpool"
}

const group ={
    name: "the beetles",
    activeYears :10

   
}

const fullInfo = {
    ...countries, 
    ...group
}

console.log(fullInfo)
   
let num = 43
console.log(num.toString(2))
console.log(num.toString(16))

   
   
const str = "W0w wh4t 4 c00l 53nt3nc3"
const nums = str.replace(/\D/g, "")
console.log(nums)


const number = new Number(150).toLocaleString()

console.log(typeof number)

   
function eat(...fruits){
    const [first, second, ...rest] = fruits

    console.log(first, second)

    console.log(rest)
}


eat('chidi', 'chima', 'chinaza', 'chinaka', 'chidindu')


// input = null;

// function act(){
//     console.log("I'm acting")
// }

// console.log(input ?? act())

input = 100

const output1 = Boolean(input)
console.log(typeof output1)

const output2 = !!input
console.log(output2)

const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout

console.log('count:', count);

const hungry = true 
const tired = false

if(hungry) eat()
// if(!tired) run()

console.log(hungry && eat())
let numbers = [1,2,3,4,5]

console.log(numbers.push(6))
console.log(numbers.unshift(0))
console.log(numbers.pop())
console.log(numbers.shift())


console.log(numbers)