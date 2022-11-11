const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anim")
        }
    })
})

document.querySelectorAll(".timeline").forEach((el) => {
    const line = document.createElement("div")
    line.classList.add("line")
    el.appendChild(line)
})

const hiddenElements = document.querySelectorAll(".obs")
hiddenElements.forEach((el) => observer.observe(el))