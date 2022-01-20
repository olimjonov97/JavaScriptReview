// var text = '\nwebbrain academy';
// console.log(text.repeat(5));

//dars 6
// tub son
// for (let i = 1; i <= 50; i++){
//     let cnt = 0;
//     for (let j = 1; j <= i; j++) {
//         i % j === 0 && cnt++;

//     }
//     cnt === 2 && console.log(i,'tub son');
// }

// let title = 'webBrAin academy'.repeat(5);
// let cnta = 0;
// let cntb = 0;
// for (let i = 0; i < title.length; i++){
//   (title[i].toLowerCase() === 'a' && cnta++);
//   (title[i].toLowerCase() === 'b' && cntb++);

// }
// console.log(cnta, '= a');
// console.log(cntb, '= b');
// Match()property
// remove space
// var title = 'webBrain acaaademy'.repeat(5);
// console.log(title.match(/a/g).length);
// console.log(title.replace(/ /g, ''));
// ifUpper case meets separate with space
// var title = 'webBrain Academy';
// var newstr = '';
// for (let i=0; i < title.length; i++)
// {
//   (title[i] === title[i].toUpperCase()) ? (newstr += ` ${title[i]}`) : (newstr += title[i]);
// }
// console.log(newstr.trim());
//dars 7
// var a = +('122.12'+3);
// console.log(eval('120 +151542'));
// console.log(parseInt(a));
// arrayname.push() /arrayname.pop()
// var arr = ['bu array', true, 12345, undefined];
// arr.pop();
// console.log(arr);
// arr.push('added item');
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('added item')
// console.log(arr);
// var number1 = [1, 2, 3, 4, 5, 6];
// var num = "151554";

// var number2 = [7, 8, 9];
// console.log(number1.concat(number2));
// array.lenth() sets or returns the number of elements
// console.log(number1.length);
//arrayname.slice() $ arrrayname.splice()
// arr.join() returns array as string
// console.log(number1.join(''));
// console.log(number1);
// console.log(num.split(''));

//ARRAY SORT() PROPERTY AND COMPARE FUNCTION
var arr = [1, 5, 'apple', 6, 9, 8, 7, 2, 3, 4, 0];
var arr2 = [1, 5, 6, 9, 28, 78, 22, 35, 54, 10];
// console.log(arr.sort());
// console.log(arr2.sort((a, b) => { return a - b }));
var str = ['apple', 'banana', 'tomatoes', 'Ananas'];
// console.log(str.sort((x,y)=>x.localeCompare(y)));

// arrname.filter() method creates a new array filled with elements that pass a test provided by a function.
// console.log((arr.filter((value)=> value >6)).sort());
// console.log((arr.filter((value)=> value ===str[0])));
// console.log((arr.filter((value)=> value ==='apple')));
// console.log(str.filter((value) => value[0].toUpperCase() === 'A'));
// map((value, index)=>value or index)
// var test = [1, 5, 'apple', 6, 9, 8, 7, 2, 3, 4, 0];
// var teststore=test.map(( value, index) => {
//     // console.log(value);
//     return `${value} ${index}`
// });
// console.log(teststore);
//     console.log(teststore[2]);

// fill()&every()keldim
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var numberstr = '12 34 5 67 8 9 1 0 56 51 15 31 2 5 5';
// var newarr = numberstr.split(' ')
// var filterednum = newarr.filter(num => num >    10);

// console.log(number.sort((a,b) => b-a));
// console.log(filterednum.sort((a,b) => a-b));

// console.log(number.join(''));
// console.log(numberstr.split(''));
// var type = typeof arr;
// function functest(a,b) {
//     console.log(a * b);

// }
// functest(2 , 3)
//   var func = (a, b) =>{    console.log(a * b);
// }
// func(2,3)
//MAP
//     var fruits = ['apple', 'orange', 'Ananas', 'Banana',]
// var cnt = 0;
// fruits.filter((valueoffruits) => valueoffruits === 'a');

// console.log(`the number of A is ${cnt} ` );
// let tests = [1, 2, 3, 'a', 4, 'b', 5, 'c', 6, 'd'];
// let sum = 0;
// tests.map((value) => {
//     if (typeof value === 'string') {
//        console.log(value);
//    }
// })
// tests.map((value, index) => {
//     if (typeof value ==='number') {
//         sum += value;
//    }
// })

// console.log(sum);
// for (let i = 0; i < tests.length; i++){
//     if (typeof tests[i] !== 'string') {
//         console.log(tests[i]);
//     }
// }
// let ar = [14, 23, 13, 45, 55, 61, 27]
// // let min = ar.sort((a, b) => a - b)[0];
// let min = ar.sort((a, b) => a - b);
// console.log(min);

// console.log(ar.map((value, index)=> index% 2 === 0 ? value :index ));

