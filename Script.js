var prompt = require('prompt-sync')();
function IF_ElseStatement(a) {
    let hasil = a*a;
    if (hasil % 2 === 0){
        console.log("Bilangan Genap");
    }
    else if (hasil % 3 === 1) {
        console.log("Bilagan Ganjil");
        
    } else {
        console.log("Just Tes it out");
    }
}
let a = prompt("Masukkan Angka untuk a: ");
IF_ElseStatement(parseInt(a));
console.log();

//Switch Case
function Bertukar(Lauk) {
    switch (Lauk) {
        case "Ikan Bakar":
            console.log(12000);
            break;
        case "Tempe Meondoan":
            console.log(2000);
            break
    
        case "Tahu Bacem":
            console.log(4000);
            break;
        case "Telur Asin":
            console.log(3000);
            break;    
        case "Ayam Bakar":
            console.log(30000);
            break;
        default:
            console.log("Tidak Ada di menu");
            break;
    }
}
let Lauk = prompt('Masukan Nama Lauk: ');
Bertukar(Lauk);
console.log();


// For Statement
function forBerulang(ang1) {
    for (let i = 0; i < ang1; i++) {
        let hallo = prompt("Masukkan angka: ");
        let yes = parseInt(hallo)
        console.log(hallo);
    }
}
let input = prompt("Masukkan jumlah loop yang anda inginkan: ");
forBerulang(parseInt(input))
console.log();

//While Loop
//Masukkan inputan angka 1 atau 0
function whileBerulang() {
    while (true) {
        let angka = parseInt(prompt("Masukkan angka 0 / 1: "));
        
        if (angka === 1) {
            let ang2 = parseInt(prompt("masukkan angka ke 1 : "));
            let ang3 = parseInt(prompt("masukkan angka ke 2 : "));
            let hasil = ang2 + ang3;
            console.log(hasil)
        }
        else {
            console.log("Berhenti");
            break;
        }
        
    }
}
whileBerulang();
console.log();

// DO WHILE LOOP
function doWhileBerulang() {
    console.log("Mari main tebak tebak an");
    do {
        let bermain = parseInt(prompt("Masukkan 0 untuk berhenti main/ 1 untuk lanjut: "));

        if (bermain === 1) {
            // Tebakan Angka
            let angka = parseInt(prompt("Tebak angka dari 1 hingga 50 angka berapa yang bil ganjil: "));
            if (angka % 2 === 0) {
                console.log("Bukan Bilangan ganjil tapi genap");
            }
            else if (angka%3 === 1) {
                console.log("Bilangan Ganjil");
            }
            else{
                console.log("Eh salah, mungkin?");
            }
            
        }
        else{
            console.log('Terimakasih sudah bermain');
            break;
        }
    } while (true);
}
doWhileBerulang();
console.log();

//Function 
//Hehe
function tambahkan(angka1, angka2) {
    let hasil = angka1 + angka2;
    return hasil;
}
let angka1 = parseInt(prompt("Masukkan angka pertama: "));
let angka2 = parseInt(prompt("Masukkan angka kedua: "));
console.log(tambahkan(angka1, angka2)); 
