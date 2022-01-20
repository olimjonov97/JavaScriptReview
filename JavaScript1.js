// let str = 5
// let num = 12345
// var res = parseInt (num);
// var res = parseFloat (num);
// var res = num.toFixed();
// console.log(res);
// console.log(typeof res);

// Math
// let num =
// console.log(Math.random()*10);4

//String

// let str = 'abcdefghjklmnop'
//lenth mehtod
// let leng = str.length
//slice
// let slc = str.slice(3);
//substring similar to Slice but cant accept negative
// console.log(slc);
// let sub=str.substring(s,e)
// //substr similar to slc but second parameter specifies lenth
// let subs = str.substr(0, 5)
// var arr = str.split('')
// console.log(arr);
// arr.map()
// console.log(str.replace('a','z'));

// Functions

//
// let wstr = 'world'
// var world='';
// const strarr = wstr.split('')
// for (i = strarr.length-1; i >=0; i--){
//     world += strarr[i];
//     console.log(strarr);
// }
// console.log(world);
// let arr = [10, 52, 4, 89, 25, 115, 6, 23]
// let sortedarr = arr.sort((a, b) => a - b)
// console.log(sortedarr[sortedarr.length - 2]);
// const myobj = {
//     key1: "value",
//     key2:'value2',
//     key3:'value3',
//     key4:'value4'
// }
// const objkeys = Object.keys(myobj)
// const objValues = Object.values(myobj)
// const objentries = Object.entries(myobj)
// console.log(objkeys);
// console.log(objValues);
// console.log(objentries);

//Facebook
// users = {
//   id: 1,
//   pw: 123,
//   username: 'Olimjonov',
// };
// console.log('starter...');

//firsttry
// const Facebook = (pw, username) => {
//     if (users.pw === pw && users.username === username) {
//         return console.log('Welcome');
//     }
//     else return console.log('pw is inccorect');
// };
// setTimeout(Facebook, 1000, 123, 'Olimjonov');
//secondtry
// const Facebook = (pw, username, callback) => {
//     setTimeout(() => {
//         if (users.pw === pw && users.username === username) {
//           callback('Welcome');
//         } else callback('PW incorrect');
//     }, 3000);

// };
// Facebook(123, 'Olimjonov', (data) => {
//     console.log(data);
//     console.log('Finished');
// });

// const Loggedinuser = 'John'
// userPopUp = (username) => {

//     console.log(`Welcome`+ username);
// }
//     setTimeout(userPopUp, 2000, Loggedinuser);

//PROMISE

// let myPromise = new Promise((myResolve, myReject) => {
//   // "Producing Code" (May take some time)
//   let str = 5;
//   if (typeof str === 'string') {
//     myResolve('this is String type');
//   } else {
//     myReject('this is not String type');
//   }
//   // when successful
//   // when error
// });
// myPromise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

//FB with Promise
users = {
  id: 1,
  pw: 123,
  username: 'Olimjonov',
};
console.log('starter...');
// const Facebook=((pw,username) => {
//     let Fbuser = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (users.pw === pw && users.username === username) {
//           resolve('Welcome');
//         } else reject('PW incorrect');
//       }, 2000);
//     });
//     Fbuser.then((resolved) => {
//       console.log(resolved + ' this is successed data');
//     }).catch((rejected) => {
//       console.log(rejected + ' this is rejected data');
//     });
// })



// Facebook(123, 'Olimjonov');
const Facebook = (pw, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.pw === pw && users.username === username) {
        resolve('Welcome');
      } else reject('PW incorrect');
    }, 1000);
  });
  
};
const myasync = async () => {
    try {
        let result = await Facebook(123, 'alimjonov');
        console.log(result);
        
    }
    catch (err) {
        console.log(err);
    }
} 
myasync();