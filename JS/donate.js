// Noakhali donation
document
  .getElementById("noa-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = getInputFieldValueById("input-field-noa");
    const mainValue = getTextValueById("main-balance");
    const noakhaliDonation = getTextValueById("donate-noakhali");

    if (inputValue && inputValue <= mainValue && inputValue > 0) {
      const updatedBalance = mainValue - inputValue;
      const donateNoakhali = inputValue + noakhaliDonation;

      document.getElementById("donate-noakhali").innerText =
        donateNoakhali.toFixed(2);
      document.getElementById("main-balance").innerText =
        updatedBalance.toFixed(2);
      const modal = document.getElementById("show-modal");
      modal.showModal();
      document.getElementById("input-field-noa").value = "";
      const historyItem = document.createElement("div");
      historyItem.className = "bg-gray-200 p-9 rounded-md";
      historyItem.innerHTML = `
    <p class="text-gray-600 font-bold">${inputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh.</p>
    <p> ${new Date().toLocaleString()}</p>
      `;
      const historyContainer = document.getElementById("history-item");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    } else {
      const modal = document.getElementById("show-modal-error");
      modal.showModal();
    }
  });

// feni donation
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("input-field-feni");
    const mainValue = getTextValueById("main-balance");
    const feniDonation = getTextValueById("donate-feni");

    if (inputValue <= mainValue && inputValue > 0) {
      const updatedBalance = mainValue - inputValue;
      const donateFeni = inputValue + feniDonation;

      document.getElementById("donate-feni").innerText = donateFeni.toFixed(2);
      document.getElementById("main-balance").innerText =
        updatedBalance.toFixed(2);
      const modal = document.getElementById("show-modal");
      modal.showModal();
      document.getElementById("input-field-feni").value = "";
      const historyItem = document.createElement("div");
      historyItem.className = "bg-gray-200 p-9 rounded-md";
      historyItem.innerHTML = `
    <p class="text-gray-600 font-bold">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh.</p>
    <p> ${new Date().toLocaleString()}</p>
      `;
      const historyContainer = document.getElementById("history-item");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    } else {
      const modal = document.getElementById("show-modal-error");
      modal.showModal();
    }
  });
// Quota donation
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = getInputFieldValueById("input-field-quota");
    const mainValue = getTextValueById("main-balance");
    const quotaDonation = getTextValueById("quota-donate");

    if (inputValue <= mainValue && inputValue > 0) {
      const updatedBalance = mainValue - inputValue;
      const donateQuota = inputValue + quotaDonation;

      document.getElementById("quota-donate").innerText =
        donateQuota.toFixed(2);
      document.getElementById("main-balance").innerText =
        updatedBalance.toFixed(2);
      const modal = document.getElementById("show-modal");
      modal.showModal();
      document.getElementById('input-field-quota').value="";
      const historyItem = document.createElement("div");
      historyItem.className = "bg-gray-200 p-9 rounded-md";
      historyItem.innerHTML = `
    <p class="text-gray-600 font-bold">${inputValue} Taka is Donated for Quota-2024 at Dhaka, Bangladesh.</p>
    <p> ${new Date().toLocaleString()}</p>
      `;
      const historyContainer = document.getElementById("history-item");
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    } else {
      const modal = document.getElementById("show-modal-error");
      modal.showModal();
    }
  });

//   history button
document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    historyBtn.classList.add("bg-green-400");
    donationBtn.classList.remove("bg-green-400");
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("donation-section").classList.add("hidden");
  });

// donation button

document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.add("bg-green-400");
    historyBtn.classList.remove("bg-green-400");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("donation-section").classList.remove("hidden");
  });
