//Ejercicio 1
const name = "Sofia";
let age = 33;
console.log(name, age);

//Ejercicio 2
const message = `Hola, me llamo ${name} y tengo ${age} años`;

//Ejercicio 3
const sum = (a,b) => a + b;

//Ejercicio 4 
const numbers = [2, 3, 6, 8, 4];
const doubleNumbers = numbers.map(number => number * 2);

//Ejercicio 5
const pairNumbers = numbers.filter(number => number%2 === 0);

//Ejercicio 6
function sumArray(...numbers){
    return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

//Ejercicio 7
const numbers2 = [4, 13, 17, 23];
const allNumbers = [...numbers, ...numbers2];

//Ejercicio 8
const movie = {
    title: "Inside Out 2",
    gender: "Comedy",
    year: 2024
};

const {title, gender, year} = movie;

//Ejercicio 9
const chain = (movie) => `${movie.title} is a ${movie.gender} released in ${movie.year}`;

//Ejercicio 10
function error(number){
    try{
        if(number < 0){
            throw new Error("The number cannot be negative");
        }
    }catch(error){
        console.error(error.message);
    }
}

//Ejercicio 11
document.getElementById('welcomeMessage').style.display = 'none';

document.getElementById('welcomeForm').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    try{
        if(age<0){
            throw new Error("Cannot be a negative age");
        }

        document.getElementById('welcomeInfo').textContent = `Hi ${name}, you have ${age} years old.`;
        document.getElementById('welcomeMessage').style.display = 'block';

        document.getElementById('welcomeForm').reset();
    }catch(error){
        console.error(error.message);
        alert(error.message);
    }

})