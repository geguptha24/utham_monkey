let emoji = document.querySelector("div");
let txt = document.getElementById("text");
let s = document.getElementById("span");



function myEmoji(){
    if(emoji.innerHTML === "🙈"){
        emoji.innerHTML = "🐵"
        txt.innerHTML = "I don't want to see your Face, <span>Go away!<span>"
        
    }
    else if(emoji.innerHTML === "🐵"){
        emoji.innerHTML = "🙈";
        txt.innerHTML = "I want to see you!, <span>Could you tap on my face<span>"
    }
}


// 🐵🙈