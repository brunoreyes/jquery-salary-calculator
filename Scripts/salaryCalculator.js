//Here I'm making sure the JavaScript file has been sourced properly
console.log(`Hello from JavaScript!`);


let employeeInfo = [];
//Here I'm making sure the jQuery file has been sourced properly
$(document).ready(onReady);

function onReady() {
    console.log(`Hello from jQuery!`);

    let el = $('#employeeInfoOutput');
    //2. target id: employeeInfoOutput
    el.empty();
    el.append();
    //With append I am inserting specified content at
    //the end of statements

    //when id: addInfoButton is clicked we addEmployeeInfo
    $('#addInfoButton').on('click', addEmployeeInfo);

    //   $('#addInfoButton').on('click', animate);

    //addCar is 
    displayEmployeeInfo();
};//end readyNow


{/* <input type="text" placeholder="First Name" id="firstNameInput" alt="first name input">
                <input type="text" placeholder="Last Name" id="lastNameInput" alt="last name input">
                <input type="number" placeholder="ID" id="idInput" alt="id input">
                <input type="text" placeholder="Title" id="titleInput" alt="title input">
                <input type="number" placeholder="Annual Salary" id="annualSalaryInput" alt="annual salary input">
                <button type="submit" id="submitButton">Submit</button> */}




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
    //disableForm();
    // disableForm() checks if max spots reached, if so, disables form
    // totalPrice();
    // totalPrice() adds up the total salary of all employees
    return true;
} // end newEmployeData

console.log(`----------newEmployeeData() Test----------`);
console.log(employeeInfo);
console.log(newEmployeeData('Jimmy', 'Fallon', 1434, 'Show Host', 400000));
console.log(newEmployeeData('Al', `Pacino`, 1000, 'Movie Actor', 2000000));
console.log(newEmployeeData('Bruno', 'Reyes', 1434, 'Future Developer', 16000));
console.log(employeeInfo);


function addEmployeeInfo() {
    newEmployeeData($('.firstNameInput').val(), $('.lastNameInput').val(), $('.idInput').val(), $('.titleInput').val(), $('.annualSalaryInput').val());
    //these values are taking the place of the org. values of newCar
    $('.firstNameInput').val('')
    $('.lastNameInput').val('')
    $('.idInput').val('')
    $('.titleInput').val('')
    $('.annualSalaryInput').val('')
    displayEmployeeInfo();
}// end addEmployeeInfo

function displayEmployeeInfo() {
    let el = $('#employeeInfoOutput');
    el.empty();
    for (employeeObject of employeeInfo) {
        el.append(`<tr><td class="firstNameColumn">` + employeeObject.firstName + `</td>
        <td class="lastNameColumn">` + employeeObject.lastName + `</td>
        <td class="idColumn">` + employeeObject.id + `</td>
        <td class="titleColumn">` + employeeObject.title + `</td>
        <td class="annualSalaryColumn">` + employeeObject.annualSalary + `</td>
        <td class="deleteColumn"><button id="deleteButton">Delete</button></td></tr>`);
        // here I'm creating a table row filled with info of each employee
    }// end for 
}//end displayEmployeeInfo

console.log(employeeInfo);


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

formatter.format(1000) // "$1,000.00"
formatter.format(10) // "$10.00"
formatter.format(123233000) // "$123,233,000.00"


// [X] The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.

// [X] A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the DOM and clear the input fields. 

// [] Using the stored information, calculate monthly costs and append this
// to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// [] Create a delete button that removes an employee from the DOM. For Base
// mode, it does **not** need to remove that Employee's salary from the reported total.

// ## Stretch Mode

// [] Add styling or extra functionality that fits with the theme of this assignment.

// [] Once the employee is deleted, update the total spend on salaries account for 
//this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky!