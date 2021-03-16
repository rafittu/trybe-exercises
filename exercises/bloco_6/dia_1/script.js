let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function createEstados() {
  let getEstados = document.querySelector('#estado');

  for (let index = 0; index < estados.length; index += 1) {
    let estado = estados[index];
    let estadoOption = document.createElement('option');

    if (estado === estados[index]) {
      estadoOption.innerHTML = estado;
      getEstados.appendChild(estadoOption);
    }
  }
}
createEstados();