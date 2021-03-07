
const userName = Symbol('userName');
const password = Symbol('password');

const user = {
    [userName]: 'Maria',
    [password]: '1234',
    age: 37
};

console.log(user.userName);
console.log(user.password);
