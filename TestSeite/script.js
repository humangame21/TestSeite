var eh = false;
    function funktion1() {
        if(!eh) {
            $("#test").append("Test");
            eh = true;

        } else {
            $("#test").text("");
            eh = false;
        }
    }

function funktion2() {

    $("#spiel").css("display", "block");

}

function funktion3() {
        $(document).ready(function() {
            $("button").click(function(){
                $(this).hide();
            })
        })
}

$(document).ready(function(){

    var width = $(window).width;
    console.log(width);

    var getWidth = $("#spiel").width;
    console.log(getWidth)

    console.log(width/2-getWidth/2);

    $("#spiel").css("margin-left", width/2-getWidth/2+"px");

    console.log("ausgeführt");

});