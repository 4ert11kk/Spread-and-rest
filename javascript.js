// Задание 1  Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;

console.log('Задание 1');

function avgnum (...num) { // получаем, что num становится массивом
    const summ =  num.reduce((acc, number) => acc + number, 0);
    const len = num.length;
    return summ / len;
}

console.log(`Ответ: ${avgnum(1, 2, 3, 4, 5, 6)}`);

// Задание 2 Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна) 
// и возвращает строку с этой информацией, используя деструктуризацию;
console.log('Задание 2');

function printInfo ( {name, age, country} ) {
    console.log(`Name: ${name}, Age: ${age}, country: ${country} `);
}

const user = {
    name : 'Alex',
    age: '15', 
    country: 'USA'
}

console.log(printInfo(user));

// Задание 3 Создай объект с вложенными объектами и массивами. 
// Используй деструктуризацию, чтобы извлечь несколько значений на разных уровнях вложенности;
console.log('Задание 3');

const user2 = {
    name : 'Alex',
    age: '15', 
    address : {
        country : 'USA',
        street : 'abc',
        numberStreet : [2 , 8]
    }
}

const { name, age, address : {country, street, numberStreet}} = user2;

console.log(name, age, country, street, numberStreet);


// Задание 4  Используй оператор `spread` для создания нового массива, 
// который включает все элементы исходного массива и добавляет несколько новых элементов в начале и в конце;
console.log('Задание 4');

const arr1 = [ 1, 2, 3];
const arr0 = [ -1, 0 ];
const last = 4;

const arr = [...arr0, ...arr1, last ];

console.log(...arr);


//Задание 5 Используй оператор `rest` для создания функции, 
// которая принимает объект с параметрами и возвращает новый объект без одного указанного параметра.
console.log('Задание 5');

function printI ( {name , ...last}) {
    return last;
}

const user3 = {
    name : 'Alex',
    age: '15', 
    country: 'USA'
}

console.log(printI(user3));

