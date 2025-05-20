

document.getElementById("login-btn").addEventListener("click", 
       function(event){
       event.preventDefault();
       const accountNumber=document.getElementById("account-number").value;
       const pin=document.getElementById("pin").value;
       const parsePin=parseInt(pin);
       if(accountNumber.length==11){
              if(parsePin===1234){
                     window.location.href="./main.html";
              }
              else{
                     alert("Pin Unvalid")
              }
       }
       else{
              alert("Enter Valid Account Number")
       }
})