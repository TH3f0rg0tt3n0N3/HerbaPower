document.getElementById('openMenu').onclick = function() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("overlay").style.width = "80%";
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("copyright").style.visibility = "visible";
    
}

/*het menu sluiten*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("copyright").style.visibility = "hidden";
}

/**
 * @functionName:       generateNewsItems
 * @madeBy:             Gabriël Pouw
 * @LastEdited:         21-02-2019
 * @Param:              none
 */