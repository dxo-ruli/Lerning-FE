//```````````````````````````````` ASYNCRONUS ````````````````````````````````//
// function satu (){
//     console.log('satu')
// }

// function dua (){
//     setTimeout(() => {     //setTimeout() adalah fungsi bawaan js
//         console.log('dua');
//     }
//     ), 3000                //mksdnya 3 detik
// }

// function tiga (){
//     console.log('tiga')
// }

// satu()
// dua()
// tiga()

//---------------------Callback 1
// const users = [
//     {username: 'maman'},
//     {username: 'racing'},
//     {username: 'theo'}
// ]

// function getUsers() {
//     setTimeout(() => {
//         console.log(users);
//     }, 1000);
// }

// function addUsers(user, callback) {       //callback itu memasukkan function sebagai parameter untuk melawan hakikat "interpreted" dari js
//     setTimeout(() => {                    //jadi getUsers() yg harusnya d panggil sebelum addUsers(), akan dipanggil sebelumnya
//         users.push(user)
//     }, 2000)
//     callback()
// }

// addUsers({username: 'ruli'}, getUsers)


//---------------------Callback 2 (masih mirip)
// const users = [
//     {username: 'maman'},
//     {username: 'racing'},
//     {username: 'theo'}
// ]

// function addUsers(user, callback) {       //callback itu memasukkan function sebagai parameter untuk melawan hakikat "interpreted" dari js
//     setTimeout(() => {
//         users.push(user)
//     }, 2000)
//     callback()
// }

// addUsers({username: 'ruli'}, () => {             //klo ini function nya langsung d buat ketika memanggil function inti "addUsers(user, callback)" 
//     setTimeout(() => {
//         console.log(users);                      //jadi klo manggil addUsers() udh auto nmapilin data terbarunya
//     }, 1000);
// }
// )


//---------------------Promise
// const pegawai = [
//         {username: 'dodo'},
//         {username: 'widodo'},
//         {username: 'deki'}
//     ]

// const tampilkan = () => {
//     setTimeout(() =>{
//         console.log(pegawai)
//     }, 1000)
// }

// const tambahPegawai = (baru) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             pegawai.push(baru);

//             let error = false;

//             if (!error) {
//                 resolve()
//             } else 
//                 reject('Input Gagal !...')
//         }, 2000)
//     })
// }

//cara memanggil function 1 (.then & .chath)
// tambahPegawai({user: 'ruli'})
//     .then(() => {
//         setTimeout(() => {
//             console.log(pegawai)
//         }, 1000)
//     })
//     .catch((message) =>{          //message ini valuenya dari reject() diatas
//         console.log(message)
//     })

//cara memanggil function 2 (async-await)
// const init = async() => {
//     await tambahPegawai({user: 'ruli'});

//     tampilkan();
// };
// init()         //panggil function init


//cara memanggil function 3 (try-catch)
// const init = async() => {
//     try {
//         await tambahPegawai({user: 'ruli'});
//         tampilkan();
//     } catch (error) {                   //error ini valuenya dari reject() diatas
//         console.log(error)
//     }
// };
// init()         //panggil function init





//---------------------Contoh Lain (Ayncronus)
// const token = ~~[Math.random() * 12345678]      //function bawaan, akan memberikan token random dari yg terdiri dari angka" tsb tai jumlahnya tidak 8 digit
// picture = ["1.jpg", "2.jpg", "3.jpg"]


// function login(username) {
//     return {token, username}         //knp pake kurawal??        
// }

// function getUser(token) {
//     if (token) return {apiKey: "xkey123"}
// }

// function getPicture(apiKey) {
//     if(apiKey) return picture
// }



// const user  = login("ruli")
// console.log(user.token)           //yg keluar hanya token saja.... tapi klo console.log(user) akan keluar semua

