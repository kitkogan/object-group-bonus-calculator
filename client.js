

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// # Bonus Calculator App

// ## Objectives

// - Practice Read, Write, Speak, Teach skills
// - Solidify JavaScript knowledge
// - Translate business needs to code
// - Practice Group Work

// # Group setup

// First, let's take a look at starting the project off with your group members in an effective manner:

// ![intro](quads_week1_updated_2020.png)

// You are going to write a single JavaScript file to automatically calculate employee bonus for a company.

// ## Data Structure

// The company is providing you with a few samples of employee data of how their data is currently being stored. Each are stored in a global array named `employees`.

// ### Employee Array
// Each **Employee** currently is configured in this way:

// * The `name` property holds the employees name.
// * The `employeeNumber` property has their employee number.
// * The `annualSalary` property contains their base annual salary.
// * The `reviewRating` property contains their review rating.

// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:
// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.

//used to pass in the singular employee from the employees array. 
//its looping over the employees list one at a time by index number

for (let i = 0; i < employees.length; i++) {
  bonusCalculator(employees[i]);
}//end for loop

// ## Function Logic

// Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

function bonusCalculator(employee) {
  console.log('this is employee', employee);
  let newObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }//end new object

  //this block of code assigns bonus percentage to the newObject
  if(employee.reviewRating <= 2) {
    newObject.bonusPercentage = 0;
  } else if (employee.reviewRating == 3) {
    newObject.bonusPercentage = .04;
  } else if (employee.reviewRating == 4) {
    newObject.bonusPercentage = .06;
  } else if (employee.reviewRating == 5) {
    newObject.bonusPercentage = .10;
  }//end if 1

  if (employee.employeeNumber.length == 4 && employee.reviewRating > 2) { //can use '.length' to count characters in strings
    newObject.bonusPercentage += .05;
  }//end if 2

  if (employee.annualSalary > 65000) {
    //bring bonus percentage down .01
    newObject.bonusPercentage -= .01;
  }//end if 3
  
  if (newObject.bonusPercentage > .13) {
    newObject.bonusPercentage = .13;
  } else if (newObject.bonusPercentage < 0) {
    newObject.bonusPercentage = 0;
  }// end if 4

  newObject.totalBonus = Number(employee.annualSalary) * newObject.bonusPercentage;
  newObject.totalCompensation = Number(employees.annualSalary) + newObject.totalBonus;

  console.log('final object', newObject);

}//end bonusCalculator

// * ^^^^^
// The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.



// ### Individual Bonus calculation
// - If the employee has a rating of a 2 or below should not receive a bonus.
// - If the employee has a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - If the employee a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - If the employee a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.


// function pay(array) {
//   for (i = 0; i < array.length; i++) {
//     const employee = employees[i];
//     if (employee.reviewRating < 2) {
//      bonusPercentage == 0;
    
//     } else if (employee.reviewRating == 3) {
//       bonusPercentage == .04;
//     } else if (employee.reviewRating == 4) {
//       bonusPercentage == .06;
//     } else if (employee.reviewRating == 5){
//       bonusPercentage == .10;
  

//     } if (employee.annualSalary > 65,000){
//       bonusPercentage - .01;
    
//     }// end conditional
//   }//end for of
//   console.log(pay(employees[i]));
// }//end pay
  //console.log(employees.reviewRating);
//end pay
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
//console.log(pay(employees));

//console.log(bonusPercentage[i]);
