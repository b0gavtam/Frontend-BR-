$(function(){
    let benzin =[{
        value: "7.6",
        text: "1000 cm3-ig"
    },
    {
        value: "8.6",
        text: "1001-1500 cm3"
    },
    {
        value: "9.5",
        text: "1501-2000 cm3"
    },
    {
        value: "11.4",
        text: "2001-3000 cm3"
    },
    {
        value: "13.3",
        text: "3000 cm3 felett"
    }
    ]
    let diesel =[{
        value: "5.7",
        text: "1000 cm3-ig"
    },
    {
        value: "6.7",
        text: "1001-1500 cm3 alatt"
    },
    {
        value: "7.6",
        text: "1501-2000 cm3"
    },
    {
        value: "9.5",
        text: "2001-3000 cm3"
    },

    ]
    let filled = [false, true, true, true, true, true, true, true];
    let uzemanyag;
    $("form").submit(function(e){
        e.preventdefault();
    })
    $("[name = hengerurtartalom]").change(function(){
        uzemanyag = $(this).val();
        $("#hengerurtartalom").html("<option value = '-1'></option>");
        if(uzemanyag === "diesel"){
            getUzemanyag(diesel)
            //console.log(o.text);
        }
        else{
            getUzemanyag(benzin)
            //benzin,elektromos,lpg esetén a benzinhez viszonyul
        }
    })
    $("input, select").change(function(){
        if(!filled.includes(false)){
            $("[type = submit]").attr("disabled", false);
        }
    })
    function getUzemanyag(t){
        t.forEach((o)=>{
            $("#hengerurtartalom").append(`<option value = "${o.value}">${o.text}</option>`)
            })
    }
    //let opt = `<option value = \'1000\'1000 cm3 alatt</option>`;
    //$("#hengerurtartalom").append(opt);
})