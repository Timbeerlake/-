// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
//  b) через switch-case
//  c) через многомерный массив без ифов и switch.
// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch


let lang = "ru";
let arr;
if (lang == "ru") {
  arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else if (lang == "en") {
  arr = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
}
console.log(arr);


let namePerson = prompt("имя")

namePerson = "Артем" ? "директор" : "студент";
namePerson = "Александр" ? "преподователь" : "студент";
console.log(namePerson)