/* Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент 
и возвращает сумму этих двух чисел. Выведите в консоль результат. */

const num1 = 7;
const num2 = 9;
function funcSum(funcNum1){
    return function(funcNum2){
        return funcNum1 + funcNum2;
    }
}
const resultSum = funcSum(num1); 
console.log(`Сумма ${num1} и ${num2} равна ${resultSum(num2)}`);