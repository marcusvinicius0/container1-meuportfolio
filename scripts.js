const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.6
const euro = 6.3
const bitcoin = 265000

const convertValues = () => {
    const inputReais = document.getElementById("value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("curreny-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)    
    }

    if(select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = "0"
        currencyValueText.innerHTML = inputReais / bitcoin 
    }
}

 const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/btc.png"
    }

    convertValues() // CADA VEZ QUE EU SELECIONAR ALGUMA MOEDA, CONVERTE AUTOMATICO, SEM PRECISAR CLICAR NO BUTTON
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)


