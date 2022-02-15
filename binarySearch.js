// Функция для создания отсортированного массива чисел
function createArray(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i*2);
    }
    return array;
 }
  
 // Инициализируем массив для поиска
 const array = createArray(50_000_000);
 const searchValue = 99999998;
  console.log({array: array[array.length -1], searchValue})
const result1Old = new Date();

 // Замерять скорость выполнения поиска через some
 const result1 = array.findIndex(v => v === searchValue);
  
console.log('Speed result1', new Date() - result1Old, result1)

 // Замерять скорость выполнения поиска через binarySearch
 // Функцию binarySearch необходимо реализовать
 // Time O(log n), Space O(1)
 
function binarySearch(array, searchValue) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === searchValue) return mid;

        if (array[mid] < searchValue) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const result2Old = new Date();

const result2 = binarySearch(array, searchValue);

console.log('Speed result2', new Date() - result2Old, result2)
