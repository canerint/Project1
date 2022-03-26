
localStorage.setItem("kullaniciadi","caner");
localStorage.setItem("sifre","12345");

let username = localStorage.getItem("kullaniciadi");
let pswrd = localStorage.getItem("sifre");

console.log(username)
console.log(pswrd)

function giris(){
    var kullaniciadi = document.getElementById("kadialani").value;
    var sifre = document.getElementById("sifrealani").value;

    console.log(kullaniciadi)
    console.log(sifre)
    
    if(kullaniciadi== username & sifre==pswrd){
        
        
        window.location.assign("anasayfa.html")
        
    }else{
        alert("giriş başarısız")
    }
}

