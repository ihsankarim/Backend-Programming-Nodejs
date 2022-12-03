// import data fruits
const fruits = require("./data.js");

// membuat fungsi index
const index = () => {
    for (const fruit of fruits){
        console.log(`${fruit}`);
    }
}

// membuat fungsi store
const store = (name) => {
    fruits.push(name);
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
};

const update = (position,name) => {
    fruits[position] = name;
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
}


const destroy = (position) => {
    fruits.splice(position,1);
    for(const fruit of fruits){
        console.log(`${fruit}`);
    }
}





// export method index dan store
module.exports = {index, store, update, destroy};

