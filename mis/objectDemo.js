//Creating an object
let obj1 = {
  name: "Sai Surya Teja",
  age: 24,
};

//Access
console.log(obj1.name);
console.log(obj1["age"]);
console.log("----------------------------");
//Update
obj1.city = "Hyd";
obj1["phone"] = 1234;
console.log("Updated object", obj1);
console.log("------------------------------");
//Delete
delete obj1["name"];
delete obj1.age;
console.log("After delete", obj1);
