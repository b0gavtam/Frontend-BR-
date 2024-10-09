$(document).ready(function(){ //amikor az oldal betöltődött

})
$(function(){ 
    console.log("betöltött")
    $(".bg-danger").click(function() { 
        $(this).hide(500);
    })
    $(".bg-success").mouseover(function(){ 
        $(this).fadeOut();
    })
    $(".bg-primary").mouseleave(function(){ 
        $(this).slideUp(500)
    })
    $(".btn-outline-warning").click(function(){ 
        $("div").fadeIn(500) //összes divre hatással van
    })
    $(".btn-success").click(function(){
        for (let i = 0; i < 3; i++) {
            
            $(".bg-secondary").animate({height: "250px"},"slow")
            $(".bg-secondary").animate({width: "250px"},"slow")
            $(".bg-secondary").animate({height: "96px"},"slow")
            $(".bg-secondary").animate({width: "96px"},"slow")
        } 
        $(".bg-secondary").fadeOut()
        $(".bg-secondary").fadeIn()
    })
})