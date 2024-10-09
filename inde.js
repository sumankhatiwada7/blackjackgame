
let card1=[]
let sum=0
let isblackjack=false
let isAlive=false


let message=''
let messageel=document.getElementById("message-el")
let sumel=document.querySelector("#sum-el")
let cardel=document.querySelector(".card-el")
let card = document.querySelector("#message-el")
let message1="Drwaing new card form the deck "
function randomnumber(){
   let ran=Math.floor(Math.random()*13)+1
   if(ran==1){
    return 10
   }
   else if(ran>10){
    return 11
   }
   else {
    return ran
   }
}
function savebutton(){
isAlive=true
let firstCard=randomnumber()
let secondCard=randomnumber()
card1=[firstCard,secondCard]
 sum=firstCard+secondCard
    rendergame()
}

function rendergame(){
    cardel.textContent ="cards:"
    for(let i=0;i<card1.length;i++){
      cardel.textContent +=card1[i]+" "
    }
    sumel.textContent= "Sum:"+sum
    
    if(sum<=20){
        message="Do you want to draw a new card? 🙂"
    }
    else if(sum==21){
        message="Wohoo! You've got Blackjack! 🥳"
        isblackjack=true
    }
    else{
        message="You're out of the game! 😭"
        isAlive=false
    }
    messageel.textContent=message
}
function newcard(){
    if(isAlive==true&&isblackjack==false)
    {
        card.textContent=message1
        let thirdcard=randomnumber()
        sum+=thirdcard
        card1.push(thirdcard)
        
    
        rendergame()
    }
    
}