# jQuery Salary Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Project Description

I was tasked with creating a salary calculator that could:
- Inputted employee info into a table.
- Add up all the annual salaries and calculate the total monthly salary.
- If total monthly salary exceeds $20,000, highlight total monthly salary in red
- Add functionality to delete any row of employee info. 

### Project Requirements

[X] The application should have an input form that collects
//  _employee first name, last name, ID number, job title, annual salary_.

[X] A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the DOM and clear the input fields. 

[X] Using the stored information, calculate monthly costs and append this
// to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

[X] Create a delete button that removes an employee from the DOM. For Base
// mode, it does **not** need to remove that Employee's salary from the reported total.

### Stretch Goals

[X] Add styling or extra functionality that fits with the theme of this assignment.

[] Once the employee is deleted, update the total spend on salaries account for 
this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky!

## Screen Shot

![Salary Calculator](https://raw.githubusercontent.com/brunoreyes/jquery-salary-calculator/master/Screen%20Shot%20of%20Salary%20Calculator.png)

## Prerequisites
No requirements at this time.

## Usage
1. Add employee info by inputting info, then press 'submit' button.
2. Now you can see your added info within the table.
3. Notice on the lower right there is a calculated monthly total of the annual salaries of all employees.

## Built With
-CSS!
-HTML
-jQuery
-JavaScript

## License

No license at this time.

## Acknowledgement
Thank you to Robert Wolfe and Ross Hutchens for helping me with site functionality and styling
## Support
