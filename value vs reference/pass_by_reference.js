// ex 1
const arr1  = [1,2,3]
const arr2 = arr1;
console.log(arr1,arr2);
arr2[2] = 6; 
console.log(arr1,arr2);


//arr1 refernced to [1,2,3]
// arr2 referenced to arr1 so arr2 will be referenced to [1,2,3]
// both the variables refers to the same array so new data will not be created.

//ex2
const obj1 = {
    0:'annu',
    1:'yadav'
}

const obj2 = obj1;
console.log(obj1,obj2);

obj2[1] = 'ji';
console.log(obj1,obj2);

// exmp 3
const student1 = {
    name : 'Annu yadav',
    standard: 10,
    rollNumber: 1
}

const student2 = student1;
student1.name = 'kaushal';
student2.standard = 12;
const student3 = student2;
student3.rollNumber = 5;
console.log(student2);