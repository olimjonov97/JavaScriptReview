users = {
  id: 12345,
  username: 'Olimjonov',
};
// const Facebook = (pw, username,callback) => {
//     setTimeout(() => {
//         if (user.id === pw && user.username === username) {
//           callback('Welcome to Facebook');
//         } else callback('PassWord or Login is incorrect');
//     }, 1000);
// }

// let result = Facebook(12345, 'Olimjonov', (data)=>{console.log(data);});
// console.log(result);
const Facebook = (pw, username) => {
  let user = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.id === pw && users.username === username) {
        resolve('Welcome to Facebook');
      } else reject('Pw or logIn is incorrect');
    }, 1000);
  });
  user
    .then((res) => {
      console.log(res) ;
    })
    .catch((err) => console.log(err));
};
Facebook(12345, 'Olimjonov');