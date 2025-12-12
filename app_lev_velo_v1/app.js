// =======================================
// 1. DADOS
// =======================================

// SEMANA

let currentSection = null;
let listMode = "default";


  const SEMANA = [

  {
    id: "sem_segunda",
    tipo: "SEMANA",
    nome: "Segunda",
    categoria: "Check",
    ordem: 1,
    rotinas: [
      "Produzir bases congeláveis de baixo giro",
      "Revisar câmaras frias",
      "Organizar estoque seco",
      "Separar embalagens e etiquetas da semana"
    ],
    check: [
      "Freezer revisado",
      "Bancadas limpas",
      "Estoque seco organizado"
    ]
  },

  {
    id: "sem_terca",
    tipo: "SEMANA",
    nome: "Terça",
    categoria: "Check",
    ordem: 2,
    rotinas: [
      "Adiantamento de bases",
      "Fracionar insumos de baixo risco",
      "Organizar embalagens"
    ],
    check: [
      "Bases porcionadas",
      "Etiquetas conferidas",
      "Geladeiras organizadas"
    ]
  },

  {
    id: "sem_quarta",
    tipo: "SEMANA",
    nome: "Quarta",
    categoria: "Check",
    ordem: 3,
    rotinas: [
      "Separar porções do freezer para o serviço",
      "Contar proteínas congeladas",
      "Lavar geladeiras",
      "Organizar freezer"
    ],
    check: [
      "Congelados contados",
      "Geladeiras higienizadas",
      "Freezer organizado",
      "Mise separado para o serviço"
    ]
  },

  {
    id: "sem_quinta",
    tipo: "SEMANA",
    nome: "Quinta",
    categoria: "Check",
    ordem: 4,
    rotinas: [
      "Reposição leve de preparos",
      "Avaliar visualmente as bases",
      "Cortar cebolete apenas sob demanda"
    ],
    check: [
      "Mise fresco ajustado",
      "Porções suficientes",
      "Câmaras organizadas"
    ]
  },

  {
    id: "sem_sexta",
    tipo: "SEMANA",
    nome: "Sexta",
    categoria: "Check",
    ordem: 5,
    rotinas: [
      "Produzir proteínas extras",
      "Porcionar reforço para o fim de semana",
      "Reforçar bases principais",
      "Organizar todas as câmaras"
    ],
    check: [
      "Porções extras prontas",
      "Bases principais disponíveis",
      "Câmaras preparadas para pico"
    ]
  },

  {
    id: "sem_sabado",
    tipo: "SEMANA",
    nome: "Sábado",
    categoria: "Check",
    ordem: 6,
    rotinas: [
      "Montar mise completo",
      "Cortar cebolete para sábado e domingo",
      "Ajustar porções finais"
    ],
    check: [
      "Mise montado",
      "Linha quente organizada",
      "Proteínas conferidas"
    ]
  },

  {
    id: "sem_domingo",
    tipo: "SEMANA",
    nome: "Domingo",
    categoria: "Check",
    ordem: 7,
    rotinas: [
      "Realizar contagem total de estoque",
      "Elaborar lista manual de compras",
      "Lavar geladeiras",
      "Organizar retorno de excedentes ao freezer"
    ],
    check: [
      "Estoque contado",
      "Lista de compras pronta",
      "Geladeiras limpas",
      "Freezer reorganizado"
    ]
  }

];



// ATALHOS

const ATALHOS = [
  {
    id: "atalho_sem_gluten",
    tipo: "ATALHO",
    nome: "Sem glúten",
    categoria: "Filtros",
    filtro: {
      incluir: ["sem_gluten"],
      excluir: ["com_gluten"]
    }
  },
{
    id: "atalho_pode_ser_sem_lactose",
    tipo: "ATALHO",
    nome: "Pode ser sem lactose",
    categoria: "Filtros",
    filtro: {
      incluir: ["pode_ser_sem_lactose"]
    }
  },
{
    id: "atalho_pode_ser_vegetariano",
    tipo: "ATALHO",
    nome: "Pode ser vegetariano",
    categoria: "Filtros",
    filtro: {
      incluir: ["pode_ser_vegetariano"]
    }
  },
  {
    id: "atalho_sem_pimenta",
    tipo: "ATALHO",
    nome: "Sem pimenta",
    categoria: "Filtros",
    filtro: {
      incluir: ["sem_pimenta"],
      excluir: ["com_pimenta"]
    }
  },
  {
    id: "atalho_vegano",
    tipo: "ATALHO",
    nome: "Vegano",
    categoria: "Filtros",
    filtro: {
      incluir: ["vegano"],
      excluir: ["carne", "com_lactose"]
    }
  },
{
    id: "atalho_pode_ser_vegano",
    tipo: "ATALHO",
    nome: "Pode ser vegano",
    categoria: "Filtros",
    filtro: {
      incluir: ["pode_ser_vegano"]
    }
  },
  {
    id: "atalho_vegetariano",
    tipo: "ATALHO",
    nome: "Vegetariano",
    categoria: "Filtros",
    filtro: {
      incluir: ["vegetariano"],
      excluir: ["carne"]
    }
  }, {
    id: "atalho_sem_lactose",
    tipo: "ATALHO",
    nome: "Sem lactose",
    categoria: "Filtros",
    filtro: {
      incluir: ["sem_lactose"],
      excluir: ["com_lactose"]
    }
  }

];
	
// INSUMOS 

const INSUMOS = [
 {
  id: "ins_abobora_cabotia",
  tipo: "INSUMO",
  nome: "Abóbora cabotiá",
  categoria: "Hortaliças",
  aliases: ["abobora", "abóbora", "cabotiá", "cabotia", "abobora cabotia", "abobora cabotiá"],
  modo: `Armazene em caixa ventilada no setor de hortifruti.

Priorize o uso das unidades mais maduras.`
},

{
  id: "ins_alho",
  tipo: "INSUMO",
  nome: "Alho",
  categoria: "Ervas frescas",
  aliases: ["alho", "dente de alho"],
  modo: `Armazene em caixa ventilada no setor de hortifruti.

Evite umidade.`
},

{
  id: "ins_alecrim",
  tipo: "INSUMO",
  nome: "Alecrim",
  categoria: "Ervas frescas",
  aliases: ["alecrim"],
  modo: `Enrole em papel-toalha seco e armazene em pote com tampa, sob refrigeração.

Utilize preferencialmente em até 5 dias.`
},

{
  id: "ins_anis_estrela",
  tipo: "INSUMO",
  nome: "Anis-estrelado",
  categoria: "Especiarias",
  aliases: ["anis", "anis estrelado"],
  modo: `Reembale e armazene a vácuo, em temperatura ambiente.`
},

{
  id: "ins_azeite",
  tipo: "INSUMO",
  nome: "Azeite extravirgem",
  categoria: "Gorduras vegetais",
  aliases: ["azeite", "azeite extra virgem", "óleo de oliva"],
  modo: `Armazene os recipientes fechados em estoque seco.

Para uso diário, abasteça bisnagas menores (0,3 kg).

Mantenha sempre tampada e higienize periodicamente.`
},

{
  id: "ins_batata_asterix",
  tipo: "INSUMO",
  nome: "Batata Asterix",
  categoria: "Hortaliças",
  aliases: ["batata", "batata asterix"],
  modo: `Verifique a qualidade no recebimento.

Armazene em caixas vazadas, no setor de hortifruti.

Evite empilhar em excesso e priorize o uso das unidades mais antigas.`
},

{
  id: "ins_cebola",
  tipo: "INSUMO",
  nome: "Cebola",
  categoria: "Hortaliças",
  aliases: ["cebola"],
  modo: `Verifique a qualidade no recebimento.

Armazene em caixas vazadas, no setor de hortifruti.

Evite empilhar em excesso e utilize primeiro as unidades mais antigas.`
},

{
  id: "ins_camarao",
  tipo: "INSUMO",
  nome: "Camarão",
  categoria: "Pescados",
  aliases: ["camarao", "camarão cinza", "camarão limpo"],
  modo: `Mantenha sob refrigeração por até 1 dia antes de usar, ou congele imediatamente após o recebimento.

Utilize preferencialmente no mesmo dia e evite recongelar.

Limpe apenas a porção desejada e reserve as cascas, se houver necessidade de repor produção.

Após aberto, selar novamente a embalagem do fabricante e armazenar congelado.

Porcione os camarões limpos de acordo com o item Kit Mar na aba de Produções.  `
},

{
  id: "ins_cebolete",
  tipo: "INSUMO",
  nome: "Cebolete",
  categoria: "Hortaliças",
  aliases: ["cebolete", "cebolinha francesa"],
  modo: `Verifique frescor e descarte folhas murchas.

Porcione em maços ou picado para o serviço (no dia), em pote com tampa forrado com papel-toalha seco.

Armazene sob refrigeração e utilize preferencialmente em até 5 dias, trocando o papel-toalha se houver umidade.`
},

{
  id: "ins_cenoura",
  tipo: "INSUMO",
  nome: "Cenoura",
  categoria: "Hortaliças",
  aliases: ["cenoura"],
  modo: `Verifique a qualidade no recebimento.

Armazene em caixas vazadas no setor de hortifruti.

Priorize o uso das unidades mais antigas.`
},

{
  id: "ins_cogumelo_paris",
  tipo: "INSUMO",
  nome: "Cogumelo Paris",
  categoria: "Cogumelos",
  aliases: ["cogumelo", "champignon fresco", "cogumelo paris"],
  modo: `Dê preferência à produção imediata.

Se necessário, armazene sob refrigeração por até 1 dia.

Não lave: limpe cada unidade com papel-toalha seco para evitar absorção de água.

Para modo de preparo, veja o item Cogumelo Paris na aba de Produções.`
},

{
  id: "ins_cordeiro_paleta",
  tipo: "INSUMO",
  nome: "Paleta de cordeiro",
  categoria: "Carnes",
  aliases: ["cordeiro", "paleta cordeiro"],
  modo: `Utilize imediatamente ou congele logo após o recebimento.

Se mantida sob refrigeração, utilize em até 1 dia.

Evite recongelar e mantenha sempre embalada e identificada.

Para modo de preparo, veja o item Ragu de Cordeiro na aba de Produções.`
},

{
  id: "ins_creme_de_leite",
  tipo: "INSUMO",
  nome: "Creme de leite",
  categoria: "Laticínios e derivados",
  aliases: ["creme de leite fresco", "creme culinário"],
  modo: `Armazene fechado em estoque seco.

Após aberto, mantenha sob refrigeração, devidamente identificado.`
},

{
  id: "ins_extrato_tomate",
  tipo: "INSUMO",
  nome: "Extrato de tomate",
  categoria: "Condimentos",
  aliases: ["extrato", "extrato de tomate concentrado"],
  modo: `Armazene fechado em estoque seco.

Após aberto, reembale a vácuo e mantenha sob refrigeração.`
},

{
  id: "ins_farinha_trigo",
  tipo: "INSUMO",
  nome: "Farinha de trigo",
  categoria: "Secos",
  aliases: ["farinha", "farinha trigo"],
  modo: `Reembale com porções de 0,6 kg e armazene em estoque seco, dentro de potes com tampa.`
},

{
  id: "ins_farinha_semolina",
  tipo: "INSUMO",
  nome: "Farinha de semolina",
  categoria: "Secos",
  aliases: ["semolina", "farinha de semolina"],
  modo: `Reembale com porções de 0,3 kg e armazene em estoque seco, dentro de potes com tampa.`
},

{
  id: "ins_farinha_panko",
  tipo: "INSUMO",
  nome: "Farinha Panko",
  categoria: "Empanamentos e secos",
  aliases: ["panko", "farinha panko", "pão ralado japonês"],
  modo: `Armazene em estoque seco.

Após abertura, reembale com porções de 0,5 kg e armazene em estoque seco, dentro de potes com tampa.`
},

{
  id: "ins_funghi",
  tipo: "INSUMO",
  nome: "Funghi secchi",
  categoria: "Secos",
  aliases: ["funghi", "cogumelo seco", "fungi seco", "funghi sechi", "funghi secchi"],
  modo: `Armazene no estoque seco.

Após aberto, reembale com porções de 0,3 kg e armazene em estoque seco, dentro de potes com tampa.`
},

{
  id: "ins_flores",
  tipo: "INSUMO",
  nome: "Flores comestíveis",
  categoria: "Hortaliças especiais",
  aliases: ["flores", "flores comestíveis", "edible flowers"],
  modo: `Descarte flores murchas ou danificadas.

Armazene em caixa plástica com tampa, forrada com papel-toalha seco, sem empilhar.

Mantenha sob refrigeração e utilize em curto prazo.`
},

{
  id: "ins_guanciale",
  tipo: "INSUMO",
  nome: "Guanciale",
  categoria: "Carnes curadas",
  aliases: ["guanciale", "bochecha suína curada"],
  modo: `Armazene sob refrigeração, na embalagem original ou em porções fracionadas embaladas.

Corte em tiras e porcione cm 0,8 kg.

Armazene sob congelamento..

Para uso, descongele sob refrigeração conforme necessidade, mantendo sempre bem identificado.`
},

{
  id: "ins_leite",
  tipo: "INSUMO",
  nome: "Leite",
  categoria: "Lácteos",
  aliases: ["leite integral", "leite UHT"],
  modo: `Armazene fechado em estoque seco.

Após aberto, etiquete e mantenha sob refrigeração, utilizando em prazo reduzido conforme demanda.`
},

{
  id: "ins_limao_siciliano",
  tipo: "INSUMO",
  nome: "Limão siciliano",
  categoria: "Frutas",
  aliases: ["limão", "limao", "limão siciliano", "limao siciliano"],
  modo: `Verifique a qualidade e armazene em caixas vazadas no setor de hortifruti.`
},

{
  id: "ins_louro",
  tipo: "INSUMO",
  nome: "Louro",
  categoria: "Ervas secas",
  aliases: ["folha de louro", "louro seco"],
  modo: `Armazene em recipiente limpo, parcialmente fechado, em temperatura ambiente.

Mantenha em local seco, protegido de calor e umidade.`
},

{
  id: "ins_lula",
  tipo: "INSUMO",
  nome: "Lula",
  categoria: "Pescados",
  aliases: ["lula inteira", "tubo de lula"],
  modo: `Congele imediatamente se não for produzir.

Quando sob refrigeração, utilize em até 1 dia.

Mantenha sempre em embalagem fechada e identificada, evitando recongelamentos desnecessários.

A lula tem um bom rendimento, então um tubo pode ser suficiente para repor a produção.

Abra a embalagem do fornecedor, retire o tubo e sele novamente.

Descongele o tubo sob refrigeração e mantenha o restante sob congelamento, devidamente identificados.

Corte em tiras finas e faça a montagem do Kit Mar conforme descrito na aba de Produções.`
},

{
  id: "ins_manjericao",
  tipo: "INSUMO",
  nome: "Manjericão",
  categoria: "Ervas frescas",
  aliases: ["manjericao", "manjericão"],
  modo: `Descarte folhas danificadas ou muito murchas.

Armazene as folhas em camadas intercaladas com papel-toalha seco dentro de pote com tampa, sob refrigeração.

Mantenha seco e troque o papel-toalha se houver umidade.`
},

{
  id: "ins_mexilhao",
  tipo: "INSUMO",
  nome: "Mexilhão",
  categoria: "Pescados",
  aliases: ["mexilhao", "mexilhão limpo"],
  modo: `Congele imediatamente se não for produzir.

Quando sob refrigeração, utilize em até 1 dia.

Mantenha sempre em embalagem fechada e identificada, evitando recongelamentos desnecessários.

O mexilhão tem um bom rendimento, então retire a porção necessária para repor a produção.

Abra a embalagem do fornecedor, retire a porção desejada e sele novamente.

Descongele sob refrigeração e mantenha o restante sob congelamento, devidamente identificados.

Retire a "esponja" interna e faça a montagem do Kit Mar conforme descrito na aba de Produções.`
},

{
  id: "ins_nata",
  tipo: "INSUMO",
  nome: "Nata",
  categoria: "Laticínios e derivados",
  aliases: ["creme de leite espesso", "nata fresca"],
  modo: `Porcione em embalagens a vácuo com 0,1 kg.

Armazene sob refrigeração, devidamente identificada.`
},

{
  id: "ins_noz_moscada",
  tipo: "INSUMO",
  nome: "Noz-moscada em grãos",
  categoria: "Especiarias",
  aliases: ["noz moscada", "noz-moscada"],
  modo: `Reembale e armazene a vácuo, em temperatura ambiente.`
},

{
  id: "ins_oleo",
  tipo: "INSUMO",
  nome: "Óleo de soja",
  categoria: "Gorduras vegetais",
  aliases: ["oleo", "óleo", "oleo de soja", "óleo de soja"],
  modo: `Mantenha no estoque seco.

Abasteça bisnagas plásticas de 0,3 kg para uso no serviço, mantendo-as sempre tampadas e higienizadas periodicamente.`
},

{
  id: "ins_ovo",
  tipo: "INSUMO",
  nome: "Ovo",
  categoria: "Ovos",
  aliases: ["ovos inteiros"],
  modo: `Armazene nas prateleiras superiores da área de hortifruti, em temperatura ambiente.

Retire unidades trincadas ou com odor alterado.`
},

{
  id: "ins_pimenta_siria",
  tipo: "INSUMO",
  nome: "Pimenta síria",
  categoria: "Especiarias",
  aliases: ["pimenta siria", "mix árabe", "tempero árabe"],
  modo: `Reembale e armazene a vácuo, em temperatura ambiente.`
},

{
  id: "ins_polvo",
  tipo: "INSUMO",
  nome: "Polvo",
  categoria: "Pescados",
  aliases: ["polvo inteiro", "tentáculos de polvo"],
  modo: `Congele imediatamente se não for produzir.

Quando sob refrigeração, utilize em até 1 dia.

Mantenha sempre em embalagem fechada e identificada, evitando recongelamentos desnecessários.

O polvo tem um bom rendimento, então retire a porção necessária para repor a produção.

Descongele sob refrigeração e mantenha o restante sob congelamento, devidamente identificados.

Para o modo de preparo, confira o item Polvo na aba de Produções. `
},

{
  id: "ins_queijo_parmesao",
  tipo: "INSUMO",
  nome: "Queijo Parmesão",
  categoria: "Laticínios e derivados",
  aliases: ["parmesao", "parmesão", "queijo parmesão", "queijo parmesao"],
  modo: `Armazene sob resfriamento na embalagem do fornecedor.

Após aberto, fracione em pedaços menores para ralar.

Passe duas vezes pela máquina de ralar.

Armazene em porções de 1 kg, identificadas, sob refrigeração, repondo a GN de serviço conforme a demanda.`
},

{
  id: "ins_queijo_gorgonzola",
  tipo: "INSUMO",
  nome: "Queijo Gorgonzola",
  categoria: "Laticínios e derivados",
  aliases: ["gorgonzola"],
  modo: `Corte a peça em porções de 0,3 kg.

Triture e embale a vácuo (facilita a produção dos molhos e recheios).

Armazene sob congelamento e descongele sob refrigeração, conforme necessidade.

Sempre identificado, evitando recongelar após descongelamento.`
},

{
  id: "ins_queijo_mussarela",
  tipo: "INSUMO",
  nome: "Queijo Mussarela",
  categoria: "Laticínios e derivados",
  aliases: ["muçarela", "moçarela", "queijo muçarela", "queijo moçarela", "mozzarela", "mozzarella"],
  modo: `Porcione em blocos padronizados de 0,3 kg, embale a vácuo, identifique e armazene sob refrigeração.

Utilize conforme a demanda da produção.`
},

{
  id: "ins_mussarela_bufala",
  tipo: "INSUMO",
  nome: "Mussarela de búfala",
  categoria: "Laticínios e derivados",
  aliases: ["mussarela de bufala", "muçarela de búfala", "mozzarella di bufala", "bufala"],
  modo: `Armazene sob refrigeração na salmoura original.

Para uso, disponha as porções em escorredor com antecedência para eliminar o excesso de líquido e mantenha em pote com tampa sob refrigeração.

Pode usar perfex para conter umidade dentro do pote.`
},

{
  id: "ins_pimenta_reino",
  tipo: "INSUMO",
  nome: "Pimenta-do-reino em grãos",
  categoria: "Especiarias",
  aliases: ["pimenta", "pimenta preta", "pimenta do reino", "pimenta-do-reino"],
  modo: `Reembale e armazene a vácuo, em temperatura ambiente.`
},

{
  id: "ins_presunto_parma",
  tipo: "INSUMO",
  nome: "Presunto de Parma",
  categoria: "Charcutaria",
  aliases: ["parma", "presunto", "presunto parma", "presunto de parma"],
  modo: `Armazene sob refrigeração, na embalagem original.

Utilize em prazo compatível com a validade do produto, conforme descrição na aba de Produções.`
},

{
  id: "ins_salvia",
  tipo: "INSUMO",
  nome: "Sálvia",
  categoria: "Ervas frescas",
  aliases: ["salvia", "folha de sálvia"],
  modo: `Enrole em papel-toalha seco e armazene em pote com tampa, sob refrigeração.

Evite umidade excessiva e utilize preferencialmente em até 5 dias, trocando o papel-toalha se necessário.`
},

{
  id: "ins_sal",
  tipo: "INSUMO",
  nome: "Sal",
  categoria: "Secos",
  aliases: ["sal refinado", "sal grosso", "sal fino"],
  modo: `Armazene em estoque seco, na embalagem do fornecedor ou em pote com tampa.

Mantenha em temperatura ambiente, protegendo de umidade.`
},

{
  id: "ins_salsao",
  tipo: "INSUMO",
  nome: "Salsão",
  categoria: "Hortaliças",
  aliases: ["salsao", "salsão", "aipo"],
  modo: `Descarte folhas e talos danificados.

Armazene os talos enrolados em papel-toalha seco, em pote com tampa sob refrigeração.

Substitua o papel-toalha se houver umidade.`
},

{
  id: "ins_semente_abobora",
  tipo: "INSUMO",
  nome: "Semente de abóbora",
  categoria: "Sementes e oleaginosas",
  aliases: ["semente de abobora", "sementes de abobora", "pepita", "pepitas", "pumpkin seed"],
  modo: `Reembale e armazene a vácuo, em temperatura ambiente.`
},

{
  id: "ins_tomate_cereja",
  tipo: "INSUMO",
  nome: "Tomate cereja vermelho e amarelo",
  categoria: "Hortaliças",
  aliases: ["tomate", "cereja", "tomate cereja", "tomates", "confit", "confitado"],
  modo: `Selecione os tomates, descartando unidades danificadas, e priorize os mais maduros para uso.

Reorganize as caixas do fornecedor conforme seleção.

Armazene em caixas vazadas na seção de hortifruti, evitando empilhamento.`
},

{
  id: "ins_tomate_italiano",
  tipo: "INSUMO",
  nome: "Tomate italiano",
  categoria: "Hortaliças",
  aliases: ["tomate", "italiano", "tomates", "pomodoro"],
  modo: `Selecione os tomates, descarte os danificados e priorize os mais maduros para uso.

Armazene em caixas vazadas na seção de hortifruti.

Evite empilhamento e não armazene tomates molhados.`
},

{
  id: "ins_tomilho",
  tipo: "INSUMO",
  nome: "Tomilho",
  categoria: "Ervas frescas",
  aliases: ["tomilho"],
  modo: `Enrole em papel-toalha seco e armazene em pote com tampa, sob refrigeração.

Evite umidade e utilize preferencialmente em até 5 dias, trocando o papel-toalha se necessário.`
},

{
  id: "ins_mocoto",
  tipo: "INSUMO",
  nome: "Mocotó bovino",
  categoria: "Carnes",
  aliases: ["mocoto", "pé bovino"],
  modo: `Congele imediatamente ou produza no mesmo dia.

Se mantido sob refrigeração, utilize em até 1 dia e evite recongelar após o descongelamento.

Para uso, confira o item Molho demo-glace a aba de Produções.`
},

{
  id: "ins_canela_bovina",
  tipo: "INSUMO",
  nome: "Canela bovina",
  categoria: "Carnes",
  aliases: ["canela", "cana bovina"],
  modo: `Congele imediatamente ou produza no mesmo dia.

Se mantido sob refrigeração, utilize em até 1 dia e evite recongelar após o descongelamento.

Para uso, confira o item Molho demo-glace a aba de Produções.`
},

{
  id: "ins_vinho_tinto",
  tipo: "INSUMO",
  nome: "Vinho tinto",
  categoria: "Bebidas",
  aliases: ["vinho tinto seco"],
  modo: `Armazene em estoque seco.

Após aberto, mantenha bem fechado e utilize em prazo compatível com a qualidade desejada.`
},

{
  id: "ins_vinho_branco",
  tipo: "INSUMO",
  nome: "Vinho branco",
  categoria: "Bebidas",
  aliases: ["vinho branco seco"],
  modo: `Armazene em estoque seco.

Após aberto, mantenha bem fechado e utilize em prazo compatível com a qualidade desejada.`

}



];

