var elem = document.getElementById('skill1');
var elem1 = $('.chart--card');
elem1.each(function(){
  var elem = this;
  var ctx = this.getContext('2d');
  var chart_data = JSON.parse($(this).attr('data-chart') || '{}');
  var config = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: chart_data.datasets,
        backgroundColor: [
          "#5EC1BB" , "#EAF1F7"
        ]
      }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 90,
      hoverRadius: 0,
      hoverBorderColor: "rgba(0,0,0,0)",
      animation: {
        animateScale: true,
        animateRotate: true
      },
      tooltips:{
        enabled: false
      }
    }
  };
  window.myDoughnut = new Chart(ctx, config);
});