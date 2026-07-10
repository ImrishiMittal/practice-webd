"use strict";
var num1 = 10;
var num2 = 20; // let and const error
var num3 = "30";
// var total:number = num1 + num2 + num3;  {  ERROR   }
var total = num1 + num2;
// console.log(total)
var oct = 0o00001; //Octal
var hex = 0b00001; //Hexa
var binary = 0x00001;
// console.log(oct + 10);
var item = 10;
var item1 = "50";
// console.log(item + item1) //Wrong
var item2Converted = +item1;
// console.log(item + item2Converted) // 60
console.log(item + +item1); //60
