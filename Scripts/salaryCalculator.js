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
    return true;
} // end newEmployeData

console.log(`----------newEmployeeData() Test----------`);
console.log(employeeInfo);
console.log(newEmployeeData('Jimmy', 'Fallon', 1434, 'Host', 400000));
console.log(newEmployeeData('Al', `Pacino`, 1000, 'Actor', 2000000));
console.log(newEmployeeData('Bruno', 'Reyes', 1494, 'Developer', 16000));
console.log(employeeInfo);


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
        $('#employeeInfoOutput').append(`<tr><td class="firstNameColumn">` + employeeObject.firstName + `</td>` +
            `<td id="lastNameColumn">` + employeeObject.lastName + `</td>` +
            `<td id="idColumn">` + employeeObject.id + `</td>` +
            `<td id="titleColumn">` + employeeObject.title + `</td>` +
            `<td id="annualSalaryColumn">` + employeeObject.annualSalary + `</td>` +
            `<td id="deleteColumn"><button id="deleteButton">Delete</button></td></tr>`);
        // here I'm creating a table row filled with info of each employee
    }// end for 
}//end displayEmployeeInfo

function totalMonthlySalary() {
    let totalValue = 0;
    for (employeeObject of employeeInfo) {
        totalValue += employeeObject.annualSalary;
    }
    console.log(totalValue)
    SalaryColor(totalValue)
    // let convertedMonthlySalary = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(totalValue));
    // $(`#totalMonthlySalary`).append(`` + convertedMonthlySalary + ``)

}//end totalMonthlySalary

function SalaryColor(totalValue) {
    if (totalValue > 20000) {
        $('#totalMonthlySalaryRed').text(`$${totalValue}`);
        return false
    }
    else {
        $('#totalMonthlySalary').text(`$${totalValue}`);
    }
}



// [X] The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.

// [X] A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the DOM and clear the input fields. 

// [X] Using the stored information, calculate monthly costs and append this
// to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// [] Create a delete button that removes an employee from the DOM. For Base
// mode, it does **not** need to remove that Employee's salary from the reported total.

// ## Stretch Mode

// [X] Add styling or extra functionality that fits with the theme of this assignment.

// [] Once the employee is deleted, update the total spend on salaries account for 
//this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky!