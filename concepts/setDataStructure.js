const s1 = new Set();
console.log(s1.size); // prints 0

s1.add(33);
s1.add('Amod');
s1.add(true);

console.log(s1); // prints set
console.log(s1.size) // prints 3 

const set = new Set([2,4,6]); // conversion of array to set.
console.log(set); // prints set

const s2 = new Set();
s2.add(34);
s2.add('Raghu');

const s2Array = [...s2] // converting set to array.
console.log(s2Array);

const s2Array2 = Array.from(s2); // another way to convert the set to array.
console.log(s2Array2);



