const items = [
    {name: 'Bike',     price:100  },
    {name: 'TV',       price:200  },
    {name: 'Album',    price:10   },
    {name: 'Book',     price:5    },
    {name: 'Phone',    price:500  },
    {name: 'Computer', price:1000  },
    {name: 'Keyboard', price:25  },

]

const otherItems = [1, 2, 3, 4, 5]

const filteredItems = items.filter((item) => {
 return item.price <= 100;
})

const itemNames = items.map((item) => {
    return item.name;
})

const foundItem = items.find((item) => {
    return item.name === 'Book'
})

items.forEach((item) => {
    console.log(item.name)
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

const allItemsCheap = items.every((item) => {
    return item.price <= 1000
})

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)

const includesTwo = otherItems.includes(2);

console.log('includesTwo', includesTwo)

//console.log('total', total)

//console.log('allItemsCheap', allItemsCheap)

//console.log('hasInexpensiveItems', hasInexpensiveItems)

//console.log("filteredItems", filteredItems);

//console.log("itemNames", itemNames)

//console.log("foundItem", foundItem)