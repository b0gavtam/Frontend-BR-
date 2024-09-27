let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let pwdPattern = /^[\w]{8,256}$/
let irszamPattern =  /^[0-9]{4}$/
let errors = [];
$(function(){ 
    $("form").submit(function(event){ 
        event.preventDefault();
    })
    $("input").change(function(){
       
        let email = $(this).val().trim();
        let pwd = $(this).val().trim();
        let irsz = $(this).val().trim();
        let type = $(this).attr("type");
        if (!emailPattern.test(email) && type == "email"){
            errors.push("<p>Az email formátuma nem megfelelő!</p>");
        }
        else{
            errors = errors.filter(error => !error.includes("email"))
        }
        if (!pwdPattern.test(pwd) && type == "password"){
            errors.push("<p>Az jelszó hossza nem megfelelő!</p>");
        }
        else{
            errors = errors.filter(error => !error.includes("jelszó"))
        }
        if (!irszPattern.test(irsz) && type == "text"){
            errors.push("<p>Az irányítószám nem megfelelő!</p>");
        }
        else{
            errors = errors.filter(error => !error.includes("irányítószám"))
        }
        $(".error").html(errors.join(""));
    })
    $(".error").html(errors.join(" "));
    console.table(errors);
})