
    // Header
    
    let hamburger = document.querySelector("#hamburger");
    let headerDown  = document.querySelector(".header-down");
    let cross  = document.querySelector("#cross");
    let header  = document.querySelector(".header");
    
    hamburger.addEventListener("click", ()=> {
        headerDown.style.display = "flex";
        hamburger.style.display = "none";
        cross.style.display = "flex";
        header.style.borderBottom = "1px solid #0EBFCC";

    });
    
    cross.addEventListener("click", ()=> {
        headerDown.style.display = "none";
        hamburger.style.display = "flex";
        cross.style.display = "none";
        header.style.borderBottom = "none";
    });
    