//dars 8 array davomi
//Obects
// const user = {
//     name: 'Abror',
//     age: 24,
//     status: 'single'
// };
// key='name'
// console.log(user);
// console.log(user['name']);
// const myObj = {
//   name: 'John',
//   age: 30,
//   cars: [
//     { company: 'GM', carmodel: ['gentra', 'Nexia', 'Equinox'] },
//     { company: 'Merecedes', carmodel: ['x4', 'm220', 'M222'] },
//     { company: 'BMW', carmodel: ['BMW1', 'Bmwx5', 'Bmw4'] },
//   ],
// };
// for (let i = 0; i <= myObj.cars.length - 1; i++) {
//   let string = (myObj.cars[i].company +=
//     ' ' + myObj.cars[i].carmodel.join(' '));
//   // string += ' '+ myObj.cars[i].carmodel.join(' ')
//   console.log(string, 'string');
//   // console.log(myObj.cars[i].company);
//   // for (let j = 0; j <= myObj.cars[i].carmodel.length- 1; j++) {
//   //     console.log(myObj.cars[i].carmodel[j]);

//   // }
// }
//  for (let j = 0; j < myObj.cars[i].length - 1; j++) {
//    console.log(myObj.cars[i][j]);
//  }
// console.log(myObj.cars[0].carmodel[2]);
//object add
// const obj = {
//     firstKey: 'firstValue',
//     secondKey: 'secondValue'
// }
// console.log(obj);
// obj.firstKey='updatedfirstvalue'
// obj.secondKey = 'updatedsecondValue';
// console.log(obj);
// obj['thirsKey'] = 'thirdValue';
// console.log(obj);
// Delete keyword
// const myObj = {
//   name: 'John',
//   age: 30,
//   cars: {
//     car1: 'Ford',
//     car2: 'BMW',
//     car3: 'Fiat',
//   },
// };
// delete myObj.cars.car2;
// console.log(myObj);
// myObj.cars.car2=' ';
// console.log(myObj);

// const myObj = {
//   name: 'John',
//   age: 30,
//   cars: 'Fiat',

// };
// let myproperty = Object.keys(myObj);
// // console.log(myproperty);
// // myproperty = Object.values(myObj);
// // console.log(myproperty);
// myproperty = Object.entries(myObj);
// console.log(myproperty[2][1]);
//Masalalar
// let mynewarr = [
//     {
//         id: 1,
//         name: 'Gentra',
//         year: 2021
//      },
//     {
//         id: 2,
//         name: 'Nexia',
//         year: 2010
//      },
//     {
//         id:3 ,
//         name: 'Cobalt',
//         year: 2015
//      }
// ]
// const OnDelete = (id) => {
//    return mynewarr.filter(value => value.id !== id)
// }
// const sortByYear = () => {
//    return mynewarr.sort((a, b) => a.year - b.year)
// }
//  console.log(OnDelete(1));
//  console.log(sortByYear());

//Curry function
// const user = {
//    id:1,
//    name: 'Web',
//    surname: 'Brain',
//    status: 'Academy',
//    key:'12345'
// };
// Identifier = 'id';
// user.id = user.id + user.id;
//  Object.entries(user).map((key,value)=>console.log(value));
//  Object.entries(user).map(([key,value])=>console.log(value));
// Test = Object.entries(user).map(([key, value]) => value);
//  console.log(Test);
// for (let i = 0; i < test.length; i++){
//    console.log(test[i]);
// }

// console.log(user['id']);

//home work
// let univ = [
//   { id: 1, name: 'WebBaran', surname: 'Brain', status: 'Academyweb', key: '12345' },
//   { id: 12, name: 'cleverWeb', surname: 'Brain', status: 'AcademyUzx', key: '12345' },
//   { id: 10, name: 'WebBrain', surname: 'Brain', status: 'AcademyDot', key: '12345' },
//   { id: 97, name: 'WebCamp', surname: 'Brain', status: 'AcademyBot', key: '12345' },
// ];

//sortId console.log(univ.filter(value => value.id===10));
//sortId console.log(univ.filter(value => value.id!==10));
// console.log(univ.sort((a,b) =>a.id-b.id));
// console.log(univ.sort((a,b) =>a.name.localeCompare(b.name)));
//Destructuing
// const { id, name, surname, status, key } = univ;
// console.log(id);

// let univ = {
//    id: 1,
//    name: 'Web',
//    surname: 'Brain',
//    fullName: function() {
//       console.log(this.name+this.surname);
//    },
// };
// univ.fullName();
// class test {
//   constructor(title) {
//    //   console.log(title);
//      this.title = title;

//   }
//   getName() {
//     console.log(this.title,'bu parent');
//   }
// }
// new test('Hello world');
// new test('Hello world');

// class ParentTest extends test{
//    constructor(value) {
//       super(value)
 
//    }
// }
// let rs = new ParentTest('hello class');
// console.log(rs);

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  FullInfo() {
    console.log(this.name, this.age);
   //  console.log(`I am ${this.name} and my age is ${this.age}`);
  }
}
// let user = new person('John', 24);
// user.FullInfo();
// console.log(user.FullInfo);
class child extends person {
  constructor(Value,age) {
    super(Value,age);
  }
}
const Parentchild = new child('Johnemas', 26);
Parentchild.FullInfo();