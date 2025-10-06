let a = prompt("Enter first Number")
let b = prompt("Enter second Number")

if (isNaN(a) || isNaN(b)) {
    throw new Error("Sorry this is not allowed");

}
let sum = parseInt(a) + parseInt(b)


// try {

// } catch (error) {
//     console.log('Error aa gya bhai');

// }
try {
    console.log(sum * x);
} catch (err) {
    alert(err.name)
    alert(err.message)
    alert(err.stack)
}


