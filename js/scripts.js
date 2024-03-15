// //* Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа из исходного массива. Используйте Set для решения этой задачи.


// function uniqueNumbers(numbers) {
//     let uniqueNumbers = [...new Set(numbers)]
//     return uniqueNumbers
//   }
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(uniqueNumbers(numbers)); // [1, 2, 3, 4, 5]



// //* Предположим, у вас есть два массива, представляющие два разных набора данных (например, список имен). Необходимо написать функцию, которая возвращает массив, содержащий только те элементы, которые присутствуют в обоих массивах (пересечение массивов). Используйте Set для решения этой задачи.
// function findCommonElements(arr1, arr2) {
//   let set1 = new Set(arr1)
//   let set2 = new Set(arr2)
//   let commonElements;
//   commonElements = new Set([...set1].filter(function(element){
//     return set2.has(element)
//   }));
//   return [...commonElements]
// }

// const array1 = ['Alice', 'Bob', 'Charlie', 'Diana'];
// const array2 = ['Bob', 'Diana', 'Eve', 'Alice'];
// console.log(findCommonElements(array1, array2)); 


// //!   spread operator
// //!  Array.from

function sureName(sureName) {
  console.log(sureName)
}
sureName('Петров')

const letAge = (year, currentYear) =>  {
  let age = currentYear - year;
  return age;
}
console.log(letAge(2002, 2024))



// Задача: Уникальные Пользователи и Их Сообщения 

// Описание Задачи 
// Вы разрабатываете функционал для социальной сети, где пользователи могут отправлять друг другу сообщения. Ваша задача — написать скрипт, который анализирует массив сообщений и выполняет следующие действия: 

// Идентификация уникальных пользователей: Используя структуру данных Set, определите уникальных пользователей, которые отправили сообщения. 

// Сохранение сообщений по пользователям: Используя структуру данных Map, сохраните сообщения, отправленные каждым пользователем. Ключом должен быть идентификатор пользователя, а значением — массив отправленных им сообщений. 

// Вывод результатов: Выведите список уникальных пользователей и сообщения, отправленные каждым из них. 
// Задачи 

// Напишите функцию analyzeMessages(messages), которая анализирует массив сообщений и реализует вышеуказанный функционал. 

// Убедитесь, что ваш скрипт корректно обрабатывает входные данные и выводит ожидаемые результаты. 

const messages = [ 

  { userId: 'user1', message: 'Привет!' }, 

  { userId: 'user2', message: 'Как дела?' }, 

  { userId: 'user1', message: 'Всё хорошо, спасибо!' }, 

  { userId: 'user3', message: 'Привет всем!' }, 

  { userId: 'user2', message: 'Отличная погода сегодня!' } 

]; 
function analyzeMessages(messages) {

  let users = new Set()
  let userInfo = new Map()
  let messagesUsers;

  messages.forEach(function(item){
    users.add(item.userId)
    if (userInfo.has(item.userId)) {
      userInfo.get(item.userId).push(item.message)
    } else {
      userInfo.set(item.userId, [item.message])
    }
  })
  userInfo.forEach((item, key)=>{
    console.log(key, item)
  })
}
console.log(analyzeMessages(messages))


// const messages = [ 

//   { userId: 'user1', message: 'Привет!', 'Всё хорошо, спасибо!' }, 

//   { userId: 'user2', message: 'Как дела?', 'Отличная погода сегодня!' }, 

//   { userId: 'user3', message: 'Привет всем!' }, 

// ];


let load = document.querySelector('.loading')
let circleReady = document.querySelector('color-circle')
load.addEventListener('mouseover', function (){
  let randomValue = Math.floor(Math.random() * 95) + 1;
console.log(randomValue);
  load.style.top = randomValue + '%'
  load.style.left = randomValue + '%'
})