// const {apiKey} = getUser(user.token)     //mksdnya token dalam variabel user
// console.log(apiKey)                      //apiKey di bungkus{} karena hasilnya adalah apiKey juga (liat d function), sehingga nanti d console hasilnyan langsung value dari apiKey yg d dalam function

// const getUserPicture = getPicture(apiKey)
// console.log(getUserPicture)



//---------------------Contoh Lanjutan d Atas
// const token = ~~[Math.random() * 12345678]      
// pictures = ["1.jpg", "2.jpg", "3.jpg"]


// function login(userName) {
//     console.log("Processing token user now....")
//     return new Promise ((succes, failed) =>{
//         setTimeout(() =>{                        //karena d kasih setTimeout(), maka tdk bisa d eksekusi, karena asyncronus
//             if (userName != "alqodri") failed("Sorry wrong data")
//             succes({token})
//         }, 200)  
//     })
// }

// function getUser(token) {
//     console.log('processing apikey now...')
//     return new Promise((succes, failed) => {
//         if (!token) failed("Sorry, no token. Cannot Access")
//         setTimeout(() => {                //ini "else" dari "if" d atas
//             succes({apiKey: "xkey123"})
//         }), 500
//     })
    
// }

// function getPicture(apiKey) {
//     console.log('Processing picture now...')
//     return new Promise((succes, failed) => {
//         if (!apiKey) failed ("no apikey, cnnot access!")
//         setTimeout(() => {
//             succes({pic: pictures})
//         }), 1500
//     })
//     if(apiKey) return picture    //"if" ini pisah dari if d atas.. jadi cuma menjalankan nilain true saja
// }


// const user = login("alqodri")    //klo dipanggil gini akan eror, maka solusinya pake callback.. lihat bawah
// console.log(user)

// async function userDisplay() {
//     try {
//         const {token} = await login("alqodri")
//         const {apiKey} = await getUser(token)
//         const {pic} = await getPicture(apiKey)

//         console.log(token, apiKey, pic)
//     }catch (err){
//         console.log('error!!')
//     }
// }

// userDisplay()



//````````````````````````````````PROMISE (Yt. WDS)````````````````````````````````//
// function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = true 
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//             name: 'User Left', 
//             message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat' 
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then(message => {         
//     console.log(message)                        //variabel message diambil dari isi resolve
//     }).catch(error => {
//     console.log(error.name + ' ' + error.message) //variabel error diambil dari isi reject ..... error = reject, maka berlaku error.name & error.message
// })


// //............ MEMANGGIL BEBERAPA PROMISE
// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })

// Promise.all([               //pakai kurung siku dan pemisah dengan koma
//     recordVideoOne,          //.all execute all promise
//     recordVideoTwo,
//     recordVideoThree
// ]).then(messages => {
//     console.log(messages)
// })

// Promise.race([               //The Promise.race() method returns a Promise from a list of promises, when the faster promise settles.
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then(message => {
//     console.log(message)
// })


//````````````````````````````````ASYNC-AWAIT (Yt. WDS)````````````````````````````````//
// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`)
//         if (location === 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('Processig response')
//         resolve(`Extra Information + ${response}`)
//     })
// }

//-------memeanggil dengan .then & .chatch
// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {          //processedResponse berasal dari nilai di line 237, karena .then membaca resolve dan hal tsb berurutan dari .then sebelumnya (nyambung)
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

//-------memeanggil menggunakan async await
// async function doWork() {                    //async menandakan function ini berjakan secara syncronus
//     try {
//         const response = await makeRequest('Google')      //tapi klo d ganti selain Google, maka akan eror... solusinya pake "try-catch" block
//         console.log('Response Received')
//         const processedResponse = await processRequest(response)      //await mksdnya menjalankan function makeRequest() sebelum mengeksekusi baris selanjutnya
//         console.log(processedResponse)
//     } catch (err) {                       //ini untuk mengembalikan nilai error
//         console.log(err)
//     }
// }
// doWork()                         //hasilnya sama kek pake .then, tapi lebih simpel