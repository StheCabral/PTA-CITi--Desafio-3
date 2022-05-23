const page = document.getElementById('background')
const button = document.querySelector('.button')

const changeColor = (click) => {
    const currentClass = page.classList
    
        if (currentClass.contains("black")){
            currentClass.replace("black", "white")
            document.getElementById("colorcode").textContent="#F2F2F2"
            return
        } 

        if (currentClass.contains("white")){
            currentClass.replace("white", "gray")
            document.getElementById("colorcode").textContent="#E5E5E5"
            return
        } 

        if (currentClass.contains("gray")){
            currentClass.replace("gray", "black")
            document.getElementById("colorcode").textContent="#292929"
            return
        } 
}
button.addEventListener('click', changeColor)