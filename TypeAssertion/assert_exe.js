var message = 'abc';
var endsWithC = message.endsWith('c');
console.log(endsWithC);
// sometime confusion will come like below(intelisense wont work)
// we do type assertion
var message1;
message1 = 'abcd';
var endsWithD = message1.endsWith('d');
console.log(endsWithD);
//or
var alterendsWithD = message1.endsWith('d');
console.log(alterendsWithD);
