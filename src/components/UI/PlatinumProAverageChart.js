import React, { Fragment, useState } from 'react'
import Chart from "react-apexcharts";
import classes from './main.module.css'
function AverageChart() {
    const [chartoptions, setchartOptions] = useState({
        fill: {
            opacity: 1,
            type: 'pattern',       
            pattern: {
                style: 'horizontalLines',
                width: 2,
                height: 20,
                strokeWidth: 30,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                borderRadius: 0,
                columnWidth: '35%',
                barHeight: '70%',
                distributed: false,
                rangeBarOverlap: false,
                rangeBarGroupRows: true
            },         
        },
        legend: {
            position: 'bottom',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro',
            labels: {
                position: 'front',
                colors: '#fff',
            },
            itemMargin: {
             
                vertical: 30
            },
        },
        grid: {
            show: true,
            borderColor: '#313131',
            
            row: {
                colors: '#212121',
                opacity: .1
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
        tooltip: {
            enabled: false,
            shared: false,
            intersect: false
        },
        chart: {
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                      reset: true | '<img src="../../images/testchart.png" width="20">',
                    customIcons: []
                },
            },
            type: 'bar',
            height: 450,
            stacked: false,
            background: '#212121',
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            }

        },
     
        dataLabels: {
            enabled: false,
        },
        title: {
            text: 'Average Testosterone Levels by Age',
            align: 'center',
            margin: 0,
            offsetX: 0,
            offsetY: 10,
            floating: false,
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'Source Sans Pro',
                color: '#fff'
            }
        },
        yaxis: {
            show: false,
            tickAmount: 10,
            min: 0,
            max: 10,
            forceNiceScale: true,
            decimalsInFloat: 0,
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: '#',
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
            categories: ['31-40', '41-50', '51-60', '60-70'
            ],
            labels: {
                style: {
                    colors: '#fff',
                    fontSize: '20px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        stroke: {
            colors: ["transparent"],
            width: 5,
          
            show: true,
            curve: 'smooth',
        },
        colors: ['#5B9BD5', '#ED7D31', '#EC3641'],
        responsive: [
            
            {
                breakpoint: 576,
                options: {
                    legend: {
                        position: 'bottom',
                        fontSize: '16px',
                        fontFamily: 'Source Sans Pro',
                        labels: {
                            position: 'front',
                            colors: '#fff',
                        },
                        itemMargin: {
                         
                            vertical: 8
                        },
                    },
                    fill: {
                        opacity: 1,
                        type: 'pattern',       
                        pattern: {
                            style: 'horizontalLines',
                            width: 5,
                            height: 10,
                            strokeWidth: 15,
                        },
                    },
                    title: {
                        margin: 20,
                        offsetX: 0,
                        offsetY: 15,
                        floating: false,
                        style: {
                            fontSize: '12px',
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
    // series start
    const [chartSeries, setchartSeries] = useState([{
        name: 'Average Testosterone Levels',
        
        data: [3, 2, 2, 1]
    }, {
        name: 'With Other Testosterone Supplements',
        data: [7, 6, 5, 4],
    }, {
        name: 'With  Platinum Pro',
        data: [7, 7, 7, 7]
    }],
    )
    // series end
    return (
        <div class={`${classes.average_chart}`}>
            <Chart options={chartoptions} series={chartSeries} type="bar" height={450}  />
        </div>
    )
}
export default AverageChart
