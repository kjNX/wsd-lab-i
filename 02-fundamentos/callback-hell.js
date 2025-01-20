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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)
    if(employee) callback(null, employee)
    else callback(`El empleado con ID ${id} no existe`)
}

const getSalary = (id, callback) => {
    const salary = salaries.find(s => s.id === id)?.salary
    if(salary) callback(null, salary)
    else callback(`El salario con ID ${id} no existe`)
}

const id = 4
getEmployee(id, (err, employee) => {
    if(err) {
        console.log("ERROR!")
        console.log(err)
    } else {
        console.log("Employee exists!!!")
        console.log(employee)
    }

    getSalary(id, (err, salary) => {
        if(err) {
            console.log("ERROR!")
            console.log(err)
        } else {
            console.log("Employee exists!!!")
            console.log(salary)
        }
    })
})