// PRODUÇÃO

const PRODUCAO = [
{
  id: "prod_tuile_parmesao",
  tipo: "PRODUCAO",
  nome: "Tuíle de parmesão",
  categoria: "Crocantes e finalizações",

  ingredientes: [
    { nome: "Parmesão ralado fino", qtd: "0,300 kg" },
    { nome: "Leite", qtd: "0,300 kg" },
    { nome: "Manteiga", qtd: "0,300 kg" },
    { nome: "Gemas", qtd: "0,300 kg" },
    { nome: "Sal", qtd: "0,300 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,300 kg" },
    { nome: "Noz-moscada", qtd: "0,300 kg" }
  ],

  modo: `Aqueça o forno a 160 °C.

Misture os ingredientes em um bowl.

Leve ao forno a 160º por 15 minutos.

Desenforme ainda quente, com cuidado.

Deixe esfriar completamente antes de armazenar.

Guarde em recipiente hermético, com papel-toalha para absorver umidade.` 
},

 {
  id: "prod_parma crocante",
  tipo: "PRODUCAO",
  nome: "Parma Crocante",
  categoria: "Crocantes",
  tags: ["PRODUCAO", "parma_crocante", "presunto_de_parma"],
  ingredientes: [
    { nome: "Presunto de parma", qtd: "0,6 kg" }
  ],
  modo: `Retire a parte branca de gordura.

Posicione sobre uma GN rasa, sem sobrepor, e leve ao forno a 180º por 20 minutos.

Triture ainda quente e deixe esfriar.

Armazene em pote com tampa, em temperatura ambiente. `},
{
  id: "prod_caldo_legumes",
  tipo: "PRODUCAO",
  nome: "Caldo de legumes",
  categoria: "Fundos e bases",

  ingredientes: [
    { nome: "Cebola", qtd: "0,6 kg" },
    { nome: "Salsão (só o talo)", qtd: "0,4 kg" },
    { nome: "Cenoura", qtd: "0,3 kg" }
  ],

  modo: `Descasque cebolas e cenouras.

Desfolhe o salsão, utilizando apenas os talos.

Corte os legumes grosseiramente.

Cubra com água fria e leve ao fogo baixo.

Cozinhe por aproximadamente 30 minutos, sem ferver.

Retire impurezas da superfície sempre que necessário.

Coe o caldo e utilize apenas no dia.

Não armazene de um dia para outro.` 
},

{
  id: "prod_cogumelo_paris",
  tipo: "PRODUCAO",
  nome: "Cogumelo Paris",
  categoria: "Crocantes",
  tags: ["PRODUCAO", "cogumelo_paris"],
  ingredientes: [
    { nome: "Azeite", qtd: "0,1 kg" },
    { nome: "Sal", qtd: "0,02 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,02 kg" },
    { nome: "Tomilho", qtd: "0,01 kg" },
  ],
  modo: `Não lave: limpe cada unidade com papel-toalha seco para evitar absorção de água.

Remova o excesso de talo e partes escurecidas.

Corte os cogumelos em pedaços pequenos.

Junte todos os ingredientes em uma GN rasa.

Leve ao forno a 180º por 20 minutos.

Mexa aos 10 minutos.

Retire do forno e deixe esfriar, protegendo sem tampar.

Porcione com 0,06 kg.

Armazene congelado.

Descongelar sob refrigeração para reposição de praça.` 
},
 {
  id: "prod_tomate_confit",
  tipo: "PRODUCAO",
  nome: "Tomate Confit",
  categoria: "Conservas",
  tags: ["PRODUCAO", "tomate", "tomate_confit"],
  ingredientes: [
    { nome: "Tomate cereja vermelho", qtd: "0,5 kg" },
    { nome: "Tomate cereja amarelo", qtd: "0,5 kg" },
    { nome: "Azeite", qtd: "suficiente para envolver" },
    { nome: "Sal", qtd: "a gosto" }
  ],
  modo: `Selecione tomates cereja íntegros.

Higienize os tomates.

Disponha em bowl.

Adicione azeite até envolver completamente.

Misture delicadamente.

Transfira para assadeira ou GN rasa.

Leve ao forno a 140 °C por aproximadamente 40 minutos.

Retire do forno.

Deixe esfriar totalmente.

Transfira para recipiente identificado.

Etiquete com data e lote.

Armazene sob refrigeração.`
},
  {
    id: "prod_ravioli",
    tipo: "PRODUCAO",
    nome: "Ravioli",
    categoria: "Massas frescas recheadas",
    tags: ["PRODUCAO", "massa", "massa_fresca", "usa_massa_fresca"],
ingredientes:[
 { nome: "Massa Fresca", qtd: "0,075kg, total de 12 folhas" },
    { nome: "Recheio de queijo e bechamel", qtd: "0,3 kg" }],

modo: `Posicione a massa fresca sobre o tablet.

Recheie uniformemente e coloque outra folha por cima.

Modele no formato ideal e pressione com a outra parte do tablet.

Corte retângulos regulares para montagem.

Distribua o recheio em porções pequenas e uniformes.

Umidifique levemente as bordas da massa.

Feche pressionando e expulsando o ar.

Corte e modele os ravioli.

Polvilhe semolina em uma GN e leve ao congelador até firmar.

Porcione com 9 unidades.

Etiquete e armazene congelado.`



  },
  {
    id: "prod_lasagneta",
    tipo: "PRODUCAO",
    nome: "Lasagneta Produção",
    categoria: "Massas frescas recheadas",
    tags: ["PRODUCAO", "massa", "massa_fresca", "usa_massa_fresca"],
ingredientes: [
    { nome: "Massa Fresca", qtd: "0,05kg, total de 8 folhas" },
    { nome: "Ragu Genovese", qtd: "0,96 kg ou 0,12 kg por camada" },
    { nome: "Molho Bechamel", qtd: "0,08 kg"},
    { nome: "Mussarela ralada", qtd: "0,21 kg" }],
rendimento: "7 porções de 0,3kg",
modo: `Coloque água para ferver e cozinhe as folhas de massa até ficarem al dente.

Prepare imediatamente uma GN com água e gelo e transfira a massa para interromper o cozimento.

Escorra e reserve as folhas sobre superfície limpa.

Prepare um tabuleiro de assar pão com uma folha de bobina plástica no fundo, deixando sobras para cima e para fora da forma (usar para fechamento posterior).

Em um bowl, misture o ragu genovese com o molho bechamel até obter um recheio homogêneo.

Inicie a montagem:
Intercale 1 camada de massa com recheio (ragu genovese com bechamel) e 1 camada de massa com mussarela.

Repita as camadas até totalizar 8 camadas (comece pelo recheio de ragu e bechamel):
– 4 camadas com recheio de ragu e bechamel
– 4 camadas com mussarela

Finalize a montagem, cubra toda a superfície com bobina plástica e feche pelas laterais.

Distribua dois pacotes de sal fechados e higienizados sobre a superfície, formando peso para compressão e uniformização da lasagneta.

Leve ao congelador por aproximadamente 30 minutos para firmar a montagem.

Desenforme cuidadosamente sobre tábua de corte.

Porcione em unidades de aproximadamente 300 g.

Embale cada porção em plástico filme e retorne ao congelador até firmar completamente.

Retire novamente e embale a vácuo em conjuntos de 3 unidades por pacote.

Etiquete e armazene no congelador.`
  },
 {
  id: "prod_tortei",
  tipo: "PRODUCAO",
  nome: "Tortei de Zucca",
  categoria: "Massas frescas recheadas",
  tags: ["PRODUCAO", "massa", "massa_fresca", "usa_massa_fresca"],
ingredientes:[
 { nome: "Massa Fresca", qtd: "0,075kg, total de 12 folhas" },
    { nome: "Recheio de abóbora", qtd: "0,3 kg" }],
  modo: `Polvilhe semolina na bancada e abra uma folha de massa fresca.

Distribua o recheio frio em pequenas porções.

Disponha outra folha de massa fresca por cima.

Polvilhe semolina.

Faça o corte com a forma padrão.

Feche formando o formato tradicional de tortei, expulsando todo o ar interno.

Sele bem as bordas.

Forre uma GN rasa com bobina plástica, polvilhe semolina e acomode o tortei.

Leve ao congelamento para firmar.

Porcione com 5 unidades e embale a vácuo.

Etiquete e armazene sob congelamento por até 60 dias.

Descongele para uso imediato em água fervente por pelo menos 5 minutos, até todos flutuarem.

O tempo mínimo é garantia de descongelar o recheio.

Certifique-se de não deixar nenhum grudar no fundo da cesta, para não abrir.`
}
,
{
  id: "prod_fiore",
  tipo: "PRODUCAO",
  nome: "Fiore de Pappardelle",
  categoria: "Massas frescas recheadas",
  tags: ["PRODUCAO", "massa", "massa_fresca", "usa_massa_fresca"],
ingredientes:[
 { nome: "Massa Fresca", qtd: "0,075kg, total de 12 folhas" },
    { nome: "Recheio de mussarela, gorgonzola e bechamel", qtd: "0,3 kg" }],
  modo: `Polvilhe semolina na bancada e abra uma folha de massa fresca de 30 cm de compimento.

Transfira o recheio para saco de confeiteiro.

Faça uma linha contínua de recheio frio de uma ponta à outra da tira.

Dobre a massa verticalmente cobrindo o recheio.

Pressione bem para vedar e expulsar todo o ar interno.

Faça o recorte na borda utilizando o acessório correspondente.

Retire a massa da bancada com cuidado.

Enrole formando o formato de flor (fiore).

Disponha em GN forrada com bobina plástica polvilhada com semolina.

Leve ao congelador para firmar.

Armazene sob congelamento, dentro de caixa com tampa.

Para uso, cozinhe diretamente congelado em água fervente salgada por aproximadamente 5 minutos.`
},

 {
  id: "prod_tagliatelle",
  tipo: "PRODUCAO",
  nome: "Tagliatelle",
  categoria: "Pastas",
  tags: ["PRODUCAO", "pastas"],
  ingredientes: [
    { nome: "Farinha de Trigo", qtd: "1,6 kg" },
    { nome: "Farinha de Semolina", qtd: "0,6 kg" },
    { nome: "Ovos Inteiros", qtd: "0,76 kg" },
    { nome: "Gemas", qtd: "0,24 kg" }
  ],
  rendimento: "3,2 kg cru e 5,2 kg cozido. Cada porção: 0,3 kg.",
  modo: `Escolha a matriz da extrusora para formato tagliatelle.

Misture a farinha de trigo e a semolina na cuba da máquina.

Adicione os ovos inteiros e as gemas.

Bata por 5 minutos até obter massa uniforme e granulada.

Inicie a extrusão.

Descarte a primeira saída de massa.

Salpique semolina sobre a pasta conforme extrusa.

Corte no comprimento padrão da casa.

Modele os ninhos manualmente.

Acomode em redes próprias.

Embale em vácuo médio.

Leve imediatamente ao congelamento.

Cozinhe diretamente do freezer em água fervente salgada.

Retire a massa em ponto al dente.


`
}
,
 {
  id: "prod_spaghettine",
  tipo: "PRODUCAO",
  nome: "Spaghettine",
  categoria: "Pastas",
aliases: ["espaguete", "ispaguete", "spagueti", "espagueti"],
  tags: ["PRODUCAO", "pastas"],
  ingredientes: [
    { nome: "Farinha de Trigo", qtd: "1,6 kg" },
    { nome: "Farinha de Semolina", qtd: "0,6 kg" },
    { nome: "Ovos Inteiros", qtd: "0,76 kg" },
    { nome: "Gemas", qtd: "0,24 kg" }
  ],
  rendimento: "3,2 kg cru e 5,2 kg cozido. Cada porção: 0,3 kg.",
  modo: `Escolha a matriz da extrusora para formato tagliatelle.

Misture a farinha de trigo e a semolina na cuba da máquina.

Adicione os ovos inteiros e as gemas.

Bata por 5 minutos até obter massa uniforme e granulada.

Inicie a extrusão.

Descarte a primeira saída de massa.

Salpique semolina sobre a pasta conforme extrusa.

Corte no comprimento padrão da casa.

Modele os ninhos manualmente.

Acomode em redes próprias.

Embale em vácuo médio.

Leve imediatamente ao congelamento.

Cozinhe diretamente do freezer em água fervente salgada.

Retire a massa em ponto al dente.`
}
,
  {
  id: "prod_rigatoni",
  tipo: "PRODUCAO",
  nome: "Rigatoni",
  categoria: "Pastas",
  tags: ["PRODUCAO", "pastas"],
  modo: `Produto industrializado.

Armazene no estoque seco.

Para uso, cozinhe em água fervente salgada até atingir o ponto al dente.

`
}
,
{
  id: "prod_casarecce",
  tipo: "PRODUCAO",
  nome: "Casarecce",
  categoria: "Pastas",
  tags: ["PRODUCAO", "pastas"],
  ingredientes: [
    { nome: "Farinha de Trigo", qtd: "1,6 kg" },
    { nome: "Farinha de Semolina", qtd: "0,6 kg" },
    { nome: "Ovos Inteiros", qtd: "0,76 kg" },
    { nome: "Gemas", qtd: "0,24 kg" }
  ],
  rendimento: "3,2 kg cru e 5,2 kg cozido. Cada porção: 0,3 kg.",
  modo: `Escolha a matriz da extrusora para formato tagliatelle.

Misture a farinha de trigo e a semolina na cuba da máquina.

Adicione os ovos inteiros e as gemas.

Bata por 5 minutos até obter massa uniforme e granulada.

Inicie a extrusão.

Descarte a primeira saída de massa.

Salpique semolina sobre a pasta conforme extrusa.

Corte no comprimento padrão da casa.

Modele os ninhos manualmente.

Acomode em redes próprias.

Embale em vácuo médio.

Leve imediatamente ao congelamento.

Cozinhe diretamente do freezer em água fervente salgada.

Retire a massa em ponto al dente.`

}
,

{
  id: "prod_penne",
  tipo: "PRODUCAO",
  nome: "Penne",
  categoria: "Pastas",
  tags: ["PRODUCAO", "pastas"],
  ingredientes: [
    { nome: "Farinha de Trigo", qtd: "1,6 kg" },
    { nome: "Farinha de Semolina", qtd: "0,6 kg" },
    { nome: "Ovos Inteiros", qtd: "0,76 kg" },
    { nome: "Gemas", qtd: "0,24 kg" }
  ],
  rendimento: "3,2 kg cru e 5,2 kg cozido. Cada porção: 0,3 kg.",
  modo: `Escolha a matriz da extrusora para formato tagliatelle.

Misture a farinha de trigo e a semolina na cuba da máquina.

Adicione os ovos inteiros e as gemas.

Bata por 5 minutos até obter massa uniforme e granulada.

Inicie a extrusão.

Descarte a primeira saída de massa.

Salpique semolina sobre a pasta conforme extrusa.

Corte no comprimento padrão da casa.

Modele os ninhos manualmente.

Acomode em redes próprias.

Embale em vácuo médio.

Leve imediatamente ao congelamento.

Cozinhe diretamente do freezer em água fervente salgada.

Retire a massa em ponto al dente.`

}
,

  {
    id: "prod_molho_pomodoro",
    tipo: "PRODUCAO",
    nome: "Molho Pomodoro",
    categoria: "Molhos",
    tags: ["PRODUCAO", "molho", "tomate"],
ingredientes: [
    { nome: "Tomate Italiano", qtd: "10 kg" },
    { nome: "Alho", qtd: "0,3 kg" },
    { nome: "Azeite", qtd: "0,3 kg" },
    { nome: "Manjericão desfolhado", qtd: "0,3 kg" },
    { nome: "Tomate Pelati", qtd: "3,4 kg" },
    { nome: "Sal", qtd: "0,08 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,08 kg" }
  ],
rendimento: "15kg",
modo: `Separe os ingredientes: tomates italianos bem maduros, alho, manjericão desfolhado, azeite, sal e as latas de tomate pelati.

Higienize os tomates, corte ao meio e disponha em uma GN de aço grande.

Regue com azeite, adicione o alho, o manjericão e o sal.

Asse a 160 °C por aproximadamente 1h30, até que os tomates estejam bem macios e concentrados.

Retire do forno e transfira os tomates assados para uma GN furada posicionada sobre a pia.

Deixe escorrer o excesso de líquido por alguns minutos.

Transfira os tomates escorridos de volta para a GN original.

Adicione o tomate pelati.

Bata com mixer até obter um molho homogêneo.

Ajuste o sal, se necessário.

Deixe esfriar em temperatura controlada, sem tampar totalmente, mas mantendo protegido.

Porcione em sacos de 1,2 kg, sele, etiquete e armazene congelado.
`


  },
 {
  id: "prod_molho_gorgonzola",
  tipo: "PRODUCAO",
  nome: "Molho Gorgonzola",
  categoria: "Molhos",
  tags: ["PRODUCAO", "molho", "queijo"],
  ingredientes: [
    { nome: "Creme de Leite", qtd: "2 l" },
    { nome: "Queijo Gorgonzola", qtd: "0,3 kg" },
    { nome: "Sal", qtd: "0,03 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,03 kg" }
    ],
  rendimento: "2,3 kg",
  modo: `Separe os ingredientes

Misture tudo em uma panela média, com fogo baixo ou banho maria (preferencial, pois o molho tem muita gordura e queima fácil).

Mexa até obter molho homogêneo e ponto napê.

Finalize com o mixer.

Espere esfriar.

Porcione com 0,3 kg, etiquete e armazene refrigerado.

Evite ferver.`
}
,
  {
    id: "prod_molho_funghi",
    tipo: "PRODUCAO",
    nome: "Molho Funghi",
    categoria: "Molhos",
    tags: ["PRODUCAO", "molho", "funghi"],
ingredientes: [
    { nome: "Funghi Secchi", qtd: "0,25 kg" },
    { nome: "Alho", qtd: "0,05 kg" },
    { nome: "Azeite", qtd: "0,05 kg" },
    { nome: "Nata", qtd: "0,2 kg" },
    { nome: "Creme de leite", qtd: "0,6 kg" },
    { nome: "Sal", qtd: "0,008 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,004 kg" }
  ],
rendimento: "1,2kg",
modo: `Separe os ingredientes: funghi secchi hidratado, alho picado, azeite, nata, creme de leite, sal e pimenta-do-reino.

Doure o alho no azeite em fogo baixo, sem deixar queimar.

Adicione o funghi hidratado e um pouco da água de hidratação, aos poucos, apenas o suficiente para soltar o fundo da panela e formar uma base pastosa.

Complete com água apenas até cobrir levemente e deixe reduzir por cerca de 10 minutos, concentrando aroma e sabor.

Adicione a nata e o creme de leite.

Cozinhe em fogo baixo até atingir ponto napê (quando o molho adere nas costas da colher).

Ajuste o sal e a pimenta-do-reino, se necessário.

Bata com mixer até o molho ficar homogêneo.

Deixe esfriar completamente.

Porcione em embalagens de 0,3 kg, embale a vácuo, etiquete e armazene congelado.`,


  },

 {
  id: "prod_ragu_cordeiro",
  tipo: "PRODUCAO",
  nome: "Ragu de Cordeiro",
  categoria: "Ragus",
  tags: ["PRODUCAO", "ragu", "com_gluten", "com_carne", "com_pimenta", "nao_vegano"],
  ingredientes: [
    { nome: "Paleta de Cordeiro", qtd: "10 kg" },
    { nome: "Cebola", qtd: "0,3 kg" },
    { nome: "Aipo", qtd: "0,3 kg" },
    { nome: "Vinho Tinto", qtd: "0,3 kg" },
    { nome: "Molho Pomodoro", qtd: "3,4 kg" },
    { nome: "Azeite", qtd: "0,08 kg" },
    { nome: "Caldo de Legumes", qtd: "0,08 kg" },
    { nome: "Alho", qtd: "0,08 kg" },
    { nome: "Sal", qtd: "0,08 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,08 kg" },
    { nome: "Pimenta Síria", qtd: "0,08 kg" },
    { nome: "Alecrim", qtd: "0,08 kg" },
    { nome: "Tomilho", qtd: "0,08 kg" }
  ],
  rendimento: "15 kg",
  modo: `Aqueça o forno a 250 °C.

Disponha os cubos de cordeiro em assadeira furada.

Asse por aproximadamente 40 minutos, tombando aos 10, 20 e 30 minutos, até dourar fortemente.

Retire a carne e reserve.

Em uma panela grande, doure cebola, alho e aipo até atingir coloração âmbar.

Deglace com vinho tinto.

Mexa até evaporar completamente o álcool.

Reduza até a base ficar levemente espessa.

Incorpore o molho pomodoro e misture bem.

Retorne o cordeiro à panela.

Adicione caldo até cobrir a carne.

Tempere com alecrim, tomilho e pimenta síria.

Transfira para GN funda ou panela de cozimento.

Asse ou cozinhe a 90–95 °C por 6 a 8 horas.

Cozinhe até a carne desfazer facilmente com a colher.

Ajuste sal e densidade do molho, reduzindo ou adicionando caldo.

Remova as ervas inteiras.

Deixe esfriar em temperatura controlada, sem tampar e protegido.

Porcione em unidades de 0,12 kg.

Embale, etiquete com data e lote.

Armazene congelado.`

}
,
  {
  id: "prod_ragu_genovese",
  tipo: "PRODUCAO",
  nome: "Ragu Genovese",
  categoria: "Ragus",
  tags: ["PRODUCAO", "ragu", "carne"],
  ingredientes: [
    { nome: "Coxão Mole", qtd: "5 kg" },
    { nome: "Cebola", qtd: "1 kg" },
    { nome: "Vinho Tinto", qtd: "0,6 kg" },
    { nome: "Alecrim", qtd: "0,3 kg" },
    { nome: "Extrato de Tomate", qtd: "1 kg" },
    { nome: "Sal", qtd: "0,05 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,02 kg" },
    { nome: "Caldo de Legumes", qtd: "0,2 kg" }
  ],
  rendimento: "80 porções",
  modo: `Prepare previamente o caldo de legumes.

Limpe o coxão mole e corte em cubos médios.

Existem duas rotas de preparo com resultados equivalentes:

MÉTODO FORNO

Disponha a carne em GN perfurada sobre outra GN para captar o caldo (gordura + outros líquidos).

Asse a 250 °C por 30 minutos, tombando uma vez aos 15 minutos para dourar.

Nos últimos 10 minutos, adicione a cebola ao forno.

Quando a cebola estiver tostada, incorpore o vinho tinto.

Retorne ao forno a 160 °C até evaporar todo o álcool.

Adicione o extrato de tomate e reduza por 15 minutos a 150 °C.

Junte a carne à base formada.

Adicione caldo suficiente para envolver a preparação.

Leve novamente ao forno a 90 °C por 8 horas.

MÉTODO FRIGIDEIRA + FORNO

Sela a carne em frigideira bem quente, em pequenas porções, sem sobrepor.

Reserve a carne já dourada em GN.

Na mesma frigideira, adicione a cebola em julienne.

Abaixe o fogo e doure lentamente até atingir coloração âmbar profunda.

Deglace com vinho tinto.

Evapore completamente o álcool em fogo baixo.

Incorpore o extrato de tomate e reduza por cerca de 15 minutos.

Junte a carne selada à base do molho.

Adicione caldo suficiente para envolver.

Transfira para GN funda.

Leve ao forno a 85 °C por aproximadamente 8 horas.

Finalize

Cozinhe até a carne desfazer facilmente com a colher.

Ajuste sal e densidade do molho, reduzindo ou adicionando caldo.

Remova ervas inteiras.

Deixe esfriar em temperatura controlada, sem tampar e protegido.

Porcione em unidades de 0,12 kg.

Embale, etiquete com data e lote.

Armazene congelado.`
}
,
{
  id: "prod_ragu_toscano",
  tipo: "PRODUCAO",
  nome: "Ragu Toscano – Base",
  categoria: "Ragus",
  tags: ["PRODUCAO", "ragu", "carne"],
  ingredientes: [
    { nome: "Linguiça Toscana", qtd: "1 kg" },
    { nome: "Alho picado", qtd: "0,03 kg" },
    { nome: "Azeite", qtd: "0,05 kg" },
    { nome: "Sal", qtd: "0,006 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,002 kg" }
  ],

  modo: `Disponha a linguiça toscana em GN rasa.

Adicione alho, azeite, sal e pimenta.

Misture bem desfazendo todos os grumos de carne.

Espalhe a preparação sem compactar.

Leve ao forno a 180 °C por aproximadamente 40 minutos.

Tombre a mistura duas vezes nos primeiros 30 minutos para douramento uniforme.

Retire do forno.

Deixe esfriar completamente em temperatura controlada.

Porcione em unidades de 0,08 kg.

Embale, etiquete com data e lote.

Armazene congelado.`
}
,
 
  {
    id: "prod_molho_romesco",
    tipo: "PRODUCAO",
    nome: "Molho Romesco",
    categoria: "Molhos",
    tags: ["PRODUCAO", "molho", "vegetariano"],
ingredientes: [
    { nome: "Pimentão vermelho", qtd: "0,6 kg" },
    { nome: "Pimentão amarelo", qtd: "0,3 kg" },
    { nome: "Cebola", qtd: "0,2 kg" },
    { nome: "Alho", qtd: "0,05 kg" },
    { nome: "Pomodoro", qtd: "0,2 kg" },
    { nome: "Sal", qtd: "0,03 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,03 kg" }
  ],
modo: `
Corte a cebola e os pimentões (sem semente) em pedaços grande.

Misture tudo em uma GN rasa e leve ao forno a 200º (10 minutos para a cebola e 20 minutos para os pimentões).

Descasque os pimentões ainda quentes.

Aqueça uma panela e refogue o alho.

Adicione os pimentões, a cebola, sal e pimenta-do-reino.

Refogue por 10 minutos, adicione o pomodoro.

Permaneça mexendo por 5 minutos enquanto ferve.

Ajuste o sal, se necessário (mais sal é adicionado ao preparo dos pratos).

Retire do fogo e bata no mixer até obter molho homogêneo.

Espere esfriar e porcione com 0,3kg.

Etiquete e armazene sob congelamento.
`

  },

{
  id: "prod_manteiga_ervas",
  tipo: "PRODUCAO",
  nome: "Manteiga de ervas",
  categoria: "Manteigas aromatizadas",
  tags: ["PRODUCAO", "manteiga", "vegetariano"],
  ingredientes: [
    { nome: "Manteiga sem sal", qtd: "0,5 kg" },
    { nome: "Sálvia", qtd: "0,04 kg" },
    { nome: "Tomilho", qtd: "0,03 kg" },
    { nome: "Alecrim", qtd: "0,015 kg" },
    { nome: "Sal", qtd: "0,05 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,04 kg" }
  ],

  modo: `Amarre as ervas em pequeno bouquet.

Coloque a manteiga e o bouquet em um bowl resistente ao calor.

Leve ao forno a 120 °C por 40 minutos, para infusão.

Não deixe ferver.

Retire o bouquet e deixe esfriar um pouco, o suficiente para não derreter a bobina plástica onde será armazenada. 

Com ela ainda em estado líquido, transfira o conteúdo para um saco de bobina plástica, passando pelo chinois.

Amarre a bobina e refrigere até a manteiga solidificar.

Retire da bobina, raspe as impurezas depositadas no fundo.

Transfira a manteiga final para GN pequena destinada à boqueta.`
}
,
 {
  id: "prod_manteiga_camarao",
  tipo: "PRODUCAO",
  nome: "Manteiga de camarão",
  categoria: "Manteigas aromatizadas",
  tags: ["PRODUCAO", "manteiga", "frutos_do_mar"],
  ingredientes: [
    { nome: "Cascas de camarão", qtd: "0,5 kg" },
    { nome: "Manteiga sem sal", qtd: "1 kg" }
  ],
  rendimento: "aprox. 1 kg",
  modo: `Separe as cascas de camarão da carne.

Disponha as cascas em panela seca.

Leve ao fogo médio e seque as cascas até liberar aroma intenso.

Adicione a manteiga.

Mexa constantemente em fogo baixo até completa infusão do sabor.

Coe a manteiga no chinois, sem perfex, e bata suavemente com o mixer (velocidade mais baixa, poucos giros).

Coe novamente a manteiga em chinois forrado com perfex.

Refrigere em bowl até solidificar.

Retire a manteiga solidificada.

Raspe as impurezas depositadas no fundo.

Armazene em GN pequena de bancada refrigerada.`
}
,
{
    id: "prod_molho_alfredo",
    tipo: "PRODUCAO",
    nome: "Molho Alfredo",
    categoria: "Molhos",
    tags: ["PRODUCAO", "molho alfredo", "lacteo"],
  ingredientes: [
    { nome: "Nata", qtd: "1 kg" },
    { nome: "Creme de Leite", qtd: "0,5 kg" },
    { nome: "Parmesão Ralado Fino", qtd: "0,3 kg" },
    { nome: "Sal", qtd: "0,02 kg" },
    { nome: "Noz Moscada", qtd: "0,01 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,01 kg" }],
rendimento: "10 porções",
  modo: `Coloque a nata e o creme de leite na panela ou frigideira em fogo baixo.

Aqueça até que a nata se dissolva completamente e a mistura fique homogênea.

Adicione o parmesão ralado fino, o sal, a pimenta-do-reino e a noz-moscada.

Mexa continuamente até molho liso.

Prove e ajuste o sal, se necessário.

Porcione em embalagens a vácuo com 0,2 kg, etiquete e armazene refrigerado por até 7 dias.

Para uso, aqueça em fogo baixo e mexa continuamente.

Evite ferver.`

},
{
  id: "prod_recheio_mussarela_bechamel",
  tipo: "PRODUCAO",
  nome: "Recheio de mussarela e bechamel",
  categoria: "Recheios",
  tags: ["recheio", "lacteo", "massa_recheada"],
ingredientes: [
    { nome: "Mussarela Ralada", qtd: "0,8 kg" },
    { nome: "Molho Bechamel", qtd: "0,2 kg" }],
modo: `Preparar o bechamel e deixar esfriar.

Em um bowl, misture com a mussarela ralada até obter massa homogênea.

Ajuste o sal, se necessário.

Ideal para uso imediato, com saco de confeiteiro.

Armazene sob congelamento, se necessário.

Descongele em refrigeração.

Saída: Ravioli ao Pomodoro e Gambereti.
`

},
{
  id: "prod_recheio_abobora",
  tipo: "PRODUCAO",
  nome: "Recheio de abóbora",
  categoria: "Recheios",
  tags: ["recheio", "lacteo", "massa_recheada"],
ingredientes: [
    { nome: "Abóbora cabotiá", qtd: "1,8 kg" },
    { nome: "Azeite", qtd: "0,1 kg" },
    { nome: "Sal", qtd: "0,05 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,05 kg" },
    { nome: "Alecrim", qtd: "2 galhos" },
    { nome: "Noz-moscada", qtd: "0,03 kg" },
    { nome: "Parmesão ralado", qtd: "0,4 kg" },
    { nome: "Molho Bechamel", qtd: "0,1 kg" }],
modo: `Higienize a abóbora, corte ao meio e retire as sementes.

Tempere com sal, azeite, pimenta do reino, noz-moscada e alecrim.

Unte uma GN com azeite e leve ao forno por a 180º por 1 hora.

Prepare o bechamel e deixe esfriar.

Retire do forno e, ainda quente, raspe o interior da abóbora e o azeite da GN.

Em um bowl, processe com o mixer até obter creme homogêneo.

Espere esfriar.

Acrescente parmesão ralado fino e misture bem.

Ajuste o sal, se necessário.

Ideal para uso imediato, com saco de confeiteiro.

Armazene sob congelamento, se necessário.

Descongele em refrigeração.

Saída: Tortei de Zucca.
`

},
{
  id: "prod_recheio_muss_gorg_bech",
  tipo: "PRODUCAO",
  nome: "Recheio de mussarela, gorgonzola e bechamel",
  categoria: "Recheios",
  tags: ["recheio", "lacteo", "massa_recheada"],
ingredientes: [
    { nome: "Mussarela Ralada", qtd: "0,5 kg" },
    { nome: "Queijo Gorgonzola", qtd: "0,5 kg" },
    { nome: "Molho Bechamel", qtd: "0,2 kg" }],
modo: `Preparar o bechamel e deixar esfriar.

Dentro de um bowl, misture com a mussarela ralada e o gorgonzola triturado, até obter creme homogêneo.

Ajuste o sal, se necessário.

Ideal para uso imediato, com saco de confeiteiro.

Armazene sob congelamento, se necessário.

Descongele em refrigeração.

`
},
{
  id: "prod_recheio_muss_gorg",
  tipo: "PRODUCAO",
  nome: "Recheio de mussarela e gorgonzola",
  categoria: "Recheios",
  tags: ["recheio", "lacteo", "massa_recheada"],
ingredientes: [
    { nome: "Mussarela Ralada", qtd: "0,5 kg" },
    { nome: "Queijo Gorgonzola", qtd: "0,5 kg" },
    { nome: "Sal", qtd: "0,02 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,02 kg" },
    { nome: "Noz-moscada", qtd: "0,01 kg" }

],
modo: `Dentro de um bowl, triture o gorgonzola

Adicione a mussarela ralada e misture até obter creme homogêneo.

Ajuste o sal, se necessário.

Ideal para uso imediato, com saco de confeiteiro.

Armazene sob congelamento, se necessário.

Descongele em refrigeração.
`
},

{
  id: "prod_cremina",
  tipo: "PRODUCAO",
  nome: "Cremina",
  categoria: "Cogumelos",
  ingredientes: [
    { nome: "Gemas", qtd: "3 un" },
    { nome: "Parmesão", qtd: "0,03 kg" },
    { nome: "Sal", qtd: "0,01 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,02 kg" }
  ],
rendimento: "1 porção",
  modo: `Adicione as gemas em um bowl com os demais ingredientes.

Mexa suavemente até obter creme homogêneo.

Etiquete e armazene refrigerado por até 1 dia.

Base para o prato Spaghetinne Alla Carbonara

Quantidade para uma porção`


},
{
  id: "prod_polvo",
  tipo: "PRODUCAO",
  nome: "Polvo - Preparo",
  categoria: "Porcionamentos",
  ingredientes: [
    { nome: "Polvo", qtd: "6 kg" },
    { nome: "Cebola", qtd: "2 kg" },
    { nome: "Cenoura", qtd: "1 kg" },
    { nome: "Salsão", qtd: "1 kg" },
    { nome: "Sal", qtd: "0,1 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,1 kg" },
    { nome: "Vinho tinto", qtd: "0,2 kg" }
  ],
  modo: `Lave profundamente os tentáculos do polvo.

Ferva água em uma panela grande a adicione todos os ingredientes, menos o polvo.

Após ferver, segure o polvo pelo corpo e mergule os tentáculos 3 vezes antes de soltá-los.

Nesse momento, a água vai esfriar um pouco, por causa da troca de temperatura.

Após ferver novamente, conte 40 minutos.

Deixe escorrer na água para acelerar esfriamento.

Porcione os tentáculos conforme gramatura do Kit Mar (aproximadamente 0,05 kg).`

},
{
  id: "prod_kit_mar",
  tipo: "PRODUCAO",
  nome: "Kit Mar",
  categoria: "Porcionamentos",
  ingredientes: [
    { nome: "Polvo", qtd: "0,05 kg" },
    { nome: "Camarão", qtd: "0,03 kg" },
    { nome: "Lula", qtd: "0,03 kg" },
    { nome: "Mexilhão", qtd: "0,03 kg" }
  ],
  modo: `Separe os ingredientes para a montagem do kit.

Corte a lula em anéis.

Limpe o camarão, reservando as cascas para produção de manteiga de camarão, se necessário.

Limpe os mexilhões para tirar "esponja" interna.

Corte o polvo preparado previamente em tentáculos.

Porcione camarão, lula, polvo e mexilhão nas proporções definidas acima.

Sele a vácuo, etiquete e armazene congelado.

No serviço, em dias de menor movimento, descongele a porção na água por aproximadamente 3 minutos. Para dias de maior movimento, descongele sob refrigeração no dia anterior.`

},

{
  id: "prod_molho_demi_glace",
  tipo: "PRODUCAO",
  nome: "Molho Demi-glace",
  categoria: "Molhos",
  ingredientes: [
    { nome: "Mocotó bovino", qtd: "10 kg" },
    { nome: "Canela bovina", qtd: "10 kg" },
    { nome: "Cebola", qtd: "3,5 kg" },
    { nome: "Cenoura", qtd: "2,5 kg" },
    { nome: "Salsão", qtd: "0,5 kg" },
    { nome: "Tomilho", qtd: "0,1 kg" },
    { nome: "Alecrim", qtd: "0,06 kg" },
    { nome: "Água", qtd: "12–15 L" }
  ],
  modo: `Selecione e limpe o mocotó e a canela bovina. Retire impurezas e escalda, se necessário.

Disponha o mocotó e a canela em assadeira grande e leve ao forno a 250 ºC por 30 minutos, mexendo a cada 15 minutos, até dourar bem.
Objetivo: desenvolver cor e sabor (reação de Maillard).

Em outra assadeira, coloque cebola, cenoura e salsão e asse até ficarem brilhantes e levemente dourados.

Escorra o mocotó e a canela bovina e transfira para uma assadeira funda ou GN, junto com os legumes.

Cubra completamente com água quente.

Adicione tomilho e alecrim.

Cozinhe em forno baixo (cerca de 95 ºC) por 6 a 8 horas, sem deixar ferver forte, mexendo ocasionalmente.

Quando o caldo estiver bem reduzido e saboroso, coe passando por chinois grosso, depois chinois fino e, se necessário, por perfex para limpeza máxima.

Transfira o líquido coado para uma GN funda e volte ao forno ou ao fogo baixo para reduzir até atingir textura espessa e brilhante.

Porcione em embalagens de 0,3 kg, etiquete e armazene congelado.`


},

{
  id: "prod_molho_bechamel",
  tipo: "PRODUCAO",
  nome: "Molho Bechamel",
  categoria: "Molhos",
  ingredientes: [
    { nome: "Leite", qtd: "0,5 kg" },
    { nome: "Manteiga", qtd: "0,05 kg" },
    { nome: "Farinha de trigo", qtd: "0,05 kg" },
    { nome: "Cebola", qtd: "1/2 un" },
    { nome: "Noz-moscada", qtd: "0,002 kg" },
    { nome: "Louro", qtd: "1 folha" },
    { nome: "Sal", qtd: "0,004 kg" }
  ],
modo: `Aqueça o leite com a cebola, o louro e a noz-moscada, sem deixar ferver. Reserve aquecido.

Em outra panela, prepare um roux: derreta a manteiga, adicione a farinha de trigo e mexa continuamente até formar uma pasta lisa, sem dourar.

Adicione o leite aromatizado ao roux aos poucos, mexendo com fouet para evitar grumos.

Cozinhe em fogo baixo, mexendo sempre, até atingir ponto napê (quando o molho adere nas costas da colher).

Ajuste o sal, se necessário.

Espere esfriar para uso.

Não congelar.`


},

{
  id: "prod_massa_fresca",
  tipo: "PRODUCAO",
  nome: "Massa Fresca",
  categoria: "Massas",
  ingredientes: [
    { nome: "Farinha de trigo", qtd: "0,325 kg" },
    { nome: "Farinha de Semolina", qtd: "0,325 kg" },
    { nome: "Gemas", qtd: "0,55kg" }
  ],
modo: `Misture os secos (farinha de trigo e semolina) até uniformizar.

Abra um berço no centro e adicione os ovos (batidos, mas sem espumar) aos poucos, incorporando com as mãos ou espátula.

Sove a massa até obter textura lisa, homogênea, elástica e sem grudar.
Tempo médio de sova: 8 a 10 minutos.

Envolva a massa em plástico filme e leve à geladeira por 30–60 minutos antes de usar, para relaxar o glúten.

Ajuste a máquina laminadora e abra a massa até atingir 7 mm (espessura padrão da casa, para melhor experiência sensorial).

Divida em folhas de aproximadamente 30 cm de comprimento.

Abra bobinas plásticas para as camadas, polvilhe semolina para reter hidratação e evitar que grudem e intercale as folhas de massa fresca com as camadas plásticas.

Mantenha sob refrigeração por até 1 dia (por conter ovo cru na massa).`

},

{
  id: "prod_pangrattato",
  tipo: "PRODUCAO",
  nome: "Pangrattato",
  categoria: "Crocantes",
  ingredientes: [
    { nome: "Farinha panko", qtd: "0,5 kg" },
    { nome: "Azeite", qtd: "0,02 kg" },
    { nome: "Alho", qtd: "0,02 kg" },
    { nome: "Suco de limão siciliano", qtd: "0,03 kg" },
    { nome: "Raspas de limão siciliano", qtd: "0,01 kg" },
    { nome: "Sal", qtd: "0,015 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,06 kg" }
  ],
modo: `Misture todos os ingredientes em uma GN rasa.
Leve ao forno a 150°C por 30 minutos, mexendo a cada 10 para dourar de forma uniforme.
Deixe esfriar.
Etiquete e armazene em temperatura ambiente.`

},
{
  id: "prod_gnocchi_batata",
  tipo: "PRODUCAO",
  nome: "Gnocchi de Batata",
  categoria: "Gnocchi",
 aliases: [
    
    "nhoque",
    "nhoqui",
    "gnochi",
"inhoqui",
"inhoque"
  ],
  ingredientes: [
    { nome: "Batata Asterix", qtd: "3 kg" },
    { nome: "Farinha de trigo", qtd: "0,3 kg" },
    { nome: "Gemas", qtd: "0,2 kg" },
    { nome: "Sal", qtd: "0,03 kg" },
    { nome: "Noz-moscada", qtd: "0,03 kg" }
  ],
modo: `Selecione batatas de tamanho similar.

Higienize e embale com casca em papel alumínio, individualmente.

Asse as batatas a 180º por 1 hora, até ficarem macias.

Passe pela peneira imediatamente, com casca, ainda quente.

Espere esfriar.

Incorpore as gemas de ovo e amasse até obter massa lisa.

Incorpore a farinha aos poucos até formar massa leve.

Essa etapa deve ser feita suavemente, para não edurecer a massa.

Tempere com sal e noz-moscada.

Modele rolos e corte em pedaços uniformes.

Cozinhe em água fervente até flutuar.

Retire e resfrie imediatamente em GN com água e gelo.

Passe para uma GN furada, deixe escorrer e leve ao congelador por 30 minutos, ou até firmar.

Porcione com 0,3 kg, etiquete e armazene congelado.

Reserve uma parte para produção do ripiene, se necessário.`

},
{
  id: "prod_gnocchi_ripiene",
  tipo: "PRODUCAO",
  nome: "Gnocchi Ripiene",
  categoria: "Massas recheadas",
  aliases: [
    "gnocchi ripiene",
    "nhoque ripiene",
    "nhoque recheado",
    "gnocchi recheado",
"ripieni",
"inhoqui",
"inhoque"
  ],
ingredientes: [
   { nome: "Batata Asterix", qtd: "3 kg" },
    { nome: "Farinha de trigo", qtd: "0,3 kg" },
    { nome: "Gemas", qtd: "0,2 kg" },
    { nome: "Sal", qtd: "0,03 kg" },
    { nome: "Noz-moscada", qtd: "0,03 kg" },
{ nome: "Recheio de mussarela e gorgonzola", qtd: "1 kg" }

  ],
  modo: `Selecione batatas de tamanho similar.

Higienize e embale com casca em papel alumínio, individualmente.

Asse as batatas a 180º por 1 hora, até ficarem macias.

Passe pela peneira imediatamente, com casca, ainda quente.

Espere esfriar.

Incorpore as gemas de ovo e amasse até obter massa lisa.

Incorpore a farinha aos poucos até formar massa leve.

Essa etapa deve ser feita suavemente, para não edurecer a massa.

Tempere com sal e noz-moscada.

Modele bolinhas de 40g de massa e 10g de recheio.

Enrole o recheio no interior da massa, fechando bem.

Cozinhe em água fervente até flutuar.

Retire e resfrie imediatamente em GN com água e gelo.

Passe para uma GN furada, deixe escorrer e leve ao congelador por 30 minutos, ou até firmar.

Porcione com 5 unidades, etiquete e armazene congelado.

Reserve uma parte para produção do gnocchi clássico, se necessário.`

}
,
{
  id: "prod_azeite_manjericao",
  tipo: "PRODUCAO",
  nome: "Azeite de Manjericão",
  categoria: "Finalizações",
  ingredientes: [
    { nome: "Manjericão", qtd: "0,03 kg" },
    { nome: "Azeite", qtd: "0,3 kg" },
    { nome: "Sal", qtd: "0,002 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,002 kg" }
  ],
 modo: `Higienize e escorra as folhas de manjericão.

Branqueie as folhas em água fervente por 10 segundos.

Transfira imediatamente para banho de gelo para fixar a cor.

Esprema bem com um perfex para retirar toda a água.

Coloque o manjericão e o azeite em um bowl.

Bata com o mixer até obter um líquido homogêneo e verde intenso, com micropartes de manjericão.

Etiquete e armazene em bisnaga sob refrigeração.`


}
,
{
  id: "prod_paillard_di_filetto",
  tipo: "PRODUCAO",
  nome: "Paillard di Filetto",
  categoria: "Produção",
  ingredientes: [
    { nome: "Filé Mignon limpo", qtd: "10 kg" }],

 modo: `Limpe o filé mignon.

Corte medalhões de 0,15kg.

Divida o plástico de porcionamento em duas folhas médias.

Posicione o medalhão entre as duas folhas e, numa bancada firme, utilize o martelo de carne para abrir o medalhão.

Armazene sob congelamento em caixa com tampa.

Pode empilhar uma na outra.`

}


];


