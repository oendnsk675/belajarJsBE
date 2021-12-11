// latihan membuat permainan simple, gunting batu kertas
// sebelum memulai latihan ketik `npm install` di terminal kalian, fungsi ini akan menginstall node module yang kita butuhkan, penjelasanya besok lebih spesifik pas kita belajar
// ada beberapa kodingan yang saya buat, dengan alesan biar gak bingung, seperti di no 1, 3, dan 4, intinya saya menekankan untuk latihan dasar  kemarin
// secara garis besar algoritma simpelnya seperti berikut
// 1. mengambil nama user
// 2. membuat list piliha user, bisa pakek array maupun objek
// 3. menanyakan pilihan ke user (misal: gunting, batu, kertas)
// 4. membuat pilihan komputer seolah dia mikir mau milih pilihan apa, kita bisa pakek fungsi random
// 5. membuat fungsi untuk mengadu pilihan user dan komputer
// 6. mengeluarkan hasil adu yang sebelumnya

// yok.......... lets code dibawah


const prompt = require('prompt-sync')(); // kita memasukkan module /package prompt-scync, mirip pas kita import scaner di java, sebelum kita pakek

console.log(`Hallo selamat datang dalam permainan gunting, batu, kertas, disini temen bisa memilih sesuai urutan pilihannya dari 0, misal jika ingin memilih gunting maka pilih no 0, dst...:)`);

// 1. mengambil nama user
const nama_user = prompt('Masukkan nama anda?: '); // fungsi ini untuk mengambil inputan user dari terminal, mirip scaner yang ada di java, kemudian di save ke variabel nama bertipe const, (gak bisa diubah)

// 2. buatlah list pilihan user, bisa memakai array, dangan isi urutannya, gunting, batu , kertas


// 3. tanyakan ke user mau memilih apa, untuk menanyakan ke user bisa pakek seperti di no 1, tinggal di copas honestly:) masukkan dari user itu berupa no ya temen2, karena misal nanti temen2 membuat list pilihannya itu memakai array jadi kan bisa diakses bosku......, dan tampung pilihan user tersebut ke dalam variabel dengan nama pilihan_user, setelah saya pikir-pikir, saya buatkan saja no3 karna belum saya jelaskan wkwkwk
pilihan_user  = int(prompt('Masukkan no pilihan anda (0-2): '));


// 4. membuat pilihan komputer dengan menggunakan fungsi random dari javascript, fungsi random ini akan menghasilkan angka yang kita inginkan
pilihan_komputer = Math.round(Math.random() * (2 - 0)) + 0


// 5. buatlah fungsi untuk mengadu pilihan user, dan komputer, pada fungsi 
//    tersebut menerima 3 parameter, parameter pertama nama user, //
//    parameter ke dua pilihan user, parameter ke tiga pilihan komputer
//       kemudian di dalam fungsi tersebut gunakan perkondisian untuk 
//    mengadu pilihan user, gimana caranya?????
//    kek gini temen2 kan inputan user, dan komputer berupa integer nanti 
//    nah tinggal kita bandingkan sesuai kondisi, contoh : jika user milih 
//    0 misal 0 adalah gunting, dan komputer memilih 2 misal 2 adalah 
//    kertas maka keluarkan hasil "nama_user memilih ..., dan komputer //
//    memilih ..., nama_user menang", 
//       contoh kodingannya bg, perkondiannya!!, wokeh... :

//    if (pilihan_user == 0 && pilihan_komputer == 2) {
//     console.log(`${nama_user} memilih ${aray_pilihan[pilihan_user]}, dan komputer memilih ${aray_pilihan[pilihan_komputer]}, ${nama_user} menang`);
// }


// kek gitu temen2 itu baru 1 kondisi, lanjutkan menggunakan else if untuk kondisi lainnya jika user milih apa, dan komputer milih apa, maka siapa menang

// dan step no 6 udah ada pada perkondisian tersebut mengluarkan hasil aduan