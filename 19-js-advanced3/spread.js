console.log('=== Array Spread ===');
const arr1 = [2, 3, 5];
const arr2 = [7, 11];
const arr3 = [...arr1, 0, ...arr2, 17, 19];
console.log(arr3);
const arr1Clone = [...arr1];
console.log(arr1Clone);
console.log(arr1 === arr1Clone);
arr1Clone.push(42);
console.log(arr1);
console.log(arr1Clone);
let res = Math.min(6, 2, 8, 1, 4);
console.log(res);
// res = Math.min(arr3); values = [arr3] = [[2,3,5,0,7,11,17,19]]
res = Math.min(...arr3);
console.log(res);
console.log('=== Object Spread ===');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    salary: 20000,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        city: 'Rehovot',
        street: 'Plaut',
        building: 10
    },
    age: 25
}
const personClone = {...person};
console.log(personClone);
console.log(person === personClone);
console.log(personClone.address === person.address);
personClone.address = {...person.address};
console.log(personClone.address === person.address);
const job = {
    company: 'Google',
    position: 'Software Engineer'
}
const newPerson = {...person, salary: 18000, ...job, gender: 'male'};
console.log(newPerson);
console.log('=== Legacy Object cloning ===');
const legacyClone = Object.assign({}, person);
console.log(legacyClone);
console.log(legacyClone === person);
console.log(legacyClone.address === person.address);
const newPersonLegacy = Object.assign({}, person, {salary: 18000}, job, {gender: 'male'});
console.log(newPersonLegacy);
console.log('=== Object methods ===');
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);
const entries = Object.entries(person);
console.log(entries);
console.log(entries[1][1]);
console.log(entries[3][0]);

