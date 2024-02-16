//  11 - task  //////////////////

// Array.prototype.customMap = function(tel) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//       result.push(tel(this[i], i, this));
//     }
//     return result;
//   };
//   const arr = [1, 2, 3, 4, 5];
// const all = arr.customMap(num => num * 2);
// console.log(all);


//   12 - task  ///////////////////

// Array.prototype.customEvery = function(tel) {
//     for (let i = 0; i < this.length; i++) {
//       if (!tel(this[i])) {
//         return false;
//       }
//     }
//     return true;
//   };
// const arr = [1, 2, 3, 4, 5];
// const result = arr.customEvery(num => num > 0);
// console.log(result); 