/*
const changeH1 = ()=>{
    document.querySelector("h1").innerHTML = "Ankash Agrawal";
    console.log("h1 changed")
}
const changeValue = setTimeout(changeH1,2000);

document.querySelector("#clicked").addEventListener('click',()=>{
    clearTimeout(changeValue)
})
*/
/*
const startTiming = (str)=>{
   console.log("Start", str, Date.now());
}

const outTime = setInterval(startTiming, 2000, "hi");

clearInterval(outTime);
*/

/*
const start = () => {
  document.querySelector("#start").addEventListener("click", () => {
    console.log("Starint");
    document.querySelector("h1").innerHTML = "Starting";
  });
};

const end = setInterval(start);

document.querySelector("#end").addEventListener("click", () => {
  clearInterval(end);
  console.log("End");
  document.querySelector("h1").innerHTML = "End";
});
*/

// generate a random Color
/*
const randomColor = () => {
  const hexValue = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
// consol.log(Math.floor(Math.random())*16);
let interval;

const startChangingColor = () => {
  if (!interval) {
    interval = setInterval(changeByColor, 1000);
  }

  function changeByColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const endChangingColor = () => {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#end").addEventListener("click", endChangingColor);
*/

