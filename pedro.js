//https://www.youtube.com/watch?v=m55PTVUrlnA

const DoSomething = () => {
    console.log('hello chimp')
}

DoSomething()

let age = 11;
let myName = age > 10? 'Pedro' : 'Jack';

console.log('myName', myName);


const newPerson = {
    spName: "Gail",
    spAge: 46,
    isMarried: true
};

const {spName, spAge, isMarried} = newPerson;

console.log(`%c${spName} - ${spAge} - %c${isMarried}`, 'color:red', 'color:green; font-size: 3rem');

const extraPerson = {...newPerson, spName: "Esmerelda"};

console.log('extraPerson', extraPerson);

const names = ["Julie", "Angharad", "Emma", "Bego", "Angharad"];

const newNames = [...names, "Mel"];
console.log('🐈 ~ newNames', newNames)

const oneNames = names.map((item)=>{
    return "one" + " " + item;
})
console.log('🐈 ~ oneNames ~ oneNames', oneNames)


const noHarry = newNames.filter((item)=> {
    // if (item != 'Angharad')
    // {
    //     return item;
    // } 
    return item != 'Angharad'? item : '';
});

console.log('🐈 ~ noHarry', noHarry)


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]






