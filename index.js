const num1 = document.getElementById('_num1');
let num1Target = 0;
const num2 = document.getElementById('_num2');
let num2Target = 0;
const num3 = document.getElementById('_num3');
let num3Target = 0;
const num1_children = Array.from(num1.children);

setInterval(() => {
  if (num3Target + 1 == 10) {
    num3Target = 0;
    if (num2Target + 1 == 10) {
      num2Target = 0;
      if (num1Target + 1 == 10) {
        num1Target = 0;
      } else {
        num1Target++;
      }
    } else {
      num2Target++;
    }
  } else {
    num3Target++;
  }
  Array.from(num3.children).forEach((child, index) => {
    child.style.transform = `translateY(-${num3Target}2.25rem`;
  });
}, 1000);

setInterval(() => {
  Array.from(num2.children).forEach((child, index) => {
    child.style.transform = `translateY(-${num2Target}2.25rem`;
  });
}, 1000);

console.log(num1_children);

num1_children.forEach((child, index) => {
  child.style.transform = `translateY(-${num1Target}2.25rem`;
});
