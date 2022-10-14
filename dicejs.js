function dicenumber(){
    let n = Math.floor(Math.random()*5)+1;
    return n;
}

function playgame(event){
    play();
}

const btn = document.querySelector(".play");
btn.addEventListener('click', playgame);

function play(){
    let player1 = dicenumber();
    let player2 = dicenumber();
    if(player1==1){
        document.getElementById("img1").setAttribute("src" , "images/dice1.jpg");
    }
    else if(player1==2){
        document.getElementById("img1").setAttribute("src" , "images/dice2.jpg");
    }
    else if(player1==3){
        document.getElementById("img1").setAttribute("src" , "images/dice3.jpg");
    }
    else if(player1==4){
        document.getElementById("img1").setAttribute("src" , "images/dice4.jpg");
    }
    else if(player1==5){
        document.getElementById("img1").setAttribute("src" , "images/dice5.jpg");
    }else{
        document.getElementById("img1").setAttribute("src" , "images/dice6.jpg");
    }
    if(player2==1){
        document.getElementById("img2").setAttribute("src" , "images/dice1.jpg");
    }
    else if(player2==2){
        document.getElementById("img2").setAttribute("src" , "images/dice2.jpg");
    }
    else if(player2==3){
        document.getElementById("img2").setAttribute("src" , "images/dice3.jpg");
    }
    else if(player2==4){
        document.getElementById("img2").setAttribute("src" , "images/dice4.jpg");
    }
    else if(player2==5){
        document.getElementById("img2").setAttribute("src" , "images/dice5.jpg");
    }else{
        document.getElementById("img2").setAttribute("src" , "images/dice6.jpg");
    }
    
    if(player1==player2){
        document.getElementsByClassName("result")[0].innerHTML="<h1>Oh! It's a Tie!</h1>";
    }
    else if(player1 > player2){
        document.getElementsByClassName("result")[0].innerHTML="<h1>Player 1 wins !</h1>";    
    }
    else{
        document.getElementsByClassName("result")[0].innerHTML="<h1>Player 2 wins !</h1>";
    }
    
}

