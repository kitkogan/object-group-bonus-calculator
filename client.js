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

function pay(employees) {
  for (i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.reviewRating < 2) {
     return bonusPercentage = 0;
    
    } else if (employee.reviewRating = 3) {
      return bonusPercentage = .04;
    } else if (employee.reviewRating = 4) {
      return bonusPercentage = .06;
    } else if (employee.reviewRating = 5){
      return bonusPercentage = .10;
  

    } else if (employee.annualSalary > 65,000){
      return bonusPercentage - .01;
    
    }// end conditional
  }//end for of
}//end pay
  //console.log(employees.reviewRating);
//end pay
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );
//console.log(pay(employees));
console.log(pay(employees));
//console.log(bonusPercentage[i]);
