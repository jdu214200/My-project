let a = 6;
let b ='Hello';

console.log(a);

let inputIn = document.querySelector(".input-in"); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function (){
  // когда кнопка будет нажата будет выпольнят
  console.log("Rabotayt");
  console.log(inputIn.value); // value - то, что введено в input
  let b = +inputIn.value;
  console.log(b + 10); 
  div.innerHTML = b;  // эта просто для показания и выведения результата 
  inputIn.value = ' ';
}