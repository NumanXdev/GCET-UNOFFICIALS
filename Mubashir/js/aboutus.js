const githubIcon = document.querySelector(".github img");
const whatsappIcon = document.querySelector(".whatsapp img");
const discordIcon = document.querySelector(".discord img");
const telegramIcon = document.querySelector(".telegram img");

githubIcon.addEventListener("click", function() {
  window.open("https://github.com/GCET-CSE2022", '_blank');
});

whatsappIcon.addEventListener("click", function() {
  window.open("https://chat.whatsapp.com/L5vYSCtHPNF5Pg2y9CWVL0", '_blank');
});

discordIcon.addEventListener("click", function() {
  window.open("https://discord.gg/gqssZq7f", '_blank');
});

telegramIcon.addEventListener("click", function() {
  window.open("https://t.me/codeclubio", '_blank');
});


let btn=document.querySelector(".nav-icon");
let updates=document.querySelector(".updates");
let result=document.querySelector(".result")
btn.addEventListener("click",()=>{
    // console.log("Button Clicked");
    // btn.classList.toggle("result");
    if (result.classList.contains("result")) {
        result.classList.replace("result", "right");
      } else {
        result.classList.replace("right", "result");
      }
    if (updates.classList.contains("updates")) {
        updates.classList.replace("updates", "remove");
      } else {
        updates.classList.replace("remove", "updates");
      }
})


