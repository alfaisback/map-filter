// conditional variable

const siswa = [
    {
        nama: 'ahmad',
        umur: 21
    },
    {
        nama: 'budi',
        umur: 20
    },
    {
        nama: 'eko',
        umur: 22
    }
]

// filter
// const namaSiswa = siswa.filter(a => a.nama);
// console.log(namaSiswa);

// const umurSiswa = siswa.filter(a => a.umur);
// console.log(umurSiswa);

// // map (menambahkan element pada array dengan function baru)
// const namaSiswa = siswa.map(a => a.nama + ' mantap');
// console.log(namaSiswa);

// const namaSiswa = siswa.map(a => a.umur + 2);
// console.log(namaSiswa);

// Reduce 
const namaSiswa = siswa.reduce((accumulator, umur) => accumulator + umur ,
);
console.log(namaSiswa);
