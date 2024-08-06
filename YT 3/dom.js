//```````````````````````````````` DOCUMENT OBJECT MODEL (DOM) ````````````````````````````````//
//  document.title = 'belajar dom'      //mengganti title html

// const body = document.body          //isi dari body pada html
// body.append('Hello World')          //menambahkan nilai 'Hello World' kedalam body... defaultnta <p></p>

// const h1 = document.createElement('h1')      //membuat element h1
// h1.textContent = 'ANJAY INI H1 BRO'          //mengisi element h1 dengan 'ANJAY INI H1 BRO' 
// body.append(h1)                              //memasukan element h1 yg barru dibuat kedalam body... klo g dimasukin g bisa tampil... btw body tu dari const body

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = 'RULI ALQODRI M'        //fungsi .innerHTML sama kek .textContent
// body.append(namaSaya)

// const namaKamu = document.createElement('b')   //('b') adalah bold dengan default <p>
// namaKamu.innerText = 'FIKRI GOBEL'
// body.append(namaKamu)

/*
karna menggunakan innerHTML, <marquee> adalah element yang hanya berjalan di HTML jadi nanti dia bacanya <marquee>" Test "</marquee>, 
sedangkan kalau pake innerText sama textContent dia hanya akan baca itu sebagai text ( "  <marquee>" Test " </marquee> " ).
*/

//---------------------Button
// const btn1 = document.getElementById('btn1')        //.getElementById untuk menseleksi element menggunakan id
// const btn2 = document.querySelector('.cls-btn2')     //.querySelector menseleksi element melalui class
//                                                     //.querySelector juga bisa langsung k button...expl. .querySelector('button'), cuma g spesifik
// btn1.style.border = 'none'   //.style merubah style html melalui js
// btn1.style.padding = '8px'
// btn1.style.fontSize = '24px'
// btn1.style.background = 'tomato'

// const defaultText = 'Clck Saya !'
// btn1.textContent = defaultText        //mengisi nama pada button 1 degan 'Clck Saya !' 

// btn2.style.background = 'blue'
// btn2.style.color = 'white'



//---------------------Event
// function gantiWarna(){
//     btn1.style.background = 'aqua'       //jika d klik maka btn1 akan berubah menjadi biru
// }

// function ubahText(){                      //mouseover() berfungsi memberikan triger ketika mouse terkena button
//     btn1.textContent = 'Berubah'
// }

// function oriText(){
//     btn1.textContent = defaultText       //merujuk ke line 34
// }




/*
Tugas! 
1. buat tombol 2 ketika kursor berada dilingkupnya bisa menampilkan element h1 dengan value nama kalian
2. ketika kursor keluar, ubah warna pada nama menjadi biru
*/

// const btn2Name = 'Klik 2'
// btn2.textContent = btn2Name

// let h1Btn2 = document.createElement('h1')        //klo pake const, g bakal keluar.. NOTE. variabel harus dibuat global
// h1Btn2.textContent = 'LOONEY'

// function nama(){    
//     body.append(h1Btn2)
// }

// function namaBiru(){
//     h1Btn2.style.color = 'aqua'
// }



//--------------------------------------- DOMTokenList ---------------------------------
const myPara = document.getElementById('myPara');

myPara.classList.add('bold', 'big-font');                //menambahkan class di dom.css
myPara.classList.remove('bold');                         //menghapus class
myPara.classList.replace('big-font', 'red-bg')           //mengganti class 'big-font' dengan 'red-bg'

/*
.toggle fungsinya menghilangkan jika ada, sedangkan jika tidak ada maka akan mengenakan
*/
myPara.classList.toggle('bold')                  //kena class 'bold'    
myPara.classList.toggle('bold')                  //menghapus class 'bold'


console.log(myPara.classList)