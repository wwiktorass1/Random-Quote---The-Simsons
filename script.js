document.getElementById("year").innerHTML = new Date().getFullYear() +" m.";

let btn = document.getElementById("randomm");
btn.addEventListener("click", function () {
    let proxyForCors ="https://cors-anywhere.herokuapp.com/";
    $.getJSON( proxyForCor +"https://thesimpsonsquoteapi.glitch.me/quotes", function( data ) {
        console.log(data);
       let quote = (data[0].quote);
        console.log(quote);
         let imgSrc = (data[0].image);
        console.log(imgSrc);

             let character= (data[0].character);
        console.log(character);

        document.getElementById("citation").innerHTML = quote;
         document.getElementById("character").innerHTML = character;
        document.getElementById("right").src = imgSrc;
    });
})

