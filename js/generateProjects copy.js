function generateProjects() {

    var projetos = [{
        "Numero": "1",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Inicio": "06/2014",
        "Termino": "12/2014",
        "Duracao": "6",
        "Empresa": "Clariant",
        "Local": "Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }, {
        "Numero": "2",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Inicio": "06/2014",
        "Termino": "12/2014",
        "Duracao": "6",
        "Empresa": "Clariant",
        "Local": "Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }, {
        "Numero": "3",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Inicio": "06/2014",
        "Termino": "12/2014",
        "Duracao": "6",
        "Empresa": "Clariant",
        "Local": "Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }, {
        "Numero": "4",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Inicio": "06/2014",
        "Termino": "12/2014",
        "Duracao": "6",
        "Empresa": "Clariant",
        "Local": "Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }, {
        "Numero": "5",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Inicio": "06/2014",
        "Termino": "12/2014",
        "Duracao": "6",
        "Empresa": "Clariant",
        "Local": "Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }];

    function createTable(obj) {
       
        var myElement = document.getElementById("division-projects");

        // Adiciona a tabela ao body
        $(myElement).append('<table class="table"></table>');

        var table = $(myElement).children('table'); // Seleciona a tabela

        // Criar o head da table
        var thead = "<tr>";
        
        for (title in obj[0]) {
            thead += "<th>" + title + "</th>";
        }

        thead += "</tr>";

        //Criar o body da table
        var tbody = "<tr>";

        obj.forEach(function (el, i) {

            for (item in el) {

                tbody += "<td>" + el[item] + "</td>";

            }

            tbody += "</tr>";

        })

        table.append(thead).append(tbody); // Adiciona a tabela completa ao body
    }

    createTable(projetos); //Aplica a função ao objeto desejado.

}