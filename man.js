//<< Checking the equatity of OBJECT key and value>>>


// const data = {
//     a: 1,
//     b: 1
// };

// const data2 = {
//     a: 1,
//     b: 1
// };

// const data3 = {
//     a: 1,
//     b: 2
// };
// const areEqual = (num1, num2) => {
//     if (Object.entries(num1).toString() === Object.entries(num2).toString()) {
//         return true
//     } else {
//        return false
//     }
// }

// console.log(areEqual(data, data2));





// //<<< object ichida qiymatlar mavjudligini tekshirish>>>

// const data = { a: { b: undefined  }};

// const data2 = { a: { b: 'it does exist' } };

// const data3 = {
//     a: {
//         b: 'it does exist',
//         innerKey: null
//     }
// };


// const nestedValueExists = (num) => {
//     if (num.a.b === undefined) {
//         return false
//     } else if (num.a.innerKey === null) {
//       return false;
//     }else return true
// }

// console.log(nestedValueExists(data));

// //<<< objectqiymatlari va kalitlari bir xilligini tekwirish>>>


// const data = {
//     b: 2,
//     a: 1,
// };

// const data2 = {
//     b: 2,
//     c: 1,
// };

// const data3 = {
//     c: 3,
//     b: 5
// };


// const checkSame = (num, num1) => {
//     if(Object.values(num).toString() === Object.values(num1).toString() ||
//     Object.keys(num).toString() === Object.keys(num1).toString()
//     ) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSame(data2, data3));
