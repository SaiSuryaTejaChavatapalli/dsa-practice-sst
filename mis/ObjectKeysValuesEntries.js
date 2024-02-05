const obj = {
  name: "Sai",
  age: 24,
  city: "Hyd",
};

const keysOfObj = Object.keys(obj);
console.log("keysOfObj", keysOfObj);

const valuesOfObj = Object.values(obj);
console.log("valuesOfObj", valuesOfObj);

const entriesOfObj = Object.entries(obj);
console.log("entriesOfObj", entriesOfObj);

//using in operator we can access keys in object in JS

for (let i in obj) {
  console.log(i, obj[i]);
}
