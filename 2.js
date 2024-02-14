function mergeArrays(arr1, arr2) {
    const mergedArray = [...new Set([...arr1, ...arr2])];
    return mergedArray;
}
function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(num => arr2.includes(num));
    const uniqueCommonElements = [...new Set(commonElements)];
    return uniqueCommonElements;
}
function findElementsNotInSecondArray(arr1, arr2) {
    const elementsNotInSecondArray = arr1.filter(num => !arr2.includes(num));
    return elementsNotInSecondArray;
}
const randomArray1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const randomArray2 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

console.log("Random array 1:");
printArray(randomArray1);

console.log("\nRandom array 2:");
printArray(randomArray2);

console.log("\nMerged array:");
printArray(mergeArrays(randomArray1, randomArray2));

console.log("\nCommon elements:");
printArray(findCommonElements(randomArray1, randomArray2));

console.log("\nElements not in second array:");
printArray(findElementsNotInSecondArray(randomArray1, randomArray2));