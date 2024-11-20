// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    }
    return c
}

console.log(findLargest(1, 2, -3));
console.log(findLargest(5, 2, 3));
console.log(findLargest(5, 2, 9));