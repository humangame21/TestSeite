


var i = true;


$(document).ready(function () {
    $("p#verschwinde").click(function(){
        if(i) {
            $(this).text("es geht");
            i = false;
        } else {
            $(this).text("es geht nicht");
            i = true;
        }
    })
});