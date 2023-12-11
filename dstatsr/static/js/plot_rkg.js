document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('rkg_Chart').getContext('2d');

    var labels = rkg_data.map(item => item.hs_product_name_short_en);
    var Data = rkg_data.map(item => parseFloat(item.trade_value));

    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Trade Value',
                data: Data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});