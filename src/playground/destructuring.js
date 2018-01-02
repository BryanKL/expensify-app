//
// Object Destructing
//

//***** Person

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'New York',
//         temp: 93
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}`);

// // console.log(`${person.name} is ${person.age}`);

// const {city, temp} = person.location;

// console.log(`Its ${temp} in ${city}`)

//***** Book

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructing
//

// const address = ['1299 S Juniper Street', , 'Penn', '19147'];

// const [street, city='Boston', state, zip] = address;

// console.log(`You are in ${city} ${state} ${zip}`);

// console.log(`You are in ${address[1]} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;


console.log(`A medium ${coffee} costs ${medium}.`);