// PRATOS

const PRATOS = [
{
    nome: "Gnocchi na Manteiga com Ragu de Cordeiro",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "carne_vermelha", "com_carne", "com_lactose", "pode_ser_sem_lactose"],
    ingredientes: [
      { nome: "Ragu de cordeiro", qtd: "0,12 kg" },
      { nome: "Gnocchi", qtd: "0,3 kg" },
      { nome: "Manteiga", qtd: "0,02 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
 modo: `Aqueça uma panela pequena com a porção de ragu de cordeiro e um pouco de água. Mantenha em fogo baixo até aquecer por completo.

Aqueça levemente a frigideira e adicione a manteiga. Mexa até derreter.

Adicione o gnocchi e marque um dos lados sem saltear. Em seguida, salteie até aquecer todos os lados.

Prove e acerte o sal do ragu, se necessário.

Sirva o gnocchi no fundo do prato, disponha o ragu por cima e finalize com azeite de manjericão, cebolete e flores.

Pode ser sem lactose: ao invés de saltear na manteiga, use azeite extravirgem.`
   
  },
  {
  nome: "Gnocchi com Ragu Genovese ao Molho Alfredo",
  tipo: "PRATOS",
  tempo: "15 minutos",
  rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "carne_vermelha", "com_carne", "com_lactose", "molho_cremoso", "pode_ser_sem_lactose"],
  ingredientes: [
    { nome: "Ragu genovese", qtd: "0,12 kg" },
    { nome: "Molho Alfredo", qtd: "0,3 kg" },
    { nome: "Sal", qtd: "0,002 kg" },
    { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
    { nome: "Gnocchi", qtd: "0,20 kg" },
    { nome: "Azeite", qtd: "0,005 kg" },
    { nome: "Cebolete", qtd: "0,001 kg" },
    { nome: "Flores", qtd: "1 un" }
  ],
modo: `Aqueça uma panela pequena com a porção de ragu genovese e um pouco de água. Mantenha em fogo baixo até aquecer por completo.

Aqueça a frigideira em fogo baixo e adicione a nata, o creme de leite, sal, pimenta-do-reino e noz-moscada. Mexa até obter um molho homogêneo.

Adicione o parmesão ralado e mexa até derreter e formar um molho cremoso.

Adicione o gnocchi e salteie suavemente até aquecer por completo e envolver bem no molho.

Prove e acerte o sal, se necessário.

Sirva o gnocchi no fundo do prato, disponha o ragu genovese por cima e finalize com azeite, cebolete e flores.

Pode ser sem lactose: ao invés de usar molho Alfredo, pode saltear no azeite extravirgem.`
},

  {
    nome: "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
   tipo: "PRATOS",
 tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "frutos_do_mar", "com_carne", "molho_tomate", "pode_ser_sem_lactose"],
    ingredientes: [
      { nome: "Azeite", qtd: "0,015 kg" },
      { nome: "Kit mar", qtd: "1 un" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Vinho branco", qtd: "0,01 kg" },
      { nome: "Tomate confit", qtd: "0,03 kg" },
      { nome: "Molho Pomodoro", qtd: "0,40 kg" },
      { nome: "Suco de limão siciliano", qtd: "0,01 kg" },
      { nome: "Raspas de limão siciliano", qtd: "0,005 kg" },
      { nome: "Manteiga de camarão", qtd: "0,02 kg" },
      { nome: "Tagliatelle", qtd: "0,20 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" },
      { nome: "Pangrattato", qtd: "0,01 kg" }
    ],
    modo: `Aqueça a frigideira em fogo médio e adicione o óleo de soja.

Salteie os frutos do mar temperados com sal e pimenta-do-reino.

Adicione o vinho branco e deixe reduzir rapidamente.

Reserve o polvo para finalização.

Incorpore o tomate confit, o molho pomodoro, o suco de limão siciliano e a manteiga de camarão.

Adicione o tagliatelle e misture até aquecer por completo.

Prove e acerte o sal, se necessário.

Sirva e finalize com azeite de manjericão, cebolete, flores, raspas de limão siciliano e pangrattato.`
  },
  {
    nome: "Spaghettine com Camarão ao Molho Pomodoro",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "frutos_do_mar", "com_carne", "molho_tomate", "pode_ser_sem_lactose"],
    ingredientes: [
      { nome: "Azeite", qtd: "0,015 kg" },
      { nome: "Camarão", qtd: "0,06 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Vinho branco", qtd: "0,01 kg" },
      { nome: "Tomate confit", qtd: "0,03 kg" },
      { nome: "Molho Pomodoro", qtd: "0,4 kg" },
{ nome: "Suco de limão siciliano", qtd: "0,01 kg" },
      { nome: "Raspas de limão siciliano", qtd: "0,005 kg" },
      { nome: "Manteiga de camarão", qtd: "0,02 kg" },
      { nome: "Spaghettine", qtd: "0,20 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" },
      { nome: "Pangrattato", qtd: "0,01 kg" }
    ],
        modo: `Aqueça a frigideira em fogo médio e adicione o óleo de soja.

Grelhe os camarões temperados com sal e pimenta-do-reino até dourar levemente. Adicione o vinho branco, salteie rapidamente e reserve os camarões aquecidos para a finalização.

Na mesma frigideira, adicione o tomate confit, o molho pomodoro, o suco de limão siciliano e a manteiga de camarão. Mexa até o molho ficar homogêneo e bem quente.

Adicione o spaghettine e misture até aquecer por completo, ajustando a textura com água do cozimento, se necessário.

Prove e acerte o sal, se necessário.

Sirva o spaghettine no prato, disponha os camarões grelhados por cima e finalize com azeite de manjericão, cebolete, flores, raspas de limão siciliano e uma colher de sopa de pangrattato.

Pode ser sem lactose: a manteiga de camarão entra no preparo, dá pra não usar.`

  },
  {
    nome: "Rigatoni com Frutos do Mar ao Molho Romesco",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "frutos_do_mar", "com_carne", "pode_ser_sem_lactose"],
    ingredientes: [
      { nome: "Óleo de soja", qtd: "0,015 kg" },
      { nome: "Kit mar", qtd: "1 un" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Vinho branco", qtd: "0,01 kg" },
      { nome: "Tomate confit", qtd: "0,03 kg" },
      { nome: "Molho Romesco", qtd: "0,40 kg" },
{ nome: "Suco de limão siciliano", qtd: "0,01 kg" },
      { nome: "Raspas de limão siciliano", qtd: "0,005 kg" },
      { nome: "Manteiga de camarão", qtd: "0,02 kg" },
      { nome: "Rigatoni", qtd: "0,20 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" },
      { nome: "Mussarela de búfala", qtd: "2 un" },
      { nome: "Pangrattato", qtd: "0,01 kg" }
    ],
 modo: `Aqueça a frigideira em fogo médio e adicione o óleo de soja.

Salteie os frutos do mar temperados com sal e pimenta-do-reino. Grelhe o polvo apenas de um lado e reserve para a finalização.

Adicione o vinho branco, salteie rapidamente e deixe reduzir.

Incorpore o tomate confit, o molho romesco, o suco de limão siciliano e a manteiga de camarão. Mexa até o molho ficar homogêneo e bem quente.

Adicione o rigatoni e misture até aquecer por completo, ajustando a textura com água do cozimento, se necessário.

Prove e acerte o sal, se necessário.

Sirva o rigatoni no prato, disponha o polvo reservado por cima e finalize com azeite de manjericão, cebolete, flores, raspas de limão siciliano, mussarela de búfala e pangrattato.

Pode ser sem lactose: a manteiga de camarão vai no preparo, e a mussarela de búfala vai na finalização, então dá pra tirar.`

  },
  {
    nome: "Paillard di Filetto com Tagliatelle ao Molho Gorgonzola",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "com_carne", "carne_vermelha", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Molho gorgonzola", qtd: "0,25 kg" },
      { nome: "Sal (molho)", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino (molho)", qtd: "0,001 kg" },
      { nome: "Tagliatelle", qtd: "0,20 kg" },
      { nome: "Óleo de soja", qtd: "0,015 kg" },
      { nome: "Paillard", qtd: "0,15 kg" },
      { nome: "Sal (carne)", qtd: "0,002 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Retire o paillard do congelador e deixe descongelar em cima do forno por 5 minutos, dentro de uma GN previamente posicionada (já deve estar aquecida).

Aqueça a frigideira em fogo médio e adicione o molho de gorgonzola com água do cozimento até aquecer.

Incorpore o tagliatelle ao molho e misture até envolver completamente.

Prove e acerte o sal, se necessário.

Em outra frigideira, aqueça o óleo e grelhe o paillard até dourar dos dois lados.

Sirva a pasta com o paillard por cima e finalize com azeite, cebolete e flores.

Deve ir para a mesa imediatamente após servir.`
  },
  {
    nome: "Spaghettine alla Carbonara",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "porco", "com_lactose", "molho_cremoso", "com_carne"],
    ingredientes: [
      { nome: "Guanciale", qtd: "0,04 kg" },
      { nome: "Gema de ovo", qtd: "3 un" },
      { nome: "Parmesão", qtd: "0,04 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino (ovo)", qtd: "0,001 kg" },
      { nome: "Spaghettine", qtd: "0,20 kg" },
      { nome: "Espuma de parmesão", qtd: "0,04 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Aqueça a frigideira em fogo médio.

Adicione o guanciale e frite na própria gordura até dourar levemente.

Em um bowl, misture as gemas, o parmesão, o sal e a pimenta-do-reino até formar um creme.

Adicione o spaghettine e um pouco da água do cozimento na frigideira. Retire do fogo.

Incorpore a mistura de ovos mexendo até emulsificar e formar o molho.

Prove e acerte o sal, se necessário.

Sirva e finalize com espuma de parmesão, cebolete, flores e pimenta-do-reino.`
  },
  {
    nome: "Tortei di Zucca com Espuma de Parmesão",
tipo: "PRATOS",   
tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "vegetariano", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Tortei", qtd: "5 un" },
      { nome: "Manteiga de ervas", qtd: "0,04 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Espuma de parmesão", qtd: "0,10 kg" },
      { nome: "Sementes de abóbora", qtd: "0,01 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Cozinhe a porção de tortei por aproximadamente 5 minutos, ou até subir à superfície. Solte delicadamente do fundo para evitar que abra.

Aqueça uma frigideira em fogo baixo e adicione a manteiga de ervas com um pouco de água do cozimento. Mexa até formar um molho leve e homogêneo.

Adicione o tortei à frigideira com cuidado, sem fritar ou saltear, apenas regando a massa com a manteiga aromatizada.

Adicione sal e pimenta-do-reino.

Prove e acerte o sal, se necessário.

Sirva o tortei centralizado no prato e finalize com espuma de parmesão entre as massas, sementes de abóbora, cebolete, flores e pimenta-do-reino.`

  },
  {
    nome: "Ravioli ao Molho Pomodoro com Manteiga de Ervas",
tipo: "PRATOS",    
tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "vegetariano", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Ravioli", qtd: "9 un" },
      { nome: "Manteiga de ervas", qtd: "0,04 kg" },
      { nome: "Pomodoro", qtd: "0,40 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Manjericão", qtd: "0,002 kg" },
      { nome: "Mussarela de búfala", qtd: "0,03 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Cozinhe a porção de ravioli por aproximadamente 5 minutos, ou até subir totalmente à superfície. Solte delicadamente do fundo para evitar abertura da massa.

Aqueça duas frigideiras em fogo baixo.

Na primeira, aqueça o molho pomodoro até ficar homogêneo e bem quente.

Na segunda, adicione a manteiga de ervas com um pouco da água do cozimento e mexa até formar um molho leve e uniforme.

Adicione o ravioli à frigideira da manteiga e regue suavemente, sem saltear.

Prove e acerte o sal, se necessário.

Sirva uma base de pomodoro no prato, disponha o ravioli por cima e finalize com azeite de manjericão, folhas de manjericão, mussarela de búfala, cebolete, flores e pimenta-do-reino.`

  },
  {
    nome: "Penne com Ragu Toscano e Limão Siciliano",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "com_carne", "molho_tomate", "sem_lactose", "pode_ser_vegano"],

    ingredientes: [
      { nome: "Cogumelos paris", qtd: "0,025 kg" },
      { nome: "Linguiça toscana", qtd: "0,05 kg" },
      { nome: "Molho Pomodoro", qtd: "0,40 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Suco de limão siciliano", qtd: "0,004 kg" },
      { nome: "Penne", qtd: "0,20 kg" },
      { nome: "Raspas de limão siciliano", qtd: "0,001 kg" },
      { nome: "Azeite de manjericão", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Aqueça a frigideira em fogo médio e adicione as porções de cogumelos paris e linguiça toscana.

Salteie até dourar levemente e liberar aroma.

Adicione o molho pomodoro e mexa até incorporar completamente.

Tempere com sal, pimenta-do-reino e suco de limão siciliano.

Adicione o penne e misture até aquecer toda a pasta.

Prove e acerte o sal, se necessário.

Sirva e finalize com raspas de limão siciliano, azeite de manjericão, pimenta-do-reino, cebolete e flores.

Pode ser vegano: a linguiça toscana vai só no preparo, então dá pra tirar.`

  },
  {
    nome: "Lasagneta com Demi-glace e Espuma de Parmesão",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "com_carne", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Óleo de soja", qtd: "0,015 kg" },
      { nome: "Lasagneta", qtd: "1 un" },
      { nome: "Molho demi-glace", qtd: "0,05 kg" },
      { nome: "Espuma de parmesão", qtd: "0,04 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Aqueça uma frigideira em fogo médio com o óleo de soja.

Posicione a lasagneta com uma das laterais em contato com a frigideira e mantenha sem mexer até dourar este lado.

Vire para selar a outra lateral e leve a frigideira ao forno a 180 °C por aproximadamente 5 minutos, até aquecer completamente o interior, sem desmanchar o queijo.

Em uma panela pequena, aqueça o molho demi-glace com um pouco de água em fogo baixo até ficarem homogêneos.

Prove e acerte o sal, se necessário.

Sirva uma fina base de demi-glace no prato, posicione a lasagneta por cima e finalize com espuma de parmesão, pimenta-do-reino, cebolete e flores.`
  },
  {
    nome: "Gnocchi Ripiene ao Molho Funghi",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "vegetariano", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Gnocchi ripiene", qtd: "5 un" },
      { nome: "Molho funghi", qtd: "0,15 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Cogumelos paris", qtd: "0,025 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
    modo: `Cozinhe a porção de gnocchi ripiene por aproximadamente 5 minutos, ou até subir completamente à superfície. Solte delicadamente do fundo para evitar abertura do gnocchi.

Aqueça levemente a frigideira e adicione o molho funghi com um pouco da água do cozimento. Mantenha em fogo baixo até aquecer e homogeneizar.

Prove e acerte o sal, se necessário.

Adicione o gnocchi ao molho e incorpore delicadamente, sem saltear.

Sirva e finalize com cogumelos paris, azeite, pimenta-do-reino, cebolete e flores.`

  },
  {
    nome: "Ravioli com Camarão ao Molho de Limão Siciliano",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "frutos_do_mar", "com_lactose", "molho_cremoso", "com_carne", "pode_ser_vegetariano"],
    ingredientes: [
      { nome: "Camarão", qtd: "0,06 kg" },
      { nome: "Nata", qtd: "0,10 kg" },
      { nome: "Creme de leite", qtd: "0,05 kg" },
      { nome: "Suco de limão siciliano", qtd: "0,004 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Ravioli", qtd: "9 un" },
      { nome: "Raspas de limão siciliano", qtd: "0,001 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
   modo: `Aqueça a frigideira em fogo médio e adicione o óleo.

Grelhe os camarões temperados com sal e pimenta-do-reino até dourar dos dois lados. Reserve aquecidos para finalização.

Cozinhe a porção de ravioli por aproximadamente 5 minutos, ou até subir totalmente à superfície. Solte delicadamente do fundo para evitar abertura da massa.

Na mesma frigideira dos camarões, abaixe o fogo e adicione a nata e o creme de leite até formar um molho uniforme.

Adicione o suco de limão siciliano e incorpore.

Adicione o ravioli ao molho e regue suavemente, sem saltear.

Prove e acerte o sal, se necessário.

Sirva a massa no prato, disponha os camarões por cima e finalize com raspas de limão siciliano, azeite, pimenta-do-reino, cebolete e flores.

Pode ser vegetariano: os camarões só vão na finalização, então dá pra tirar.`

  },
  {
    nome: "Fiore ao Molho Funghi com Manteiga de Ervas",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "vegetariano", "com_lactose", "molho_cremoso"],
    ingredientes: [
      { nome: "Fiore", qtd: "1 un" },
      { nome: "Manteiga de ervas", qtd: "0,04 kg" },
      { nome: "Molho funghi", qtd: "0,15 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Cogumelos paris", qtd: "0,025 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
   modo: `Cozinhe a porção de fiore por aproximadamente 5 minutos, ou até subir à superfície. Solte delicadamente do fundo para evitar abertura da massa.

Leve os cogumelos paris ao forno para dourar levemente.

Aqueça uma frigideira em fogo baixo e adicione o molho funghi com um pouco da água do cozimento, mantendo até ficar homogêneo e bem quente.

Em outra frigideira, aqueça a manteiga de ervas com um pouco da água do cozimento até formar um molho leve.

Adicione o fiore à manteiga de ervas e regue suavemente, sem saltear.

Prove e acerte o sal, se necessário.

Sirva uma base de molho funghi no prato, disponha o fiore centralizado e finalize com os cogumelos paris, azeite, pimenta-do-reino, cebolete e flores.`

  },

  {
    nome: "Casarecce ao Molho Alfredo com Ervilhas e Parma",
tipo: "PRATOS",
    tempo: "15 minutos",
    rendimento: "1 porção",
tags: ["com_gluten", "com_pimenta", "nao_vegano", "porco", "com_lactose", "molho_cremoso", "pode_ser_vegetariano"],
    ingredientes: [
      { nome: "Presunto de parma crocante", qtd: "0,015 kg" },
      { nome: "Nata", qtd: "0,10 kg" },
      { nome: "Creme de leite", qtd: "0,05 kg" },
      { nome: "Sal", qtd: "0,002 kg" },
      { nome: "Pimenta-do-reino", qtd: "0,001 kg" },
      { nome: "Noz moscada", qtd: "0,001 kg" },
      { nome: "Parmesão", qtd: "0,04 kg" },
      { nome: "Casarecce", qtd: "0,20 kg" },
      { nome: "Ervilha", qtd: "0,015 kg" },
      { nome: "Azeite", qtd: "0,005 kg" },
      { nome: "Cebolete", qtd: "0,001 kg" },
      { nome: "Flores", qtd: "1 un" }
    ],
   modo: `Aqueça a frigideira em fogo baixo e adicione a nata e o creme de leite até formar um molho homogêneo.

Adicione o parmesão ralado e mexa até incorporar totalmente.

Adicione as ervilhas e mantenha aquecido por 1 a 2 minutos.

Adicione o casarecce cozido e misture até envolver completamente a pasta no molho.

Prove e acerte o sal, se necessário.

Sirva a pasta no prato e finalize com parma crocante, azeite, pimenta-do-reino, cebolete e flores.

Pode ser vegetariano:  só vão na finalização, então dá pra tirar.`

  }
];


// =======================================
// MAPA PRODUÇÃO → PRATOS
// =======================================

const MAPA_PRODUCAO_PRATOS = {
  prod_massa_fresca: [],

  prod_ravioli: [
    "Ravioli ao Molho Pomodoro com Manteiga de Ervas",
    "Ravioli de Camarão ao Molho de Limão Siciliano",
  ],

  prod_lasagneta: [
    "Lasagneta com Demi-glace e Espuma de Parmesão",
  ],

  prod_tortei: [
    "Tortei di Zucca com Espuma de Parmesão",
  ],

  prod_fiore: [
    "Fiore ao Molho Funghi com Manteiga de Ervas",
  ],

  prod_tagliatelle: [
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Paillard com Tagliatelle ao Molho Gorgonzola",
  ],

  prod_spaghettine: [
    "Spaghettine com Camarão ao Molho Pomodoro",
    "Spaghettine alla Carbonara",
  ],

  prod_rigatoni: [
    "Rigatoni com Frutos do Mar ao Molho Romesco",
  ],

  prod_casarecce: [
    "Casarecce ao Molho Alfredo com Ervilhas e Parma",
  ],

  prod_penne: [
    "Penne com Ragu Toscano e Limão Siciliano",
  ],

  prod_molho_pomodoro: [
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Spaghettine com Camarão ao Molho Pomodoro",
    "Penne com Ragu Toscano e Limão Siciliano",
    "Ravioli ao Molho Pomodoro com Manteiga de Ervas",
  ],

  prod_molho_gorgonzola: [
    "Paillard com Tagliatelle ao Molho Gorgonzola",
  ],

  prod_molho_funghi: [
    "Gnocchi Ripiene ao Molho Funghi",
    "Fiore ao Molho Funghi com Manteiga de Ervas",
  ],

  prod_molho_demi_glace: [
    "Lasagneta com Demi-glace e Espuma de Parmesão",
  ],

  prod_molho_romesco: [
    "Rigatoni com Frutos do Mar ao Molho Romesco",
  ],

  prod_ragu_cordeiro: [
    "Gnocchi na Manteiga com Ragu de Cordeiro",
  ],

  prod_ragu_genovese: [
    "Gnocchi com Ragu Genovese ao Molho Alfredo",
  ],

  prod_manteiga_ervas: [
    "Tortei di Zucca com Espuma de Parmesão",
    "Ravioli ao Pomodoro com Manteiga de Ervas",
    "Fiore ao Molho Funghi com Manteiga de Ervas",
  ],

  prod_manteiga_camarao: [
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Spaghettine com Camarão ao Molho Pomodoro",
    "Rigatoni com Frutos do Mar ao Molho Romesco",
  ],

  prod_espuma_parmesao: [
    "Spaghettine alla Carbonara",
    "Tortei di Zucca com Espuma de Parmesão",
    "Lasagneta com Demi-glace e Espuma de Parmesão",
  ],

  prod_pangrattato: [
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Spaghettine com Camarão ao Molho Pomodoro",
    "Rigatoni com Frutos do Mar ao Molho Romesco",
  ],

  prod_azeite_manjericao: [
    "Gnocchi com Ragu de Cordeiro",
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Spaghettine com Camarão ao Molho Pomodoro",
    "Rigatoni com Frutos do Mar ao Molho Romesco",
    "Ravioli ao Molho Pomodoro com Manteiga de Ervas",
    "Penne com Ragu Toscano e Molho de Limão Siciliano",
  ],

  prod_kit_mar: [
    "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    "Rigatoni com Frutos do Mar ao Molho Romesco",
  ],
};

function getPratosQueUsamProducao(idProducao) {
  return MAPA_PRODUCAO_PRATOS[idProducao] || [];
}


// BOQUETA

const BOQUETA = [
  {
    id: "boq_montagem_finalizacao",
    tipo: "BOQUETA",
    nome: "Montagem e finalização",
    categoria: "Boqueta",
    observacoes: `Orientações gerais de montagem de prato, ordem dos elementos, uso dos insumos de finalização (flores, cebolete, azeite de manjericão, pangrattato etc.) e padrão visual da casa.`
  },
  {
    id: "boq_checklist_praca",
    tipo: "BOQUETA",
    nome: "Checklist de praça",
    categoria: "Boqueta",
    observacoes: `Listas de conferência para abertura, operação e fechamento da praça.

📌 **Abertura de praça**
– Checar limpeza geral da bancada e equipamentos.  
– Separar e organizar insumos de finalização (flores, cebolete, azeites, pangratatto, etc.).  
– Verificar quantidade de pratos e louças limpas e disponíveis.  
– Checar funcionamento do moedor de pimenta e reposição de pimenta-do-reino.  
– Conferir espumas, molhos, azeites aromatizados e sementes tostadas.  
– Ajustar iluminação e organização visual da praça.

📌 **Durante o serviço**
– Manter a praça limpa e reabastecida continuamente.  
– Observar tempo de saída dos pratos para evitar filas no passe.  
– Ajustar ordem de envio das comandas (priorizar mesas pequenas sem parar o fluxo das maiores).  
– Confirmar visual final do prato antes do envio (padrão da casa).  
– Repor rapidamente insumos críticos (flores, cebolete, azeites, parmesão, sementes).

📌 **Fechamento de praça**
– Guardar e etiquetar insumos conforme regras da casa.  
– Conferir validade de produtos perecíveis e descartar os vencidos.  
– Limpar equipamentos, bancadas e suportes.  
– Repor louças e utensílios para o dia seguinte.  
– Registrar faltas ou necessidades emergenciais para a equipe da manhã.
`
  },
  {
    id: "boq_mise_diario",
    tipo: "BOQUETA",
    nome: "Mise en place diário",
    categoria: "Boqueta",
    observacoes: `Itens que exigem preparo diário específico para a boqueta.

📌 **Insumos de finalização — preparo diário**
– **Cebolete**: receber íntegro, armazenar com papel toalha; cortar 2x ao dia (manhã e fim da tarde) conforme demanda.  
– **Flores comestíveis**: separar, hidratar se necessário e armazenar em recipiente permeável.  
– **Azeites aromatizados**: filtrar, reabastecer e conferir intensidade aromática.  
– **Sementes tostadas**: torrar em pequenos lotes e armazenar bem fechadas.  
– **Espumas**: checar sifões, gás e quantidade; reabastecer conforme produção.

📌 **Reabastecimentos críticos**
– Moedor de pimenta-do-reino.  
– Sal para finalização.  
– Panos limpos e secos.  
– Colheres de prova.  
– Pinças de serviço.

📌 **Prioridades do dia**
1. Garantir insumos perecíveis prontos (cebolete, flores).  
2. Conferir insumos de alto giro (espumas, molhos, azeites).  
3. Revisar visual e organização da praça antes da abertura.
`
  }
];



// EQUIPAMENTOS

const EQUIPAMENTOS = [

{
  id: "equ_bancadas",
  tipo: "EQUIPAMENTO",
  nome: "Bancadas",
  categoria: "Superfícies de trabalho",
  modo: `

Utilize sempre com superfícies higienizadas.

Obrigatório uso de tábuas para corte.

Tenha sempre um pano para não apoiar recipientes acima de 70°C diretamente.

Frequência:

Antes do uso, entre tarefas e ao final do turno.

Procedimento:

1. Remova resíduos sólidos.

2. Lave com detergente e água.

3. Enxague.

4. Sanitize com álcool 70%.

5. Secagem com papel toalha.

6. Aos domingos, deve ser arrastada para limpeza nos fundos e nas laterais.
 
`
},
{
  id: "equ_sifão",
  tipo: "EQUIPAMENTO",
  nome: "Sifão",
aliases: ["sifao"],
  categoria: "Equipamentos auxiliares",
  modo: `

Este equipamento trabalha sob pressão. Seu uso requer cuidados.

Frequência: Antes do uso, entre tarefas e ao final do turno.

Procedimento:

1. Remova todos os resíduos.

2. Lave com detergente, água e esponja.

3. Desmonte e lave todas as partes individualmente.

4. Aos domingos, guarde vazio e higienizado. 
`
},

{
  id: "equ_chao",
  tipo: "EQUIPAMENTO",
  nome: "Chão",
  categoria: "Infraestrutura",
  modo: `

Mantenha sempre seco e limpo.

Evite presença de gordura acumulada.

Utilize pouca água para facilitar puxar com o rodo. 

Passe pano com água e cloro.

Secar antes de liberar circulação.`
},

{
  id: "equ_coifa",
  tipo: "EQUIPAMENTO",
  nome: "Coifa",
  categoria: "Ventilação e exaustão",
  modo: `

Operar sempre durante atividades do fogão e do forno.

Desmontar e lavar com desengordurante.

Estrutura externa: pano úmido + álcool 70%.

Limpeza pesada semanal.

Evitar acúmulo de gordura.
`
},

{
  id: "equ_extrusora",
  tipo: "EQUIPAMENTO",
  nome: "Extrusora",
  categoria: "Produção de massas",
  modo: `

Montar apenas com peças secas.

Não operar sem massa.

Não introduzir objetos além da massa.

Desmontar ao final do uso.

Lavar as peças com água corrente, esponja e detergente neutro.

Secar completamente antes de armazenar.

Manter motor protegido de umidade.

Manter peças juntas no mesmo local.
`
},

{
  id: "equ_fogao",
  tipo: "EQUIPAMENTO",
  nome: "Fogão",
  categoria: "Equipamento térmico",
  modo: `

Limpeza diária.

Lave as grelhas com detergente neutro.

Fechar o gás diariamente ao final do serviço.`},

{
  id: "equ_forno",
  tipo: "EQUIPAMENTO",
  nome: "Forno Combinado",
  categoria: "Equipamento térmico",
  modo: `

Preaqueça sempre.

Não bloqueie saídas de vapor.

Use luvas térmicas.

Limpeza interna diária após resfriar, de acordo com programa de limpeza sugerido pelo sistema.

Limpeza externa com detergente e lado amarelo da esponja.

Limpeza entre os vidros com detergente e lado amarelo da esponja.

Limpeza do filtro em água corrente com detergente.
`
},

{
  id: "equ_geladeira",
  tipo: "EQUIPAMENTO",
  nome: "Geladeiras",
  categoria: "Refrigeração",
  modo: `

Não sobrecarregue ou bloqueie o ventilador.

Limpeza diária externa.

Limpeza diária das borrachas.

Limpeza semanal interna ou sempre que necessário.

Evite abertura prolongada das portas.

Registre variações incomuns de temperatura.

Produtos identificados, datados e com PEPS.`

},

{
  id: "equ_vidros",
  tipo: "EQUIPAMENTO",
  nome: "Vidros",
  categoria: "Estrutura",
  modo: `

Passe pano limpo com desengordurante.

Tire o excesso após enxaguar o pano.

Use papel toalha para secar.

Observe para não deixar manchas de gordura.

Importante manter a higiene e o bom visual da estação.
`
},

{
  id: "equ_prateleiras",
  tipo: "EQUIPAMENTO",
  nome: "Prateleiras",
  categoria: "Armazenamento",
  modo: `

Use para:

Apoiar os pratos.

Guardar peças.

Apoiar itens pessoais durante o serviço.

Alimentos embalados ou utensílios.

Evite empilhar muita coisa ou deixar desorganizado. O bom visual da estação é importante.

Limpeza diária com álcool 70%.

Semanalmente, arraste para limpeza geral.
`
},

{
  id: "equ_outros",
  tipo: "EQUIPAMENTO",
  nome: "Outros",
  categoria: "Equipamentos auxiliares",
  modo: `
Abrange seladora, liquidificador, processadores e similares.

Use e guarde os equipamentos secos.

Observe a voltagem correta (110V ou 220V).

Manter peças guardadas juntas.

Desmontar e lavar após uso.`


},
{
  id: "equ_frig_pane",
  tipo: "EQUIPAMENTO",
  nome: "Frigideiras e panelas",
  categoria: "Equipamentos auxiliares",
  modo: `

Evite manter em uso por longo período.

Mantenha sempre limpo e pronto para uso.

Use e guarde os equipamentos limpos e secos.

Guardar junto.`}


];

// CARDÁPIO

const CARDAPIO = [
  {
    id: "car_gnocchi_cordeiro",
    tipo: "CARDAPIO",
    nome: "Gnocchi na Manteiga com Ragu de Cordeiro",
    categoria: "Massas da casa",
    observacoes:
      "Gnocchi de batata macio, preparado na manteiga. Acompanha ragu de cordeiro cozido lentamente no vinho tinto, finalizado com azeite de manjericão e flores comestíveis."
  },
  {
    id: "car_gnocchi_genovese_alfredo",
    tipo: "CARDAPIO",
    nome: "Gnocchi com Ragu Genovese ao Molho Alfredo",
    categoria: "Massas da casa",
    observacoes:
    "Um clássico reconfortante. Gnocchi de batata macio, preparado com molho Alfredo. Acompanha ragu genovese, feito com carne bovina cozida longamente com cebolas, alecrim. Prato muito aromático."
  },
  {
    id: "car_tagliatelle_mar_pomodoro",
    tipo: "CARDAPIO",
    nome: "Tagliatelle com Frutos do Mar ao Molho Pomodoro",
    categoria: "Massas do mar",
    observacoes:
"Massa longa al dente, como o fettuccine, com frutos do mar salteados com vinho branco, tomates confit e manteiga de camarão. Acompanha nosso pomodoro artesanal, raspas de limão siciliano, pangrattato e azeite de manjericão. É muito colorido, fresco."  },
  {
    id: "car_spaghettine_camarao_pomodoro",
    tipo: "CARDAPIO",
    nome: "Spaghettine com Camarão ao Molho Pomodoro",
    categoria: "Massas do mar",
    observacoes:
      "Spaghettine al dente com tomates confit, pomodoro artesanal e manteiga de camarão, finalizado com camarões grelhados, raspas de limão siciliano, pangrattato, azeite de manjericão. "
  },
  {
    id: "car_rigatoni_mar_romesco",
    tipo: "CARDAPIO",
    nome: "Rigatoni com Frutos do Mar ao Molho Romesco",
    categoria: "Massas do mar",
    observacoes:
        "Rigatoni al dente com tomates confit, molho romesco artesanal e manteiga de camarão, raspas de limão siciliano, pangrattato, azeite de manjericão e mussarela de búfala na finalização. "
  },
  {
    id: "car_paillard_tagliatelle_gorgonzola",
    tipo: "CARDAPIO",
    nome: "Paillard com Tagliatelle ao Molho Gorgonzola",
    categoria: "Clássicos da casa",
    observacoes:
    "Carne fina e macia, grelhada rapidamente, servida com nosso tagliatelle ao molho gorgonzola — cremoso e equilibrado. O mais querido da casa."
  },
  {
    id: "car_spaghettine_carbonara",
    tipo: "CARDAPIO",
    nome: "Spaghettine alla Carbonara",
    categoria: "Clássicos da casa",
    observacoes:
      "Versão clássica romana: guanciale crocante, gemas, parmesão e pimenta-do-reino, com espuma de parmesão para finalizar."
  },
  {
    id: "car_tortei_zucca",
    tipo: "CARDAPIO",
    nome: "Tortei di Zucca com Espuma de Parmesão",
    categoria: "Massas recheadas",
    observacoes:
      "Massa recheada de abóbora assada e especiarias, servida na manteiga de ervas, com espuma de parmesão, sementes de abóbora e pimenta-do-reino. Um prato muito bonito e elogiado."
  },
  {
    id: "car_ravioli_pomodoro_ervas",
    tipo: "CARDAPIO",
    nome: "Ravioli ao Molho Pomodoro com Manteiga de Ervas",
    categoria: "Massas recheadas",
    observacoes:
      "Ravioli recheado com mussarela e bechamel, finalizado na manteiga de ervas e servido em molho pomodoro artesanal. Decorado com folhas de manjericão, pimenta-do-reino e mussarela de búfala. É delicado, aromático e cheio de sabor de cozinha italiana clássica."
  },
  {
    id: "car_penne_ragu_toscano_limao",
    tipo: "CARDAPIO",
    nome: "Penne com Ragu Toscano e Limão Siciliano",
    categoria: "Massas da casa",
    observacoes:
      "Penne com ragu toscano de linguiça e cogumelos, pomodoro e frescor de limão siciliano. Um equilíbrio entre conforto e acidez. Também um prato campeão."
  },
  {
    id: "car_lasagneta_demi_espuma",
    tipo: "CARDAPIO",
    nome: "Lasagneta com Demi-glace e Espuma de Parmesão",
    categoria: "Forno",
    observacoes:
"Uma lasanha individual, dourada por fora, servida com molho demi-glace e finalizada com espuma leve de parmesão. É um prato clássico interpretado de forma contemporânea."
  },
  {
    id: "car_gnocchi_ripiene_funghi",
    tipo: "CARDAPIO",
    nome: "Gnocchi Ripiene ao Molho Funghi",
    categoria: "Massas recheadas",
    observacoes:
      "Gnocchi recheado com queijo gorgonzola e mussarela, com suave molho funghi, feito com cogumelos refogados no alho, nata e creme de leite. Finalizado com cogumelos paris salteados, fio de azeite. A combinação é incrivel. E muito cremosa, perfeita pra quem ama cogumelos."
  },
  {
    id: "car_ravioli_camarao_limao",
    tipo: "CARDAPIO",
    nome: "Ravioli de Camarão ao Molho de Limão Siciliano",
    categoria: "Massas do mar",
    observacoes:
      "Ravioli recheado com mussarela e bechamel, servido em molho cremoso com toque cítrico de limão siciliano. Camarões grelhados por cima. É elegante, fresco e muito equilibrado."
  },
  {
    id: "car_fiore_funghi_ervas",
    tipo: "CARDAPIO",
    nome: "Fiore ao Molho Funghi com Manteiga de Ervas",
    categoria: "Massas recheadas",
    observacoes:
"Massa fresca em formato de flor, recheado com gorgonzola, mussarela e bechamel, aromatizada com manteiga de ervas e servida sobre suave molho de funghi. É aromático, elegante e cheio de camadas."
  },
  {
    id: "car_casarecce_ervilha_parma",
    tipo: "CARDAPIO",
    nome: "Casarecce ao Molho Alfredo com Ervilhas e Parma",
    categoria: "Massas da casa",
    observacoes:
"Pasta fresca, feita na casa, com molho Alfredo, ervilhas frescas e Parma crocante por cima. Traz conforto, tem sofisticação."
  }
];

// OUTRAS INFOS

const OUTRAS_INFOS = [

{
  id: "oi_epi",
  tipo: "OUTRAS_INFOS",
  nome: "EPI",
  categoria: "Segurança",
  observacoes: `
Uso obrigatório de uniforme.

Uso obrigatório de sapato antiderrapante.
`
},

{
  id: "oi_descartes",
  tipo: "OUTRAS_INFOS",
  nome: "Descartes",
  categoria: "Gestão de Insumos",
  observacoes: `
Registrar descartes, perdas e desperdício.
`
},
{
  id: "oi_alergia",
  tipo: "OUTRAS_INFOS",
  nome: "Alergias e Restrições",
  categoria: "Segurança Alimentar",
  observacoes: `
Nunca minimizar relatos de alergia ou restrições alimentares.

Destacar observações detalhadas na comanda.
`
},


{
  id: "oi_glossario",
  tipo: "OUTRAS_INFOS",
  nome: "Termos Técnicos",
  categoria: "Treinamento",
  observacoes: `
TERMOS ESSENCIAIS

MISE EN PLACE
Pré-produção e organização completa da praça para o serviço.

SALTEAR
Cozimento rápido em pouca gordura.

DEGLACEAR
Soltar o fundo caramelizado com líquido.

NAPÊ
Textura de molho que adere às costas da colher.

BRANQUEAR
Cozimento rápido seguido de choque térmico.
`
},

{
  id: "oi_estoque",
  tipo: "OUTRAS_INFOS",
  nome: "Gestão de Estoque",
  categoria: "Gestão",
  observacoes: `
MÉTODO

PEPS
Primeiro que entra é o primeiro que sai.

CONTROLE
- Checagem diária de câmaras.
- Sinalização de validades.
- Revisão semanal de volumes.

`
},

];

// adicionar tipo e categoria para fichas (para busca e exibição)
PRATOS.forEach(f => {
  f.tipo = "PRATOS";
});

// Coleção geral para a busca
const ITENS = [
...SEMANA,
...ATALHOS,
  ...INSUMOS,
  ...PRODUCAO,
  ...PRATOS,
  ...BOQUETA,
...EQUIPAMENTOS,
...CARDAPIO,
...OUTRAS_INFOS

];

function filtrarPratosPorAtalho(atalho) {
  const incluir = (atalho.filtro && atalho.filtro.incluir) || [];
  const excluir = (atalho.filtro && atalho.filtro.excluir) || [];

  return PRATOS.filter((prato) => {
    const tags = prato.tags || [];

    // precisa ter TODAS as tags de "incluir"
    const temTodasIncluir = incluir.every(tag => tags.includes(tag));

    // se tiver QUALQUER tag de "excluir", tá fora
    const temAlgumaExcluir = excluir.some(tag => tags.includes(tag));

    return temTodasIncluir && !temAlgumaExcluir;
  });
}

// =======================================
// FUNÇÃO AUXILIAR — NORMALIZA TEXTO (remove acentos)
// =======================================

function normalizarTexto(str) {
  if (!str) return "";
  return String(str)
    .normalize("NFD")                 // separa letras dos acentos
    .replace(/[\u0300-\u036f]/g, "")  // remove acentos
    .toLowerCase();
}

// =======================================
// 2. ESTADO DE NAVEGAÇÃO
// =======================================

let currentView = "home";
let detailReturnView = "home";


// =======================================
// 3. ELEMENTOS DA INTERFACE
// =======================================

const homeView = document.getElementById("homeView");
const listView = document.getElementById("listView");
const detailView = document.getElementById("detailView");

const listTitle = document.getElementById("listTitle");
const resultsList = document.getElementById("resultsList");

const backBtn = document.getElementById("backBtn");
const detailBackBtn = document.getElementById("detailBackBtn");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const menuButtons = document.querySelectorAll(".menu-btn");

// Detalhe
const detailTitle = document.getElementById("detailTitle");
const detailSubtitle = document.getElementById("detailSubtitle");
const detailMeta = document.getElementById("detailMeta");
const detailIngredientsBlock = document.getElementById("detailIngredientsBlock");
const detailIngredients = document.getElementById("detailIngredients");
const detailModoBlock = document.getElementById("detailModoBlock");
const detailModo = document.getElementById("detailModo");
const detailObsBlock = document.getElementById("detailObsBlock");
const detailObs = document.getElementById("detailObs");

// =======================================
// 4. NAVEGAÇÃO
// =======================================

function showHome() {
  currentView = "home";
  homeView.classList.remove("hidden");
  listView.classList.add("hidden");
  detailView.classList.add("hidden");

  // sempre que voltar pra home, some com resultados antigos
  searchInput.value = "";
  if (searchResults) {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
  }
}

function showList(titulo, itens) {
  currentView = "list";
  homeView.classList.add("hidden");
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
  listTitle.textContent = titulo;
  renderList(itens);
}

function showDetail() {
  currentView = "detail";
  homeView.classList.add("hidden");
  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
}


// =======================================
// 5. RENDERIZAÇÃO DAS LISTAS
// =======================================

function ordenarPorNome(lista) {
  return lista
    .slice()
    .sort((a, b) => {
      const temOrdemA = typeof a.ordem === "number";
      const temOrdemB = typeof b.ordem === "number";

      // Se os dois têm "ordem" (caso da SEMANA), usa esse campo
      if (temOrdemA && temOrdemB) {
        return a.ordem - b.ordem;
      }

      // Se só um tem ordem, empurra quem tem ordem pra frente
      if (temOrdemA && !temOrdemB) return -1;
      if (!temOrdemA && temOrdemB) return 1;

      // Caso geral (INSUMOS, PRODUCAO, PRATOS): ordem alfabética
      return (a.nome || "").localeCompare(b.nome || "", "pt-BR", {
        sensitivity: "base"
      });
    });
}
// ---------------------------------------
// Montagens da Boqueta (finalização dos pratos)
// ---------------------------------------
function montarListaBoquetaMontagem() {
  return PRATOS.map((p) => {
    let finalizacao = "";

    if (p.modo) {
      const texto = p.modo.trim();
      // pega a ÚLTIMA ocorrência de "Sirva"
      const idx = texto.lastIndexOf("Sirva");

      if (idx >= 0) {
        finalizacao = texto.slice(idx).trim();
      } else {
        // se não achar "Sirva", usa o modo inteiro
        finalizacao = texto;
      }
    }

    return {
      // o que vai aparecer na lista
      nome: p.nome,
      tipo: "MONTAGEM_PRATO",
      categoria: "Montagem e finalização",
      // o que aparece na aba MODO do detalhe
      modo: finalizacao
    };
  });
}

function renderList(lista) {
  resultsList.innerHTML = "";

  if (!lista || lista.length === 0) {
    const li = document.createElement("li");
    li.className = "result-item";
    li.textContent = "Nenhum item cadastrado ainda.";
    resultsList.appendChild(li);
    return;
  }

  const ordenada = ordenarPorNome(lista);

  ordenada.forEach((item) => {
    const li = document.createElement("li");
    li.className = "result-item";
    li.innerHTML = `
      <span>${item.nome}</span>
      <span class="tipo">${item.tipo || ""}</span>
    `;

    li.addEventListener("click", () => openDetail(item));

    resultsList.appendChild(li);
  });
}
// =======================================
// FILTRO DE PRATOS POR ATALHO
// =======================================

function filtrarPratosPorAtalho(atalho) {
  const incluir = (atalho?.filtro?.incluir || []).map(String);
  const excluir = (atalho?.filtro?.excluir || []).map(String);

  return (PRATOS || []).filter((p) => {
    const tags = Array.isArray(p.tags) ? p.tags : [];

    // tem TODAS as tags obrigatórias?
    const okIncluir = incluir.every((t) => tags.includes(t));

    // não tem NENHUMA tag proibida?
    const okExcluir = !excluir.some((t) => tags.includes(t));

    return okIncluir && okExcluir;
  });
}

// =======================================
// 6. DETALHE
// =======================================

function openDetail(item) {

  // ATALHOS: vira lista filtrada de PRATOS (não abre detalhe)
  if (item && item.tipo === "ATALHO") {
    const filtrados = filtrarPratosPorAtalho(item);
    showList(item.nome, filtrados);
    return;
  }

// CASO ESPECIAL: BOQUETA > MONTAGEM E FINALIZAÇÃO
  if (item.tipo === "BOQUETA" && item.nome === "Montagem e finalização") {
    const listaMontagens = montarListaBoquetaMontagem();
    showList("Montagem e finalização", listaMontagens);
    return; // não segue para o detalhe normal
  }

  // ... seu openDetail atual continua abaixo


 
  // TÍTULO
  detailTitle.textContent = item.nome || "";

  // SUBTÍTULO: tipo + categoria
  const tipo = item.tipo || "";
  const cat = item.categoria || "";
  detailSubtitle.textContent = [tipo, cat].filter(Boolean).join(" • ");

  // META: tempo + rendimento
  const metaParts = [];
  if (item.tempo) metaParts.push(`Tempo: ${item.tempo}`);
  if (item.rendimento) metaParts.push(`Rendimento: ${item.rendimento}`);
  detailMeta.textContent = metaParts.join(" • ");

  // INGREDIENTES
  if (Array.isArray(item.ingredientes) && item.ingredientes.length > 0) {
    detailIngredientsBlock.classList.remove("hidden");
    detailIngredients.innerHTML = "";
    item.ingredientes.forEach((ing) => {
      const li = document.createElement("li");
      li.textContent = `${ing.nome} — ${ing.qtd || ""}`;
      detailIngredients.appendChild(li);
    });
  } else {
    detailIngredientsBlock.classList.add("hidden");
    detailIngredients.innerHTML = "";
  }

  // LIMPA QUALQUER CHECKLIST ANTIGO
  const checklistBox = document.getElementById("detailChecklist");
  if (checklistBox) checklistBox.innerHTML = "";

  // CAMPOS TÉCNICOS PADRÃO (modo / PCCs / armazenamento)
  detailModo.textContent = item.modo || "";
  document.getElementById("detailPccs").innerText =
    item.pccs || "Nenhum PCC cadastrado.";
  document.getElementById("detailArmazenamento").innerText =
    item.armazenamento || "Sem dados de armazenamento.";

  // OBSERVAÇÕES
  if (item.observacoes) {
    detailObsBlock.classList.remove("hidden");
    detailObs.textContent = item.observacoes;
  } else {
    detailObsBlock.classList.add("hidden");
    detailObs.textContent = "";
  }

  // GUARDA DE ONDE VEIO O DETALHE (home ou lista)
  detailReturnView = currentView;

  // SE VEIO DA HOME (BUSCA), LIMPA RESULTADOS
  if (currentView === "home" && searchResults) {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
  }

  // ABRE TELA DE DETALHE
  showDetail();

  // ============================
  // CONTROLE DE ABAS
  // ============================

  if (item.tipo === "SEMANA") {
    // Esconde abas técnicas
    document.getElementById("tabModo").classList.add("hidden");
    document.getElementById("tabPccs").classList.add("hidden");
    document.getElementById("tabArma").classList.add("hidden");

    // Mostra apenas CHECKLIST
    document.getElementById("tabChecklist").classList.remove("hidden");

    // Garante que o bloco de abas esteja visível
    detailModoBlock.classList.remove("hidden");

    // Preenche o checklist com conceito + rotinas + check
    checklistBox.innerHTML = `
      <section class="semana-view">
        <p class="semana-conceito">${item.conceito || ""}</p>

        <h3>Rotinas do dia</h3>
        <ul>
          ${(item.rotinas || []).map(r => `<li>${r}</li>`).join("")}
        </ul>

        <h3>Check operacional</h3>
        <ul class="checklist">
          ${(item.check || []).map(c => `<li>${c}</li>`).join("")}
        </ul>
      </section>
    `;

    // Ativa aba CHECKLIST
    showTab("checklist");
  } else {
    // Restaura abas padrão para todos os outros tipos
    document.getElementById("tabModo").classList.remove("hidden");
    document.getElementById("tabPccs").classList.remove("hidden");
    document.getElementById("tabArma").classList.remove("hidden");
    document.getElementById("tabChecklist").classList.add("hidden");

    // Se tem algum conteúdo técnico, mostra bloco e vai para MODO
    if (item.modo || item.pccs || item.armazenamento) {
      detailModoBlock.classList.remove("hidden");
      showTab("modo");
    } else {
      // Se não tem nada técnico, esconde o bloco de abas
      detailModoBlock.classList.add("hidden");
    }
  }
}

// =======================================
// 7. EVENTOS
// =======================================

// VOLTAR da lista → home
backBtn.addEventListener("click", () => {
  // limpamos busca e resultados
  searchInput.value = "";
  if (searchResults) {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
  }
  showHome();
});

// VOLTAR do detalhe → volta para lista
detailBackBtn.addEventListener("click", () => {
  detailView.classList.add("hidden");

  if (detailReturnView === "list") {
    // se o detalhe veio de uma lista (INSUMOS, PRATOS etc)
    listView.classList.remove("hidden");
    currentView = "list";
  } else {
    // se o detalhe veio direto da home (busca em tempo real)
    showHome(); // já limpa busca e resultados
  }
});


// BUSCA global
// BUSCA global em tempo real (na home)
searchInput.addEventListener("input", (e) => {
  const valorBruto = e.target.value.trim();
  const termo = normalizarTexto(valorBruto);

  // Se apagar tudo, some a lista e fica só a home
  if (!termo) {
    if (searchResults) {
      searchResults.innerHTML = "";
      searchResults.classList.add("hidden");
    }
    return;
  }

  const encontrados = ITENS.filter((item) => {
    if (!item || typeof item !== "object") {
      console.warn("Item inválido em ITENS:", item);
      return false;
    }

    // Normaliza todos os campos pesquisáveis
    const nome = normalizarTexto(item.nome || "");

    const aliases = Array.isArray(item.aliases)
      ? normalizarTexto(item.aliases.join(" "))
      : "";

    const tagsTexto = Array.isArray(item.tags)
      ? normalizarTexto(item.tags.join(" "))
      : "";

    const ingredientesTexto = Array.isArray(item.ingredientes)
      ? normalizarTexto(
          item.ingredientes
            .map((ing) => ing && ing.nome ? ing.nome : "")
            .join(" ")
        )
      : "";

    return (
      nome.includes(termo) ||
      aliases.includes(termo) ||
      tagsTexto.includes(termo) ||
      ingredientesTexto.includes(termo)
    );
  });

  renderSearchResults(encontrados);
});

function renderSearchResults(lista) {
  if (!searchResults) return;

  searchResults.innerHTML = "";

  if (!lista || lista.length === 0) {
    const li = document.createElement("li");
    li.className = "search-result-item";
    li.textContent = "Nenhum resultado encontrado.";
    searchResults.appendChild(li);
    searchResults.classList.remove("hidden");
    return;
  }

  const ordenada = ordenarPorNome(lista);

  ordenada.forEach((item) => {
    const li = document.createElement("li");
    li.className = "search-result-item";
    li.innerHTML = `
      <span>${item.nome}</span>
      <span class="tipo">${item.tipo || ""}</span>
    `;

    li.addEventListener("click", () => openDetail(item));

    searchResults.appendChild(li);
  });

  searchResults.classList.remove("hidden");
}

// CLIQUES NOS BOTÕES DA HOME
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;

    let itens = [];
    let titulo = "";

       if (section === "semana") {
      itens = SEMANA;
      titulo = "Semana";
    } else if (section === "insumos") {
      itens = INSUMOS;
      titulo = "Insumos";

    // PRÉ-PREPAROS / PRODUÇÃO
    } else if (section === "pre-preparos" || section === "producao") {
      itens = PRODUCAO;
      titulo = "Produção";

    // PREPAROS / PRATOS
    } else if (section === "preparos" || section === "pratos") {
      itens = PRATOS;
      titulo = "Pratos";
    } else if (section === "boqueta") {
      itens = BOQUETA;
      titulo = "Boqueta";
    } else if (section === "atalhos" || section === "atalhos2") {
      itens = ATALHOS;
      titulo = "Atalhos";
    } else if (section === "equipamentos") {
      itens = EQUIPAMENTOS;
      titulo = "Equipamentos";
    } else if (section === "cardapio") {
      itens = CARDAPIO;
      titulo = "Cardápio";
    } else if (section === "outras-infos") {
      itens = OUTRAS_INFOS;
      titulo = "Outras informações";
    }

    showList(titulo, itens);
  });
});


// =======================================
// 8. VALIDADOR – INGREDIENTES x CADASTROS
// =======================================

function normalizarNome(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // tira acentos
    .replace(/[^a-z0-9 ]/g, "")      // tira hífen, ponto etc.
    .trim();
}

function validarInsumosFaltantesPorNome() {
  const cadastrados = [];

  // Junta todos os nomes já cadastrados (semana + atalhos + insumos + produção + pratos + boqueta + equipamentos + cardápio + outras infos)
    SEMANA.forEach((s) => cadastrados.push(normalizarNome(s.nome)));
  ATALHOS.forEach((a) => cadastrados.push(normalizarNome(a.nome)));
INSUMOS.forEach((i) => cadastrados.push(normalizarNome(i.nome)));
  PRODUCAO.forEach((p) => cadastrados.push(normalizarNome(p.nome)));
  PRATOS.forEach((p) => cadastrados.push(normalizarNome(p.nome)));
  BOQUETA.forEach((b) => cadastrados.push(normalizarNome(b.nome)));
  EQUIPAMENTOS.forEach((e) => cadastrados.push(normalizarNome(e.nome)));
  OUTRAS_INFOS.forEach((o) => cadastrados.push(normalizarNome(o.nome)));

  const faltantes = [];

PRATOS.forEach((ficha) => {
    (ficha.ingredientes || []).forEach((ing) => {
      const nomeNorm = normalizarNome(ing.nome);

      if (!cadastrados.includes(nomeNorm)) {
        faltantes.push({
          pratos: ficha.nome,
          ingrediente: ing.nome
        });
      }
    });
  });

  console.table(faltantes);
}

// Estado inicial
showHome();

function showTab(tab) {
  const tabs = ["modo", "pccs", "armazenamento", "checklist"];

  tabs.forEach((t) => {
    const panel = document.getElementById("detail" + capitalize(t));
    const button = document.getElementById("tab" + capitalize(t));

    if (panel) panel.classList.add("hidden");
    if (button) button.classList.remove("active");
  });

  const activePanel = document.getElementById("detail" + capitalize(tab));
  const activeButton = document.getElementById("tab" + capitalize(tab));

  if (activePanel) activePanel.classList.remove("hidden");
  if (activeButton) activeButton.classList.add("active");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
