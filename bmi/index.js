const changeSlide = (index) => {
    document.querySelectorAll('.slide').forEach(el => {
        el.classList.remove("enabled")
    })
    document.querySelector(".slide.s" + (Number(index) + 1)).classList.add("enabled")
}

const getPlec = () => {return document.querySelector(".circle").getAttribute("select")}

const resetData = () => {
    document.querySelectorAll(".inp input").forEach(el => {el.value = ""})
}

const changePlec = (direction) => {
    const circle = document.querySelector(".circle")
    const body = document.querySelector("body")
    switch (direction) {
        case "left":
            if (circle.getAttribute("select") == "female") {
                circle.setAttribute("select", "male")
            } else if (circle.getAttribute("select") == "male") {
                circle.setAttribute("select", "helicopter")
            } else {
                circle.setAttribute("select", "female")
            }
            break
        case "right":
            if (circle.getAttribute("select") == "female") {
                circle.setAttribute("select", "helicopter")
            } else if (circle.getAttribute("select") == "helicopter") {
                circle.setAttribute("select", "male")
            } else {
                circle.setAttribute("select", "female")
            }
            break
    }
    body.className = circle.getAttribute("select")
}

document.querySelectorAll(".inp input").forEach(el => {
    el.addEventListener("focusout", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled")
            if (Number(event.target.value) < 2) el.classList.add("error")
        } else {
            event.target.nextElementSibling.classList.remove("filled")
            el.classList.add("error")
        }
    })
    el.addEventListener("focusin", (event) => {event.target.nextElementSibling.classList.add("filled") })
    el.addEventListener("input", () => {el.classList.remove("error")})
})

const bmiForKids = (n1, n2, n3, n4, n5, bmi) => {
    const state = document.querySelector('#state')
    if (bmi < n1) {
        state.innerText = "Wygłodzenie (-3 SD)"
    } else if (bmi < n2) {
        state.innerText = "Wychudzenie (-2 SD)"
    } else if (bmi < n3) {
        state.innerText = "Niedowaga (-1 SD)" 
    } else if (bmi < n4) {
        state.innerText = "Norma (0 SD)"
    } else if (bmi < n5) {
        state.innerText = "Nadwaga (1 SD)" 
    } else if (bmi) {
        state.innerText = "Otyłość (2 SD)" 
    }
}

const bmi = () => {
    let isFilled = true
    document.querySelectorAll(".inp input").forEach(el => {
        if (el.value === "" || Number(el.value) < 2) {
            isFilled = false
            el.classList.add("error")
        }
    })
    if (isFilled) {
        const height = Number(document.querySelector("#height").value)
        const age = Number(document.querySelector("#age").value)
        if (age > 6 && height < 100) {
            // 
            document.querySelector("#height").classList.add("error")
        } else {
            const weight = Number(document.querySelector("#weight").value)
            const plec = document.querySelector(".circle").getAttribute("select")
            const bmi = weight / Math.pow((height / 100), 2)
            document.querySelector("#result").innerText = (Math.round(bmi * 100) / 100).toString()
            
            if (age == 2) {
                bmiForKids(12.5, 13.5, 14.5, 17, 18.9, bmi)
            } else if (age == 3) {
                bmiForKids(12.1, 13.1, 14.2, 16.7, 18.2, bmi)
            } else if (age == 4) {
                bmiForKids(12, 13, 14, 16.7, 18.3, bmi)
            } else if (age == 5) {
                bmiForKids(12.1, 13, 14.1, 16.7, 18.4, bmi)
            } else if (age == 6) {
                bmiForKids(12.2, 13.1, 14.1, 16.9, 18.9, bmi)
            } else if (age == 7) {
                bmiForKids(12.3, 13.2, 14.3, 17.3, 19.4, bmi)
            } else if (age == 8) {
                bmiForKids(12.5, 13.4, 14.5, 17.8, 20.3, bmi)
            } else if (age == 9) {
                bmiForKids(12.6, 13.6, 14.8, 18.3, 21.2, bmi)
            } else if (age == 10) {
                bmiForKids(12.9, 13.9, 15.1, 18.9, 22.2, bmi)
            } else if (age == 11) {
                bmiForKids(13.2, 14.2, 15.6, 19.8, 23.3, bmi)
            } else if (age == 12) {
                bmiForKids(13.6, 14.7, 16.2, 20.4, 24.2, bmi)
            } else if (age == 13) {
                bmiForKids(14, 15.2, 16.7, 21.4, 25.3, bmi)
            } else if (age == 14) {
                bmiForKids(14.5, 15.8, 17.4, 22.3, 26.5, bmi)
            } else if (age == 15) {
                bmiForKids(14.9, 16.3, 18, 23.3, 27.4, bmi)
            } else if (age == 16) {
                bmiForKids(15.2, 16.7, 18.6, 24, 28.4, bmi)
            } else if (age == 17) {
                bmiForKids(15.6, 17.1, 19.1, 24.7, 29, bmi)
            } else if (age == 18) {
                bmiForKids(15.8, 17.4, 19.4, 25, 29.5, bmi)
            } else {
                const state = document.querySelector("#state")
                if (bmi < 16) {
                    state.innerText = "Wygłodzenie"; 
                } else if (bmi < 17) {
                    state.innerText = "Wychudzenie"; 
                } else if (bmi < 18.5) {
                    state.innerText = "Niedowaga"; 
                } else if (bmi < 25) {
                    state.innerText = "Norma"; 
                } else if (bmi < 30) {
                    state.innerText = "Nadwaga"; 
                } else if (bmi < 35) {
                    state.innerText = "Otyłość I st."; 
                } else if (bmi < 40) {
                    state.innerText = "Otyłość II st."; 
                } else {
                    state.innerText = "Otyłość III st."; 
                }
            }

            if (plec === "helicopter") {
                document.querySelector("#infoPlec").innerText = "Helikopter bojowy"
            } else if (plec === "female") {
                document.querySelector("#infoPlec").innerText = "Kobieta"
            } else if (plec === "male")  {
                document.querySelector("#infoPlec").innerText = "Mężczyzna"
            } else {
                document.querySelector("#infoPlec").innerText = "<error>"
            }
            document.querySelector("#infoWeight").innerText = weight
            document.querySelector("#infoHeight").innerText = height
            document.querySelector("#infoAge").innerText = age

            changeSlide(3)
        }
    }
}