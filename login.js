function validacija() {
    //Uzimanje unetog teksta za poredjenje sa zadatim podacima za logovanje
    let myusername = document.getElementById('username').value;
    let mypasword = document.getElementById('pasword').value;
    
//Uslov da logovanje bude uspesno ili ne(uporedjivanje podataka)
    if((myusername=="Zlatan")&&(mypasword=="Stajic")){
        let usernamePasword =  document.getElementById('usernamePasword');
        document.getElementById('usernamePasword').innerHTML = "Logovanje uspesno";
    }else {
        document.getElementById('usernamePasword').innerHTML = "Vas nalog ne postoji pokusajte ponovo";}
}
//Funkcija omogucava ponovno upisivanje podataka i brisanje paragrafa
function resetujInput() {
    document.getElementById('username').value = "";
    document.getElementById('pasword').value= "";
    document.getElementById('usernamePasword').innerText= "";
}
// Datum i vreme refresovanja stranice
 datum = new Date();
 mjesec = datum.getMonth();
 dan = datum.getDate()
 godina = datum.getYear();
 sat = datum.getHours();
 minuta = datum.getMinutes();
 document.write(dan + '.' + mjesec + '.' + godina + ' ' + sat + ':' + minuta);
 
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
//Funkcija koja uzima json objekat i obradjuje u html tabelu(korisnici)
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
 .then(function buildTable(data){
   let table = document.getElementById('myTable');
 
   for ( i=0; i<data.length; i++) {
       let row = `<tr>
                       <td>${data[i].userId}</td>
                       <td>${data[i].id}</td>
                       <td>${data[i].title}</td>
                       <td>${data[i].completed}</td>
                   </tr>`
       table.innerHTML += row
   }
 })


 
