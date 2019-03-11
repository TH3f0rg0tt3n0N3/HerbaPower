document.getElementById('openMenu').onclick = function() {
    document.getElementById("mySidenav").classList.add("show");
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").classList.add("showOverlay");
}

/*het menu sluiten*/
function closeNav() {
    document.getElementById("mySidenav").classList.remove("show");
    document.getElementById("overlay").classList.remove("showOverlay");
    setTimeout(function(){
        document.getElementById("overlay").style.visibility = "hidden";
    }, 500);
}

/**
 * @functionName:       generateNewsItems
 * @madeBy:             Gabriël Pouw
 * @LastEdited:         21-02-2019
 * @Param:              none
 */