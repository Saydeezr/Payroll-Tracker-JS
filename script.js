// Get a reference to the #add-employees-btn element
let addEmployeesBtn = document.querySelector('#add-employees-btn');
const firstNameInput = document.querySelector('#firstNameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const salaryInput = document.querySelector('#salaryInput');


// Collect employee data
const collectEmployees = function() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const salary = salaryInput.value;

  // let createEmployee = true
  const employeeArray = [];
    let newEmployee = {
      firstName,
      lastName,
      salary
    }
    console.log("newEmployee", newEmployee);
    console.log("employeeArray", employeeArray);
    employeeArray.push(newEmployee);
  return employeeArray;
};


// Display the average salary
const displayAverageSalary = function (employeeArray) {
  let employeeSalary = 0; 
  let numberOfEmployees = employeeArray.length;  
for (newEmployee of employeeArray) {
  employeeSalary = employeeSalary + newEmployee.salary
  }
  console.log("employeeSalary", employeeSalary);

const averageSalary = employeeSalary / numberOfEmployees
console.log(`the average employee salary is ${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function(employeeArray) {
  let randomEmployee = employeeArray[Math.floor(Math.random() * employeeArray.length)];
  console.log("randomEmployee", randomEmployee);
}


// Display employee data in an HTML table
const displayEmployees = function(employeeArray) {
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeeArray.length; i++) {
    const currentEmployee = employeeArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    //Add row/input to table
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
    //show table
    document.querySelector('#employeeTable').style.display = 'table';
    //change button text
    document.querySelector('#add-employees-btn').textContent = 'Add Another Employee';
    //clear out form input
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('salaryInput').value = '';
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', function(event){
  event.preventDefault();
  trackEmployeeData();
});
