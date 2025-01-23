const fs = require('fs')
const colors = require('colors')

const createFile = async(j = 5, l = true, h = 10) => {
    try {
        let con = ""
        let out= ""

        for(let i = 1; i <= h; ++i) out +=`${j} x ${i} = ${j * i}\n`

        if(l) {
            let con = ""
            for(let i = 1; i <= h; ++i) con +=`${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`
            console.log("==========".green)
            console.log("Tabla del", colors.blue(j))
            console.log("==========".blue)
            console.log(out)
        }

        /*
        fs.writeFile(`tabla-del-${j}.txt`, out, err => {
            if(err) throw err
            console.log(`tabla-del-${j}.txt creado`)
        })
        */

        const fileName = `tabla-del-${j}.txt`
        fs.writeFileSync(`./output/${fileName}.txt`, out)
        return fileName
    } catch(e) {
        throw e
    }
}

module.exports = {
    createFile
}
