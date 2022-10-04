//FICA BRANCO ONDE É LOCALIZADO NA NAVEGAÇÃO
function branquear(b1,b2) {
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b1.style.color = "#ffffff";
    b2.style.color = "#ffffff";
}
branquear();

//DESAPARECER COM MENU HAMBURGUER SE A RESOLUÇÃO NÃO FOR MOBILE

document.addEventListener("DOMContentLoaded", function(event) {
    var label = document.querySelector("label");
    
    if (screen.width > 920) {
        label.style.display = "none"
    } else if(screen.width <= 920){
        label.style.display = "flex"
    } 

    setInterval(() => {
        if (screen.width > 920) {
            label.style.display = "none"
        } else if(screen.width <= 920){
            label.style.display = "flex"
        }  
    }, 900);
});

//SE O WHATSAPP CHEGAR NO RODAPÉ ELE SOME (resoluções menores)
var wpp = document.getElementById('whatsapp');

window.onscroll = function() {
    
    var offset = document.documentElement.scrollTop + window.innerHeight;
    var height = document.documentElement.offsetHeight;

    if (wpp) {//se o whatsapp existir...

        if (window.screen.width <= 994) {
           if (offset >= height) {
               wpp.style.display = "none";
           }else{
            wpp.style.display = "";
           }
        }

    }
    

}
    
