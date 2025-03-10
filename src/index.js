/**
 * @name htmlExportTableToExcel
 * @description Função que exporta uma tabela HTML para um arquivo Excel (.xlsx)
 * @returns {Object} Objeto contendo métodos para configurar e executar a exportação
 */
export function htmlExportTableToExcel() {
    /**
     * @private
     * @type {HTMLElement|null}
     * @description Elemento do botão que iniciará o download
     */
    let btn = null;
    
    /**
     * @private
     * @type {string|null}
     * @description Conteúdo original do botão
     */
    let btnContent = null;
    
    /**
     * @private
     * @type {string}
     * @description Texto exibido durante o processo de download
     */
    let loadingContent = 'Baixando...';
    
    /**
     * @private
     * @type {HTMLTableElement|null}
     * @description Tabela HTML que será exportada
     */
    let table = null;
    
    /**
     * @private
     * @type {string}
     * @description Nome do arquivo que será baixado
     */
    let fileName = 'relatorio';
    
    /**
     * @private
     * @type {HTMLAnchorElement}
     * @description Elemento de link usado para realizar o download
     */
    let link = document.createElement('a');
    
    /**
     * @public
     * @description Define o botão que iniciará o download e adiciona o evento de clique
     * @param {HTMLElement} button - Elemento do botão que iniciará o download
     * @returns {void}
     */
    function setBtnAction(button) {
      btn = button;
      btnContent = btn.innerHTML;
      btn.addEventListener('click', download);
    }
    
    /**
     * @public
     * @description Define o texto a ser exibido durante o processo de download
     * @param {string} [content='Baixando...'] - Texto a ser exibido
     * @returns {void}
     */
    function setLoadingContent(content = 'Baixando...') {
      loadingContent = content;
    }
    
    /**
     * @public
     * @description Define a tabela que será exportada
     * @param {HTMLTableElement} tbl - Tabela HTML a ser exportada
     * @returns {void}
     */
    function setTable(tbl) {
      table = tbl;
    }
    
    /**
     * @public
     * @description Define o nome do arquivo a ser baixado (sem extensão)
     * @param {string} [name='relatorio'] - Nome do arquivo
     * @returns {void}
     */
    function setFileName(name = 'relatorio') {
      fileName = name;
    }
    
    /**
     * @private
     * @description Gera o URL de dados para o download da tabela
     * @returns {string} URL de dados contendo o HTML da tabela codificado
     */
    function hrefGenerate() {
      if (!table) {
        console.error('Tabela não definida!');
        return '';
      }

      return 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
        encodeURIComponent(table.outerHTML);
    }
    
    /**
     * @private
     * @description Ações executadas antes de iniciar o download
     * @returns {void}
     */
    function beforeDownload() {
      if (btn) {
        btn.innerHTML = loadingContent;
        btn.disabled = true;
      }
    }
    
    /**
     * @private
     * @description Ações executadas após o download
     * @returns {void}
     */
    function afterDownload() {
      if (btn) {
        btn.innerHTML = btnContent;
        btn.disabled = false;
      }
    }
    
    /**
     * @public
     * @description Inicia o processo de download da tabela
     * @returns {void}
     * @throws {Error} Erro se nenhuma tabela foi definida
     */
    function download() {
      if (!table) {
        console.error('Nenhuma tabela foi definida!');
        return;
      }

      beforeDownload();
      
      link.href = hrefGenerate();
      link.download = `${fileName}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      afterDownload();
    }
    
    return {
      setBtnAction,
      setLoadingContent,
      setTable,
      setFileName,
      download
    };
  }