console.log("Hello!"); // строки берем в кавычки
console.log("world");
console.log("3333");
console.log(333);
console.log("Hello!" + "world"); //конкатенция
console.log("Hello!" + " world"); //конкатенция
console.log("Hello! " + "world"); //конкатенция
console.log("Hello!"+" "+"world"); //конкатенция
console.info("Hello!");
// alert("HEllo!"); //ctrl+l

document.getElementById('out').innerHTML = 'Hello!';
document.getElementById('out').innerHTML = '2024';
document.getElementById('out').innerHTML = '<b>2023</b>';

document.querySelector('.header').innerHTML = 15;
document.querySelector('#one').innerHTML = 777; // есть#
document.getElementById('one').innerHTML = 888; // нет #

let b; // var a - усторело 
let a = document.querySelector("#one"); // внутрь а получил рараграф
let c; // обявил 
c = document.querySelector(".header"); // присвоил 

a.innerHTML = 9999; // new! - ошибка внимательно выберать заголовку 
c.innerHTML = 6666; 