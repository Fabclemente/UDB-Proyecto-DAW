document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('grafico01').getContext('2d');
  const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const montos = [300, 5000, 1000, 1500, 200, 2500, 3000, 500, 4000, 2500, 3000];

  const grafico01 = new Chart(ctx, {
      type: 'line',
      data: {
          labels: meses,
          datasets: [{
              label: 'Montos',
              data: montos,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)',
              ],
              borderWidth: 1.5
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});