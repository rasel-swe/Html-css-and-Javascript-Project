const selectFontSize = document.getElementById("selectFont")
const selectBgColor = document.getElementById("SelectBgColor")
const resetButton = document.getElementById("button")

const mainElement = document.querySelector("main")

const setValues  = (fontSize, bgColor) =>{
    selectFontSize.value = fontSize;
        selectBgColor.value = bgColor;
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;
}

const InitailSetUp = () =>{
    const bgColor = localStorage.getItem('bgColor')
    const fontSize = localStorage.getItem("fontSize");

    if(fontSize && bgColor){
       setValues(fontSize, bgColor)
    }
    
    if(!fontSize && !bgColor){
        setValues("16px", "bisque")
    }
    if(!fontSize && bgColor){
        setValues("16px", bgColor)
        
    }
    if(fontSize && !bgColor){
        etValues(fontSize,"bisque")
    }
    
}

const changeFontSize = (event) =>{
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize)
}
const changeBgColor = (event)=>{
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem('bgColor', selectedBgColor)
    
}
const clearLocalStorage = ()=>{
    localStorage.removeItem("bgColor")
    localStorage.removeItem("fontSize")
    setValues("16px", "bisque")
}

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

InitailSetUp();