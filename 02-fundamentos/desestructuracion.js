const person = {
    name: 'John',
    lastName: 'Doe',
    ability: 'Regen',
    age: 20,
    getName(){
        return `${this.name} ${this.lastName} ${this.ability}`
    }
}

function printPerson({ name, lastName, ability, age = 20 }) {
    // const {name, lastName, ability, age = 20} = person
    name = 'Karl'
    console.log(name, lastName, ability, age)
}

printPerson(person)

const heroes = ['flash', 'superman', 'batman']

/*
const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2]
*/

/*
const [h1, h2, h3] = heroes
console.log(h1, h2, h3)
*/

const [,, h3] = heroes;
console.log(h3)

/*
const name = person.name
const lastName = person.lastName
const ability = person.ability
*/
const { name, lastName, ability, age = 16 } = person

// console.log(person.getName())
console.log(name, lastName, ability, age)