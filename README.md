# html-table-excel-exporter

Uma biblioteca JavaScript simples para exportar tabelas HTML para arquivos Excel (.xlsx) sem dependências externas.

[![npm version](https://img.shields.io/npm/v/table-excel-exporter.svg)](https://www.npmjs.com/package/html-table-excel-exporter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Instalação

### NPM
```bash
npm install html-table-excel-exporter
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/html-table-excel-exporter@1.0.0/dist/table-excel-exporter.min.js"></script>
```

## Uso

```javascript
// Importar a biblioteca (se estiver usando módulos)
import { exportTableToExcel } from 'table-excel-exporter';

// Ou usar diretamente se incluída via CDN
const exporter = exportTableToExcel();

// Configurar a tabela a ser exportada
const minhaTabela = document.getElementById('minhaTabela');
exporter.setTable(minhaTabela);

// Configurar o nome do arquivo (opcional)
exporter.setFileName('meus-dados');

// Método 1: Exportar diretamente
document.getElementById('btnExportar').addEventListener('click', () => {
  exporter.download();
});

// Método 2: Configurar um botão para iniciar o download
const btnExportar = document.getElementById('btnExportar');
exporter.setBtnAction(btnExportar);

// Alterar o texto exibido durante o download (opcional)
exporter.setLoadingContent('Gerando Excel...');
```

## Exemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exportar Tabela para Excel</title>
  <script src="https://cdn.jsdelivr.net/npm/html-table-excel-exporter@1.0.0/dist/html-table-excel-exporter.min.js"></script>
</head>
<body>
  <table id="minhaTabela">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>joao@exemplo.com</td>
        <td>(11) 98765-4321</td>
      </tr>
      <tr>
        <td>Maria Souza</td>
        <td>maria@exemplo.com</td>
        <td>(21) 91234-5678</td>
      </tr>
    </tbody>
  </table>
  
  <button id="btnExportar">Exportar para Excel</button>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const exporter = exportTableToExcel();
      exporter.setTable(document.getElementById('minhaTabela'));
      exporter.setFileName('contatos');
      exporter.setBtnAction(document.getElementById('btnExportar'));
    });
  </script>
</body>
</html>
```

## API

### `htmlExportTableToExcel()`
Inicializa o exportador e retorna um objeto com os seguintes métodos:

#### `setTable(tabela)`
Define a tabela HTML que será exportada para Excel.
- `tabela`: Elemento HTML da tabela a ser exportada (obrigatório)

#### `setFileName(nome)`
Define o nome do arquivo Excel a ser gerado.
- `nome`: String com o nome do arquivo sem extensão (padrão: 'relatorio')

#### `setBtnAction(botao)`
Configura um botão para iniciar o download quando clicado.
- `botao`: Elemento HTML do botão

#### `setLoadingContent(texto)`
Define o texto exibido no botão durante o download.
- `texto`: String com o texto (padrão: 'Baixando...')

#### `download()`
Inicia o download da tabela como arquivo Excel.

## Limitações

- A biblioteca exporta o HTML da tabela para um formato que o Excel pode abrir, mas não cria um arquivo XLSX nativo.
- Estilos CSS da tabela não são preservados no arquivo Excel.
- Para tabelas muito grandes, considere usar uma biblioteca mais robusta como [SheetJS](https://github.com/SheetJS/sheetjs).

## Contribuições

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request no GitHub.

## Licença

[MIT](LICENSE)