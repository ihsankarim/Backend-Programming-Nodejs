const nilai = 90;

let grade = "";

if(nilai > 90) {
    grade = "A";
} else if (nilai > 80){
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade anda: ${grade}`);


const age = 25;

// if (age > 21) {
//     console.log("Sudah dewasa");
// } else {
//     console.log("Belum dewasa");
// }




// Ternary operation
age > 21 ? console.log("Sudah dewasa") : console.log("Belum dewasa");