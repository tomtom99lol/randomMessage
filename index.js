let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                 'November', 'December'];
 
let generateRandomMonth = () =>{
    let randomNum = Math.floor(Math.random()*12);
    return months[randomNum];
}                

console.log(`I bet you were born in ${generateRandomMonth()}`)