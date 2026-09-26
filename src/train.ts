// TASK N:

// Shunday function yozing, u string qabul qilsin va string 
// palindrom yani togri oqilganda ham, orqasidan oqilganda 
// ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;




function palindromCheck(text: string): boolean {
    let reverse: string = text.split("").reverse().join("");

    return text === reverse;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false




//TASK M
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va
//  array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan
//   tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9


// function getSquareNumbers(array: number[]) {
//     let result : {number:number; square:number}[]=[];
//     for (let number of array) {
//         let square: number= number*number;
//         let obj ={
//             number:number,
//             square:square
//         }
//         result.push(obj)
//     }
//     return result
// }

// console.log(getSquareNumbers([1,2,3,4]))