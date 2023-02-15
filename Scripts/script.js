document.getElementById("loginButton").addEventListener("click", function(){
    document.getElementById("login-area").style.display="none";
    document.getElementById("transaction-area").style.display="block";
});

document.getElementById("logoutButton").addEventListener("click", function(){
    document.getElementById("transaction-area").style.display="none";
    document.getElementById("login-area").style.display="block";

    document.getElementById("currentDeposit").innerText = 00;
    document.getElementById("currentWithdraw").innerText = 00;
    document.getElementById("totalBalance").innerText = 1240;
});

//Deposit Button Handler
document.getElementById("depositButton").addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const totalBalance = document.getElementById("totalBalance").innerText;
    // const currentTotal = parseFloat(totalBalance);
    // const total = currentTotal + depositNumber;
    // document.getElementById("totalBalance").innerText = total;

    depositSpanText("currentDeposit", depositNumber);
    document.getElementById("depositAmount").value = "";
});

//Withdraw Button Handler
document.getElementById("withdrawButton").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;
    

    // const totalBalance = document.getElementById("totalBalance").innerText;
    // const currentTotal = parseFloat(totalBalance);
    // const total = currentTotal - withdrawNumber;
    // document.getElementById("totalBalance").innerText = total;

    withdrawSpanText("currentWithdraw",withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
});

function depositSpanText(id, number){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = number + currentDepositNumber;
    
    document.getElementById(id).innerText = totalDeposit;

    const totalBalance = document.getElementById("totalBalance").innerText;
    const currentTotal = parseFloat(totalBalance);
    const total = currentTotal + number;
    document.getElementById("totalBalance").innerText = total;
}

function withdrawSpanText(id, number){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = number + currentDepositNumber;
    
    document.getElementById(id).innerText = totalDeposit;

    const totalBalance = document.getElementById("totalBalance").innerText;
    const currentTotal = parseFloat(totalBalance);
    const total = currentTotal - number;
    document.getElementById("totalBalance").innerText = total;
}
