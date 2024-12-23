// Ref: https://developer.mozilla.org/fr/docs/Web/API/Canvas_API
const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

let size = 10;
let color = "black";
let x1, y1, x2, y2;
let isPressed = false;

const drawCircle = (ctx, x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

const updateSizeOnScreen = () => (sizeElement.innerText = size);


canvas1.addEventListener("mousedown", (e) => {
  isPressed = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
});

canvas1.addEventListener("mouseup", (e) => {
  isPressed = false;
  x1 = undefined;
  y1 = undefined;
});

canvas1.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(ctx1, x2, y2);
    drawLine(ctx1, x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
});



canvas2.addEventListener("mousedown", (e) => {
  isPressed = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
});

canvas2.addEventListener("mouseup", (e) => {
  isPressed = false;
  x1 = undefined;
  y1 = undefined;
});

canvas2.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(ctx2, x2, y2);
    drawLine(ctx2, x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
});

increaseButton.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;
  updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;
  updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => (color = e.target.value));

clearElement.addEventListener("click", () => {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
});
