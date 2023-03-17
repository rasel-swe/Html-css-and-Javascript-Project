const Elements = document.querySelectorAll(".slide-item");

 let countElements = 1;
setInterval(() =>{
    countElements ++;
    const Currentelement = document.querySelector(".current")

    Currentelement.classList.remove("current")

    if(countElements > Elements.length){
        Elements[0].classList.add("current")
        countElements =1;
    }
    else{
        Currentelement.nextElementSibling.classList.add("current")
    }
    
},2000)