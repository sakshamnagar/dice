const btn = document.getElementById("btn");

btn.addEventListener("click", function onclick(event){
    var a = Math.floor((Math.random()*5)+1);
    var b = Math.floor((Math.random()*5)+1);
    document.getElementsByClassName("img1")[0].setAttribute("src", './images/dice'+a+'.png');
    document.getElementsByClassName("img2")[0].setAttribute("src", './images/dice'+b+'.png');
    if (a>b) {
        document.querySelector("h1").innerHTML="Player 1 Won!";
    } else if (a<b){
        document.querySelector("h1").innerHTML="Player 2 Won!";
    } else if (a=b) {
        document.querySelector("h1").innerHTML="Its a tie! Play again?"   
    } 
    document.getElementById("btn").innerHTML="Play Again?";
})

