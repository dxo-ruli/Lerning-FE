//```````````````````````````````` CARA MEMBUAT ARRAY ````````````````````````````````//
// const arraySaya = ['🙏', '🛠', '🚬']
// console.log(arraySaya)

// const arrayKamu = []
// arrayKamu[0] = '🛵'
// arrayKamu[1] = '💕'
// console.log(arrayKamu)

// const arrayKita = new Array('😁', '🤦‍♀️')
// arrayKita[4] = '💕'           //akan ada 'empty x 2' di hasil karena langsung loncat ke index ke-4, sedangkan 2 & 3 blm d isi
// console.log(arrayKita)  
// console.log(arrayKita[2])   

//```````````````````````````````` OPERASI PADA ARRAY ````````````````````````````````//
// const arraySaya = ['🙏', '🛠', '🚬', '👚']
// const rokokk = arraySaya.includes('🚬')       //.includes()  megecek apakah value tsb ada di dalam array
// console.log(rokokk)                    //true, karena ada

// if (rokokk) {
//     const posisiRokok = arraySaya.indexOf('🚬')                //mengecek index obeng
    
//     const indexBefore = posisiRokok - 1
//     const indexAfter = posisiRokok + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter] 

//     console.log(`item sebelum rokok adalah ${before}`)
//     console.log(`item setelah rokok adalah ${after}`)
//     console.log(`Index rokok adalah ke- ${posisiRokok}`)        //ingat pake back ticks, bkn petik 1
// } else{
//     console.log('Posisi tidak ditemukan')
// }


//````````````````````````````````ARRAY COPY````````````````````````````````//
/* 
Bagaimana cara merubah copy array tanpa merubah array yg aslinya
*/
// const arraySaya = ['🥝', '🥭', '🍍', '🍌', '🍉', '🍄']   //array asli
// const copyArray = [...arraySaya]               //cara k-1 copy pakai spread operator "..."
// //cara k-2 ----->>  const copyArray = arraySaya.slice()
// //cara k-3 ----->> Array.from(arraySaya)
// //cara k-4 ----->> JSON.parse(JSON.stringify(arraySaya))

// copyArray[0] = '🥗'
// console.log(arraySaya)         //tdk berubah
// console.log(copyArray)          //berubah


//````````````````````````````````KURT ARRAY````````````````````````````````//
// const arraySaya = [
//     '🥝', 
//     '10', 
//     {tomato: true}, 
//     {
//         orange: function () {
//             console.log('ini jeruk')        //function dalam sebuah array, harus dibungkus dalam {} sebagai object
//         },
//     },
//     ['eat', 'food']
// ]     //ada array multidimensi

// console.log(typeof(arraySaya[2]))      //melihat type data
// console.log(arraySaya[3][0])

// arraySaya[3].orange()                 //mksdnya panggil index k-3 dan jalankan function orange(), karena orange() ada dalam {} alias masuk hitungan indeks
                                        //gausah pake console.log karena sudah ada di orange()


//````````````````````````````````PENGGABUNGAN ARRAY````````````````````````````````//
// const arraySaya = ['🥝', '🥭', '🍍']
// const arrayKamu = ['🍌', '🍉', '🍄']

// const gabung = arraySaya.concat(arrayKamu)         //menggabungakn 2 array
// console.log(gabung)

// for (pecah of gabung)
//     console.log(pecah)            //memcah array menjadi satu-satu

// for (pecah in gabung)
//     console.log(pecah)          //melihat index yg d pecah

// gabung.map((value, index) =>
//     console.log(value, index)        //melihat index dan value sekaligus
// )


//````````````````````````````````AKSES OBJEK DALAM ARRAY```````````````````````````````//
const datas = [
    {
        nama: 'Ruli',
        stack: 'JS',
        age: 21,
    },
    {
        nama: 'Aziz',
        stack: 'py',
        age: 20,
    },
    {
        nama: 'Dadang',
        stack: 'C++',
        age: 34,
    },
    {
        nama: 'Haldi',
        stack: 'c#',
        age: 19,
    }
]

// datas.forEach(p => console.log(p.nama))      //menampilkan data namanya saja... datasmasuk k "p"


// datas.map((values, index) =>{           //arrow function
//     console.log(values.nama)
// })

// datas.map((values, index) =>{
//     console.log(values)
// })

// datas
//     .sort((a, b) => a.age - b.age)             //mengurutkan array dari umur yang paling rendah
//     .map((values) => console.log(values))   

// datas
//     .sort((a, b) => a.age - b.age)   //sama seperti datas.sort(function(a, b){return a-b}); .... tapi pake arrow function,
//     .filter((x) => x.age >= 30)       //menyeleksi age>=30
//     .map((values) => console.log(values))


//---------------------KASUS  (matikan komen array "datas")
//jika kita menyeleksi berdasarkan nama menggunakan arrow function, maka hasilnya sbb :
// datas.sort((a, b) => a.name - b.name)
// console.log(datas)              //hasilnya tidak berurutan

// //SOLUSI
// datas.sort((a, b) => a.name.localeCompare(b.name))
// console.log(datas)



/*
PENJELASAN FUNCTION PADA .sort(), .map(), dan .filter()
    Sorting alphabetically works well for strings ("Apple" comes before "Banana"). But, sorting numbers can produce incorrect results.
    "25" is bigger than "100", because "2" is bigger than "1".

    You can fix this by providing a "compare function" (See examples below).
        Syntax --> array.sort(compareFunction)
    
    jadi (a, b) => a.age - b.age adalah "compareFunction"
        fungsi tersebut menguji 2 variabel, dan memunculkan nilai 0 hingga positif

    adapun untuk memunculkan nilai negatif tinggal mangubah menjadi "b.age - a.age"
        a.age mksdnya properti ke-1 (dari 2 yg d uji) dengan mengakses object "age"
*/