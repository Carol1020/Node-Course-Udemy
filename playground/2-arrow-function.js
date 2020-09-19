// Exp1:
// const square = function (x) {
//     return x * x
// }

// Exp2: 
// const square = (x) => {
//     return x * x
// }

// Exp3: 
// const square = (x) => x * x 

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        // to print each person on the guestList
        // we use arrow function here so 'this' means printGuestList instead of the current function
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()