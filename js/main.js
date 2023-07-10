//corregir 

const menula = document.querySelectorAll(".menula");
menula.forEach(function(mer){
    mer.addEventListener("click", function(e){
        const activeMer = document.querySelector(".active");
        activeMer.classList.remove("active");
        e.target.classList.add("active");
    });
});