//Using JS
const home = document.getElementById("home");
const about = document.getElementById("about");
const research = document.getElementById("research");
const trading = document.getElementById("trading");

//Functionality after clicks
document.getElementById("homebtn").addEventListener("click", 
    ()=>{
    home.style.display = "block";
    about.style.display = "none";
    research.style.display = "none";
    trading.style.display = "none";

})

document.getElementById("aboutbtn").addEventListener("click",
    ()=>{
    home.style.display = "none";
    about.style.display = "block";
    research.style.display = "none";
    trading.style.display = "none";

})

document.getElementById("researchbtn").addEventListener("click",
    ()=>{
    home.style.display = "none";
    about.style.display = "none";
    research.style.display = "block";
    trading.style.display = "none";

})

document.getElementById("tradingbtn").addEventListener("click",
    ()=>{
    home.style.display = "none";
    about.style.display = "none";
    research.style.display = "none";
    trading.style.display = "block";

})