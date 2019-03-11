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
function generateNewsItems(){
    let newsAmount = 4;

    for(let i = 0; i < newsAmount; i++){
        document.getElementById("news").innerHTML += 
        `<div class="newsItem">
                <div class="newsPhotoHolder">
                <img class="newsPhoto" src="../Logos/voorbeeldGebouw.jpg">
            </div>
            <div class="newsTitle">
                <h4>
                    Nieuwe HerbaPower webshop
                </h4>
            </div>
            <div class="newsTextPreview">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        </div>`;
    }
}

generateNewsItems(); 