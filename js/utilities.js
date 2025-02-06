function getInputFieldValueById(id){
    const inputValueString = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}