Loan Calculator

live demo :https://loancallculatorr.netlify.app/

A simple and clean web application that lets users calculate their monthly loan payment based on loan amount, interest rate and repayment period.

🛠 Features

Enter the loan amount in USD.

Enter the interest rate (annual, in %).

Enter the number of months to pay the loan back.

Click “Calculate” to compute the monthly payment.

The result displays immediately with minimal distraction.

📂 Technologies Used

HTML5 & CSS3

Modern JavaScript (vanilla)

Responsive design for usability across desktop and mobile

🚀 Getting Started

Clone the repository

git clone https://github.com/your-username/loan-calculator.git


Navigate into the project directory

cd loan-calculator


Open index.html in your browser (or serve via local server)

Input the required values and click Calculate to see the monthly payment.

🔍 How It Works

The script reads the values for loan amount, interest rate, and months to pay from the user input.

Validates that all fields are filled with valid numbers.

Calculates the interest portion:

interest = (loanAmount * (interestRate * 0.01)) / months;


Calculates the total monthly payment:

monthlyPayment = (loanAmount / months) + interest;


Displays the result with 2 decimal places.

✅ Usage Tips

Make sure all fields are filled in with realistic values.

Keep interest rate as a percentage (e.g. 5.5 for 5.5 %).

Ensure the repayment period (months) is realistic (e.g. 12, 24, 48).

The final monthly payment shown gives a simple estimation and does not account for extra fees, taxes, or amortization schedules.

🎨 Customisation

You can customise this app in a few ways:

Change the currency from USD to another currency by adjusting the label and formatting.

Add more advanced calculations for amortization, “total cost of loan”, or “remaining balance”.

Include styling themes (light/dark mode) or additional UI improvements.

Add input validation constraints (e.g., showing errors next to each field instead of a generic message).

📄 License

This project is open-source and available under the MIT License
.
