// Exercise 1:
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

const add = (...input) => {
    let ret = 0;
    for (const vars of input) {
        ret += Number(vars);
    }
    return ret;
};

const sum1 = add(a, b, c, d, e);

var f = '1';
var g = 15;
var h = 8;
var i = "1";

const multiply = (...input) => {
    let ret = 1;
    for (const vars of input) {
        ret *= Number(vars);
    };
    return ret;
};

const sum2 = multiply(f, g, h, i);

alert(`The result of ${sum1} divided by ${sum2} is ${sum1/sum2}`);


//Exercise 2:

const arr = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ] ;

const first = arr[1][1];
const second = arr[4][2];
const third = arr[5][3];
const fourth = arr[2][3];
const fifth = arr[2][1];
const sum3 = add(first,second,third,fourth,fifth);
console.log(first,second,third,fourth,fifth, 'with a total sum of',sum3 );
