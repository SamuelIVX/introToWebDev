document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chart').getContext('2d');

    // Data for Stacked Grouped Bar Chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 2',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 3',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            stack: 'Stack 1'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar Chart'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            stacked: true, // This enables stacking
            scales: {
                x: {
                    stacked: true // Stack X-axis labels
                },
                y: {
                    stacked: true // Stack Y-axis values
                }
            }
        }
    };

    // Create the chart
    new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chart2').getContext('2d');

    // Data for Stacked Grouped Bar Chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 2',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 3',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            stack: 'Stack 1'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar Chart'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            stacked: true, // This enables stacking
            scales: {
                x: {
                    stacked: true // Stack X-axis labels
                },
                y: {
                    stacked: true // Stack Y-axis values
                }
            }
        }
    };

    // Create the chart
    new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chart3').getContext('2d');

    // Data for Stacked Grouped Bar Chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 2',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 3',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            stack: 'Stack 1'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar Chart'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            stacked: true, // This enables stacking
            scales: {
                x: {
                    stacked: true // Stack X-axis labels
                },
                y: {
                    stacked: true // Stack Y-axis values
                }
            }
        }
    };

    // Create the chart
    new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chart4').getContext('2d');

    // Data for Stacked Grouped Bar Chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 2',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            stack: 'Stack 0'
        }, {
            label: 'Dataset 3',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            stack: 'Stack 1'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Stacked Bar Chart'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            stacked: true, // This enables stacking
            scales: {
                x: {
                    stacked: true // Stack X-axis labels
                },
                y: {
                    stacked: true // Stack Y-axis values
                }
            }
        }
    };

    // Create the chart
    new Chart(ctx, config);
});

// -----------------------------------------------------------------------

async function fetchNewsData(){
    const api_key = "cvnh48hr01qq3c7fa2vgcvnh48hr01qq3c7fa300";
    const url = `https://finnhub.io/api/v1/news?category=general&token=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    
    let output = "";
    data.forEach(key => {
        output += `<div class="content-container" style="background-color:hsl(210, 100%, 98.5%)"> 
                        <a href="${key.url}"><img src=${key.image} alt="" height="240" width="370" class="image"></a>
                        <h5 class="headline"><b>${key.headline}</b></h5> 
                        <p class="summary" style="color:#665">${key.summary}</p> 
                        <p class="source"><b>${key.source}</b></p>
                    </div>`;
    })
    document.getElementById("api-content").innerHTML = output;
}
fetchNewsData()

async function fetchStockData(){
    const api_key = "cvnh48hr01qq3c7fa2vgcvnh48hr01qq3c7fa300";
    const symbol = document.getElementById("input").value;
    const url = `https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=${api_key}`;
    // const url = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    let output1 = `<div class="stock-metrics-container" style="background-color:hsl(210, 100%, 98.5%)"> 
                        <h3>${data.symbol} Key Metrics</h3>
                        <p>52-Week High: ${data.metric["52WeekHigh"]}</p>
                        <p>52-Week High Date${data.metric["52WeekHighDate"]}</p>
                        <p>52-Week Low: ${data.metric["52WeekLow"]}</p>
                        <p>52-Week Low Date: ${data.metric["52WeekLowDate"]}</p>
                        <p>52-Week Price Return Daily: ${data.metric["52WeekPriceReturnDaily"]}</p>
                        <p>Dividend Yield(TTM): ${data.metric["currentDividendYieldTTM"]}</p>                         
                    </div>`;
                    
    let output2 = "";
    for(let i = 0; i < 5; i++){
        output2 += `<div class="nested-metrics-container" style="background-color:hsl(210, 100%, 98.5%)"> 
                        <p>Book Value: ${data.series.annual["bookValue"][i].period} | ${data.series.annual["bookValue"][i].v}</p>           
                        <p>Earnings Per Share: ${data.series.annual["eps"][i].period} | ${data.series.annual["eps"][i].v}</p>                       
                        <p>Sales Per Share: ${data.series.annual["salesPerShare"][i].period} | ${data.series.annual["salesPerShare"][i].v}</p>                       
                        <p>Gross Margin: ${data.series.annual["grossMargin"][i].period} | ${data.series.annual["grossMargin"][i].v}</p>   
                    </div>`;
    }

    document.getElementById("stocks-content").innerHTML = output1;
    document.getElementById("array-content").innerHTML = output2;
}
fetchStockData()