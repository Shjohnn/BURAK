//TASK M
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va
//  array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan
//   tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9

function getSquareNumbers(array) {
    let result = [];
    let obj = {};
    for (let number of array) {
        let square = number * number;
        let obj = { 
            number: number,
             square: square
         }
        result.push(obj)
    }
    return result
}
console.log(getSquareNumbers([1, 2, 3]))


















// TASK L:

// Shunday function yozing, u string qabul qilsin va string
// ichidagi hamma sozlarni chappasiga yozib va sozlar
// ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";





// function reverseSentence(str) {
//     let words = str.split(" ");
//     let result = [];

//     for (let word of words) {
//         let reverse = "";

//         for (let i = word.length - 1; i >= 0; i--) {
//             reverse += word[i];
//         }

//         result.push(reverse);
//     }

//     return result.join(" ");
// }

// console.log(reverseSentence("we like coding!"));
// // ew ekil !gnidoc