// function checkAge(age) {
//    let check = (age > 18) ? true : confirm("Did parents allow you?")
//    return check
// }

function checkAge(age) {
   let check = age > 18 || confirm("Did parents allow you?")
   return check
}

let age = prompt("What is your age?")

checkAge(age)
console.log(checkAge(age));