document.getElementById("add-money").addEventListener("click", 
       function(event){
              event.preventDefault;
              const maniBalance=document.getElementById("main-balance").innerText;
              const convertedMainBalance=parseFloat(maniBalance);
              const addAmount=document.getElementById("amount").value;
              const convertedAddAmount=parseFloat(addAmount);
              
              const sum=convertedMainBalance+convertedAddAmount;
              document.getElementById("main-balance").innerText=sum;

})