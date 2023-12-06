document.addEventListener('DOMContentLoaded', function() {
    const ambientes = ['casa', 'rua', 'escola', 'parque'];

    ambientes.forEach(function(ambiente) {
        const lista = document.getElementById(`${ambiente}-lista`);
        
        atividades[ambiente].forEach(function(atividade) {
            const li = document.createElement('li');
            li.innerHTML = `
                <label>
                    <input type="checkbox" id="${ambiente}-${atividade}" />
                    ${atividade} - 😊 Gostou? <input type="checkbox" id="${ambiente}-${atividade}-gostou" />
                </label>
            `;

            if (ambiente === 'casa') {
                li.innerHTML += ` - 🏡 Gosta de fazer com a mãe? <input type="checkbox" id="${ambiente}-${atividade}-mae" />`;
                li.innerHTML += ` - 👨‍👩‍👧 Gosta de fazer com o pai? <input type="checkbox" id="${ambiente}-${atividade}-pai" />`;
                li.innerHTML += ` - 👧 Gosta de fazer com a irmã? <input type="checkbox" id="${ambiente}-${atividade}-irma" />`;
                li.innerHTML += ` - ❌ Não gosta de fazer com a mãe? <input type="checkbox" id="${ambiente}-${atividade}-nao-gosta-mae" />`;
                li.innerHTML += ` - ❌ Não gosta de fazer com o pai? <input type="checkbox" id="${ambiente}-${atividade}-nao-gosta-pai" />`;
                li.innerHTML += ` - ❌ Não gosta de fazer com a irmã? <input type="checkbox" id="${ambiente}-${atividade}-nao-gosta-irma" />`;
            }

            lista.appendChild(li);
        });
    });
});

function gerarRelatorio() {
    const relatorio = {};

    const ambientes = ['casa', 'rua', 'escola', 'parque'];

    ambientes.forEach(function(ambiente) {
        relatorio[ambiente] = {};

        atividades[ambiente].forEach(function(atividade) {
            const praticou = document.getElementById(`${ambiente}-${atividade}`).checked;
            const gostou = document.getElementById(`${ambiente}-${atividade}-gostou`).checked;
            const gostaMae = document.getElementById(`${ambiente}-${atividade}-mae`).checked;
            const gostaPai = document.getElementById(`${ambiente}-${atividade}-pai`).checked;
            const gostaIrma = document.getElementById(`${ambiente}-${atividade}-irma`).checked;
            const naoGostaMae = document.getElementById(`${ambiente}-${atividade}-nao-gosta-mae`).checked;
            const naoGostaPai = document.getElementById(`${ambiente}-${atividade}-nao-gosta-pai`).checked;
            const naoGostaIrma = document.getElementById(`${ambiente}-${atividade}-nao-gosta-irma`).checked;
            const chateada = document.getElementById(`${ambiente}-chateada`).value;
            
            relatorio[ambiente][atividade] = {
                praticou,
                gostou,
                gostaMae,
                gostaPai,
                gostaIrma,
                naoGostaMae,
                naoGostaPai,
                naoGostaIrma,
                chateada
            };
        });
    });

    console.log(relatorio);
}

const ambientes = ['casa', 'rua', 'escola', 'parque'];

const atividades = {
    casa: [
        'Arrumar o quarto', 'Assistir TV', 'Brincar', 'Jantar',
        'Brincar com irmã', 'Brincar com mãe', 'Brincar com pai', 'Desenhar', 'Pintar',
        'Escrever', 'Tomar banho', 'Escovar dentes', 'Tomar café', 'Lavar cabelo',
        'Se arrumar', 'Almoço', 'Café', 'Janta', 'Dormir'
    ],
    rua: [
        'Passear', 'Andar de bicicleta', 'Brincar com amigos', 'Correr', 'Pular'
    ],
    escola: [
        'Estudar', 'Brincar no recreio', 'Aprender algo novo', 'Desenhar', 'Pintar', 'Escrever'
    ],
    parque: [
        'Brincar nos brinquedos', 'Picnic', 'Correr', 'Pular', 'Bonecas'
    ]
};
