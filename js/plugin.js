let str = 'some test string';
let firstLetter;
let lastLetter;
let strNew;
let indexString;
let secondGap;
let newStr_1;
let newStr_2;
let newStr_3;
let a = 20, b = 16;
let str2016;
let numPi;
let numMin;
let numMax;
let numRandom;
let randomNumber;
let testNum;
let number;
let obj;

//1. - получить первую и последнюю буквы строки
firstLetter = str[0];
lastLetter = str[str.length - 1];
console.log(firstLetter, lastLetter);

//2. - сделать первую и последнюю букву в верхнем регистре
strNew = str[0].toUpperCase() + str.slice(1, length - 1) + str[str.length - 1].toUpperCase();
console.log(strNew);

//3. - найти положение слова string в строке
indexString = str.indexOf("string");
console.log(indexString);

//4. - найти положение второго пробела
secondGap = str.indexOf(" ", str.indexOf(" ") + 1);
console.log(secondGap);

//5. - получить строку с 5-ого символа длиной 4 символа
newStr_1 = str.substr(5, 4);
console.log(newStr_1);

//6. - получить строку с 5-ого по 9-ый символ
newStr_2 = str.substring(5, 9);
console.log(newStr_2);

//7. - получить новую строку из исходной путем удаления последних 6-и символов
newStr_3 = str.slice(0, (str.length - 1) - 6);
console.log(newStr_3);

//8. - из двух переменных а=20 и b=16(где 20 и 16 числа) получить строку 2016
str2016 = a.toString() + b.toString();
console.log(str2016);


// ===============Math=============================
//1. - получить число pi и округлить его до 2-х значений после запятой
numPi = +(Math.PI.toFixed(2));
console.log(numPi);

//2. - минимальные и максимальные числа
numMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
numMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(numMin, numMax);

//3. -a) получить случайное число и округлить его до 2-х значений после запятой
numRandom = Math.round(Math.random() * 100) / 100;
console.log(numRandom);
//3. -b) получить случайное целое число от 0 до x
randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//4. - проверить результат вычисления, привести к нормальному виду
testNum = +(0.6 + 0.7).toFixed(1);
console.log(testNum);

//5. - получить число из строки '100$'
number = parseInt('100$');
console.log(number);


// ==============Object==========================
obj = {product: 'iphone'};
console.log(obj);

obj.price = 1000;
obj.currency = 'dollar';
console.log(obj);

obj.details = {model: '7s', color: 'gold'};
console.log(obj);