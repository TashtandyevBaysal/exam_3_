// 1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.
const a = 123
console.log(a)

const b = "Hello World"
console.log(b)

 const bool1 = false;         
 console.log(bool1)

//  2) Преобразуйте строку в число и наоборот. Выведите результат в консоль.
let num = +"123"
console.log(num)

const str = String(123);
console.log( str);

 

// 3) Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.
const massive = [1,2,3,4,5]

for (let getMassive of massive) {
    console.log(getMassive)
}

// 4) Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.
const person = {
    name: "Байсал",
    age: 18,
    city: "Бишкек",
    language: "JS"
  };
  
  console.log(person)

//   5) Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.
function checkNumber(number) {
    if (number % 2 === 0) {
      console.log(number + " является четным числом.");
    } else {
      console.log(number + " является нечетным числом.");
    }
  }
  
  const myNumber = 2;
  checkNumber(myNumber);

  
// 6) Используя цикл, выведите числа от 1 до 10 в консоль.
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!

const arrowFunction = () => {
    console.log("Hello World!");
};

arrowFunction();

function declarationFunction() {
    console.log("Hello World!");
}

declarationFunction();

const expressionFunction = function() {
    console.log("Hello World!");
};

expressionFunction();

    
// 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой

const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = "Успешно";
        resolve(result);
    }, 1000);
});


const errorPromise = new Promise((resolve, reject) => {
  
    setTimeout(() => {
        const errorMessage = "ошибка";
        reject(errorMessage);
    }, 2000); 
});

successfulPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error);
    });

errorPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(errorMessage); 
    });