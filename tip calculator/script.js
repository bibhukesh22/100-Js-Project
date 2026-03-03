const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total=document.getElementById("total");

function calculateTip(){
    const billAmount=Number(bill.value);
    const tipAmount=Number(tip.value);
    const totalAmount = billAmount+ (billAmount*tipAmount)/100;
    console.log(totalAmount);
    total.textContent=totalAmount;

}