
var field = [];
var playerturn = true;


function createField() {
    var counter = 0;
    for(i=1; i<4; i++) {
        for(j=1; j<4; j++){
            field[counter] = "-";
            $("#spiel").append("<div class='spiel" + counter + " field'>" + field[counter] + "</div>");
            counter++;
        }
        $("#spiel").append("</br>");
    }
}
function reloadField() {
    var counter = 0;
    for(i=1; i<4; i++) {
        for(j=1; j<4; j++){
            $("#spiel").append("<div class='spiel" + counter + "'>" + field[counter] + "</div>");
            counter++;
        }
        $("#spiel").append("</br>");
    }
}
$(document).ready(function(){
    console.log("started");
    $('div.field').on('click', function() {
        console.log("clicked");
        var player = "";
            if (playerturn) {
                console.log("X ist dran!");
                player = "X";
                x($(this).text());
                playerturn=false;
            } else {
                console.log("Y ist dran!");
                player = "Y";
                y($(this).text());
                playerturn=true;
            }
            $("p#player").text(player + " ist dran!");
            //reloadField();
        }
    );
});
function x(content) {

    if(content.localeCompare("-")) {
        console.log(content);
    }

}
function y(content) {
    if(content.localeCompare("-")) {
        console.log(content);
    }

}