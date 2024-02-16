//  1 -task   ///////////////////

// 1-masala
// String.prototype.trm = function (){
//     let trim;
//    return this.trim()
// }
// const result = " salom js "
// console.log(result.trm());

//  2 -task   ///////////////////

// String.prototype.upperCase = function(){
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
//     let lower = 'abcdefghijklmnopqrstuvwxyz';
//     let str = '';
//         for(let i = 0; i < this.length; i++){
//             let el = this[i]
//             if(lower.includes(el)){
//                 el = upper[lower.indexOf(el)];
//             }
//            str+=el;
//         }
//         return str;
//     }
//     let arr = 'john doe' ;
//     let result = arr.upperCase();
//     console.log(result);

//  3 -task   ///////////////////

// String.prototype.has =function(str){
//     return this.indexOf(str) !== -1
// }
// let str1 = 'hello world';
// let result = str1.has('hello')
// console.log(result);

//  4 -task   ///////////////////

// String.prototype.cut = function (str, i){
//     return this.substring(str,i)
   
// }
// let str = 'hello world'
// let s = str.cut(5,7)
// console.log(s);


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
