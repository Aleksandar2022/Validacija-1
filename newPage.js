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

