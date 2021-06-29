//!İlk öncelikle kullanıcı girdisini istedik
//!daha sonra saat için bir fonksiyon yazdık saat fonskiyonunda öncelikle date ile zaman değerini oluşturuyoruz
//* kullanıcı girdisini fonskiyon olarak yazarsak daha uygun oluyor

function isimGöster() {
    let name = prompt("Adınızı Giriniz")
    let namewrite = document.querySelector("#isim")
    namewrite.innerHTML = `${name}`
}

function Saat() {
    //zamand değerlerini oluşturuyoruz
    let date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();

    //günleri yazdırmak için day değerini ele alıp index değerine göre günleri yazdırdık
    if (session == 1) {
        session = "Pazartesi";
    } else if (session == 2) {
        session = "Salı";
    } else if (session == 3) {
        session = "Çarşamba";
    } else if (session == 4) {
        session = "Perşembe";
    } else if (session == 5) {
        session = "Cuma";
    } else if (session == 6) {
        session = "Cumartesi";
    } else if (session == 7) {
        session = "Pazar";
    }

    //daha sonra saat dakika ve saniye için  koşulları yazdık
    h = h < 10 ? "0" + h : h; // saat 10 dan küçükse saate 0 ekle
    m = m < 10 ? "0" + m : m; //dakika 10 dan küçükse dakikaya 0 ekle
    s = s < 10 ? "0" + s : s; //saniye 10 dan küçükse saniyeye 0 ekle

    var time = h + ":" + m + ":" + s + " " + session; //burda ise zaman değerlerinin ekrana yazım şeklini yazdırdık
    document.getElementById("tarih").innerText = time;
    document.getElementById("tarih").textContent = time;

    setTimeout(Saat, 1000); //zaman ayarlı işlemi 1000 ile başlatıyoruz
}

isimGöster();
Saat();