let gamenum= 2;
let usernum = prompt("guess the correct number??")
do{
 usernum = prompt("you have guessed the wrong number, enter a number again");
}while(usernum != gamenum);

console.log("you have guessed the number correctly")