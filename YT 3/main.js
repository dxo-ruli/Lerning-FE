// alert("hello world")  //cara komen : ctrl+/

// console.log("heyho")
// prompt('masukan usia anda!')


/*>>>>>>
//```````````````````````````` TIPE DATA  ```````````````````````````//
var usia = 20;
console.log('hey, usia anda adalah  ' + usia); //interpreted : code dieksekusi dari atas ke bawah
console.log(typeof(usia)) //typeof() digunakan untuk melihat janis data

const answer = '"I think it\'s awesome!" he answered confidently'; //escape string :  gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik
console.log(answer);                                                //Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas string. Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.


//=======increment(++) dan decrement (--)
//note : tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1)

let b = 30
console.log(++usia)  //Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
//---------------------------------
let a = 30;
console.log(usia++); //Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
//---------------------------------

const myName = "Luke";                          //Bawah ini namanya STRING INTERPOLATION
console.log(`Hello, my name is ${myName}.`);   //NOTE. string d bungkus menggunakan tanda backticks(`)

//--------------------------------
const p = 3;
const q = 5;
let isGreater = p > q;
let isLess = p < q;
console.log(isGreater);
console.log(isLess);

<<<<<<<*/



//```````````````````````````````` OPERATOR ````````````````````````````````//
// let x = 10;
// let y = 12;
// x+=y;     //Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.
// console.log(x)


//```````````````````````````````` CONDITIONAL STATEMENT ````````````````````````````````//
//---------------------if else
// let rusa = "binatang";
// if (rusa == "binatang"){
//     kondisi = "Benar";
// } else{
//     kondisi = "Salah";
// }
// console.log(kondisi);

//---------------------switch case break
// let pacar  = 2;
// switch (pacar){
//     case 1 :           //jika pacar = 1, maka pacar = "punya pacar 1"
//         pacar =  "punya pacar 1"
//         break         //break jika kondisi terpenuhi
//     case 2 :
//         pacar =  "punya 2 pacar"
//         break
//     default : 
//         pacar = "belum punye pacar"
//         break
// }
// console.log(`Saat ini anda ${pacar}, tetap belajar js`);    //cara memunculkan nilai variabel di dalam string 


//````````````````````````````````ARRAY ````````````````````````````````//
// let namaGuru = ["Maman", "Alif", "Deden"]
// namaGuru.push("Dea", "Bambang")              //menambahkan value di indekx paling akhir
// namaGuru.shift()                            //menghapus index paling awal
// namaGuru[2] ="Jack"                         //menambahkan value pada index 2
//console.log(namaGuru.length)                 //menampilkan panjang aray
// console.log(namaGuru[0])                    //menampilkan value indeks ke-0
// console.log(namaGuru)


//````````````````````````````````LOOPING ````````````````````````````````//
//---------------------FOR
// const namaGuru = ["Maman", "Alif", "Deden", "Jack"]
// for (let i = 0; i < namaGuru.length; i++){
//     console.log(namaGuru[i])
// }

//---------------------While
// let a = 0             //deklarasi ada di luar loop
// while(a < 10){
//     a++               //looping ada di luar
//     console.log("Ruli")
// }

//---------------------DO While
// let x = 0
// do {
//     x++
//     console.log("Alqodri")       //bedanya, klo kondisinya salah (false) maka akan tetap menampilkan "Alqodri" satu kali... karena d ceknya d akhir
// } while(x < 5)


/*
TUGAS !
1. promp untuk mengetahui saldo akhir dari apa yang di inputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
*/

// let a = Number(prompt('Masukkan saldo awal anda!'));   //number digunakan untuk menyatakan nilai yg d input adalah number
// let b = Number(prompt('Masukkan saldo tambahan!'));    //default nilai dari promp() sendiri adalah integer
// a+= b;
// alert(a);

// let hari = new Date().getDay()
// const daftarHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
// console.log(hari)
// console.log(daftarHari[hari])


