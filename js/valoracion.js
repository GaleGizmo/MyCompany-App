const navegador=navigator.userAgent;  
console.log(navegador);
moviles=["Mobile","iPhone","iPod","BlackBerry","Opera Mini","Sony","MOT","Nokia","samsung"];
let detector=false; 
for (const i in moviles) { 
   let compruebo=navegador.indexOf(moviles[i]); 
   if (compruebo>-1) { 
      detector=true; 
      }
   }
if (detector) { 
  console.log("Estás en Móvil");
   } else console.log("Estás en PC");

const stars = document.querySelectorAll("div>img");
const star1 = stars[0];
const star2 = stars[1];
const star3 = stars[2];
const star4 = stars[3];
const star5 = stars[4];
//Cambia de estrella gris a dorada de manera ordenada al hacer click//
star1.addEventListener("click", () => {
  if (star1.getAttribute("alt") === "star_gray") {
    turnYellow(star1);
  } else {
    turnGray(star1, star2, star3, star4, star5);
  }
});
star2.addEventListener("click", () => {
  if (star2.getAttribute("alt") === "star_gray") {
    turnYellow(star1, star2);
  } else {
    turnGray(star2, star3, star4, star5);
  }
});
star3.addEventListener("click", () => {
  if (star3.getAttribute("alt") === "star_gray") {
    turnYellow(star1, star2, star3);
  } else {
    turnGray(star3, star4, star5);
  }
});

star4.addEventListener("click", () => {
  if (star4.getAttribute("alt") === "star_gray") {
    turnYellow(star1, star2, star3, star4);
  } else {
    turnGray(star4, star5);
  }
});
star5.addEventListener("click", () => {
  if (star5.getAttribute("alt") === "star_gray") {
    turnYellow(star1, star2, star3, star4, star5);
  } else {
    turnGray(star5);
  }
});
function turnGray() {
  for (let j = 0; j < arguments.length; j++) {
    arguments[j].setAttribute("src", "../_resources/star_gray.png");
    arguments[j].setAttribute("alt", "star_gray");
  }
}
function turnYellow() {
  for (let j = 0; j < arguments.length; j++) {
    arguments[j].setAttribute("src", "../_resources/star.png");
    arguments[j].setAttribute("alt", "star");
  }
}
