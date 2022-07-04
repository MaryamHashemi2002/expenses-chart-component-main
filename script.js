fetch("./data.json")
  .then((response) => response.json())
  .then((arr) => {
    const xAxis = [];
    const yAxix = [];
    arr.forEach((item) => {
      xAxis.push(item.day);
      yAxix.push(item.amount);
    });
    var options = {
      chart: {
        type: "bar",
        background: "#fff",
      },
      series: [
        {
          data: yAxix,
        },
      ],
      xaxis: {
        type: "category",
        categories: xAxis,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
        },
      },
      colors: [
        function ({ value }) {
          if (value == Math.max(...yAxix)) {
            return "#7E36Af";
          } else {
            return "#D9534F";
          }
        },
      ],
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#fff"],
        },
      },
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), options);
  
    chart.render();
  });

