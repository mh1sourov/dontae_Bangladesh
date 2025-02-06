function getInputFieldValueById(id){
    const inputValueString = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueString);
    document.getElementById(id).value = " ";
    return inputValue;
}

function getFundAmountById(id){
    const fundAmountString = document.getElementById(id).innerText;
    const fundAmount = parseFloat(fundAmountString)
    return fundAmount;
}