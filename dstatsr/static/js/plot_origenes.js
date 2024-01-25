var oriGraphDiv = document.getElementById('ori_Chart');

document.addEventListener('DOMContentLoaded', function() {
    updateOriGraph('2021');
});

document.getElementById('rangoAñosOri').addEventListener('input', function(){
    var selectedOriAno = this.value;
    updateOriGraph(selectedOriAno);
});

async function updateOriGraph(ano) {
    try {
        // Realiza una solicitud al servidor para obtener el nuevo JSON del gráfico
        var url = "http://127.0.0.1:5050/api/contenido/perfil/s4_world/" + pais + "/" + ano
        const response = await fetch(url);
        var graphJSON = await response.text();

        // Limpia el contenido anterior y renderiza el nuevo gráfico
        Plotly.purge(oriGraphDiv);
        Plotly.newPlot(oriGraphDiv, JSON.parse(graphJSON));
    } catch (error) {
        console.error('Error:', error);
    }
}