//The most important difference between splice and slice is that splice changes the actual array while slice creates a new copy of the array.
/**
 * *****Slice*****
The slice() method extracts a part of a string.
The slice() method returns the extracted part in a new string.
The slice() method does not change the original string.
The start and end parameters specifies the part of the string to extract.
The first position is 0, the second is 1, ...
A negative number selects from the end of the string.
 */
const fruits = ["Apple","Mango","Orange","Kiwi","Grapes","Guava"]
console.log(fruits.slice(1,4));//slice means taking particular part away.[start,end]
console.log(fruits)//In slice original array is not disturbed, new array is created.

// ********Splice***********
/**
 * The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

Syntax
array.splice(index, howMany, item1, ....., itemX)
*/
const fruits1 = ["Apple","Mango","Orange","Kiwi","Grapes","Guava"]
console.log(fruits1.splice(1,0,"Banana","Sapota"))//no elements are removed, it shows empty array [].
console.log(fruits1);

const str = "shyam sundar";
let str1 = str.split("")
console.log(str1.splice(5,1,' '," "));
const str2 = str1.join("")
console.log(str2)
