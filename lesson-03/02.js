// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(x) {
    return x % 2 ? false : true ;
}

console.log(isEven(2));
console.log(isEven(4));