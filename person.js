class Person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }
    
    print() {
        console.log(this)
    }
}

function printPersonStreet(person){
    //Optional chaining
    console.log(person?.address?.street)
}

const gail = new Person(
    "Gail",
    {street: "55 Boundary Road", city: "Oz"},
    ["Latin Poetry", "Juno", "Drinking Gin"]
)

gail.print?.()

gail.printBrilliance?.();

console.log(gail.hobbies?.[0].toLowerCase())

printPersonStreet(gail)
