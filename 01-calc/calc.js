/*let a = document.getElementById("out");
let b;

a.addEventListener("change", ()=>{
    console.log(a);
    b = document.getElementById("out").value;
    b = b.replace("x","*");
    try {
        a.value = eval(b)
    } catch (error) {
        a.value = "0";
    }
    console.log(b);
});
document.getElementById("e").addEventListener("click", ()=>{ 
    b = document.getElementById("out").value;
    b.replace("x","*");
    try {
        a.value = eval(b);
    } catch (error) {
        a.value = "0";
    }
    console.log(b)
})

document.getElementById("7").addEventListener("click", () =>{ 
    a.value += "7";
})
document.getElementById("8").addEventListener("click", () =>{ 
    a.value += "8";
})
document.getElementById("9").addEventListener("click", () =>{ 
    a.value += "9";
})
document.getElementById("4").addEventListener("click", () =>{ 
    a.value += "4";
})
document.getElementById("5").addEventListener("click", () =>{ 
    a.value += "5";
})
document.getElementById("6").addEventListener("click", () =>{ 
    a.value += "6";
})
document.getElementById("1").addEventListener("click", () =>{ 
    a.value += "1";
})
document.getElementById("2").addEventListener("click", () =>{ 
    a.value += "2";
})
document.getElementById("3").addEventListener("click", () =>{ 
    a.value += "3";
})
document.getElementById("0").addEventListener("click", () =>{ 
    a.value += "0";
})
document.getElementById("x").addEventListener("click", () =>{ 
    a.value += "*";
})
document.getElementById("/").addEventListener("click", () =>{ 
    a.value += "/";
})
document.getElementById("+").addEventListener("click", () =>{ 
    a.value += "+";
})
document.getElementById("-").addEventListener("click", () =>{ 
    a.value += "-";
})
document.getElementById(".").addEventListener("click", () =>{ 
    a.value += ".";
})*/
let be = document.getElementsByTagName("input")[0];
let buttons = document.querySelectorAll(".btn-secondary");

buttons.forEach((b) =>{
    b.addEventListener("click",() =>{ 
        be.value += b.innerHTML;
    })
})
function calc() {
    be.value = eval=(be.value.replace("x","*"));
}