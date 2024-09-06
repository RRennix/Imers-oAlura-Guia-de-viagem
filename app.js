function pesquisa() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let elementos = "";
    for (let cidade of cidades) {
        let tituloNormalizado = cidade.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let descNormalizada = cidade.desc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let tagsNormalizada = cidade.tags.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if (!campoPesquisa) {
            section.innerHTML = `<div class="item-resultado-nao-encontrado">
            <h2>
                Digite algo para buscar.
            </h2>
            </div>`
            return
        };
        if (tituloNormalizado.includes(campoPesquisa) || descNormalizada.includes(campoPesquisa) || tagsNormalizada.includes(campoPesquisa)) {
            elementos += `
            <div class="item-resultado">
                <img src=${cidade.foto}. alt="Imagem de ${cidade.titulo}">
                <h2>
                    <a href="${cidade.maps}" target="_blank">
                    ${cidade.titulo}
                    </a>
                </h2>
                <p class="descrição-meta">
                    ${cidade.desc} 
                </p>
                <a href="${cidade.wiki}" target="_blank">Mais informações</a> 
            </div>
        `
        };
        section.innerHTML = elementos;
    };
    if (elementos == "") {
        section.innerHTML = `
        <div class="item-resultado-nao-encontrado">
            <h2>
                Item não encontrado.
            </h2>
        </div>`
        return
    };
}