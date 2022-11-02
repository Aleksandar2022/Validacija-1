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
 function resetujInput() {
  document.getElementById('email').value = "";
  document.getElementById("emailPrint").innerText= "";
 }


 /**
  * 
  *  //Funkcija koja prilikom klika na Validaciju brise tekst u Input polju
 let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});

  * 
  * 
  * 
   Brise ispis iz paragrafa 
 
 function DeleteInput() {
    let UkloniText = document.getElementById('emailPrint');
    UkloniText.remove();
    
   }

   <div>
<button onClick="DeleteInput()" >Ukloni</button>
</div>
     */
  /*
   [ ] Proveriti da li je uneto nešto u email input polje pre nego što se 
   odštampa.Ako ništa nije uneto ispisati poruku da email mora da se unese.
* [ ] Napraviti dugme koje briše input polje. Polje treba da se obriše i poruka treba 
da se obriše iz emailPrint polja.
* [ ] Napraviti stil koji boji poruku o validaciji u crveno ako email nije validan i 
u zeleno ako je tekst validan.
let UkloniInput = document.getElementById('email');
    UkloniInput.remove();

  */