// var header = document.querySelector("h1")
// header.style.color="blue"

function randomcolor(){
    letters = "0123456789ABCDEF"
    color="#"
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}
function colorvary(header){
    colorinput = randomcolor()
    header.style.color=colorinput;
    setInterval("colorvary()",500);
}

// setInterval("colorvary()",500);

$(document).ready(function(){
    var header = $("h1");
    colorvary(header);
    // function colorvary(){
    //     colorinput = randomcolor();
    //     function randomcolor(){
    //         letters = "0123456789ABCDEF"
    //         color="#"
    //         for(var i=0;i<6;i++){
    //             color += letters[Math.floor(Math.random()*16)]
    //         }
    //         return color
    //     }
    // header.style.color=colorinput;
    // }
    

})



$(document).ready(function(){
    $("#btn1").click(function(){
        $("h1").before("<b>Before</b>");
    });
    $("#btn2").click(function(){
        $("h1").after("<u>After</u>");
    });
})


$(document).ready(function(){
    $("#btn3").click(function(){
        var div = $("div");
        startAnimation();
        function startAnimation(){
            div.animate({width:300},"slow");
            div.animate({height:300},"slow");
            div.css("background-color","blue");
            div.animate({height:100},"slow");
            div.animate({width:100},"slow",startAnimation);
        }
    })

})

$(document).ready(function(){
    $("#btn4").click(function(){
        var div = $("div");
        div.stop();
        div.stop();
        div.stop();
        div.css({width:100});
        div.css({height:100});
        div.css("background-color","red");
    })
})