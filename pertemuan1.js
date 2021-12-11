// array
let array = [1, 2, 3, 4, 5]

// cara menambahkan isi array (push, shift)
array.push(5);
array.splice(2, 3)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// cara gunaiin foreach
array.forEach(function (data){
    console.log(`ini data ${(data)}`);
})


// function
function say(array){

}

let say2 = function(){

}

// ini arraow function
let say3 =  () => {
    console.log();
}

say()


// objek
let objek = {
    "nama" : "osi",
    "kls" : "ti-a",
    "fav": ['black', 'red'],
    "objek": {
        "o" : "sdf",
        "objk" : {
            "os": "g"
        }
    },
    "print": (text) => {
        console.log("ini fungsi didalam objek");
    }
} 

let nama = objek.fav[0] 
console.log(nama);