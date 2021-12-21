var I = 0;
var imagem = new Array();
imagem[0] = "img/img_1.jpg";
imagem[1] = "img/img_2.jpg"; 
imagem[2] = "img/img_3.webp"; 
imagem[3] = "img/img_4.webp"; 
imagem[4] = "img/img_5.webp"; 
imagem[5] = "img/img_6.webp"; 

function mudar_banner(){
    document.getElementById("carrocel_auto").src = imagem[I];
    var imagens = document.getElementById("carrocel_auto")
    I ++
    if (I > 5){
        I = 0;
    }
}
setInterval(mudar_banner, 2000);

function abrir_menu(){
    var img = document.createElement("img")
    var menu = document.getElementById("menu")
    var M = document.createElement("div")
    var lista = document.querySelector("ul")
    // Botão fechar menu(X)
    img.src = "img/X.png"
    img.style.width = "40px"
    img.style.height = "auto"
    img.style.position = "absolute"
    img.style.right = "10px"
    img.style.top = "50%"
    img.style.cursor = "pointer"
    img.addEventListener("click",function(){
        lista.style.display = "none"
        M.style.display = "none"
        img.style.display = "none"
        menu.style.display = "flex"
    })
    // itens menu
    lista.style.display = "flex"
    lista.style.flexDirection = "columm"
    lista.style.marginLeft = "100px"
    // Bloco do menu
    M.style.width = "150px"
    M.style.height = "350px"
    M.style.position = "fixed" 
    M.style.right = "0" 
    M.style.backgroundColor = "#011429"
    M.style.opacity = "20%"
    menu.style.display = "none"
    // Adicionando elementos a div pai menu
    document.getElementById("aba_menu").appendChild(M)
    document.getElementById("aba_menu").appendChild(lista)
    document.getElementById("aba_menu").appendChild(img)
}
