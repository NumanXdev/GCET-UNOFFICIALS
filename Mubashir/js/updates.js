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