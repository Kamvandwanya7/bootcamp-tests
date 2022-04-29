function lunchMoney(orderString){
    let total= 0;
 var items= orderString.split(",")
 for (var i=0; i<items.length; i++){
let lunch= items[i].trim(i);
     if(lunch==="gatsby"){
         total+= 49.50; 
     }else if(lunch==="chips"){
         total+=24.75;
     } else if(lunch==="sandwich"){
         total+=29.75;
     }else{
         return "error";
     }
     }
     return total;
 }

