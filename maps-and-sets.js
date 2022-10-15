// Ioana Alex Mititean
// 10/14/22
// Exercise 10.7.7: Maps and Sets


// Quick Question #1
new Set([1, 1, 2, 2, 3, 4]);
// Returns a Set with the content: {1, 2, 3, 4}


// Quick Question #2
[...new Set("referee")].join("");
// Returns a string with the value: "ref"


// Quick Question #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// The map m now looks like:
// Map([[1, 2, 3], true],
//     [[1, 2, 3], false])


// hasDuplicate
function hasDuplicate(array) {

    const toSet = new Set(array);
    return toSet.size !== array.length;
}

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false

// vowelCount

