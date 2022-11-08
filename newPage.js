function validacija() {
    let myusername = document.getElementById('username').value;
    let mypasword = document.getElementById('pasword').value;
    

    if((myusername=="Zlatan")&&(mypasword=="Stajic")){
        let usernamePasword =  document.getElementById('usernamePasword');
        document.getElementById('usernamePasword').innerHTML = "Logovanje uspesno";
    }else {
        document.getElementById('usernamePasword').innerHTML = "Vas nalog ne postoji pokusajte ponovo";}
}
function resetujInput() {
    document.getElementById('username').value = "";
    document.getElementById('pasword').value= "";
    document.getElementById('usernamePasword').innerText= "";
}

