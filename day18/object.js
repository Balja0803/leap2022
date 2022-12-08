let person1 = {
  firstName: "john",
  lastName: "Smith",
  age: 25,
  isMarried: false,
  score: [77, 90, 85, 100],
  shout: () => {
    return "hehe";
  },
  address: {
    country: "USA",
    city: "Austin",
  },
};

let person2 = {
  firstName: "Dave",
  lastName: "Stone",
  age: 29,
  isMarried: true,
  score: [88, 98, 80, 99],
  shout: () => {
    console.log("heh");
  },
  address: {
    country: "USA",
    city: "NY",
  },
};

console.log(person1.shout());
console.log(person1["age"]);
