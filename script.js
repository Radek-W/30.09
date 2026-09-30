document.addEventListener("DOMContentLoaded", function() {

    // kontener
    const kontener = document.getElementById("kontener");
    function losowykolor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        kontener.style.backgroundColor = 'rgb(${r}, ${g}, ${b})';
    }
    kontener.addEventListener("click", losowykolor);
    kontener.addEventListener("mouseenter", function(){
        kontener.style.fontSize="20px";
    });

    kontener.addEventListener("mouseleave", function(){
        kontener.style.fontSize="10px";
    });

    // Paragraf
    const paragraf = document.querySelector(".wyroznione");
    paragraf.addEventListener("dblclick", function(){
        paragraf.textContent="Powiat radomski";
    });
    paragraf.addEventListener("mouseenter", function(){
        console.log(paragraf.textContent);
    });

    // Input
    const artykul=document.getElementById("artykul");
    const liczba=document.getElementById("liczba");
    artykul.addEventListener("keydown", function(event){
        artykul.size++;
        if(!isNaN(event.key) && event.key !== " ") {
            liczba.textContent += event.key;
        }
    });
})