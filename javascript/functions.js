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
 * @lastEdited:         21-02-2019
 * @param:              none
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