// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

function chunkArray(arr: number[], num: number): number[][] {
  let list: number[][] = [];

  for (let i = 0; i < arr.length; i += num) {
    list.push(arr.slice(i, i + num));
  }

  return list;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
















// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.>


// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log(countChars("hello"));
// { h: 1, e: 1, l: 2, o: 1 }





// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

// function sumOdds(number: number): number {
//   let count: number = 0;

//   for (let i = 1; i <= number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(sumOdds(9));  // 5



// Shunday function tuzing, u sonlardan tashkil
//  topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: 
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, 
// tartib raqam bo'yicha tartiblab qaytarmoqda.


// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     return arr1.concat(arr2).sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// // [0, 3, 4, 4, 6, 30, 31]







// TASK S:

// Shunday function yozing, u numberlardan 
// tashkil topgan array qabul qilsin va osha
//  numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2


// function missingNumber(nums: number[]): number {
//     const n = nums.length;

//     for (let i = 0; i <= n; i++) {
//         if (!nums.includes(i)) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8




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