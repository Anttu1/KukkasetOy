async function fetchData() {
         
    var x = `<table><thead><th>Nimi</th><th>Sähköposti</th><th>Puhelinnumero</th></thead></tbody>`
    
    try {
    const response = await fetch("https://kukkasetoy.onrender.com/api/henkilokunta")
    const hkuntadata = await response.json() //muutetaan json => javascript muotoon

    await hkuntadata.map(h => { //loopataan läpi oliot map-funktiolla, h  on 1 henkilökunnan jäsen
        x += `<tr><td>${h.name}</td><td>${h.email}</td><td>${h.phone}</td></tr>`
    })
        //taulukko päätetään ja renderöidään html elementtiin
    x += `<tbody></table>`
        document.getElementById("henkilokunta").innerHTML ="<h2>Henkilökunta</h2>" + x
        document.getElementById("henkilokunta").style.display ="block"
        document.getElementById("yhteystiedot").style.display="none"
        document.getElementById("esittely").style.display="none"
        document.getElementById("paasivu").style.display="none"

    //Virhetilanteen hallinta    
    }catch (error) {
        console.error("Error fetching data:", error)
    }
     }
    function Main() {
        document.getElementById("paasivu").innerHTML = "<br><h2>Tervetuloa Voikukka OY:n sivuille! <br> Täältä löydät tietoa yrityksestämme ja henkilökunnastamme.</h2>"
        document.getElementById("paasivu").style.display ="block"
        document.getElementById("esittely").style.display ="none"
        document.getElementById("yhteystiedot").style.display ="none"
        document.getElementById("henkilokunta").style.display ="none"
    }
    function Contact() {
     //    ---jquery----
     //   $(document).ready(function(){
     //       $("#2").empty();
     //       $("#2").append("<h2>Ota yhteyttä</h2><br><h4>Puhelinnumero:</h4> 0400786590 <br><h4> Sähköposti:</h4> voikukkaoy@voikukka.fi <br> <h4>Osoite:</h4> Keskustantie 24, <br> 53920 Lappeenranta")
     //       })
        document.getElementById("yhteystiedot").innerHTML = "<h2>Ota yhteyttä</h2><br><h4>Puhelinnumero:</h4> 0400786590 <br><h4> Sähköposti:</h4> voikukkaoy@voikukka.fi <br> <h4>Osoite:</h4> Keskustantie 24, <br> 53920 Lappeenranta"
        document.getElementById("yhteystiedot").style.display="block"
        document.getElementById("esittely").style.display ="none"
        document.getElementById("paasivu").style.display ="none"
        document.getElementById("henkilokunta").style.display ="none"
    }
    function Info() {
        document.getElementById("esittely").innerHTML = "<h2>Esittely</h2><br>Yrityksemme on perustettu v. 2022 ja henkilöstöömme kuuluu 4 kukka-alan ammattilaista. <br><br> Liikkeemme sijaitsee Lappeenrannan keskustassa. <br><br> Meillä on laaja valikoima erilaisia leikkokukkia sekä ruukkukukkia myynnissä paikan päällä. <br><br> Voit myös tilata meiltä malliemme mukaisia kukka-asetelmia. <br><br> Kukka-asetelmien mallit ovat esillä myymälässämme,<br> tulethan piipahtamaan!"
        document.getElementById("esittely").style.display="block"
        document.getElementById("yhteystiedot").style.display ="none"
        document.getElementById("paasivu").style.display ="none"
        document.getElementById("henkilokunta").style.display ="none"
    }

     function blackTheme() {
     var element = document.getElementById(2);
     element.classList.toggle("black-mode");
     var element = document.getElementById(1);
     element.classList.toggle("black-mode1");
     var element = document.getElementById(3);
     element.classList.toggle("black-mode2");
     }