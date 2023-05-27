function contar(){
        var ini = window.document.getElementById('inicio')
        var fim = window.document.getElementById('fim')
        var passo = window.document.getElementById('passo')
        var res = window.document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
            window.alert('[ERRO] Faltam dados!')
        } else {
            res.innerHTML = 'Contando: <br>'
            let i = parseInt(ini.value)
            let f = parseInt(fim.value)
            let p = parseInt(passo.value)
            if (p <=0) {
                window.alert('Passo invalido! Considerando passo 1')
                p = 1
            }
            if (i < f) {
                //contagem crescente
                for (let c = i;c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }else {
                //Contagem Regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += ` \u{1F3C1}`
        }

    }