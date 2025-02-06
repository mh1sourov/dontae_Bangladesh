const btn_noakhali = document.getElementById("donate_btn_Noakhali");
btn_noakhali.addEventListener("click", function(){
const stringDonatAmountForNoakhali = (btn_noakhali.parentElement.parentElement.children[3].childNodes[1].value);
const donatAmountForNoakhali = parseFloat(stringDonatAmountForNoakhali);
if(donatAmountForNoakhali < 0 || isNaN(donatAmountForNoakhali) == true){
    return;
}
const stringFundForNoakhali = (btn_noakhali.parentElement.parentElement.children[0].childNodes[3].innerText.split(" ")[0]);
const fundForNoakhali = parseFloat(stringFundForNoakhali);
console.log(fundForNoakhali, typeof fundForNoakhali);
console.log(donatAmountForNoakhali);

const stringbalance =  document.getElementById("centralBalance").innerText;
const balance = parseFloat(stringbalance);
console.log(balance);
})

