let nama, nim, submit, output;
document.getElementById("submit").onclick = function() {
    nama = document.getElementById("nama").value;
    nim = document.getElementById("nim").value;
    nilai = document.getElementById("nilai").value;
    dataMhs = nama + " " + nim + " " + nilai;
    console.log(`data mahasiswa: ${dataMhs}`);
    console.log(`Nama: ${nama} dengan NIM: ${nim}, nilai yang diperoleh: ${nilai}`);
    document.getElementById("output").innerHTML = `Nama: ${nama}`;
    document.getElementById("output1").innerHTML = `NIM: ${nim}`;
    document.getElementById("output2").innerHTML = `Nilai: ${nilai}`;
}