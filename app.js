function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("org-info");
    // Imprime a seção no console para fins de depuração (pode ser removido em produção)
  
let campoPesquisa = document.getElementById ("campo-pesquisa").value

console.log(campoPesquisa)
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    if(!campoPesquisa) {
        section.innerHTML = "<p>Sem Resultados</p>"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    // Itera sobre cada dado do array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        descricao = dado.descricao.toLowerCase ()
        tags = dado.tags.toLowerCase ()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) )
        // Concatena o HTML de cada card à string de resultados
        resultados += `
            <div class="org-card">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a class="href" href=${dado.link} target="_blank">Site Oficial</a>
            </div>
        `;
    }

    if (!resultados) {
       resultados = "<p>Nenhuma informação</p>"

    }

    // Atribui o HTML gerado à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}