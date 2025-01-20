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

console.log(getEmployee(3, (err, employee) => {
    if(err) {
        console.log("ERROR!")
        console.log(err)
    } else {
        console.log("Employee exists!!!")
        console.log(employee)
    }
}))