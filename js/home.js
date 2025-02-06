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
    document.getElementById("totalFundNoakhali").innerText = fundAmountNoakhali; 
    
    const historyDiv = document.getElementById("history_section");
    const div = document.createElement("div");

    const now = new Date(); // Create a Date object!

    const formattedDate = now.toLocaleDateString('en-US', { // Customize as needed
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = now.toLocaleTimeString('en-US', { // Customize as needed
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // or false for 24-hour format
    });

    div.innerHTML = `<div class="rounded-2xl border-2 border-gray-300 p-4 m-3">
              <h1 class = "text-xl font-bold">${donateAmountForNoakhali} Taka donated for flood in Noakhali</h1>
              <p>Donated at ${formattedDate} ${formattedTime}</p> </div>`; // Use formatted date and time
    historyDiv.appendChild(div);    

})

const historyButton = document.getElementById("btn-history");
historyButton.addEventListener("click", function(){
    document.getElementById("history_section").classList.remove("hidden");
    document.getElementById("homeSection").classList.add("hidden")

})

// get back to donation page

document.getElementById("btn-donation").addEventListener("click", function(){
    document.getElementById("history_section").classList.add("hidden");
    document.getElementById("homeSection").classList.remove("hidden")
})

//  get back to donation page\\

// functionality for feni feminin section

const donate_now_button_feni = document.getElementById("donateNowButtonFeni");
donate_now_button_feni.addEventListener("click", function(){
    
    const donateAmountForFeni =  getInputFieldValueById('inputDonateFeni');
    
    if(donateAmountForFeni < 1 || isNaN(donateAmountForFeni) == true){
        return;
    }
    
    let fundAmountFeni = getFundAmountById("totalFundFeni");
   
    
    let centralBalanceString = document.getElementById("centralBalance").innerText;
    let centralBalance = parseFloat(centralBalanceString);
    centralBalance = centralBalance - donateAmountForFeni;
    document.getElementById("centralBalance").innerText = centralBalance;
    if(donateAmountForFeni > centralBalance){
        alert("you do not have sufficient balance. You have to pay negative amount to you bank.")
       
    }

    fundAmountFeni = fundAmountFeni + donateAmountForFeni;
    document.getElementById("totalFundFeni").innerText = fundAmountFeni; 
    
    const historyDiv = document.getElementById("history_section");
    const div = document.createElement("div");

    const now = new Date(); // Create a Date object!

    const formattedDate = now.toLocaleDateString('en-US', { // Customize as needed
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = now.toLocaleTimeString('en-US', { // Customize as needed
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // or false for 24-hour format
    });

    div.innerHTML = `<div class="rounded-2xl border-2 border-gray-300 p-4 m-3">
              <h1 class = "text-xl font-bold">${donateAmountForFeni} Taka donated for flood in Feni</h1>
              <p>Donated at ${formattedDate} ${formattedTime}</p> </div>`; // Use formatted date and time
    historyDiv.appendChild(div);    

})



// functionality for quota feminin section

const donate_now_button_quotaMOvement = document.getElementById("donateNowButtonquotaMOvement");
donate_now_button_quotaMOvement.addEventListener("click", function(){
    
    const donteAmountForQuotaMovement =  getInputFieldValueById('inputDonateQuotaMovement');
    
    if(donteAmountForQuotaMovement < 1 || isNaN(donteAmountForQuotaMovement) == true){
        return;
    }
    
    let fundAmountQuotaMovement = getFundAmountById("totalFundOfQuotaMovement");
   
    
    let centralBalanceString = document.getElementById("centralBalance").innerText;
    let centralBalance = parseFloat(centralBalanceString);
    centralBalance = centralBalance - donteAmountForQuotaMovement;
    document.getElementById("centralBalance").innerText = centralBalance;
    if(donteAmountForQuotaMovement > centralBalance){
        alert("you do not have sufficient balance. You have to pay negative amount to you bank.")
       
    }

    fundAmountQuotaMovement = fundAmountQuotaMovement + donteAmountForQuotaMovement;
    document.getElementById("totalFundOfQuotaMovement").innerText = fundAmountQuotaMovement;
    
    const historyDiv = document.getElementById("history_section");
    const div = document.createElement("div");

    const now = new Date(); // Create a Date object!

    const formattedDate = now.toLocaleDateString('en-US', { // Customize as needed
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = now.toLocaleTimeString('en-US', { // Customize as needed
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // or false for 24-hour format
    });

    div.innerHTML = `<div class="rounded-2xl border-2 border-gray-300 p-4 m-3">
              <h1 class = "text-xl font-bold">${donteAmountForQuotaMovement} Taka donated for Quota Movement Bangladesh</h1>
              <p>Donated at ${formattedDate} ${formattedTime}</p> </div>`; // Use formatted date and time
    historyDiv.appendChild(div);    

})