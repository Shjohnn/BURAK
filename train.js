// TASK L: 

// Shunday function yozing, u string qabul qilsin va string 
// ichidagi hamma sozlarni chappasiga yozib va sozlar 
// ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";





function reverseSentence(str) {
    let words = str.split(" ");
    let result = [];

    for (let word of words) {
        let reverse = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reverse += word[i];
        }

        result.push(reverse);
    }

    return result.join(" ");
}

console.log(reverseSentence("we like coding!"));
// ew ekil !gnidoc