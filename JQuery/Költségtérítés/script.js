$(function () {
    var rendszamtest = /(^[A-Za-z]{2}-[A-Za-z]{2}-\d{3}$ | ^[A-Za-z]{3}-\d{3}$)/;
    var egyegartest = /^\d{3}$/
    var szamtest = /^\d$/
    let egysegar;
    let rendszam;
    let megtett;
    let honnanhova;


    let benzin = [
        {
            value: '7.6',
            text: '1000 cm3-ig'
        },
        {
            value: '8.6',
            text: '1001 - 1500 cm3-ig'
        },
        {
            value: '9.5',
            text: '1501 - 2000 cm3-ig'
        },
        {
            value: '11.4',
            text: '2001 - 3000 cm3-ig'
        },
        {
            value: '13.3',
            text: '3001 cm3 felett'
        }
    ]
    let diesel = [
        {
            value: '5.7',
            text: '1500 cm3-ig'
        },
        {
            value: '6.7',
            text: '1501 - 2000 cm3-ig'
        },
        {
            value: '7.6',
            text: '2001 - 3000 cm3-ig'
        },
        {
            value: '9.5',
            text: '3001 cm3 felett'
        }
    ]
    let uzemanyag;
    let filled = [false, false, false, false, false, true, false, false];
    $("form").submit(function (e) {   //Az kitöltött űrlap elemei nem kerülnek törlésre.
        e.preventDefault();
    })

    $("[name=uzemanyagInput]").change(function () {
        uzemanyag = $(this).val();
        filled[0] = true;
        console.log(filled)
        $("#cm3Input").html('<option value="-1"></option>');
        if (uzemanyag === "diesel") {
            getUzemanyag(diesel);
        }
        else {
            //benzin, elektromos és lpg meghajtású járművek esetén a benzinhez viszonyít
            getUzemanyag(benzin);
        }
    })
    $("[name = amortizaciosDijInput]").change(function(){
        filled[1] = true;
        console.log(filled)
    })
    $("#arLiterInput").change(function(){
        egysegar = $(this).val();
        if (egyegartest.test(egysegar)) {
                filled[2] = true;
                console.log(filled)
        }
    })
    $("#cm3Input").change(function(){
        filled[3] = true;
        console.log(filled)
    })
    $("#rendszmInput").change(function(){
        rendszam = $(this).val();
        if (rendszamtest.test(rendszam)) {
            filled[4] = true;
            console.log(filled)
        }
    })
    $("#HonnanHovaInput").change(function(){
        honnanhova = $(this).val();
        if (!szamtest.test(honnanhova)) {
            filled[6] = true;
        }
    })
    $("#megtettTInput").change(function(){
        megtett = $(this).val();
        if (szamtest.test(megtett)) {
            filled[7] = true;
        }
    })

    $("input, select").change(function () {
        if (!filled.includes(false)) {
            $("[type=submit]").attr("disabled", false);
        }
    })

})

function getUzemanyag(t) {
    t.forEach((o) => {
        $("#cm3Input").append(`<option value="${o.value}">${o.text}</option>`);
    })
}

function isFilled() {

}