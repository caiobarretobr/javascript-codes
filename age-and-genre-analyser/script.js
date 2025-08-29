function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Erro")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value )
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 16) {
                // Criança
                img.setAttribute("src", "pexels-bess-hamiti-35537.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "pexels-simon-robben-977796.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "pexels-chloe-1043474.png")
            } else {
                // Idoso
                img.setAttribute("src", "pexels-pixabay-34534.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 15) {
                // Criança
                img.setAttribute("src", "pexels-anastasiya-gepp-1462636.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "pexels-samantha-garrote-2467389.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "pexels-fabio-scaletta-2771179.png")
            } else {
                // Idoso
                img.setAttribute("src", "pexels-linkedin-sales-navigator-1251833.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
