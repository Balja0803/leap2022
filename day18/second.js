let person1 = [10, 20, 30];
let person2 = [...person1];
person2[0] = 100;
console.log(person1);
person3 = [...person2];
console.log(person3);
console.log(person3.keys());
console.log(person2.values());
let person4 = {
  name: "john",
  age: 34,
};
console.log(Object.keys(person4));
