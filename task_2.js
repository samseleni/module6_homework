/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1. */

let numUser = +prompt('Введите число');
function easy(num) {
    let result = `Число ${num} простое`;
    if (num <= 1) {
        result = `Число ${num} не является простым`;
    } else if (num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = `Число ${num} не является простым`;
                return result;
            }
        }
    } else {
        result = 'Данные не верны';
    }
    return result;
}
console.log(easy(numUser));
