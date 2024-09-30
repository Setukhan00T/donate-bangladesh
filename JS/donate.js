document
  .getElementById("noa-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = getInputFieldValueById("input-field-noa");
    const mainValue = getTextValueById("main-balance");
    const noakhaliDonation = getTextValueById("donate-noakhali");

    if (inputValue <= mainValue && inputValue > 0) {
      const updatedBalance = mainValue - inputValue;
      const donateNoakhali = inputValue + noakhaliDonation;

      document.getElementById("donate-noakhali").innerText =
        donateNoakhali.toFixed(2);
      document.getElementById("main-balance").innerText =
        updatedBalance.toFixed(2);
    } else {
      alert("Invalid amount added.Please Try Again");
    }
  });
