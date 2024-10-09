$(function(){
    //$.ajax({}) $.get() $.post({})
    $.get('https://jsonplaceholder.typicode.com/todos/1')
    .done(function(d){
        console.log(d)
    })
    .fail(function(){})
    .always(function(){})
})