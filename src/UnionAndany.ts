let subs: number | string = 1000; // Union type allows subs to be either a number or a string
subs = "One Thousand"; // Now subs can also be a string

let apiRequetStatus: "success" | "error" | "loading"; // apiRequestStatus can only be one of these three string literals
apiRequetStatus = "success"; // Valid
apiRequetStatus = "error"; // Valid
// apiRequetStatus = "pending"; // Error: Type '"pending"' is not assignable to type '"success" | "error" | "loading"'.

let userInput: any; // 'any' type allows userInput to be of any type
userInput = 42; // Can be a number
userInput = "Hello"; // Can also be a string
userInput = { name: "Alice" }; // Can also be an object

// However, using 'any' can lead to potential issues as it bypasses type checking, so it's generally recommended to use it sparingly.



const orders=["22","33","44"]
let currentOrder:string|undefined; // currentOrder can be a string or undefined

for(let order of orders){
    if(order==="33"){
        currentOrder=order; // currentOrder is inferred as string
        break; // Exit the loop once the desired order is found
    }
    currentOrder=order="11"
}
console.log(currentOrder); // Output: "33"


// for evrery timeto be avoid any type we can use unknown type