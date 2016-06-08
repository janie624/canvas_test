window.onload = function () {
  var axisColor = '#eeeeee';
  var labelFontColor = 'grey';
  var labelFontSize = 14;

  var chart = new CanvasJS.Chart("chartContainer",
    {
      title: {
        text: "Graph title"
      },
      animationEnabled: true,
      axisX: {
        labelFontColor: labelFontColor,
        labelFontSize: labelFontSize,
        lineColor: axisColor,
        gridColor: axisColor,
        lineThickness: 1,
        gridThickness: 1,
        tickColor: axisColor,
        tickThickness: 1,
        labelFormatter: function(e) {
          return moment(e.value).format('D MMM');
        }
      },
      axisY: {
        minimum: 200000,
        maximum: 900000,
        interval: 200000,
        includeZero: false,
        labelFontColor: labelFontColor,
        labelFontSize: labelFontSize,
        lineColor: axisColor,
        gridColor: axisColor,
        lineThickness: 1,
        gridThickness: 1,
        tickColor: axisColor,
        tickThickness: 1,
        prefix: "$ ",
        labelFormatter: function(e) {
          return e.value / 1000 + 'k';
        }
      },
      toolTip: {
        shared: true,
        content: "<span style='\"'color: {color};'\"'>{name}</span> <span style='\"'color: dimgrey;'\"'>${y}</span> "
      },
      legend: {
        fontSize: 13
      },
      data: [
        {
          type: "splineArea",
          showInLegend: true,
          name: "First",
          color: "rgba(153, 236, 249, 0.9)",
          lineThickness: 1,
          markerType: 'none',
          dataPoints: [
            {x: new Date(2015, 11, 21, 12, 00), y: 200000},
            {x: new Date(2015, 11, 22, 00, 00), y: 300000},
            {x: new Date(2015, 11, 22, 12, 00), y: 510000},
            {x: new Date(2015, 11, 23, 00, 00), y: 420000},
            {x: new Date(2015, 11, 23, 12, 00), y: 330000},
            {x: new Date(2015, 11, 24, 00, 00), y: 350000},
            {x: new Date(2015, 11, 24, 12, 00), y: 380000},
            {x: new Date(2015, 11, 25, 00, 00), y: 440000},
            {x: new Date(2015, 11, 25, 12, 00), y: 580000},
            {x: new Date(2015, 11, 26, 00, 00), y: 670000},
            {x: new Date(2015, 11, 26, 12, 00), y: 740000},
            {x: new Date(2015, 11, 27, 00, 00), y: 790000},
            {x: new Date(2015, 11, 27, 12, 00), y: 795000},
            {x: new Date(2015, 11, 28, 00, 00), y: 690000},
            {x: new Date(2015, 11, 28, 12, 00), y: 300000},
            {x: new Date(2015, 11, 29, 00, 00), y: 201000},
          ]
        },
        {
          type: "splineArea",
          showInLegend: true,
          name: "Second",
          color: "rgba(74, 213, 235, 0.9)",
          lineThickness: 1,
          markerType: 'none',
          dataPoints: [
            {x: new Date(2015, 11, 21, 12, 00), y: 200000},
            {x: new Date(2015, 11, 22, 00, 00), y: 260000},
            {x: new Date(2015, 11, 22, 12, 00), y: 400000},
            {x: new Date(2015, 11, 23, 00, 00), y: 620000},
            {x: new Date(2015, 11, 23, 12, 00), y: 570000},
            {x: new Date(2015, 11, 24, 00, 00), y: 400000},
            {x: new Date(2015, 11, 24, 12, 00), y: 380000},
            {x: new Date(2015, 11, 25, 00, 00), y: 445000},
            {x: new Date(2015, 11, 25, 12, 00), y: 640000},
            {x: new Date(2015, 11, 26, 00, 00), y: 830000},
            {x: new Date(2015, 11, 26, 12, 00), y: 720000},
            {x: new Date(2015, 11, 27, 00, 00), y: 440000},
            {x: new Date(2015, 11, 27, 12, 00), y: 410000},
            {x: new Date(2015, 11, 28, 00, 00), y: 430000},
            {x: new Date(2015, 11, 28, 12, 00), y: 470000},
            {x: new Date(2015, 11, 29, 00, 00), y: 203000},
          ]
        }
      ]
    });
    chart.render();
}