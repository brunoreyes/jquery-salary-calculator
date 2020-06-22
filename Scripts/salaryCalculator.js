//Here I'm making sure the JavaScript file has been sourced properly
//console.log(`Hello from JavaScript!`);

let employeeInfo = [];

//Here I'm making sure the jQuery file has been sourced properly
$(document).ready(onReady);

function onReady() {
    //console.log(`Hello from jQuery!`);

    let el = $('#employeeInfoOutput');
    //2. target id: employeeInfoOutput
    el.empty();
    el.append();
    //With append I am inserting specified content at
    //the end of statements

    //when id: addInfoButton is clicked we addEmployeeInfo
    $('#addInfoButton').on('click', addEmployeeInfo);
    $('table').on('click', '#deleteButton', removeMe);
    displayEmployeeInfo();

};//end readyNow

function newEmployeeData(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput) {
    console.log('in newEmployeData:', firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput);
    const newEmployeeDataObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
    }
    employeeInfo.push(newEmployeeDataObject);
    totalMonthlySalary()
} // end newEmployeData

console.log(`----------newEmployeeData() Test----------`);
console.log(employeeInfo);
console.log(newEmployeeData('Jimmy', 'Fallon', 1434, 'Host', 400000));
console.log(newEmployeeData('Al', `Pacino`, 1000, 'Actor', 2000000));
console.log(newEmployeeData('Bruno', 'Reyes', 1494, 'Developer', 16000));
console.log(employeeInfo);

function removeMe() {
    $(this).closest('tr').remove();
}//end removeMe

function addEmployeeInfo() {
    //You can only change the value of classes
    newEmployeeData($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
    //these values are taking the place of the org. values of newCar
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idInput').val('')
    $('#titleInput').val('')
    $('#annualSalaryInput').val('')
    displayEmployeeInfo();
}// end addEmployeeInfo

function displayEmployeeInfo() {
    $('#employeeInfoOutput').empty();
    for (employeeObject of employeeInfo) {
        $('#employeeInfoOutput').append(`<tr class="row"><td class="firstNameColumn">${employeeObject.firstName}</td>
            <td id="lastNameColumn">${employeeObject.lastName}</td>
            <td id="idColumn">${employeeObject.id}</td>
            <td id="titleColumn">${employeeObject.title}</td>
            <td id="annualSalaryColumn">${employeeObject.annualSalary}</td>
            <td id="deleteColumn"><button id="deleteButton">Delete</button></td></tr>`);
        // here I'm creating a table row filled with info of each employee
    }// end for 
}//end displayEmployeeInfo

function totalMonthlySalary() {
    let monthlySalary = 0;
    for (employee of employeeInfo) {
        monthlySalary += Math.round(employee.annualSalary / 12);
    }
    if (monthlySalary > 20000) {
        $('#totalMonthlySalary').text(`$${monthlySalary}`);
        $('#totalMonthlySalary').css(`background-color`, `red`);
        $('#totalMonthlySalary').css(`color`, `white`);
    }
    else {
        $('#totalMonthlySalary').text(`$${monthlySalary}`);
    }
    // let convertedMonthlySalary = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(totalValue));
    // $(`#totalMonthlySalary`).append(`` + convertedMonthlySalary + ``)

}//end totalMonthlySalary
