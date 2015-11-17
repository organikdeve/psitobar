function psitobar()
    {
        var psi = document.getElementById("psi").value;
        var deciamValue = document.getElementById("decimal").value;
        
     if(isNumber(psi))
        {
        var bar = psi * 0.06894757293168;
        var htmltxt = psi.toString() + " Psi = " 
                + bar.toFixed(deciamValue).toString() + " Bar";
        document.getElementById("barresult").innerHTML = htmltxt;
    }
    else {
        document.getElementById("barresult").innerHTML = "Please enter a valid number.";
    }
        return false;
    }
    
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
