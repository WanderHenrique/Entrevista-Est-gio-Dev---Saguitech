const formNFE = document.getElementById('form-nfe');
const btnGerarNFE = document.getElementById('btn-gerar-nfe');
const resultadoNFE = document.getElementById('resultado-nfe');

btnGerarNFE.addEventListener('click', () => {
  const cnpjPrestador = document.getElementById('cnpj-prestador').value;
  const inscricaoEstadualPrestador = document.getElementById('inscricao-estadual-prestador').value;
  const nomePrestador = document.getElementById('nome-prestador').value;
  const enderecoPrestador = document.getElementById('endereco-prestador').value;
  const cnpjTomador = document.getElementById('cnpj-tomador').value;
  const inscricaoEstadualTomador = document.getElementById('inscricao-estadual-tomador').value;
  const nomeTomador = document.getElementById('nome-tomador').value;
  const enderecoTomador = document.getElementById('endereco-tomador').value;
  const dataEmissao = document.getElementById('data-emissao').value;
  const codigoServico = document.getElementById('codigo-servico').value;
  const descricaoServico = document.getElementById('descricao-servico').value;
  const quantidade = document.getElementById('quantidade').value;
  const valorUnitario = document.getElementById('valor-unitario').value;


  const dadosNFE = {
    prestador: {
      cnpj: cnpjPrestador,
      inscricaoEstadual: inscricaoEstadualPrestador,
      nome: nomePrestador,
      endereco: enderecoPrestador
    },
    tomador: {
      cnpj: cnpjTomador,
      inscricaoEstadual: inscricaoEstadualTomador,
      nome: nomeTomador,
      endereco: enderecoTomador
    },
    emissao: {
      data: dataEmissao
    },
    itens: [{
      codigoServico: codigoServico,
      descricaoServico: descricaoServico,
      quantidade: quantidade,
      valorUnitario: valorUnitario,
    }]
  };

  // Calcular impostos
  const valorTotal = quantidade * valorUnitario;
  const valorICMS = valorTotal * 0.18;
  const valorISS = valorTotal * 0.05;
  const valorTotalImpostos = valorICMS + valorISS;

  // Gerar NFe
  const nfe = {
    chave: 'NFe123456789012345',
    dadosNFE: dadosNFE,
    impostos: {
      icms: valorICMS,
      iss: valorISS,
      outras: {
        // Adicione as variáveis aqui
      }
    }
  };

  // Exibir NFe gerada
  resultadoNFE.innerHTML = `
    <h2>Nota Fiscal Eletrônica</h2>
    <p>Chave: ${nfe.chave}</p>
    <p>Prestador:</p>
    <ul>
      <li>CNPJ: ${nfe.dadosNFE.prestador.cnpj}</li>
      <li>Inscrição Estadual: ${nfe.dadosNFE.prestador.inscricaoEstadual}</li>
      <li>Nome: ${nfe.dadosNFE.prestador.nome}</li>
      <li>Endereço: ${nfe.dadosNFE.prestador.endereco}</li>
    </ul>
    <p>Tomador:</p>
    <ul>
      <li>CNPJ: ${nfe.dadosNFE.tomador.cnpj}</li>
      <li>Inscrição Estadual: ${nfe.dadosNFE.tomador.inscricaoEstadual}</li>
      <li>Nome: ${nfe.dadosNFE.tomador.nome}</li>
      <li>Endereço: ${nfe.dadosNFE.tomador.endereco}</li>
    </ul>
    <p>Emissão:</p>
    <ul>
      <li>Data: ${nfe.dadosNFE.emissao.data}</li>
    </ul>
    <p>Itens:</p>
    <ul>
      <li>Código do Serviço: ${nfe.dadosNFE.itens[0].codigoServico}</li>
      <li>Descrição do Serviço: ${nfe.dadosNFE.itens[0].descricaoServico}</li>
      <li>Quantidade: ${nfe.dadosNFE.itens[0].quantidade}</li>
      <li>Valor Unitário: ${nfe.dadosNFE.itens[0].valorUnitario}</li>
      <li>Valor Total: ${nfe.dadosNFE.itens[0].valorTotal}</li>
    </ul>
    <p>Valor Total dos Impostos: ${valorTotalImpostos}</p>
    <p>Valor Líquido: ${valorTotal - valorTotalImpostos}</p>
  </div>`;
});