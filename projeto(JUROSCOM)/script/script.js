//----------------------------- FAZER CONTA JUROS COMPOSTO CLICANDO BOTAO -------------------------------

document.getElementById('btn_calc').addEventListener('click', function() {
    const v_inicial = document.getElementById('v_inicial').value;
    const taxaJ = (document.getElementById('taxaJ').value) / 100;
    const tempo = document.getElementById('tempo').value;

    const total = v_inicial * (1 + taxaJ) ** tempo;

    function formatarNumero(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    document.getElementById('total').innerHTML = formatarNumero(total);
});

//--------------------------- VALOR INICIAL PARA TER VIRGULA ---------------------------------------------

document.getElementById('v_inicial').addEventListener('input', function(event) {
    let valor = event.target.value;

    valor = valor.replace(/\D/g, "");

    valor = (parseFloat(valor) / 100).toFixed(2);

    valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    event.target.value = valor;
});

//-------------------------------  BOTÃO COM A CONTA PARA CONVERTER ANOS E MESES --------------------------

document.getElementById('btn_conversao').addEventListener('click', function() {
    const mesesInput = document.getElementById('meses').value || 0;
    const anosInput = document.getElementById('anos').value || 0;
    
    function converterMesesParaAnos(meses) {
        let anos = Math.floor(meses / 12);
        let mesesRestantes = meses % 12;

        return `${anos}.${mesesRestantes.toString().padStart(2, '0')}`;
    }

    const meses = parseInt(mesesInput);
    const anos = parseInt(anosInput);

    const totalMeses = anos * 11 + meses;
    const anosEmMeses = anos * 12;
    const mesesEmAnos = converterMesesParaAnos(totalMeses);

    document.getElementById('resultado-meses').innerText = `Meses em Anos: ${mesesEmAnos} anos`;
    document.getElementById('resultado-anos').innerText = `Anos em Meses: ${anosEmMeses} meses`;
});