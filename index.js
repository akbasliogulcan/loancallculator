const loanAmount = document.querySelector("#loan-amount");
const interestRate = document.querySelector("#interest-rate");
const monthsToPay = document.querySelector("#months-to-pay");
const payment = document.querySelector("#payment");
const calculateBtn = document.getElementById("calculate");



function calculateLoan() {
           const amount = parseFloat(loanAmount.value);
           const rate = parseFloat(interestRate.value);
           const months = parseInt(monthsToPay.value);


           if (isNaN(amount) || isNaN(rate) || isNaN(months)) {
                      payment.textContent = "Please fill in all fields.";
                      return;
           }

           const interest = (amount * (rate * 0.01)) / months;
           const monthly = (amount / months + interest).toFixed(2);

           payment.innerHTML = `Monthly Payment: ${monthly}`;
}

calculateBtn.addEventListener("click", calculateLoan);

