
var distribution = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [200,448,800,600,470]
    }],
    plotOptions: {
      bar: {
        horizontal: true,
      },
      
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B' ],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'  ],
    }
}
  
new ApexCharts(document.querySelector("#distribution"), distribution).render();

var pie = {
    series: [65, 15, 20],
    chart: {
    type: 'donut',
  },
  labels: ['Female', 'Male', 'Unknown'],
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '40%'
      }
    }
  }

};
new ApexCharts(document.querySelector("#pie"), pie).render();

//age 

var distribution = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [7,12,20,50,100,20,5]
  }],
  plotOptions: {
    bar: {
      horizontal: true,
    },
    
  },
  colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B' ],
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['0-27 days', '1-23 months', '2-11 years', '12-17 years', '18-44 years', '45-64 years', '65-74 years'  ],
  }
}

new ApexCharts(document.querySelector("#age_dist"), distribution).render();


var adr = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [100,98,85,70,88,50,55]
  }],
  plotOptions: {
    bar: {
      horizontal: true,
    },
    
  },
  colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B' ],
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['2022-', '2020-', '2018-', '2016-', '2014-', '2012-', '2011-'  ],
  }
}

new ApexCharts(document.querySelector("#adr"), adr).render();