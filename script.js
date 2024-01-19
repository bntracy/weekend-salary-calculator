function onReady() {
    // console.log('javascript runs');
}

let totalSalaries = 0;

function addEmployee(event) {
    event.preventDefault();
    let firstNameElement = document.getElementById('first_name');
    let lastNameElement = document.getElementById('last_name');
    let employeeIDElement = document.getElementById('employee_id');
    let employeeTitleElement = document.getElementById('employee_title');
    let annualSalaryElement = document.getElementById('annual_salary');
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML += `
      <tr>
        <td>${firstNameElement.value}</td>
        <td>${lastNameElement.value}</td>
        <td>${employeeIDElement.value}</td>
        <td>${employeeTitleElement.value}</td>
        <td>$${annualSalaryElement.value}</td>
        <td></td>
      </tr>
    `;
    totalSalaries += Number(annualSalaryElement.value);
    let monthlyTotalSpan = document.getElementById('monthly_total');
    monthlyTotalSpan.innerText = totalSalaries / 12;
}

onReady();