const radioBtns = document.querySelectorAll(".radio_container");
const myForm = document.querySelector(".my_form");
const repayement = document.getElementById("repayment");
const interestOnly = document.getElementById("interest_only");
const interestRate = document.getElementById("interest");
const mortgageTerm = document.getElementById("mortgage_term");
const mortgageAmount = document.getElementById("mortgage_amount");
const monthlyPaymentText = document.querySelector(".monthly_repayments");

function toggleActive(element) {
  radioBtns.forEach((btn) => btn.classList.remove("clicked"));
  element.classList.add("clicked");
}

function calculateRepayments(e) {
  e.preventDefault();
  let interestRateValue = parseFloat(interestRate.value) / 100 / 12; /* Monthly Interest Rate  */
  let mortgageTermValue = parseInt(mortgageTerm.value);
  let mortgageAmountValue = parseFloat(mortgageAmount.value);
  console.log(mortgageAmountValue)
  let monthlyPayment = 0
  if (repayement.checked) {
    let r = interestRateValue 
    let mortgageTermMonths = mortgageTermValue * 12; 
    monthlyPayment = 
    (mortgageAmountValue * r * (1 + r) ** mortgageTermMonths) / 
      ((1 + r) ** mortgageTermMonths - 1);
    monthlyPaymentText.textContent = `£${monthlyPayment.toFixed(2)}`;
  }
}

radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => toggleActive(btn))
})

myForm.addEventListener("submit", calculateRepayments);