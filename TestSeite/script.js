var eh = false;
jQuery(document).ready(
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



}
