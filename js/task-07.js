const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
}
fontSizeControl.addEventListener("input", updateFontSize);
updateFontSize();
