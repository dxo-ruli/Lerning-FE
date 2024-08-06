console.log('Belajar Function')
const body = document.body
body.style.background = 'black'
body.style.color = 'white'

//```````````````````````````````` CARA MEMBUAT FUNCTION ````````````````````````````````//
//---------------------Cara 1 keyword new Function
// const sum1  = new Function('x', 'y', 'console.log(x+y)')
// sum1(2, 5)

// const sumNich  = new Function('console.log("Ini Sum")')
// sumNich()

//---------------------Cara 2 standard function
// function addName(a, b){
//     console.log(a, b)
// }
// addName('Fahri', 'Kekew')

// function addName2(){
//     console.log(arguments)
// }
// addName2('Ruli')

// const fullName = function addName3(x, y){
//     console.log(x, y)
// }
// fullName('aji', 'pendi')

//---------------------Cara 3 arrow function
// const sum3 = (a, b) => {
//     console.log(a+b)
// }
// sum3(2, 6)


//---------------------Contoh membuat fungsi yang menghasilkan nilai random range 0-1000
// function randomize() {
//     const randomNumber = ~~(Math.random() * 1000)
//     if (randomNumber > 200){
//         console.log('Wow lebih dari 200, nilai anda : ', randomNumber)
//     } else {
//         console.log(randomNumber)
//     }
// }
// randomize()

/*
TUGAS !
1. MEMBUAT PERHITUNGAN MATEMATIKA
    - luas lingkaran
    -luas segitiga
    -luas persegi panjang
    -luas jajaran genjang
2. MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM SATU BULAN DENGAN INPUT MINIMAL : 
    - nama karyawn
    - gaji perhari
    - jumlah hari masuk kerja 
*/

// function lingkaran(r) {
//     console.log(3.14*(r*r))
// }
// lingkaran(2)

// function segitiga(a,t) {
//     console.log((1/2)*a*t)
// }
// segitiga(4, 2)

// const pers = new Function('p', 'l', 'console.log(p*l)')
// pers(3, 6)

// const jajaran = (a1, a2, tg) => {
//     console.log((a1 + a2)*tg)
// }
// jajaran(2, 2, 3)



// const totalGaji = (nama, gajiPerhari, hadir) => {
//     let total = gajiPerhari*hadir
//     if (nama == "" && total == 0){
//         alert('Maaf Input Gagal')
//     }else {
//         alert(`Gaji atas nama ${nama} adalah sebesar Rp.${total}`)
//     }
// }
// totalGaji(
//     prompt('Masukkan Nama :'),
//     prompt('Masukkan Nomila Gaji dalam Satu Hari :'),
//     prompt('Masukkan Jumlah Kehadiran :')
// )


//```````````````````````````````` ARROW FUNCTION ````````````````````````````````//



