
var field = [];
var playerturn = true;


function createField() {
    var counter = 0;
    for(i=1; i<4; i++) {
        for(j=1; j<4; j++) {
            field[counter] = "-";
            counter++;

        }
    }
}
$(document).ready(function(){
    console.log("started");
    for(i = 0; i < 9; i++) {
        $("div#spiel" + i).on('click', function () {
                console.log("clicked");
                var player = "";
                if (playerturn) {
                    console.log("X ist dran!");
                    player = "X";
                    x(this);
                    playerturn = false;
                } else {
                    console.log("Y ist dran!");
                    player = "Y";
                    y(this);
                    playerturn = true;
                }
                $("p#player").text(player + " ist dran!");
                //reloadField();
            }
        );
    }
});
function x(content) {
    //console.log(content);
    $(content).text("x");
    $(content).css("background-color", "red");
}
function y(content) {
    //console.log(content);
    $(content).text("y");
    $(content).css("background-color", "blue");
}