import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")

const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")





const setCardType = (type) => {
    const colors = {
        visa: ["#436099", "#2057F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "gray"],
    }

    ccBgColor01.setAttribute("fill", colors[type][0])
    ccBgColor02.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("default")

globalThis.setCardType = setCardType

//Recebe o elemento input
let securityCode = document.querySelector('#security-code')

//Padronização da mascara
const securityCodePattern = {
    mask: "0000",
}

//aplicação da Mascara IMask(Elemento, MascaraPadronizada)
let securityCodeMasked = IMask(securityCode, securityCodePattern)

//Recebe o elemento input
let expirationDate = document.querySelector("#expiration-date")

//Padronização da mascara
let expirationDatePattern = {
    mask: "MM{/}YY",
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        // Transforma a data atual em string, "fatia" do dado, recuperando somente os dois ultimos digitos do ano
        from: String(new Date().getFullYear()).slice(2),
        // Mesma função da propriedade anterior, porém soma +10 para receber um intervalo de 10 anos
        to: String(new Date().getFullYear() + 10).slice(2)
      },
      MM: {
        //mascara predefinida do IMask
        mask: IMask.MaskedRange,
        //de
        from: 1,
        //para
        to: 12
      }  
    }
}

//aplicação da Mascara IMask(Elemento, MascaraPadronizada)
let expirationCodeMasked = IMask(expirationDate, expirationDatePattern)



