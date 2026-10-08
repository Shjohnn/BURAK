// TASK S:

// Shunday function yozing, u numberlardan 
// tashkil topgan array qabul qilsin va osha
//  numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2


function missingNumber(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }

    return -1;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8




// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// //1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. 

// function calculate(ele: string): number{
//   const a = ele.split(" ")
//   .filter((item) => !isNaN(Number(item)))
//   .reduce((sum, item) => sum + Number(item), 0);
// return a
// }
// console.log(calculate("1 + 3")); // 4







// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true',
//  aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga 
// mos kelganligi uchun 'true' natijani qaytarmoqda



// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
// }


// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true



/* 

Traditional FD => BSSR (Admin) => Backend server side rendering =>  EJS
Modern FD      => SPA (User app) => React
*/







// # TASK P:

// # Parametr sifatida yagona object qabul 
// # qiladigan function yozing.
// # Qabul qilingan objectni nested array 
// # sifatida convert qilib qaytarsin

// # MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: Record<string, number>) {
//     return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));




// TASK O:

// Shunday function yozing va u har xil
//  qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab 
// chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida 
// faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(array: any[]): number {
//     let total: number = 0;

//     for (let item of array) {
//         if (typeof item === "number") {
//             total += item;
//         }
//     }

//     return total;
// }

// console.log(
//     calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])
// );

// Project standarts:
  //-Login standarts
  //-naming standarts
    //function,method, variable => Camel case  =>goHome
    //class => Pascal         
    //folder => Kebab 
    //css => snake
  //-Error handling:


/*
Traditional API
Rest API
GraphQl API
 */









// TASK N:

// Shunday function yozing, u string qabul qilsin va string 
// palindrom yani togri oqilganda ham, orqasidan oqilganda 
// ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;




// function palindromCheck(text: string): boolean {
//     let reverse: string = text.split("").reverse().join("");

//     return text === reverse;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false




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