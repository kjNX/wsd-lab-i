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

const getUserInfo = async(id) => {
    try {
        const employee = await getEmployee(id)
        const salary = await getSalary(id)
        return `El salario de ${employee} es $${salary}`
    } catch(err) {
        return err
    }
}

const id = 3
getUserInfo(id).then(msg => console.log(msg), err => console.log(err))
