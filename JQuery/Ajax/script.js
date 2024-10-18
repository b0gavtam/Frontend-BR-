$(function(){
    //$.ajax({}) $.get() $.post({})
    const url = "https://jsonplaceholder.typicode.com/todos";
    const data = {
        'userId' : "2",
        'title' : 'próba',
        'body' : 'ez egy próba.'
    }
    $.get(url)
    .done(function(d){
        console.log(d)
        let size = d.length;
        $("input").attr("max", size);
    })
    $("input").change(function(){
        let num = $(this).val(); //input value attribútum kiolvasása
        $.ajax({
            url : url + "/" + num, //kulcs : érték
            method: "GET",
            dataType: "json"
        })
        .done(function(d){
           // $(".todo").html(JSON.stringify(d))
           let o = JSON.stringify(d)
           let html = `<table>
           <tr>
           <th>Kulcs</th>
           <th>Érték</th>
           </tr>`

           for (const key in d) {
            html += `<tr>
                        <td>${key}</td>
                        <td>${d[key]}</td>
                    </tr>` 
           }
           html += `</html>`
            console.table(d)
        })
    })
    //.fail(function(){}) hiba esetén
    //.always(function(){}) mindenképp lefut

    $(document).on('click', '#kuld', function(){
        $.ajax({
            url : url + 'posts',
            method : 'POST',
            dataType : 'json',
            data : data
        })
        .done(function(d){
            console.table(d)
        })
    })

   $("#modosit").click(function(){
        $.ajax({
            url : url + 'posts' + "1",
            method: 'PATCH',
           data : {
              title: '13.b',
            },
            dataType : 'json'
        })
        .done(function(d){
            console.table(d);
        })
        .always(function(){
            console.log("Kész")
        })
   })
   $("#torol").click(function(){
    $.ajax({
        url : url + 'posts' + '1',
        method: 'DELETE',
    })
    .done(function(d){
        console.table(d);
    })
    .always(function(){
        console.log("Kész")
    })
})

})