let dataMhs = "doni";

console.log(`karakter pada index ke - 0: ${dataMhs.charAt(0)}`);
console.log(`karakter pada index ke - 1: ${dataMhs.charAt(1)}`);
console.log(`karakter pada index ke - 2: ${dataMhs.charAt(2)}`);
console.log(`karakter pada index ke - 3: ${dataMhs.charAt(3)}`);

let dataMhs2 = "dodi";
let mahasiswa = dataMhs.concat(" ", dataMhs2);
console.log(`data mahasiswa: ${mahasiswa}`);

console.log(`substring index ke - 0 sampai index ke - 4: ${dataMhs.substring(0, 4)}`);
console.log(`substring index ke - 4 sampai index ke - 0: ${dataMhs.substring(4, 0)}`);

console.log(`slice index ke - 0 sampai index ke - 4: ${dataMhs.slice(0, 4)}`);
console.log(`slice index ke - 4 sampai index ke - 0: ${dataMhs.slice(4, 0)}`);

console.log(`index dari karakter 'd': ${dataMhs.indexOf("d")}`);
console.log(`index dari karakter 'o': ${dataMhs.indexOf("o")}`);
console.log(`index dari karakter 'n': ${dataMhs.indexOf("n")}`);
console.log(`index dari karakter 'i': ${dataMhs.indexOf("i")}`);

console.log(`data mahasiswa sebelum replace: ${dataMhs}`);
let dataMhsReplace = dataMhs.replace("doni", "dodi");
console.log(`data mahasiswa setelah replace: ${dataMhsReplace}`);

console.log(`data mahasiswa sebelum diubah menjadi huruf besar: ${dataMhs}`);
let dataMhsUpperCase = dataMhs.toUpperCase();
console.log(`data mahasiswa setelah diubah menjadi huruf besar: ${dataMhsUpperCase}`);
console.log(`data mahasiswa setelah diubah menjadi huruf kecil: ${dataMhs.toLowerCase()}`);
