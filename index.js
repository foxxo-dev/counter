const num2 = document.getElementById('_num2');
let num2Target = 0;
const num3 = document.getElementById('_num3');
let num3Target = 0;
const num4 = document.getElementById('_num4');
let num4Target = 0;

setInterval(() => {
  if (num4Target + 1 === 10) {
    num4Target = 0;
    if (num3Target + 1 === 10) {
      num3Target = 0;
      if (num2Target + 1 === 10) {
        num2Target = 0;
      } else {
        num2Target++;
      }
    } else {
      num3Target++;
    }
  } else {
    num4Target++;
  }
  Array.from(num4.children).forEach((child) => {
    child.style.transform = `translateY(-${num4Target}2.25rem)`;
  });
}, 1000);

setInterval(() => {
  Array.from(num3.children).forEach((child) => {
    child.style.transform = `translateY(-${num3Target}2.25rem)`;
  });
}, 1000);

setInterval(() => {
  Array.from(num2.children).forEach((child, index) => {
    child.style.transform = `translateY(-${num2Target}2.25rem`;
  });
}, 1000);
