
let message = 'abc';
let endsWithC = message.endsWith('c');
console.log(endsWithC);
// sometime confusion will come like below(intelisense wont work)
// we do type assertion
let message1;
message1 = 'abcd';
let endsWithD = (<string>message1).endsWith('d');
console.log(endsWithD);
//or
let alterendsWithD = (message1 as string).endsWith('d');
console.log(alterendsWithD);