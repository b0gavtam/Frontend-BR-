let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let pwdPattern = /^[\w]{8,256}$/
let irszamPattern =  /^[0-9]{4}$/
let errors = [];

$(function(){ 
    $("input").change(function(){
        let red = $(".red").val();
        let green = $(".green").val();
        let blue = $(".blue").val();
        let alpha = $(".alpha").val() / 100;

        $(".box").css("background-color", `rgba(${red},${green},${blue},${alpha})`);
        $(".kiiras").html(`<p>${red},${green},${blue},${alpha}</p>`)
    })
    $(".error").html(errors.join(" "));
    console.table(errors);
})