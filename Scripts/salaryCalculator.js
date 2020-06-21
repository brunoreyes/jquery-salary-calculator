//Here I'm making sure the JavaScript file has been sourced properly
console.log(`Hello from JavaScript!`);

//Here I'm making sure the jQuery file has been sourced properly
$(document).ready(onReady);

function onReady() {
    console.log(`Hello from jQuery!`);
    // console.log('in onReady');
}//end onReady


// [] The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.

// [] A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the DOM and clear the input fields. 

// [] Using the stored information, calculate monthly costs and append this
// to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// [] Create a delete button that removes an employee from the DOM. For Base
// mode, it does **not** need to remove that Employee's salary from the reported total.

// ## Stretch Mode

// [] Add styling or extra functionality that fits with the theme of this assignment.

// [] Once the employee is deleted, update the total spend on salaries account for 
//this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky!