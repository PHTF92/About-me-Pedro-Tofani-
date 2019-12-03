let estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)',
    'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)',
    'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)',
    'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)',
    'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)']
for (let i = 0; i < 27; i++) {
    let addEstado = document.createElement('option');
    addEstado.innerHTML = estados[i];
    addEstado.value = estados[i];
    document.getElementsByTagName('select')[0].appendChild(addEstado);
}
let enviar2 = document.getElementsByTagName('button')[1];
enviar2.addEventListener('click', function () {
    event.preventDefault();
    let caminhoInput = document.getElementsByTagName('input');
    let comprimento = caminhoInput.length;
    let divPai = document.getElementsByTagName('div')[0];
    for (let i=0; i<comprimento; i++){
        let addDiv = document.createElement('div');
        addDiv.innerHTML = caminhoInput[i].value;
        divPai.appendChild(addDiv);

    }
    let string = document.getElementById('dataDeComeco').value;
    let arranjo = string.split('/');
    if (arranjo[0] < 0 || arranjo[0] > 31) alert('O dia do mês deve estar entre 1 e 31')
    if (arranjo[1] < 0 || arranjo[1] > 12) alert('O mês deve estar entre 1 e 12');
    if (arranjo[2] < 0) alert('Ano deve ser positivo');
})

let botao = document.getElementById('limpar')
botao.addEventListener('click', function(){
    window.location.reload();
})