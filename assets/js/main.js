$(function () {
  $("#school__table").tablesorter();
});

var options = {
  type: 'line',
  
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: false,
        gridLines : {
          drawOnChartArea: false,
            display: false,
            drawBorder: false,
        }
      }],
      xAxes: [{
        gridLines : {
          drawOnChartArea: false
        }
      }],
        x: {
        display: false,
        title: {
          display: false,
          text: 'Month'
        }
      },
      y: {
        display: false,
        title: {
          display: false,
          text: 'Value'
        }
      },
      
    },
    legend: {
      display: false,
    },
  },
  data: {
    labels: ["2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025"],
    datasets: [
      {
        label: 'Gold Access state intervention',
        data: [15, 20, 29, 32, 36, 40, 49, 53],
        borderWidth: 4,
        backgroundColor: 'transparent',
        borderColor: '#939598',
        borderDash: [5, 5],
      },	
      {
        label: 'Gold Access state intervention',
        data: [3, 6, 7, 13, 25, 28, 30, 53],
        borderWidth: 4,
        backgroundColor: 'transparent',
        borderColor: '#f4ad00',
        borderDash: [5, 5],
      },
      {
        label: 'Gold Access state intervention',
        data: [3, 6, 7, 9, 15, 18, 20, 22],
        borderWidth: 4,
        backgroundColor: 'transparent',
        borderColor: '#f4ad00',
        borderDash: [3, 3],
      }
    ]
  }
}

var ctx = document.getElementById('chartJSContainer').getContext('2d');
new Chart(ctx, options);
