// listen for submition 

document.getElementById('loan-form').addEventListener('submit', calculateResults);


function calculateResults(e){
console.log('calculating');    
    
//creatinf variables based on the UI form 
    
var amount = document.getElementById('amount');    
var interest = document.getElementById('interest');
var years = document.getElementById('years');
var monthlyPayments = document.getElementById('monthlyPayments');
var totalPayment = document.getElementById('totalPayment');
var totalInterest = document.getElementById('totalInterest');

//as a decimal   
var principal = parseFloat(amount.value);
var calculateInterrest = parseFloat(interest.value) / 100 /12;
var calculatePayments = parseFloat(years.value) * 12;

 //compute monthly payments
var x = Math.pow(1 + calculateInterrest , calculatePayments);
var monthly = (principal * x * calculateInterrest)/(x-1);
    
 if(isFinite(monthly)){
     
monthlyPayments.value = monthly.toFixed(2);
totalPayment.value = ((monthly * calculatePayments)- principal).toFixed(2);
}else{
    
    
}   
    

    
    e.preventDefault();


    


} 