/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

//версия 1
function findUniqueElements(array) {
    let newArray = [array[0]];
    let isIssue = false;
    console.log(newArray);
    
    for (let i = 0; i < array.length; i++) {
        for (let i2 = 0; i2 < newArray.length; i2++) {
            if (array[i] === newArray[i2]) {
                isIssue = false;
                break
            } else {
                isIssue = true;
            }
            
        }
        if (isIssue) {
            newArray.push(array[i])
        }
        
    }
    return newArray
}

console.log(findUniqueElements([1, 2, 3, 7, 7, 10, 2, 1, 4, 10]));


// //версия 2
// function findUniqueElements(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (includesElement(newArray, array[i])) {
//         } else {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }




// function includesElement(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }
