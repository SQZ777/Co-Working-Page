$(document).ready(function () {
    $("img").click(function () { 
        Loop();
    });
    function Loop(){
        setTimeout(Loop2(), 500);
    }
    function Loop2(){
        $("img").toggle();
        setTimeout(Loop(),500);
    }
});