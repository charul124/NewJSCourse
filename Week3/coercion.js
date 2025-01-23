//simply a technique where JS tries to interpret and do something by itself
//okay moreover type conversion and Type Coercion are different as type conversion is done by us and type coercion is done by JS
console.log("Hello I am Charul !");
//adding string and number wil concatenate but subtracting will give 0 because JS tries to convert string to number
console.log('8' - 5);
console.log('5' + 5);
console.log('5' * 5);
console.log('5' / 5);
//we can check type of anything with keyword typeof
const giveType = typeof 5;
console.log(giveType);

console.log('5' == 5); //true
console.log('e' + 3);
console.log('e' - 3);
console.log('e' / 3);
//true is considered 1 and false as 0 in JS
const adder = true+5;
console.log(adder);

//values that are interpreted as false 
// fasle , 0 , ''(empty string), null, undefined and apart from this everything is considered as true
const logDetails = [];
const logId = logDetails[0];
if(logId){
    console.log("Successful");
}
else{
    console.log("Auth Failed");
}