

let StringMethods
//*  /.../            => regular expression (regExp)
//!               RU: регулярное выражение


//*  /.../i           => insensitive
//!               RU: нечувствительный
//*  /.../g           => global
//!               RU: глобальный
//*  string           => text
//!               RU: текст
//*  length           => the length of the string (text)
//!               RU: длина строки (текста)
//*  slice()          => the special part of the string
//!               RU: специальная часть строки
//*  replace()        => replace the string with a new string
//!               RU: заменить строку на новую строку
//*                   can take a special regExp as an parameter
//!               RU: может принимать специальное регулярное выражение
//*  toUpperCase()
//*  toLowerCase()
//*  concat()         => merges two strings 
//!                RU: объединяет две строки
//*  trim()           => removes whitespace in the beginning
//*                      and at the end of the string
//!                RU: удаляет пробелы в начале и в конце строки
//*  split()          => splits the text into many pieces
//!                RU: разделяет текст на множество частей
//*  padStart()       => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the start
//!                RU: если полученная строка НЕ достигает заданной
//!                   длины, мы можем заполнить ее символом в начале
//*  padEnd()         => if the resulting string does NOT reach a 
//*                      given length we can fill it with a sybmol 
//*                      at the end
//!                RU: если полученная строка НЕ достигает заданной
//!                     длины, мы можем заполнить ее символом в конце
//*  charAt()         => Returns the character at the specified index
//!                RU: Возвращает символ по указанному индексу
//*  indexOf()        => returns the index of the first
//*                         string or letter that it finds
//!                RU: возвращает индекс первой строки или буквы,
//!                      которую он находит
//*  lastIndexOf()    => returns the last index of the string
//!                RU: возвращает последний индекс строки
//*  search()         => returns the first expression that it finds
//!                RU: возвращает первое выражение, которое он находит
//*  match()          => returns the matched string (all 
//*                         strings if we use /.../gi) 
//!                RU: возвращает совпавшую строку (все строки, если
//!                      мы используем /.../gi)
//*  includes()       => returns true if the string is found
//!                RU: возвращает true, если строка найдена
//*  startsWith()     => checks if the string starts with ...
//!                RU: проверяет, начинается ли строка с ...
//*  endsWith()       => checks if the string ends with ...
//!                RU: проверяет, заканчивается ли строка на ...
//*  repeat()         => repeats the string number of times
//!                RU: повторяет строку определенное количество раз
//*  join()           => joins all elements of an array into a string
//!                RU: объединяет все элементы массива в строку
