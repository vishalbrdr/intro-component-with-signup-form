const myForm = document.querySelector("form")
const inputGrp = document.querySelectorAll(".input-group")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    inputGrp.forEach((e) => {
        if (e.querySelector("input").value === "") {
            e.classList.add("error")
        }
    })
    if (document.querySelector("#email").value !== "") {
        inputGrp[2].querySelector(".err-txt").classList.add("hidden")
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            document.querySelector('#email').value
        ) === false) {
            inputGrp[2].classList.add("error")
            inputGrp[2].querySelector(".err-email-txt").classList.remove("hidden")

        }
        inputGrp[2].querySelector(".err-txt").classList.remove("hidden")
    } else {
        inputGrp[2].querySelector(".err-email-txt").classList.add("hidden")
    }
})
inputGrp.forEach(e => {
    e.querySelector("input").addEventListener("click", () => {
        e.classList.remove("error")
    })
})
