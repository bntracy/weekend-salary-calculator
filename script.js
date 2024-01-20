function onReady() {
    // console.log('javascript runs');
}

let totalSalaries = 0;
const totalFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
const salaryFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

function addEmployee(event) {
    event.preventDefault();
    let firstNameElement = document.getElementById('first_name');
    let lastNameElement = document.getElementById('last_name');
    let employeeIDElement = document.getElementById('employee_id');
    let employeeTitleElement = document.getElementById('employee_title');
    let annualSalaryElement = document.getElementById('annual_salary');
    // add new employee row
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML += `
      <tr>
        <td>${firstNameElement.value}</td>
        <td>${lastNameElement.value}</td>
        <td>${employeeIDElement.value}</td>
        <td>${employeeTitleElement.value}</td>
        <td>${salaryFormatter.format(annualSalaryElement.value)}</td>
        <td><button onclick="deleteEmployee(event, ${annualSalaryElement.value})">Delete</button></td>
      </tr>
    `;
    // update monthly total
    totalSalaries += Number(annualSalaryElement.value);
    let footerElement = document.querySelector('footer');
    footerElement.innerHTML = 'Total Monthly: ' + totalFormatter.format(totalSalaries / 12);
    // clear form inputs
    firstNameElement.value = '';
    lastNameElement.value = '';
    employeeIDElement.value = '';
    employeeTitleElement.value = '';
    annualSalaryElement.value = '';
    // check if over budget
    
    if (totalSalaries / 12 > 20000) {
      footerElement.classList.add('over-budget');
    }
}

function deleteEmployee(event, salary) {
  // delete employee
  event.target.parentElement.parentElement.remove();
  // update monthly total
  totalSalaries -= salary;
  let footerElement = document.querySelector('footer');
  footerElement.innerHTML = 'Total Monthly: ' + totalFormatter.format(totalSalaries / 12);
  if (footerElement.classList.contains('over-budget') && totalSalaries / 12 <= 20000) {
    footerElement.classList.remove('over-budget');
  }
}

onReady();