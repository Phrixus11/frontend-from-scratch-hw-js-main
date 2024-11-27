/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/



//Вариант 2
function findCommonElements(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array2.length; i++) {
        if (includesElement(array1, array2[i])) {
            if (includesElement(newArray, array2[i])) {
            } else {
                newArray.push(array2[i])
            }
        }
    }
    return newArray
}


// console.log(findCommonElements(["banana", 2, 3, 8, 5, 3, 4, 5], [7, 8, "banana", 2, 3]));


// function includesElement(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }