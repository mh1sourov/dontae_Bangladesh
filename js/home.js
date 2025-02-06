const fundButtonNoakhali = document.getElementById("donate_btn_Noakhali");
fundButtonNoakhali.addEventListener("click", function(){
    
    const donateAmountForNoakhali =  getInputFieldValueById('inputDonateNoakhali');
    
    if(donateAmountForNoakhali < 1 || isNaN(donateAmountForNoakhali) == true){
        return;
    }
    console.log(donateAmountForNoakhali, typeof donateAmountForNoakhali);
    let fundAmountNoakhali = getFundAmountById("totalFundNoakhali");
   
    
    let centralBalanceString = document.getElementById("centralBalance").innerText;
    let centralBalance = parseFloat(centralBalanceString);
    centralBalance = centralBalance - donateAmountForNoakhali;
    document.getElementById("centralBalance").innerText = centralBalance;
    if(donateAmountForNoakhali > centralBalance){
        alert("you do not have sufficient balance. You have to pay negative amount to you bank.")
       
    }

    fundAmountNoakhali = fundAmountNoakhali + donateAmountForNoakhali;
    document.getElementById("totalFundNoakhali").innerText = fundAmountNoakhali; //calculate fundMoney

})

const historyButton = document.getElementById("btn-history");
historyButton.addEventListener("click", function(){
    // History_section
    // document.getElementById("history_section").classList.remove("hidden");
    // document.getElementById("homeSection").classList.add("hidden")
    
})