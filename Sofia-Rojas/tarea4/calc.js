
let numberOpt1 = null;
let previousOperation = null;
let numberOpt2 = null;

function showNumber (num){
    document.getElementById("ans").value += num;
    document.getElementById("numberhidden").value += num;
}

function operate (operation){

    if (operation != '=' && operation != 'c'){

        if (previousOperation!=null){
            operate("=");
        }
        previousOperation=operation;
        document.getElementById("ans").value += operation;
        numberOpt1 =  Number (document.getElementById("numberhidden").value);
        document.getElementById("numberhidden").value="";
       
        
    }
    if (operation == 'c'){
         numberOpt1 = null;
         previousOperation = null;
         numberOpt2 = null;
        document.getElementById("ans").value="";
         document.getElementById("numberhidden").value="";
    }

   

    if (operation == '='){
        numberOpt2= Number (document.getElementById("numberhidden").value);
        document.getElementById("numberhidden").value="";
        

            
        
            if (previousOperation == '/'){
                document.getElementById("ans").value=numberOpt1/numberOpt2;
                document.getElementById("numberhidden").value=numberOpt1/numberOpt2;
            }
        
            if (previousOperation == '*'){
                document.getElementById("ans").value=numberOpt1*numberOpt2;
                document.getElementById("numberhidden").value=numberOpt1*numberOpt2;
            }
        
            if (previousOperation == '-'){
                document.getElementById("ans").value=numberOpt1-numberOpt2;
                document.getElementById("numberhidden").value=numberOpt1-numberOpt2;
            }
        
            if (previousOperation == '+'){
                document.getElementById("ans").value=numberOpt1+numberOpt2;
                document.getElementById("numberhidden").value=numberOpt1+numberOpt2;
            }

            numberOpt1 = null;
            previousOperation = null;
            numberOpt2 = null;
    }

}








