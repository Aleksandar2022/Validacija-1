function validirajEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  /**
   * Funkcija koja proverava validnost podataka
   */
  function validacija() {
    let emailVrednost  = document.getElementById('email').value;
    let paragrafPrintEmail =  document.getElementById('emailPrint');
    
    /**
   * Proverava da li postoji nesto upisano u input polje
   */
    if (emailVrednost<1) {
      paragrafPrintEmail.innerHTML = `Molim vas unesite email`;
    }else {
        if (validirajEmail(emailVrednost)) {
            paragrafPrintEmail.innerHTML = `Vaš email ${emailVrednost} JE validan email.`;
  //Menja boju ispisa da li je uslov ispunjen ili nije
            document.getElementById('emailPrint').style.color = "Green";
          } else {
            paragrafPrintEmail.innerHTML = `Vaš email ${emailVrednost} NIJE validan email`;
            document.getElementById('emailPrint').style.color = "Red";
            }
    }
  
 }
 //Funkcija za resetovanje vrednosti u Input polje i brisanje paragrafa
 function resetujInput() {
  document.getElementById('email').value = "";
  document.getElementById("emailPrint").innerText= "";
 }


 