// import  FruitController
// Melakukan destructing

const {index, store, update, destroy} = require("./FruitController");

const main = () => {
    console.log("Show all data fruits");
    index();
    console.log();
    console.log("Add data fruits");
    store("watermelon");
    console.log();
    console.log("Update data fruits");
    update(0,"Leci");
    console.log();
    console.log("Delete data fruits");
    destroy(2);
}

main();