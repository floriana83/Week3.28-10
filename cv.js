const Dark = document.querySelector(".enableDarkMode");
Dark.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");});


const light = document.querySelector("#enableLightMode");
light.addEventListener(
    "click", () => {
      const lightbt = document.querySelector(".wrapperDue");
      lightbt.classList.toggle("lightMode");
    }
);

const allp = document.getElementsByTagName("p");
console.log(allp); 

/////////////// 

const pageTitle = () => {
const arrTitle = document.querySelector("h1");
console.log("Questa pagina è stata creata da:" , arrayTitle);
}

// bottone somma

const add = document.querySelector('.Somma');
document.addEventListener('click', () => { 
    let scelta = prompt ("Inserisci due numeri: ");
    const numeri = scelta.split(",");
    const Inputnumbers = [];

 for (x of numeri) {
   Inputnumbers.push (parseInt(x))
 }
    const sum = (numOne, numTwo) => numOne + numTwo;
    function calcula (operatione) {
    let totSum = 0;
    totSum = operatione (...scelta)
    return totSum;
    }

  calcula (sum) 

  setTimeout (() => {console.log(calcolo(sum))}, 6000);

})
//cerchio

let intColor;

const changeColor = () => {
  if (!intColor) {
    intColor = setInterval(flashColor, 2000);
  }
};

const flashColor = () => {
  const circle = document.querySelector("#circle");
  if (circle.className === "colorOne") {
      circle.className = "colorTwo";
  } else {
    circle.className = "colorOne";
  }
};

changeColor();

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    clearInterval(intColor);
  }
})