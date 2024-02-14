//1
//Функция для печати массива
function Array(arr) {
    console.log(arr.join(','));
}
//2
//Функция для печати четных элементов
function EvenElements(arr) {
    const evenElements = arr.filtet(num => num % 2 === 0);
    console.log(evenElements.join(', '));
}
//3
//Функция для возврата суммы всех элементов
function ArraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
//4
//Функция для возврата максимального элемента
function ArrayMax(arr) {
    return Math.max(...arr);
}
//5
//Функция для добавления нового элемента в определенный индекс
function ElementToArray(arr, index, newElements) {
    if  (index < 0 || index > arr.length) {
        throw new Error('Invalid index');
}
arr.splice(index, 0, newElements);
return arr;
}
//6
//Функция для удаления элемента из определенного индекса
function ElementFromArray(arr, index) {
    if  (index < 0 || index >= arr.length) {
        throw new Error('Invalid index');
}
arr.splice(index, 1);
return arr;
}