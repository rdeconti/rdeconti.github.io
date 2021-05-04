function generateProjects() {

    var data = [{
        "Número": "1",
        "Nome": "PROVA DE CONCEITO SAP: ATUALIZAÇÃO GLOBAL DE EHP4 PARA EHP7",
        "Período": "06/2014 – 12/2014 (6 meses)",
        "Empresa": "Clariant",
        "Localização": "Brasil (trabalhando em conjunto com CCC Europa remotamente)",
        "Papel": "Líder de equipe",
        "Descrição": "Avaliação dos impactos da atualização no processo global de QM atual e novos processos SAP, incluindo novas tecnologias como SAP FIORI e SAP Screen Personas. Substituição de complementos globais por novos processos SAP padrão, a fim de reduzir o TCO."
    }, {
        "Número": "2",
        "Nome": "PROJETO SAP CARVE-OUT: SPICE II (LATAM)",
        "Período": "01/2014 – 06/2014 (6 meses)",
        "Empresa": "Clariant e Stahl",
        "Localização": "LOCAL – Brasil, São Paulo (remotamente com todos os países envolvidos)",
        "Papel": "Líder de equipe",
        "Descrição": "Implementação de todos os processos SAP QM da Clariant nas novas empresas de países LATAM: Brasil, Argentina, Chile, Peru, Colômbia, Venezuela, Guatemala e México."
    }, {
        "Número": "3",
        "Nome": "PROJETO SAP CARVE-OUT: CLARIANT (LATAM) para ARCHROMA (LATAM)",
        "Período": "07/2013 – 12/2013 (6 meses)",
        "Empresa": "Clariant e Süd-Chemie",
        "Localização": "LOCAL – Brasil, São Paulo (remotamente com todos os países envolvidos)",
        "Papel": "Líder de equipe",
        "Descrição": "Implementação de todos os processos SAP QM da Clariant na empresa ARCHROMA em países LATAM: Brasil, Argentina, Chile, Peru, Colômbia, Venezuela, Guatemala e México."
    }, {
        "Número": "4",
        "Nome": "PROJETO SAP CARVE-IN: SUED-CHEMIE / CLARIANT (LATAM) – MX",
        "Período": "01/2013 – 06/2013 (6 meses)",
        "Empresa": "Clariant e Süd-Chemie",
        "Localização": "INTERNACIONAL – México, Puebla",
        "Papel": "Líder de equipe",
        "Descrição": "Implementação de todos os processos SAP QM da Clariant na Süd-Chemie México em todos os laboratórios."
    }, {
        "Número": "5",
        "Nome": "PROJETO SAP CARVE-IN: SUED-CHEMIE / CLARIANT (LATAM) – PE / BR",
        "Período": "07/2012 – 12/2012 (6 meses)",
        "Empresa": "Clariant e Süd-Chemie",
        "Localização": "INTERNACIONAL – Peru, Callao e Brasil, Jacareí",
        "Papel": "Líder de equipe",
        "Descrição": "Implantação de processos SAP da Clariant na Süd-Chemie Peru e no Brasil em todos os laboratórios."
    }, {
        "Número": "6",
        "Nome": "PREPARAÇÃO DO PROJETO DE INTEGRAÇÃO: SUED-CHEMIE E CLARIANT",
        "Período": "10/2011 – 06/2012 (9 meses)",
        "Empresa": "Clariant e Süd-Chemie",
        "Localização": "INTERNACIONAL – Alemanha (Sulzbach e Munique)",
        "Papel": "Líder de equipe",
        "Descrição": "Projeto de integração SAP entre duas empresas: Süd-Chemie e Clariant. Responsável pelo módulo QM globalmente trabalhando com usuários de negócios da Clariant e Süd-Chemie na Europa e CCC da Europa, América Latina, Ásia e América do Norte. Na fase de preparação foram oferecidas as soluções para integrar ambas as empresas com mudanças mínimas na Clariant e atender aos requisitos de negócios da Süd-Chemie. Durante todas as fases trabalhando com a Accenture como consultora parceira."
    }, {
        "Número": "7",
        "Nome": "MELHORIA DE QM: RETORNOS DO PROCESSO DO CLIENTE",
        "Período": "09/2011 – 11/2011 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Processo de melhoria de QM com redução em torno de 85% na geração de lotes de inspeção criados por retornos de clientes não relacionados com razões de qualidade."
    }, {
        "Número": "8",
        "Nome": "IMPLEMENTAÇÃO DO SAP MII: GERENCIAMENTO DE AMOSTRAS DE QM POR SAP MII",
        "Período": "07/2011 – 07/2011 (1 mês)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Alemanha (Gendorf)",
        "Papel": "Líder da equipe",
        "Descrição": "Dar suporte para implementar o módulo QM Sample Management pela tecnologia SAP MII."
    }, {
        "Número": "9",
        "Nome": "MELHORIA DE QM: CONTROLE DE TRENÓ PARA LOTES DE FORNECEDORES",
        "Período": "07/2011 – 08/2011 (2 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Novos controles ativados no sistema SAP para controlar a data de validade dos lotes entregues pelos fornecedores e evitar o recebimento de mercadorias de lotes vencidos."
    }, {
        "Número": "10",
        "Nome": "PROJETO DE ATUALIZAÇÃO SAP: 4,6B A ECC 6.0",
        "Período": "01/2010 – 12/2010 (12 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Alemanha (Sulzbach) e Brasil",
        "Papel": "Líder de equipe",
        "Descrição": "Líder de equipe de uma equipe GLOBAL para o projeto de upgrade SAP e responsável por módulos QM, PM e PS em todo o mundo Clariant trabalhando com membro da equipe do CCC Europa, América Latina, América do Norte e Ásia. Tarefas de coordenação realizadas (desde a fase de projeto até após a implementação) com suporte ao negócio. Durante todas as fases trabalhando com a Accenture como um parceiro."
    }, {
        "Número": "11",
        "Nome": "IMPLEMENTAÇÃO QM: NPDI",
        "Período": "05/2009 - 12/2009 (8 meses)",
        "Empresa": "Clariant",
        "Localização": "LOCAL – Brasil / Produtos Químicos Funcionais e Pigmentos e Aditivos",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projeto na implementação de QM para desenvolver em modelos de módulo PS (Project system) para controlar o desenvolvimento de materiais que controlam recursos, datas de vencimento e custos. Modelos PS criados para permitir que as unidades de negócios controlem fases de projeto e atribuam o responsável. Um fluxo de trabalho foi projetado para enviar mensagens e controlar as datas de vencimento."
    }, {
        "Número": "12",
        "Nome": "REESTRUTURAÇÃO DA EMPRESA SAP: TRANSFERÊNCIA DO LOCAL PARA SANTA CLARA",
        "Período": "09/2008 -03/2009 (7 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL - México",
        "Papel": "Líder de equipe",
        "Descrição": "Líder de equipe na reestruturação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o antigo processo de QM do site em novo processo. Equipe: usuários-chave de negócios de ambos os sites, CCC da América Latina e Europa."
    }, {
        "Número": "13",
        "Nome": "IMPLEMENTAÇÃO DE QM: GERENCIAMENTO DE AMOSTRAS",
        "Período": "07/2008 - 11/2008 (8 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projetos na melhoria de QM: Módulo QM de gerenciamento de amostras implementado para controlar amostras de fornecedores, clientes, produção, concorrentes, amostras especiais e pesquisa e desenvolvimento. Fluxo de trabalho desenvolvido para enviar mensagem sobre amostras pendentes."
    }, {
        "Número": "14",
        "Nome": "IMPLEMENTAÇÃO QM: SISTEMA DE NOTIFICAÇÃO DE QUALIDADE (QNS)",
        "Período": "06/2007 – 06/2008 (12 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Estados Unidos da América (Carolina do Norte)",
        "Papel": "Líder do Projeto",
        "Descrição": "Implementação do Sistema de Notificação de Qualidade (QNS) em todo o mundo Clariant para controlar notificações de clientes, notificações contra fornecedores e notificações internas com um fluxo de trabalho complexo desenvolvido para controlar todas as fases, horários e atrasos do QNS."
    }, {
        "Número": "15",
        "Nome": "INCORPORAÇÃO DA EMPRESA SAP: MASTERBATCHES TOSCHEM",
        "Período": "08/2007 -11/2007 (4 meses)",
        "Empresa": "Clariant / Toschem",
        "Localização": "INTERNACIONAL - Colômbia",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe na incorporação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o processo TOSCHEM QM para o processo Clariant QM. Equipe: usuários-chave de negócios de ambas as empresas, centro de competência principal da América Latina e Europa."
    }, {
        "Número": "16",
        "Nome": "IMPLEMENTAÇÃO DO FLUXO DE TRABALHO DO PP",
        "Período": "12/2007 - 02/2008 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Implementação do fluxo de trabalho PP para aconselhar os usuários sobre variâncias em pontos de inspeção EVP e QM."
    }, {
        "Número": "17",
        "Nome": "REESTRUTURAÇÃO DA EMPRESA SAP: CONSOLIDAÇÃO DE UM LOCAL",
        "Período": "08/2007 -11/2007 (4 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL - Colômbia",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe na reestruturação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o antigo processo de QM do site em novo processo de QM do site. Equipe: usuários-chave de negócios de ambos os sites, centro de competência principal da América Latina e Europa."
    }, {
        "Número": "18",
        "Nome": "INCORPORAÇÃO DA EMPRESA SAP: MASTERBATCHES ZACAPA",
        "Período": "10/2006 -01/2007 (4 meses)",
        "Empresa": "Clariant / Zacapa",
        "Localização": "INTERNACIONAL – Guatemala",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe na incorporação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o processo de QM ZACAPA para o processo Clariant. Equipe: usuários-chave de negócios de ambas as empresas, CCC da América Latina e Europa."
    }, {
        "Número": "19",
        "Nome": "REESTRUTURAÇÃO DA EMPRESA SAP: MASTERBATCHES CHILE",
        "Período": "10/2006 -12/2006 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL - Chile",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe na reestruturação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o antigo processo de QM da planta em novo processo de QM da planta. Equipe: usuários-chave de negócios de ambas as plantas, CCC da América Latina e Europa."
    }, {
        "Número": "20",
        "Nome": "INCORPORAÇÃO DA EMPRESA SAP: MASTERBATCHES ESCUDO",
        "Período": "10/2006 -12/2006 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL - Colômbia",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe na incorporação de processos QM. Personalização, especificações funcionais, execuções de ciclos de teste, conversão de material de treinamento e conversão de dados e suporte após a implementação para converter o processo da Escudo para o processo Clariant. Equipe: usuários-chave de negócios de ambas as empresas, centro de competência principal da América Latina e Europa."
    }, {
        "Número": "21",
        "Nome": "IMPLEMENTAÇÃO DE QM: FLUXO DE TRABALHO DE DECISÃO DE USO",
        "Período": "08/2006 -10/2006 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de equipe na melhoria de QM: Workflow desenvolvido para enviar mensagens sobre a decisão de uso de laboratório sobre a postagem de estoque em lote para estoque bloqueado ou estoque irrestrito para todas as áreas envolvidas, dependendo do processo como produção, compra e vendas. O processo foi melhorado, evitando a comunicação por telefone ou e-mail."
    }, {
        "Número": "22",
        "Nome": "IMPLEMENTAÇÃO QM: QDI",
        "Período": "03/2006 -06/2006 (4 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projetos na melhoria de QM: QDI (Quality data interface) desenvolvido para trocar resultados de inspeção de QM entre várias instâncias em todo o mundo Clariant: Ásia, Europa, América do Norte e América Latina. Tivemos uma redução em torno de 40% no trabalho de laboratórios para registrar resultados de inspeção."
    }, {
        "Número": "23",
        "Nome": "MELHORIA DE QM: FERRAMENTAS PARA CONTROLAR O BANCO DE DADOS QM",
        "Período": "02/2006 - 06/2006 (5 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projetos na melhoria de QM: Programas, consultas e fluxos de trabalho desenvolvidos para permitir QM responsável por inconsistências de controle de banco de dados. Tivemos uma redução em torno de 70% no recebimento de matérias-primas e em torno de 60% dos problemas no certificado de análise."
    }, {
        "Número": "24",
        "Nome": "IMPLEMENTAÇÃO PS: CATS",
        "Período": "08/2005 – 10/2005 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "Brasil (São Paulo)",
        "Papel": "Líder do Projeto",
        "Descrição": "Implementação de CATS (Cross-Application Time Sheet, folha de tempo de aplicação cruzada) para registro de horários de trabalho e tarefas, a fim de controlar projetos de TI relativos a consultores SAP (internos e externos) – tarefas, tempo e custos. Completo monitorando o andamento de um projeto, para a criação de faturas."
    }, {
        "Número": "25",
        "Nome": "MELHORIA DE QM: FALTA O CERTIFICADO DE ANÁLISE NO FLUXO DE TRABALHO",
        "Período": "04/2005 -07/2005 (4 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projeto na melhoria de QM: Mensagens de fluxo de trabalho implementadas para ativar o responsável do certificado de análise no caso deste documento não ter sido gerado no processo de entrega. Esse processo reduziu em 80% o número de certificados de análise devido à manutenção de dados mestres de QM de forma incorreta."
    }, {
        "Número": "26",
        "Nome": "MELHORIA DE QM: CONTROLE DE LOTE EXPIRADO EM Q-STOCK",
        "Período": "04/2005 -06/2005 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projeto na melhoria de QM: Mensagens de fluxo de trabalho implementadas e processo de inspeção recorrente estendido para tratar lotes vencidos. Esse processo reduziu em 95% o número de reclamações dos clientes em relação ao recebimento de mercadorias de lotes vencidos."
    }, {
        "Número": "27",
        "Nome": "IMPLEMENTAÇÃO DE QM: CONTROLE DE PROJETOS DE P&D",
        "Período": "04/2005 -06 2005 (3 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projetos na melhoria de QM: Notificação de QM desenvolvida para controlar as fases do projeto em pesquisa e desenvolvimento com mensagens de fluxo de trabalho para controlar os tempos e atrasos dos recursos envolvidos."
    }, {
        "Número": "28",
        "Nome": "MELHORIA DE QM: ESPECIFICAÇÃO DE MATERIAL PARA PARCEIROS",
        "Período": "04/2005 -05/2005 (2 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de projeto na melhoria de QM para enviar especificações de material automaticamente a partir de ordens de compra por itens ou manualmente. Opção para enviar especificação de material por e-mail em arquivo PDF desenvolveu o aumento da eficiência do departamento de compras em torno de 80%."
    }, {
        "Número": "29",
        "Nome": "MELHORIA DE QM: CONTROLE OS MOVIMENTOS DAS AÇÕES DE QM EM UM PASSO",
        "Período": "09/2004 -12/2004 (4 meses)",
        "Empresa": "Clariant",
        "Localização": "REGIONAL - Todos os países Clariant /unidades de negócios na América Latina",
        "Papel": "Líder do Projeto",
        "Descrição": "Líder de Projetos na melhoria de QM: controle o movimento das ações de QM feito em uma etapa por transações de QM e reduza o número de problemas no estoque em 60%"
    }, {
        "Número": "30",
        "Nome": "REDESENHO DO PROCESSO CLARIANT",
        "Período": "06/2004 – 09/2004 (4 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Alemanha (Sulzbach) e Brasil",
        "Papel": "Líder da equipe",
        "Descrição": "Redesenho do processo Clariant feito com o objetivo de reduzir a complexidade dos processos. Toda a documentação do processo QM revisada, aprovada e documentada."
    }, {
        "Número": "31",
        "Nome": "PROJETO DE IMPLEMENTAÇÃO DO SAP 4.6B MÉXICO",
        "Período": "01/2003 – 09/2003 (9 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – MÉXICO (NAUCALPAN DE JUAREZ)",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe no projeto de implementação SAP no México e responsável pelos módulos PP, QM, PM e PS trabalhando com membros da equipe do Centro de Competência Clariant Core da América Latina."
    }, {
        "Número": "32",
        "Nome": "PROJETO DE IMPLEMENTAÇÃO DO SAP 4.6B PORTUGAL",
        "Período": "03/2002 – 09/2002 (7 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Portugal (Men Martins)",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe no projeto de implementação SAP em Portugal e responsável pelo módulo QM trabalhando com membros da equipe do Centro de Competência Principal Clariant da Europa."
    }, {
        "Número": "33",
        "Nome": "PROJETO DE ATUALIZAÇÃO SAP: 3.0F a 4.6B",
        "Período": "01/2000 – 12/2000 (12 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL - Alemanha (Sulzbach), Brasil, Argentina, Chile, Peru, Colômbia, Venezuela, Guatemala",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe de uma equipe LATAM para o projeto de upgrade SAP e responsável pelo módulo QM em torno da LATAM trabalhando com membro da equipe do Centro de Competência Clariant Core da Europa e América Latina."
    }, {
        "Número": "34",
        "Nome": "PROJETO DE IMPLEMENTAÇÃO DO SAP 3.0F AMÉRICA LATINA",
        "Período": "01/1997 - 12/1998 (24 meses)",
        "Empresa": "Clariant",
        "Localização": "INTERNACIONAL – Brasil, Argentina, Chile, Peru, Colômbia, Venezuela, Guatemala",
        "Papel": "Líder da equipe",
        "Descrição": "Líder de equipe no projeto de implementação SAP em todos os países da América Latina e responsável pelo módulo QM trabalhando com membros CCC da Europa e América Latina."
    }];

    function createTable(obj) {
       
        var myElement = document.getElementById("row-contents");

        $(myElement).append('<table class="table"></table>');

        var table = $(myElement).children('table'); 

        var thead = "<tr>";
        
        for (title in obj[0]) {
            thead += "<th>" + title + "</th>";
        }

        thead += "</tr>";

        var tbody = "<tr>";

        obj.forEach(function (el, i) {

            for (item in el) {

                tbody += "<td>" + el[item] + "</td>";

            }

            tbody += "</tr>";

        })

        table.append(thead).append(tbody); 
    }

    createTable(data); 

}