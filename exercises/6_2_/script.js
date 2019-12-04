var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    firstDay: 1,
    maxDate: new Date(2022, 12, 31),
    yearRange: [2000, 2020]

});

validation.init("form");

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

let botao = document.getElementById('limpar')
botao.addEventListener('click', function () {
    window.location.reload();
})
