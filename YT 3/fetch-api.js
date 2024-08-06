//fetch is proimise based which mean that we can use async-await or .then & .chath 
// pada bembelajaran ini kita menggunakan API fake sebagai contoh

// fetch('https://reqres.in/api/users/2')        // klo mau akses 1 data saja bisa d tambah "/1" (nmr data) pada akhir link, tapi klo data g ada maka akan memberi status 404 (error)
//     //.then(res => console.log(res))        //cara  mengecek API, jika berhasil console akan menampilkan body data sepertu status: 200 dll
//     .then(res => {                          //mengecek API-nya
//         if (res.ok) {                        //.ok adalah mengecek APi apakah pada level status 200 (berjalan).. karena level status normal adalah 200-299
//             console.log('SUCCES')
//         } else {
//             console.log('Not Succes')
//         }
//     })          
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))    //ini g akan berfungsi klo API nya eror, tapi berfungsi klo fetch nya yg eror (sep. masalah pada jaraingan & syntax error)


//------------POST METHODE
fetch('https://reqres.in/api/users', {       //fetch menampung 2 property, 1 Url API dan 1 perintah yang akan digunakan
    method: 'POST',                           //methode untuk membuat data (user dalam hal ini) ke API server
    headers: {
        'Content-Type': 'application/json'     // application/json dugunakan untuk menetapkan jenis data yg akan di input mejadi format JSON
    },
    body: JSON.stringify({                     //mksd body: adalah isi konten yang akan kita buat
        name: 'User 1'                          // name: 'User 1' adalah konten berupa object
    })                                       //JSON.stringify untuk menrangkai object yang akan di buat "Convert a JavaScript object into a string "
}).then(res => {                         
        return res.json()             //megubah format data menjadi JSON agar bisa d akses JS
    })          
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))    