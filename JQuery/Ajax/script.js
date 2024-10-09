$(function(){
    //$.ajax({}) $.get() $.post({})
    let url = "https://jsonplaceholder.typicode.com/todos";
    $.get(url)
    .done(function(d){
        console.log(d)
        let size = d.length
        $("input").attr("max", size);
        $("input").change(function(){
            let num = $(this).val(); //input value attribútum kiolvasása
            url += "/" + num;
            $.ajax({
                url : url, //kulcs : érték
                method: "GET",
                dataType: "json"
            })
            .done(function(d){
                $(".content").append(JSON.stringify(d))
            })
        })
    })
    .fail(function(){})//hiba esetén
    .always(function(){}) //mindenképp lefut
})
$(function(){
    //$.ajax({}) $.get() $.post({})
    let url = "https://jsonplaceholder.typicode.com/todos";
    $.get(url)
    .done(function(d){
        console.log(d)
        let size = d.length
        $("input").attr("max", size);
        $("input").change(function(){
            let num = $(this).val(); //input value attribútum kiolvasása
            url += "/" + num;
            $.ajax({
                url : url, //kulcs : érték
                method: "GET",
                dataType: "json"
            })
            .done(function(d){
                $(".content").append(JSON.stringify(d))
            })
        })
    })
    .fail(function(){})//hiba esetén
    .always(function(){}) //mindenképp lefut
})