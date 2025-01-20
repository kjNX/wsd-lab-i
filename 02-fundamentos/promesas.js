const employees = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Jane',
    },
    {
        id: 3,
        name: 'Karen',
    }
]

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }
]

const getEmployee = id => new Promise((resolve, reject) => {
    const employee = employees.find(e => e.id === id)?.name
    employee ? resolve(employee) : reject(`El empleado con ID ${id} no existe`)
})


const getSalary = id => new Promise((resolve, reject) => {
    const salary = salaries.find(s => s.id === id)?.salary
    salary ? resolve(salary) : reject(`El empleado con ID ${id} no tiene salario`)
})

const id = 10

let name
getEmployee(id)
    .then(e => {
        name = e
        return getSalary(id)
    })
    .then(s => console.log(`El empleado ${name} tiene un salario de $${s}`))
    .catch(err => console.log(err))

/*
getEmployee(id).then(e => {
    getSalary(id).then(s => console.log(`El empleado ${e} tiene un salario de $${s}`), err => console.log(err))
}, err => console.log(err))
*/

// getSalary(id).then(s => console.log(s), err => console.log(err))