document.getElementById("exibirHoraAtualBtn").addEventListener("click", function() {
    var data = new Date();
    document.getElementById("horaAtual").innerHTML = 
        "Hora atual: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + ":" + data.getMilliseconds();
});

document.getElementById("exibirDataFormatadaBtn").addEventListener("click", function() {
    var dataNova = new Date("September 18, 2024");
    var dataFormatada = dataNova.getDate() + "/" + (dataNova.getMonth() + 1) + "/" + dataNova.getFullYear();
    document.getElementById("dataFormatada").innerHTML = "Data formatada: " + dataFormatada;
});

document.getElementById("exibirDataNovaBtn").addEventListener("click", function() {
    var dataNova = new Date("September 18, 2024");
    dataNova.setDate(dataNova.getDate() + 5);
    dataNova.setHours(dataNova.getHours() + 17);
    document.getElementById("dataNova").innerHTML = "Data modificada (mais 5 dias e 17 horas): " + dataNova;
});

document.getElementById("exibirDiaSemanaBtn").addEventListener("click", function() {
    var dataNova = new Date("September 18, 2024");
    var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    document.getElementById("diaSemana").innerHTML = "Dia da semana: " + dias[dataNova.getDay()];
});
