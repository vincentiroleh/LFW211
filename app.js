// function f (n = 99) {
//     if (n === 0) throw Error()
//     f(n - 1)
// }
// f()

// const bigNum = 1n;
// console.log(typeof bigNum);

// const obj = {
//     mykey: { thisIs: 'a nested object' }
// }
// console.log(obj.mykey);

// TODO: A function can be passed to another function as an argument:
// setTimeout(() => {
//     console.log('Hello from the future');
// }, 3000);


// TODO: A function can be assigned to an object:
// const obj = {
//     id: 999,
//     fn: function () {
//         console.log(this.id)
//     }
// }

// const obj2 = { id: 2, fn: obj.fn }
// obj2.fn();
// obj.fn();

// function fn() { console.log(this.id) };
// const obj = { id: 999 };
// const obj2 = { id: 2 };

// fn.call(obj);
// fn.call(obj2);

// TODO: There are also fat arrow functions, also known as lambda functions:
// const add = (a, b) => a + 1;
// const cube = (n) => Math.pow(n, 3);

// console.log(cube(3));

// function fn() {
//     return (offset) => console.log(this.id + offset)
// }

// const obj = { id: 999 };
// const offsetter = fn.call(obj)
// offsetter(1)

// function normalFunction () { }
// const fatArrowFunction = () => { }
// console.log(typeof normalFunction.prototype);
// console.log(typeof fatArrowFunction.prototype);

// TODO: Prototypal Inheritance (Functional)

// const wolf = {
//     howl: function () { console.log(`${this.name}: awooooooooo`) }
// }

// const dog = Object.create(wolf, {
//     woof: { value: function () { console.log(`${this.name}: woof`) } }
// })

// function createDog (name) {
//     return Object.create(dog, {
//         name: { value: `${name} the dog`}
//     })
// }
// const rufus = createDog('Rufus');


// rufus.woof();
// rufus.howl();

// console.log(Object.getPrototypeOf(rufus) === dog)
// console.log(Object.getPrototypeOf(dog) === wolf)


// TODO: Prototypal Inheritance (Constructor Functions)

// function Wolf(name) {
//     this.name = name;
// }

// Wolf.prototype.howl = function () {
//     console.log(this.name + ': awooooooo')
// }

// function Dog(name) {
//     Wolf.call(this, name + ' the dog')
// }

// function inherit (proto) {
//     function ChainLink() {
//         ChainLink.prototype = proto
//         return new ChainLink()
//     }
// }

// Dog.prototype = inherit(Wolf.prototype)

// TODO: Closure Scope

// function outerFn () {
//     let foo = true
//     function print() {
//         console.log(foo)
//     }
//     print() // prints true
//     foo = false
//     print() // prints false
// }
// outerFn();


// function init (type) {
//     var id = 0
//     return (name) => {
//         id += 1
//         return { id, type, name }
//     }
// }

// const createUser = init('user');
// const createBook = init('book');
// const dave = createUser('Dave');
// const annie = createUser('Annie');
// const ncb = createBook('Node Cookbook');
// console.log(dave)
// console.log(annie)
// console.log(ncb)
