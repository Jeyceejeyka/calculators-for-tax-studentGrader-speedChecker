// JAVASCRIPT  CODE FOR NET SALARY CALCULATOR;

//retriving attributes i.e id/class from input and others 
const button = document.getElementById("button");
const result1 = document.getElementById("result1");

// Function to calculate PAYE
function PayAsYouEarn(BasicSalary) {
  let monthlyTax = 0;
  if (BasicSalary <= 24000) {
    monthlyTax = BasicSalary * 0.10;
  } else if (BasicSalary <= 32333) {
    monthlyTax = 2400 + 0.25 * (BasicSalary - 24000);
  } else if (BasicSalary <= 500000) {
    monthlyTax = 2400 + 2083.25 + 0.30 * (BasicSalary - 32333);
  } else if (BasicSalary <= 800000) {
    monthlyTax = 2400 + 2083.25 + 140000 + 0.325 * (BasicSalary - 500000);
  } else if (BasicSalary > 800000) {
    monthlyTax = 2400 + 2083.25 + 140000 + 97500 + 0.35 * (BasicSalary - 800000);
  }
  return monthlyTax;
}

// Function to calculate NHIF
function HealthInsurance(BasicSalary) {
  if (BasicSalary <= 5999) return 150;
  if (BasicSalary <= 7999) return 300;
  if (BasicSalary <= 11999) return 400;
  if (BasicSalary <= 14999) return 500;
  if (BasicSalary <= 19999) return 600;
  if (BasicSalary <= 24999) return 750;
  if (BasicSalary <= 29999) return 850;
  if (BasicSalary <= 34999) return 900;
  if (BasicSalary <= 39999) return 950;
  if (BasicSalary <= 44999) return 1000;
  if (BasicSalary <= 49999) return 1100;
  if (BasicSalary <= 59999) return 1200;
  if (BasicSalary <= 69999) return 1300;
  if (BasicSalary <= 79999) return 1400;
  if (BasicSalary <= 89999) return 1500;
  if (BasicSalary <= 99999) return 1600;
  return 1700; // For BasicSalary >= 100000
}

// Function to calculate NSSF
function NationalSocialSecurityFund(BasicSalary) {
  const pensionablePayRate = 0.06;
  return Math.min(BasicSalary, 18000) * pensionablePayRate;
}

// Function to calculate Net Salary
function calculateNetSalary(BasicSalary, Benefits) {
  const grossSalary = BasicSalary + Benefits;
  const PAYE = PayAsYouEarn(BasicSalary);
  const NHIF = HealthInsurance(BasicSalary);
  const NSSF = NationalSocialSecurityFund(BasicSalary);
  const netSalary = grossSalary - (PAYE + NHIF + NSSF);

  return { PAYE, NHIF, NSSF, netSalary, grossSalary };
}

// Event Listener for the button
button.addEventListener("click", () => {
  const BasicSalary = parseFloat(document.getElementById("BasicSalary").value);
  const Benefits = parseFloat(document.getElementById("Benefits").value);

  // checks if inputs is non a number or less than 0;
  if (isNaN(BasicSalary) || BasicSalary <= 0 || isNaN(Benefits) || Benefits < 0) {
    result1.textContent = "Please enter valid Basic Salary and Benefits.";
    return;
  }

  // Calculate Net Salary
  const { PAYE, NHIF, NSSF, netSalary, grossSalary } = calculateNetSalary(
    BasicSalary,
    Benefits
  );
  

  // Display Results
  result1.textContent = `
    Gross Salary: KES ${grossSalary.toFixed(2)}
    NSSF Deduction: KES ${NSSF.toFixed(2)}
    NHIF Deduction: KES ${NHIF.toFixed(2)}
    PAYE Deduction: KES ${PAYE.toFixed(2)}
    Net Salary: KES ${netSalary.toFixed(2)}
  `;

  

});

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("BasicSalary").value = '';
  document.getElementById("Benefits").value = '';
  result1.textContent = '';

})




//JAVASCRIPT CODE FOR THE GRADE CHECKER




// retrives data from targeted attribtes elements;
const Button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");
const result2 = document.getElementById("result2");

// when clicked return back results which are grade and would be appended 
Button1.addEventListener("click", () => {
    
    let markInput = parseInt(input1.value);// initialed markInput element to input.value as int
    let outCome;// holds the grade for display at th result div
    if (markInput > 100 || markInput < 0) {

        result2.textContent = 'Choose a number between 0-100';
        return;
    } 

    if (markInput > 79) {
       outCome = 'A';
    } 

    if (markInput >= 60) {

        outCome = 'B';
    } 
    
     if (markInput >= 50) {
      outCome = 'C';
    }
    
    if (markInput >= 40) {

        outCome = 'D';
    }
    
    if (markInput < 40) {  // it comments out outCome if if input is less 40 a
    
        outCome = 'E'
    }
    
    // appends the the grade and and outCome to the result div
    result2.textContent = `Your Is Grade: ${outCome}`;
    input1.value = ''; 
    
    setTimeout(() => {
        result2.textContent = '';
    }, 2000);
    
});




//JAVASCRIPT CODE FOR THE SPEED CHECKER




//retrieve targeted id/class
const input2 = document.getElementById("input2");
const result3 = document.getElementById("result3");

//get inputs from inpt and evaluates based on switch statement below;
document.getElementById("button2").addEventListener("click", () => {

    let inputValue = parseInt(input2.value);// makessure inputvalue is in int

    let intervalSpeed = 5;

    let demerit = (inputValue -70) / intervalSpeed;//subtracts inputvalue from the minimum speed limit;

    let maxDemerit = 12;

    let outCome;

    
    switch(true) { // evaluats based if the condition is true;

        case (!inputValue):
            outCome = 'Enter Speed Value in km/s';
            break;   
        case (inputValue <= 70):
            outCome = 'OK';
            break;

        case (demerit > maxDemerit):
            outCome = `License Suspended`;
            break;
          
        case (maxDemerit >= demerit):
            outCome = `Points: ${demerit}`    
            break; 
        
    };
    
    result3.textContent = `${outCome}`;//;appends outcome to the result Div
    input2.value = '';// resets the inputvalue to null after clicked btn is clicked 
    
    

})
result3.textContent = '';