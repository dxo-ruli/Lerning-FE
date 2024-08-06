const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// grandparent.addEventListener("click", e => {
//     console.log(e.target)           //BTW ..klo kita console.log(e) akan ada beberapa element salahs atunya target
// })

// grandparent.addEventListener("click", e => {
//     console.log('grandparent bubbling')            //ketika d klik, grandparent akan mengeksekusi kedua event listener ini
// })

// child.addEventListener("click", e => {
//     console.log('child bubbling')           //jika di klik, ini akan mengeksekusi parent & grandparent juga karena child berada didalam keduanya
// })                                          //kejadian ini disebut "BUBBLING"

// parent.addEventListener("click", e => {
//     console.log('parent bubbling')           
// })  

// document.addEventListener("click", e => {
//     console.log('Ini lebih besar dari grandparent')           //akan jalan katika kita klik dmn saja
// })


//------------------------CAPTURING
/*
Adapun CAPTURING adalah kebalikan dari BUBBLING, dimana capturing dimulai dari luar (document) hingga ke child
mksdnya, jika kita klik "child" maka paren, grandparent, & document tidak akan tereksekusi
sedangkan jika kita klik "document", maka paren, grandparent, & child akan tereksekusi
exmpl :
*/


// grandparent.addEventListener("click", e => {     //NOTE. comment 2 grandparent d atas dan biarkan sisanya
//     console.log('grandparent capturing')          
// }, {capture: true})        //sbnrnya {capture:value} sudah ada sebagai default, tapi value nya false

/*
jika di klik di bagian "child" maka yang akan terseksekusi terlebih dulu adalah :
1. grandparent ---> karena capturing (eksekusi dari luar - dalam)
2. chilc
3. parent
4. document
-----> 2-4 tereksekusi dengan cara bubbling (dari dalam - luar) berurutan
NOTE. capturing akan dieksekusi lebih awal dari bubbling

Bubbling => outward
Capturing => inward
*/



//------------------------.stopPropagation()

// grandparent.addEventListener("click", e => {     //NOTE. comment 2 grandparent d atas dan biarkan sisanya
//     console.log('grandparent capturing')
//     e.stopPropagation()    //untuk menghentikan propoagation secara bubbling & capturing, maka bisa gunakan .stopPropagation() pada function e      
// }, {capture: true})        
//ketika "child" d klik, maka akan stop d grandparent



//------------------------.removeEventListener()
//--------CARA 1  (menggunakan function)

// grandparent.addEventListener("click", printHi)

// setTimeout(() => {
//     grandparent.removeEventListener('click', printHi)      //pada grandparent, removeEventListener("click", printHi) berhenti setelah 2 detik (dimulai ketika di reload)
// }, 2000)                                                 //maka setelah 2 detik, grandparent tidak menampilkan apa-apa

// function printHi() {
//     console.log("Hi")
// }


//----------CARA 2 
grandparent.addEventListener("click", () => {
    console.log("Hi")
})


setTimeout(() => {
    grandparent.removeEventListener('click', () => {        //arrow function di sini harus sama dengan pada eventListener di grandParent
        console.log("Hi")                                  //function ini yg akan di remove, sedangkan yg ada di grandparent akan dipakai setelah 2 detik
    })      
}, 2000)              




//------------------------EVENT DELEGATION 
/*
KASUS
ketika kita menambahkan div baru melalui DOM, maka selector querySelectorAll("div") tidak bisa menyeleksi div pada DOM tsb, 
sehingga div yg baru tidak dikenai event listener dari JS. Maka harus dilakukan event delegation 
*/
// const divs = document.querySelectorAll("div")          //NOTE. comment all addEventListener above

// divs.forEach(div => {                               //Problem........
//     div.addEventListener("click", () => {                 //ketika newDiv d klik maka tidak memunculkan "Hola"    
//         console.log("Hola")
//     })
// })

// const newDiv = document.createElement("div")
// newDiv.style.width = "200px"
// newDiv.style.height = "200px"
// newDiv.style.backgroundColor = "purple"
// document.body.append(newDiv)

//-------SOLUSI (.target.matches())
// document.addEventListener("click", e => {
//     if(e.target.matches("div")) {              //function e ditargetkan untuk setiap jenis "div"
//         console.log("Hi")                      //TAPI.. ini tidak berlaku CAPTURING dan BUBBLING
//     }
// })



//-------SOLUSI 2 (gunakan callback function)
// addGlobalEventListener("click", "div", e => {
//     console.log("Hi")
// })


// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) callback(e)
//     })
// }
