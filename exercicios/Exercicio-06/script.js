function analizar(){
    let num = document.getElementById('txtn')
    n.push(num)
    let tab = document.getElementById('restab')
     if (num.value.length == 0){
        alert('Digite um Valor')
     }else{
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
     }

}