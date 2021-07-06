//! öncelikle listelenecek elementlerin düzenlemesini yapıyoruz

var listem = document.getElementsByTagName("LI") // li elementini alıyoruz önce
var index; //daha sonra bir döngü yapmamız gerek listelenenecek ögelerin sırasıyla artması gerekecek
for (index = 0; index < listem.length; index++) { //index değerimizizin olduğu sürece
    var span = document.createElement("SPAN") //bir span elementi oluşturup
    var txt = document.createTextNode("\u00D7") //span içine x işaretini ekleyip
    span.className = "close" // x işaretinin classını veriyoruz
    span.appendChild(txt) //daha sonra x işaretini spane aktarıp
    listem[index].appendChild(span) //en dış kısma ekliyoruz
}

//! daha sonra butona tıklandığında silinmesini istiyoruz
var close = document.getElementsByClassName("close") //önce sileceğimiz elementi seçmemiz gerek
var index; //yine bir kontrol grubu yapmamız gerek
for (index = 0; index < close.length; index++){
    close[index].onclick = function(){ //close indexe bastığımızda
        var div = this.parentElement; //elementi seç
        div.style.display = "none" //daha sonra elementi yok yap
    }
}

//! daha sonra yaptığımız işleri üstüne basınca üstü çizili yapacağız
 
var liste = document.querySelector("ul") //üstünü çizeceğimiz öğeler ul olduğu için ulyi seçtik
liste.addEventListener("click",function(event){//daha sonra üstüne click yapmamız gerekicek
    if(event.target.tagName ==="LI"){ //lı olannı seçip
        event.target.classList.toggle("checked") //üstünü çizip classını değiştiriyoruz
    }
},false)

//! şimdide elemanları eklememiz gerekiyor

function newElement() { //yeni bir element  fonksiyonu oluşturuyoruz
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value; //inputtan değeri alıyoruz
    var t = document.createTextNode(inputValue); //daha sonra inputtaki değeri yazmak için t değerini oluşturuyoruz
    li.appendChild(t); //li içerisine inputtan gelen değerle birleşen t yi ekliyoruz

    if (inputValue === '') { //daha sonra input değerinin içerisinin boş olmaması gerektiğini söylüyoruz
      alert("Alan Boş Bırakılamaz");
    } else {
      document.getElementById("myUL").appendChild(li); //eğer boş değilse yeni eklenen değerin todoya eklenmesini söylüyoruz
    }

    document.getElementById("myInput").value = "";
  
    //ve tekrar gerekli classları veriyoruz
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}
