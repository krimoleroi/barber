let links = document.querySelector(".links")
let menu = document.getElementById("menu")
let menuBtn = document.querySelector("#menu-btn")
let close = document.querySelector(".close")
let contentH1 = document.querySelector(".content h1")



    menu.onclick = function () {
        links.style.width = "250px" ;  
        close.style.right = "59px" ; 
        menu.style.right = "-55px" ;
        
    }
    close.onclick = function(){ 
        links.style.width = "0%" ;  
        close.style.right = "-55px" ; 
        menu.style.right = "55px" ;
    }
    links.onclick = function(){ 
        links.style.width = "0%" ;  
        close.style.right = "-55px" ; 
        menu.style.right = "55px" ;
    }

