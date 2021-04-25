function generateEducation() {

    var data = [{
        "Numero": "1",
        "Diploma": "Education-Certificate-1",
        "Escola": "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO (URFJ) / ETAPA / SAP",
        "Curso": "E-MBSIG – Curso de Especialização em Gestão de Negócios Integrados",
        "Inicio": "01/2008",
        "Termino": "12/2009",
        "Meses": "24",
        "Nível": "Pós-graduação lato sensu",
        "Descrição": "Curso focado em sistemas integrados de gestão que habilitam a realização dos negócios eletrônicos ou e-business. O entendimento dos sistemas que realizam os novos modelos de negócios é tema emergente na pauta empresarial."
    }, {
        "Numero": "2",
        "Diploma": "Education-Certificate-2",
        "Escola": "UNIVERSIDADE DE SÃO PAULO (USP) – FUNDAÇÃO VANZOLINI",
        "Curso": "CEQP – Especialização em Qualidade e Produtividade",
        "Inicio": "01/2003",
        "Termino": "12/2004",
        "Meses": "24",
        "Nível": "Pós-graduação lato sensu",
        "Descrição": "São abordadas questões da qualidade e produtividade como as normas série ISO-9000; engenharia e análise do valor (EAV); benchmarking; inspeção na fonte e sistema à prova de falhas (Poka Yoke); programa 5S’s (house keeping); aperfeiçoamento contínuo (Kaizen); ferramentas gerenciais da qualidade e metodologia Seis Sigma."
    }, {
        "Numero": "3",
        "Diploma": "Education-Certificate-3",
        "Escola": "INSTITUTO DE TECNOLOGIA DE MAUÁ",
        "Curso": "Extensão em Sistemas de Informação",
        "Inicio": "01/1998",
        "Termino": "12/1998",
        "Meses": "12",
        "Nível": "Especializção",
        "Descrição": "É crescente a demanda por profissionais com competência em gerenciamento de projetos para atuar nas mais diversas áreas do ambiente empresarial. Porém levar um projeto ao sucesso não é apenas saber gerenciar Escopo, Prazo e Custo. O que Gerente de Projetos mais faz durante a vida de um projeto é tomar decisões para atingir os objetivos do projeto portanto saber trabalhar com a Análise de Decisão, Qualidade, Riscos e Finanças é um conhecimento fundamental. O curso de Aperfeiçoamento em Gerenciamento de Projetos com Ênfase em Processos leva estas habilidades até você."
    }, {
        "Numero": "4",
        "Diploma": "Education-Certificate-4",
        "Escola": "UNIVERSIDADE MACKENZIE",
        "Curso": "E-MBSIG – Curso de Especialização em Gestão de Negócios Integrados",
        "Inicio": "01/1984",
        "Termino": "12/1986",
        "Meses": "36",
        "Nível": "Tecnólogo",
        "Descrição": "CursoO Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas forma profissionais capazes de analisar, projetar, documentar, especificar, testar, implantar e manter sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação deste profissional."
    }];

    function createTable(obj) {
       
        // positioned to row-projects
        var myElement = document.getElementById("row-contents");

        // append table
        $(myElement).append('<table class="table"></table>');
        var table = $(myElement).children('table'); 

        // append tbody
        $(myElement).append('<tbody id="myTable"></tbody>');
        var tbody = $(myElement).children('tbody');

        // create table header
        var thead = "<tr>";
        
        for (title in obj[0]) {
            thead += "<th>" + title + "</th>";
        }

        thead += "</tr>";

        // create table contents based on var data contents
        // $(myElement).append('<tbody id="myTable"></tbody>');

        var tlines = "<tr>";

        var tDetails = "<button type='button' class='btn btn-info' data-toggle='modal' data-target='modal-one'>Detalhes</button> "

        //<button type="button" class="btn btn-info" data-toggle="modal" data-target="#Stage-One">Detalhes</button>

        obj.forEach(function (el, i) {

            for (item in el) {
                
                tlines += "<td>" + el[item] + tDetails + "</td>";

            }

            tlines += "</tr>";

        })

        // append table, tbody and tlines
        table.append(tbody).append(thead).append(tlines); 
    }

    createTable(data);

}