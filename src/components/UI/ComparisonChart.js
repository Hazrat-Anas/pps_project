import React, { Fragment, useState } from 'react'
import Chart from "react-apexcharts";
import main from './main.module.css'
function ComparisonChart() {
  // states
  const [chartoptions, setchartOptions] = useState({
    legend: {
      position: 'top',
      fontSize: '16px',
      fontFamily: 'Source Sans Pro',
      labels: {
        position: 'front',
        colors: '#aaa',
      },
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      row: {
        colors: '#fff',
        opacity: 1
      },
    },
    tooltip: {
      enabled:false,
      shared: false,
      intersect: false
    },
    chart: {
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          customIcons: []
        }
      },
      background: '#212121',
      width: '600px',
      id: "basic-bar",
      zoom: {
        enabled: false
      },
      offsetX: 0,
      events: {
        markerClick: undefined,
        dataPointSelection: null
      },
      dropShadow: {
        enabled: true,
        // enabledOnSeries: false,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: .5
      }
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Platinum Pro Progress vs Conventional Testosterone Boosters ',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Source Sans Pro',
        color: '#A8A8A8'
      }
    },
    yaxis: {
      min: 0,
      max: 14,
      forceNiceScale: true,
      decimalsInFloat: 0,
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: '#fff',
          fontSize: '20px',
          fontFamily: 'Source Sans Pro',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label',
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
    },
    xaxis: {
      min: 0,
      max: 6,
      labels: {
        formatter: function (value) {
          if (value === 0 || value === 6)
            return '';
          return 'Month ' + value;
        },
        style: {
          colors: '#fff',
          fontSize: '20px',
          fontFamily: 'Source Sans Pro',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
      //   overwriteCategories:['Month 01','Month 2','Month 3','Month 4'],
    },
    stroke: {
      show: true,
      curve: 'smooth',
    },
    colors: [ '#EC4136','#ED7D31',],
    markers: {
      size: 4,
      colors: undefined,
      strokeColors: 'transparent',
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 4,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          title: {
            text: 'Platinum Pro Progress vs Conventional Testosterone Boosters ',
            align: 'center',
            margin: 25,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '10px',
              fontWeight: 'bold',
              fontFamily: 'Source Sans Pro',
              color: '#A8A8A8'
            }
          },
        }
      }
    ]
  },
  )
  const [chartSeries, setchartSeries] = useState([
    {
      name: "Paltinum Pro Progress",
      data: [4.25, 9, 5.2, 11, 6],
    },
    {
      name: "Conventional Testosterone",
      data: [2.5, 5, 2.5, 5, 2.5],
    }
  ]
  )
  // states
  return (
    <Fragment>
      <div className={`${main.comp_chart} mb-2 mb-md-4 card`}>
        <Chart
          options={chartoptions}
          series={chartSeries}
          type="area"
          width="100%"
          height='400'
        />
      </div>
    </Fragment>
  )
}
export default ComparisonChart