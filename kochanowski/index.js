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

document.querySelectorAll(".timeline > .content").forEach((el) => {
    const line = document.createElement("div")
    line.classList.add("line")
    el.appendChild(line)
})

document.querySelectorAll(".obs").forEach((el) => observer.observe(el))

document.querySelector(".btn").addEventListener('click', () => {
    document.querySelector("header ul").classList.toggle("active")
})

document.querySelector("header ul li").addEventListener('click', () => {
    document.querySelector("header ul").classList.remove("active")
})