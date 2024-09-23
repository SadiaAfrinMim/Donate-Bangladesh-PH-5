function getInputFieldID(id){
    const inputItem = parseFloat(document.getElementById(id).value);
    return inputItem;
}
function getInputTextField(id){
    const anyInnerText = document.getElementById(id).innerText
    const anyInnerTextParseFloat = parseFloat(anyInnerText)
    return anyInnerTextParseFloat
}
addMoneyArray =[]
addMoneyArraySecond = []

function allAroundDonationFunction(inputID, availableMoneyID, addMoneyID, event) {
  event.preventDefault(); 

  const inputValue = getInputFieldID(inputID);  
  console.log("Input Value Type:", typeof inputValue);

  addMoneyArray.push(inputValue); 
  let total = 0
      for(eachmoneyDonation of addMoneyArray){
          total+=eachmoneyDonation
          console.log(total);
        ;
      
       
      }

  

  const availAbleMoney = getInputTextField(availableMoneyID); 
  const updateMoney = availAbleMoney - total;  
  console.log("Updated Available Money:", updateMoney);


  
  // const hisoryitem = document.createElement('div')
  // hisoryitem.classList.add('shadow-lg','p-4')
  // hisoryitem.innerHTML= 
  // `   <p class= text-xl>
  //             ${inputID}  Taka is Donated for famine-2024 at Feni, Bangladesh 
  //           </p>
  //           <p>Date : ${day}-${month}-${year} ${hours}:${minutes}:${seconds} (Bangladesh Standard Time)</p>`
  //          const historycontainer = document.getElementById('history-section')
  //          console.log(hisoryitem.innerHTML);
  //          historycontainer.insertBefore(hisoryitem, historycontainer.firstChild);
           
            

 
  document.getElementById(addMoneyID).innerText = total.toFixed(2);  
  document.getElementById(availableMoneyID).innerText = updateMoney.toFixed(2);  
}





function allAroundDonationFunctionn(inputID, addMoneyID, event) {
  event.preventDefault(); 

  const inputValue = getInputFieldID(inputID);  
  console.log("Input Value Type:", typeof inputValue);

  addMoneyArraySecond.push(inputValue); 
  let total = 0
      for(eachmoneyDonation of addMoneyArraySecond){
          total+=eachmoneyDonation
          console.log(total);
        ;
      
       
      }

  

 
 

 
  document.getElementById(addMoneyID).innerText = total.toFixed(2);  
 
}


document.getElementById('donateBtn').addEventListener('click', function(event) {
  allAroundDonationFunction('inputvalue', 'availablemoney', 'addMoney', event);
});


document.getElementById('donateBtnSecond').addEventListener('click', function(event) {
  allAroundDonationFunctionn('inputvalueSecond',  'addMoneySecond', event);
});


// historybtn working
const topHistoryBtn = document.getElementById('tophistorybtn')
const topDonationBtn = document.getElementById('topdonationbtn')
topHistoryBtn.addEventListener('click',function(){

  topHistoryBtn.classList.add('border-none', 'bg-[#B4F461]', 'text-[#111111]')
  topDonationBtn.classList.remove('border-none', 'bg-[#B4F461]', 'text-[#111111]')
  document.getElementById('donation-form').classList.add('hidden')
  

})

topDonationBtn.addEventListener('click',function(){
  topDonationBtn.classList.add('border-none', 'bg-[#B4F461]', 'text-[#111111]')
  topHistoryBtn.classList.remove('border-none', 'bg-[#B4F461]', 'text-[#111111]')

  document.getElementById('donation-form').classList.remove('hidden')



})