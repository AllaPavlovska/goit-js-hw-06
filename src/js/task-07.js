const inputName = document.getElementById("font-size-control");
const spanName = document.getElementById("text");

inputName.addEventListener("input", () => {
   
  const fontSize = inputName.value + "px";
  text.style.fontSize = fontSize;
});
