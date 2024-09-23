document.getElementById("blogbtn").addEventListener("click", function () {
  window.location.href = "faq.html";
  
});





function getInputFieldID(id) {
  const inputItem = parseFloat(document.getElementById(id).value);
  return inputItem;
}
function getInputTextField(id) {
  const anyInnerText = document.getElementById(id).innerText;
  const anyInnerTextParseFloat = parseFloat(anyInnerText);
  return anyInnerTextParseFloat;
}

let addMoneyArrayFrist = [];
let addMoneyArraySecond = [];
let addMoneyArrayThird = [];

function allAroundDonationFunction(
  inputID,
  availableMoneyID,
  addMoneyID,
  historyCommentID,
  event,
  addMoneyArray
) {
  event.preventDefault();

  const inputValue = getInputFieldID(inputID);
  console.log("Input Value Type:", typeof inputValue);

  addMoneyArray.push(inputValue);
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Invalied Donate Amount");
    document.getElementById("my_modal_5").classList.add("hidden");
    return;
  }
  let total = 0;
  for (eachmoneyDonation of addMoneyArray) {
    total += eachmoneyDonation;
    console.log(total);
  }

  const availAbleMoney = getInputTextField(availableMoneyID);
  const updateMoney = availAbleMoney - total;
  console.log("Updated Available Money:", updateMoney);
  if (total > availAbleMoney || updateMoney <= 0) {
    alert("no added in balance");
    document.getElementById("my_modal_5").classList.add("hidden");
    window.location.reload();
  }

  document.getElementById(addMoneyID).innerText = total.toFixed(2);
  document.getElementById(availableMoneyID).innerText = updateMoney.toFixed(2);

  document.getElementById(inputID).value = "";
  document.getElementById("history-list").classList.add("hidden");

  // comment section
  const historyComment = document.getElementById(historyCommentID).innerText;

  const date = new Date();
  const hisoryitem = document.createElement("div");
  hisoryitem.className = "shadow-lg p-4 space-y-4 rounded-md";
  hisoryitem.innerHTML = `   <p class= text-xl>
              ${inputValue.toFixed(2)} Tk is ${historyComment}
            </p>
            <p>Date : ${date}</p>`;

  document.getElementById("history-list").appendChild(hisoryitem);
}

document
  .getElementById("donateBtn")
  .addEventListener("click", function (event) {
    allAroundDonationFunction(
      "inputvalue",
      "availablemoney",
      "addMoney",
      "fristtext",
      event,
      addMoneyArrayFrist
    );
  });

document
  .getElementById("donateBtnSecond")
  .addEventListener("click", function (event) {
    allAroundDonationFunction(
      "inputvalueSecond",
      "availablemoney",
      "addMoneySecond",
      "secondtext",
      event,
      addMoneyArraySecond
    );
  });

document
  .getElementById("donateBtnthird")
  .addEventListener("click", function (event) {
    allAroundDonationFunction(
      "inputvaluethird",
      "availablemoney",
      "addMoneythird",
      "thirdtext",
      event,
      addMoneyArrayThird
    );
  });

// historybtn working
const topHistoryBtn = document.getElementById("tophistorybtn");
const topDonationBtn = document.getElementById("topdonationbtn");
topHistoryBtn.addEventListener("click", function () {
  topHistoryBtn.classList.add("border-none", "bg-[#B4F461]", "text-[#111111]");
  topDonationBtn.classList.remove(
    "border-none",
    "bg-[#B4F461]",
    "text-[#111111]"
  );
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("history-list").classList.remove("hidden");
});

topDonationBtn.addEventListener("click", function () {
  topDonationBtn.classList.add("border-none", "bg-[#B4F461]", "text-[#111111]");
  topHistoryBtn.classList.remove(
    "border-none",
    "bg-[#B4F461]",
    "text-[#111111]"
  );

  document.getElementById("donation-form").classList.remove("hidden");
  document.getElementById("history-list").classList.add("hidden");
});
