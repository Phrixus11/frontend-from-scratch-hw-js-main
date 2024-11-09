/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

let sum = 0;
let count = 0;
while (count < 20) {
        count ++
        if (count % 2 === 1) {
            sum +=count
            console.log(count);            
        } else {
            
        }
        count ++
}
    console.log(`${count} ${sum}`)