document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('rkg_Chart').getContext('2d');
    const defaultLevelButton = document.querySelector('.btn-group-level .btn.active');
    const selectedLevel = defaultLevelButton.getAttribute('data-cont');
    var outputContainer = document.getElementById('levelOutput');

    renderLevel(selectedLevel,outputContainer);
});

// let barChart;

const levelButtons = document.querySelectorAll('.btn-group-level .btn');

levelButtons.forEach(function(button){
    button.addEventListener('click', function(){
        const selectedLevel = this.getAttribute('data-cont');
        var outputContainer = document.getElementById('levelOutput');
    
        levelButtons.forEach(function(btn) {
			btn.classList.remove('active');
		});
		this.classList.add('active');

        barChart.destroy();

        renderLevel(selectedLevel,outputContainer);
    });
});

function renderLevel(level,container) {
    container.textContent = level;
    var ctx = document.getElementById('rkg_Chart').getContext('2d');
    var filteredData = rkg_data.filter(item => item.level === level);
    var labels = filteredData.map(item => item.hs_product_name_short_en);
    var Data = filteredData.map(item => parseFloat(item.trade_value));

    barChart = new Chart(ctx, {
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
        }
    });
};