let a = 1
let b = 2

setTimeout(function() { console.log('Timeout: ' + a)}, 100);

// fetch('/').then(function() {
//     console.log('Fetch')
// })

a = 99;

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
   
    const data = await res.json();
   
    console.log('fetch data', data);
}
   
fetchUsers();

console.log('synchronous code')

console.log('a', a)
console.log('b', b)