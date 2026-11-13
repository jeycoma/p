let data = ["Jafar", "Assidik", "Dian"];

function tambahData() {
let nama = document.getElementById("nama").value;
    if (nama !== "") {
        data.push(nama);
        tampilkanData();

        document.getElementById("nama").value = "";
        }
    }

function tampilkanData() {
let daftar = document.getElementById("daftar");
daftar.innerHTML = "";
    data.forEach(function(nama, index) {
        daftar.innerHTML += `
            <li>
                ${index + 1}. ${nama}
                    <button onclick="hapusData(${index})">Hapus</button>
            </li>
        `;
    });
}

function hapusData(index) {
    data.splice(index, 1);
        tampilkanData();
    }

tampilkanData();