let a = prompt("Enter first Number")
let b = prompt("Enter second Number")

if (isNaN(a) || isNaN(b)) {
    throw new Error("Sorry this is not allowed");

}
let sum = parseInt(a) + parseInt(b)

let x=5
try {
    console.log(sum * x);

} catch (error) {
    console.log('Error aa gya bhai');

}
// try {
// } catch (err) {
//     alert(err.name)
//     alert(err.message)
//     alert(err.stack)
// }

finally{
    console.log('Files are being closed an db connection is being cleared');
    
}


