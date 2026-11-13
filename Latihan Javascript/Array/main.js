// Array
let mhs = ["Doni", "Dodi", "Dian", "Roni", "Joni"];
console.log(mhs);
console.log(mhs[0]);
console.log(mhs[1]);
console.log(mhs[2]);
console.log(mhs[3]);
console.log(mhs[4]);
console.log(mhs[5]); // undefined

// Melihat Panjang Data
console.log(mhs.length)

// pop
mhs.pop();
console.log(mhs);

// push
mhs.push("Joni");
console.log(mhs);

// shift
mhs.shift();
console.log(mhs);

// unshift
mhs.unshift("doni");
console.log(mhs);

// splice
mhs.splice(0, 2);
console.log(mhs);

// slice
sliceMhs = mhs.slice(0, 2);
console.log(sliceMhs);

// join
console.log(`Data Mahasiswa: ${mhs.join(", TI_")}`);

// concat
let mhs2 = ["Jafar", "Rahman"];
let combine = mhs.concat(mhs2);
console.log(combine);

// sort
let angka = [9, 8, 7, 6, 5, 2, 3, 2, 1];
console.log(angka.sort());
console.log(combine.sort());

// reverse
console.log(combine.reverse());

// typeof
console.log(typeof(combine));

// indexof
console.log(combine.indexOf("Dian"));

// foreach
combine.forEach((item, index) => {
    console.log(item, index);
});