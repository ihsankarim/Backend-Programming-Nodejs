/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variabel ke ES6 variable
 */

const fruits = require("../data/fruits.js");

 /**
  * TODO 4:
  * - Buat method index.
  * - Refactor function ke ES6 Arrow Function
  * - Tampilkan data fruits.
  *
  * @hint - Gunakan looping for of
  */

const index = () => {
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
}

/**
 * TODO 5:
 * - Buat method store
 * - Refactor function ke ES6 Arrow function
 * - Menambahkan data baru ke array fruits
 * 
 * @param {string} name - nama buah
 * 
 * @hint - Gunakan method push 
 */
const store = (name) => {
    fruits.push(name);
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
}


/**
 * - Buat method update
 * - Refactor function ke ES6 Arrow function
 * - Memperbarui data fruits
 * 
 * @param {string} position - posisi atau index yang ingin diupdate.
 * @param {string} name - Nama buah yang baru.
 */


const update = (position,name) => {
    fruits[position] = name;
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
}

/**
 * TODO 7: 
 * - Buat method destroy
 * - Refactor function ke ES6 Arrow Function
 * - Menghapus data fruits
 * 
 * @param {number} position - Posisi atau index yang ingin dihapus
 * 
 * @hint = Gunakan method splice
 */

const destroy = (position) => {
    fruits.splice(position,1);
        for(const fruit of fruits){
            console.log(`${fruit}`);
        }
}



/**
 * TODO 8: Export method index, store, update, dan destroy
 */

module.exports = {
    index,
    store,
    update,
    destroy,
};