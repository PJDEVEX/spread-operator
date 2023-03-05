/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array", arr2);
console.log('First array', arr1);
// Changes made to arr2 has affected in arr1 as well
// this is because arr2 is not a copy of arr1
// both are the same
// changes made to arr1 affect arr2 and vice versa

// Copying an array 
let arr3 = [4, 5,6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array", arr3);
console.log('forth array', arr4);
// spread operator used as a solution 
// copy arr


// Copying an object
obj1 = {a:1, b:2, c:3 };
obj2 = {...obj1, d:4 };
obj3 = {...obj1, b:5 };
// overwritting object items is done in obj3

console.log("first object", obj1);
console.log('second object', obj2);
console.log('third object', obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

// Accessing a specific arry in a dictionary
// let subjects = [students[0].subjects];
// console.log(subjects);

// getting a copy of a specific arry in a dic
let subjects = [...students[0].subjects];
console.log(subjects);

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);
console.log(students[0]);

