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


switch (lang) {
  case "ru" : 
    console.log(["пн", "вт", "ср", "чт", "пт", "сб", "вс"]);
  case "en" :
    console.log(["mn", "ts", "wd", "th", "fr", "st", "sn"]);
}

lang_array = [];
lang_array["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
lang_array["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(lang_array["ru"]);
console.log(lang_array["en"]);




let namePerson = prompt("имя")

console.log(namePerson === "Артем" ? "директор" : "студент");
console.log(namePerson === "Александр" ? "преподователь" : "студент")