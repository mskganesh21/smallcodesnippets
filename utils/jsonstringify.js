const jsonStringify = (value) => {
  try{
    return JSON.stringify(value);
} catch (e){
  console.error("Error serialising value to JSON", e);
  return null;
}
};

const myValue = {
    name: "John",
    age: 30,
    isAdmin: true,
    hobbies: ["reading", "coding", "hiking"],
    address: {
        city: "New York",
        country: "USA"
    }
};


const result = jsonStringify(myValue);
console.log(result);
