let player1 =prompt("Enter player1 Name");
let player2 = prompt("Enter player2 Name");

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector("img").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelectorAll("img")[1].setAttribute("src", `images/dice${randomNumber2}.png`);

document.getElementsByTagName("p")[0].innerHTML = player1;
document.getElementsByTagName("p")[1].innerHTML = player2;

let text = "";
if (randomNumber1 > randomNumber2) {
  text = `🚩${player1} wins`;
} else if (randomNumber1 === randomNumber2) {
  text = "Draw!";
}
else{
  text = `🚩${player2} wins`;
}
document.querySelector("h1").innerHTML = text;
