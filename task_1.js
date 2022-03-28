const arr = ['яблоко', 12, 5, 'дорога', 12, 'дорога', null, 0];
let evenItem = 0;
let oddItem = 0;
let nullItem = 0;
let symbol = 0;
function getEvenOdd(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            if (array[i] === 'NaN') {
                symbol++;
            } else if (array[i] === 0) {
                nullItem++;
            } else if (array[i] % 2 == 0) {
                evenItem++;
            } else {
                oddItem++;
            }
        } else {
            symbol++;
        }
    }
    console.log(`Количество четных элементов: ${evenItem}
    Количество нечетных элементов: ${oddItem}
    Количество нулевых элементов: ${nullItem}
    Количество элементов, не являющихся числом: ${symbol}`);
}
getEvenOdd(arr);
