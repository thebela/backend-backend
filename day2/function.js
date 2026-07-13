function square(num) {
  return num * num;
}
function isEven(num) {
  return num % 2 === 0;
}
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function calculateAverage(arr) {
    const sum = calculateSum(arr);
    return sum / arr.length;
}
function countEven(arr) {
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
}
function countOdd(arr) {
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount;
}
function Statistics(arr) {
    return {
        largest: findLargest(arr),
        smallest: findSmallest(arr),
        sum: calculateSum(arr),
        average: calculateAverage(arr),
        evenCount: countEven(arr),
        oddCount: countOdd(arr)
    };
}
function reversestring(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }   
}  

const arr = [12, 5, 18, 1, 9, 18, 12];
const stats = Statistics(arr);
console.log("Largest = ", stats.largest);
console.log("Smallest = ", stats.smallest);
console.log("Sum = ", stats.sum);
console.log("Average = ", stats.average);
console.log("Count of even numbers = ", stats.evenCount);
console.log("Count of odd numbers = ", stats.oddCount);

const str = "amanislearningjavascript";
console.log("Reversed string:");
reversestring(str);
