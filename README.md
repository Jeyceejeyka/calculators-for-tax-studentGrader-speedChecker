### README: Net Salary, Speed, and Grade Checker Calculator
Overview
This project contains a web application that provides three different calculators for users:

### Net Salary Calculator
### Student Grade Generator
### Speed Detector
Each section is contained in a separate part of the page, allowing users to input their data and receive a corresponding result. The Net Salary Calculator computes deductions for PAYE, NHIF, NSSF, and displays the net salary. The Grade Generator provides a grade based on marks, and the Speed Detector checks if a speed is within a permissible limit and calculates demerit points.

### Technologies Used
HTML: Structure of the webpage.
CSS: Styling for the layout and design.
JavaScript: Logic for calculating net salary, grades, and speed demerits.
### Features
### 1. Net Salary Calculator
Inputs: Users can enter their Basic Salary and Benefits.
### Calculations:
PAYE: Based on the entered salary, it calculates the tax applicable.
NHIF: Deduction based on salary brackets.
NSSF: Deduction based on a fixed pensionable pay rate.
Net Salary: The result is calculated as the gross salary minus the deductions.
Result: Displays the gross salary, NSSF, NHIF, PAYE deductions, and the final net salary.
### 2. Student Grade Generator
Input: Users enter their marks (0–100).
Output: Based on the input marks, a grade is displayed:
A: Marks above 79.
B: Marks between 60 and 79.
C: Marks between 50 and 59.
D: Marks between 40 and 49.
E: Marks below 40.
Validation: If the marks are outside the range of 0-100, an error message is displayed.
### 3. Speed Detector
Input: Users enter the speed in kilometers per hour (km/h).
Output:
If the speed is 70 km/h or below, the result will show "OK".
If the speed exceeds 70 km/h, a demerit point is calculated based on the speed over the limit. If the demerit points exceed 12, the license will be suspended.
Validation: If no speed is entered, an error message is shown.
### Structure of the Project
HTML Structure: The webpage is divided into three sections—Net Salary Calculator, Student Grade Generator, and Speed Detector. Each section contains input fields for the user to enter data, buttons to trigger the calculation, and a div to display the results.

CSS Styling:

The page uses Flexbox for layout, ensuring the three sections are spaced evenly across the page.
Each section has padding, borders, and a light background color to differentiate them visually.
The result area is styled with a background color to highlight the calculated values.
JavaScript Logic:

The calculations for Net Salary, Grade, and Speed are handled through separate functions.
Each function is triggered by clicking a button, and the result is displayed dynamically in the respective result divs.
Event Listeners are used for user interaction, making the webpage interactive and responsive to input.
### How to Use
### Net Salary Calculator
Enter your Basic Salary and Benefits in the input fields.
Click "Calculate Net Salary" to see the result in the result box.
The result will display the Gross Salary, NSSF Deduction, NHIF Deduction, PAYE Deduction, and Net Salary.
You can click "Reset" to clear the input fields and results.
### Student Grade Generator
Enter the student's marks (between 0 and 100) in the input field.
Click "Check Grade" to display the corresponding grade.
If the marks are out of range, an error message will be displayed.
### Speed Detector
Enter the speed in km/h in the input field.
Click "Check Speed" to see if the speed is within the permissible limit and the corresponding demerit points.
If the speed exceeds the limit, the result will show the number of demerit points, and if the points exceed the threshold, the license will be suspended.
### Installation
Clone the repository or download the files.
Open the HTML file in a browser to see the application in action.
Ensure that the CSS and JavaScript files are linked correctly to the HTML file.
### Conclusion
This web application provides an easy-to-use interface for calculating net salary, generating student grades, and detecting speeding violations. The design is clean, responsive, and allows for immediate feedback based on the user inputs. The JavaScript functions handle the core logic, ensuring accurate calculations and providing valuable information to the user.

### Future Improvements
Add more complex tax calculations or deductions based on different countries or tax systems.
Include more detailed validations for inputs (e.g., proper error messages for empty fields).
Improve the user interface with animations or transitions for a smoother experience.


