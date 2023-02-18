// 1
window.onload = () => {
  backgroundColor();
};
function backgroundColor() {
  document.getElementById("btn-change").addEventListener("click", function () {
    let bgColor = generateRandomColorCode();
    document.getElementById("root").style.backgroundColor = bgColor;
    let getInputColorCode = document.getElementById("inputColorCode");
    getInputColorCode.value = bgColor;
  });
}
// 2
function generateRandomColorCode() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// 3
document.getElementById("copyBtn").addEventListener("click", function () {
  let getInputColorCode = document.getElementById("inputColorCode");
  navigator.clipboard.writeText(getInputColorCode.value);
  document.getElementById("copyBtn").innerText = "copped";
});
