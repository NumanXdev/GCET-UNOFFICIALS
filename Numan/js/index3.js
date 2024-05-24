let btn=document.querySelector(".nav-icon");
let home=document.querySelector(".home");
let result=document.querySelector(".result")
btn.addEventListener("click",()=>{
    // console.log("Button Clicked");
    // btn.classList.toggle("result");
    if (result.classList.contains("result")) {
        result.classList.replace("result", "right");
      } else {
        result.classList.replace("right", "result");
      }
    

    
    if (home.classList.contains("home")) {
        home.classList.replace("home", "remove");
      } else {
        home.classList.replace("remove", "home");
      }
})
