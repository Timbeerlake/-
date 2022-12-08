"use strict"

const num = function () {
  let a;

  do {
    a = +prompt("введите число ")
  } while (!a)
  return a
}

num()
