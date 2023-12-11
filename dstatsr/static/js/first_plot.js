document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
  
    var labels = jsonData1.map(item => item.hs_product_name_short_en);
    var importacionesData = jsonData1.map(item => parseFloat(item.importaciones));
  
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Datos',
          data: importacionesData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(0, 0, 255, 0.5)',
            'rgba(255, 255, 0, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(0, 0, 255, 0.5)',
            'rgba(255, 255, 0, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
});