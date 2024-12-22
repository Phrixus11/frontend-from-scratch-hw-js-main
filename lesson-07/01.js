/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

let str = "hello world from javascript";


function capitalizeWords(string) {
  let result = string[0].toUpperCase()
  for (let i = 1; i < string.length; i++) {
    if (string[i-1] === " ") {
      string[i].toUpperCase()
      result +=string[i].toUpperCase()
    } else {
      result +=string[i]
    }
  }
  return result
}

console.log(capitalizeWords(str));





// function capitalizeWords(str) {
//   // Разделяем строку на массив слов
//   const words = str.split(" ");

//   // Проходимся по каждому слову с помощью цикла for
//   for (let i = 0; i < words.length; i++) {
//       // Берем первую букву в верхний регистр, а остальную часть слова оставляем как есть
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   // Объединяем массив слов обратно в строку и возвращаем
//   return words.join(" ");
// }

// // Пример использования
// const input = "hello world from javascript";
// const output = capitalizeWords(input);
// console.log(output); // "Hello World From Javascript"