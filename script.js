const radioBtns = document.querySelectorAll(".radio_container");
const myForm = document.querySelector(".my_form");
const repayement = document.getElementById("repayment");
const interestOnly = document.getElementById("interest_only");
const interestRate = document.getElementById("interest");
const mortgageTerm = document.getElementById("mortgage_term");
const mortgageAmount = document.getElementById("mortgage_amount");
const monthlyPaymentText = document.querySelector(".monthly_repayments");
const totalToPay = document.querySelector(".total");
const clearBtn = document.querySelector(".clear_btn");
const emptyResultContainer = document.querySelector(".empty_result_container");
const resultContainer = document.querySelector(".result_container");

function clearAll() {
  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";
  monthlyPaymentText.textContent = "";
  totalToPay.textContent = "";
  emptyResultContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
}

function toggleActive(element) {
  radioBtns.forEach((btn) => btn.classList.remove("clicked"));
  element.classList.add("clicked");
}

function calculateRepayments(e) {
  e.preventDefault();
  let mortgageAmountValue = parseFloat(mortgageAmount.value);
  let interestRateValue = parseFloat(interestRate.value) / 100 / 12; /* Monthly Interest Rate  */
  let mortgageTermValue = parseInt(mortgageTerm.value);
  let mortgageTermMonths = mortgageTermValue * 12; 
  let monthlyPayment = 0

  emptyResultContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  if(isNaN(mortgageAmountValue) || isNaN(mortgageTermValue) || isNaN(interestRateValue)) {
    alert("please fill in all fields with valid numbers");
    return;
  }
  if (repayement.checked) {
    let r = interestRateValue 
    monthlyPayment = 
    (mortgageAmountValue * r * (1 + r) ** mortgageTermMonths) / 
      ((1 + r) ** mortgageTermMonths - 1);
  } else if (interestOnly.checked) {
    monthlyPayment = mortgageAmountValue * interestRateValue
  }
   monthlyPaymentText.textContent = `£${monthlyPayment.toFixed(2)}`;
   totalToPay.textContent = `£${(monthlyPayment * mortgageTermMonths).toFixed(2)}`
}

radioBtns.forEach((btn) => {
  btn.addEventListener("click", () => toggleActive(btn))
})

myForm.addEventListener("submit", calculateRepayments);
clearBtn.addEventListener("click", clearAll);