let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let pwdPattern = /^[\w]{8,256}$/
$(function(){ 
    $("form").submit(function(event){ 
        event.preventDefault();
    })
    $("input").change(function(){ 
       let email = $(this).val();
       let type = $(this).attr("type");
        if(!emailPattern.test(email) && type == "email"){
            $("error").html("<p> Az email formátuma nem megfelelő! </p>")
        }
        else{ 
            $(".error").html("");
        }
        let pwd = $(this).val()
        if (!pwdPattern.test(pwd) && type == "password") {
           $("error").html("<p> A jelszó formátuma nem megfelelő! </p>")
        }
       else{ 
           $(".error").html("");
       }
    })
})