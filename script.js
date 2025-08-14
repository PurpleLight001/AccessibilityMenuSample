let fontC = 16

document.getElementById("addFontSize").addEventListener("click", () => {
    document.documentElement.style.fontSize = fontC + 2 + 'px'
    fontC +=2
})

document.getElementById("decreaseFontSize").addEventListener("click", () => {
    document.documentElement.style.fontSize = (fontC - 2) + 'px'
    fontC -=2
})

document.getElementById("restartFontSize").addEventListener("click", () => {
    document.documentElement.style.fontSize = '16px'
    fontC = 16
})

document.getElementById("btnContrast").addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
    } else {
        document.documentElement.classList.add("dark")
    }
})