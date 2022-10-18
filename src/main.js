import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")

const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")






const setCardType = (type) => {
    const colors = {
        visa: ["#436099", "#2057F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "gray"],
    }

    ccBgColor01.setAttribute("fill", "green")
    ccBgColor02.setAttribute("fill", "blue")
}