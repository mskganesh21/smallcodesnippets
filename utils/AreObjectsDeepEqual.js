const AreObjectsDeepEqual = (obj1,obj2) => {
  //check if both are obj's or arrays
  if(typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null){
    //get the keys of both objects
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    //check if no of keys are different
    if(keys1.length !== keys2.length){
      return false;
    }
    
    //check each key and recursively compare their values
    for(let key of keys1){
      if(!keys2.includes(key) || !AreObjectsDeepEqual(obj1[key], obj2[key])){
        return false
      }
    }
    
    return true;
  }
  
  return obj1 === obj2;
}


const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};


const result = AreObjectsDeepEqual(obj1,obj2);
console.log(result);
