const person={
    name:"mridul",
    age:17,
    isRich:false,
    isStudent:true
}
// convert object to json data
const personJson=JSON.stringify(person);
console.log(personJson);
// convert json data to object
const parseJson=JSON.parse(personJson);
console.log(parseJson);