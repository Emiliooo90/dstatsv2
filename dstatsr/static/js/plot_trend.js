var trendGraphDiv = document.getElementById('trend_Chart');

document.addEventListener('DOMContentLoaded', function() {
    updateTrendGraph(mkt);
});

async function updateTrendGraph(mkt) {
    try {
        // Realiza una solicitud al servidor para obtener el nuevo JSON del gráfico
        var url = "http://127.0.0.1:5050/api/contenido/mkt/s2_trend/" + mkt
        const response = await fetch(url);
        var graphJSON = await response.text();

        // Limpia el contenido anterior y renderiza el nuevo gráfico
        Plotly.purge(trendGraphDiv);
        Plotly.newPlot(trendGraphDiv, JSON.parse(graphJSON));
    } catch (error) {
        console.error('Error:', error);
    }
}