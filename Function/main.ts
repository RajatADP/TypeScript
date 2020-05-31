function fullName(person: {firstName: string, lastname: string}) {
    console.log(person.firstName, 'and ', person.lastname);
}

let p = {
    firstName: 'Rajat',
    lastname: 'Mishra'
};

fullName(p);

// better way

interface Person {
    firstName: string;
    lastName: string;
}

function fullName1(person: Person) {
    console.log(person.firstName, 'and ', person.lastName);
}