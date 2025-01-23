const colors = require('colors')
const {createFile} = require("./helper/multiplicar");
const argv = require("./config/yargs.js")

console.clear()

// const [,, arg3] = process.argv;

/*
console.log(process.argv)
console.log(argv)
console.log('Base de yargs', argv.b)
*/

// const [,j] = arg3.split('=')


createFile(argv.b, argv.l, argv.h)
    .then(fileName => console.log(fileName.rainbow, "creada"))
    .catch(err => console.log(err));

