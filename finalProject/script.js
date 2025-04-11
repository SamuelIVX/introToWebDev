/*
    Before running these functions, I want to make sure the browser is fully loaded and the HTML file is completely parsed.
    That way, I prevent my functions from selecting HTML elements that are not fully loaded yet.
*/
document.addEventListener('DOMContentLoaded', () => {
    fetchStockData();
    fetchNewsData();
});

async function fetchNewsData(filterType){
    const api_key = "cvnh48hr01qq3c7fa2vgcvnh48hr01qq3c7fa300";
    
    try {
        const url = `https://finnhub.io/api/v1/news?category=${filterType.toLowerCase()}&token=${api_key}`;
        const response = await fetch(url);
        const data = await response.json();
        
        let output = "";
        data.slice(0, 30).forEach(key => {
            output += `
                <div class="content-container" style="background-color:hsl(210, 100%, 98.5%)">
                    <a href="${key.url}"><img src="${key.image}" alt="" height="240" width="370" class="image"></a>
                    <h5 class="headline"><b>${key.headline}</b></h5>
                    <p class="summary" style="color:#665">${key.summary}</p>
                    <p class="source"><b>${key.source}</b></p>
                </div>
            `;
        });
        
        document.getElementById("api-content").innerHTML = output;
    } catch (error) {
        console.error("Failed to fetch news:", error);
        document.getElementById("api-content").innerHTML = `<p class="error">Failed to load news. Try again later.</p>`;
    }
}
fetchNewsData()

async function fetchStockData(){
    const api_key = "cvnh48hr01qq3c7fa2vgcvnh48hr01qq3c7fa300";
    const symbol = document.getElementById("input").value.toUpperCase();
    const url = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    const currentDividendYieldTTM = data?.metric?.currentDividendYieldTTM != null 
                                    ? data.metric.currentDividendYieldTTM.toFixed(2) + "%" 
                                    : 'N/A';
                                    
    let output1 = `<div class="stock-metrics-container" style="background-color:hsl(210, 100%, 98.5%)"> 
                        <span class="stock-symbol">${data.symbol}</span> <span class="stock-subtitle">- Key Analytics</span>                      
                        <p class="metric-summary">
                            <span class="stock-metric-title">52-Week High:</span> 
                            <span class="stock-metric">$${data.metric["52WeekHigh"].toFixed(2)}</span> 
                            <span class="stock-metric-title" style="margin-left: 25%;">52-Week High Date:</span>
                            <span class="stock-metric">${data.metric["52WeekHighDate"]}</span>

                        </p>
                        
                        <p class="metric-summary">
                            <span class="stock-metric-title">52-Week Low:</span> 
                            <span class="stock-metric">$${data.metric["52WeekLow"].toFixed(2)}</span> 
                            <span class="stock-metric-title" style="margin-left: 25%;">52-Week Low Date:</span>
                            <span class="stock-metric">${data.metric["52WeekLowDate"]}</span>
                        </p>
                        <p class="metric-summary">
                            <span class="stock-metric-title">52-Week Price Return Daily:</span>
                            <span class="stock-metric">${data.metric["52WeekPriceReturnDaily"].toFixed(2)}%</span> 
                            <span class="stock-metric-title" style="margin-left: 20%;">Dividend Yield(TTM):</span>
                            <span class="stock-metric">${currentDividendYieldTTM}</span>
                        </p>
                    </div>`;

    document.getElementById("stocks-content").innerHTML = output1;
    generateCharts(data) // I decided to call the generateCharts() function within this function for better readability and structuring.
}
fetchStockData()

function generateCharts(data) {
    if (!data.series?.annual) return;

    let colors = ['#32648C33', 'rgba(180, 50, 50, 0.2)', 'rgba(40, 140, 80, 0.2)', 'rgba(200, 170, 50, 0.2)', 'rgba(190, 80, 140, 0.2)', 'rgba(120, 80, 50, 0.2)', 
        'rgba(200, 100, 40, 0.2)', 'rgba(40, 40, 40, 0.2)', 'rgba(110, 180, 40, 0.2)', 'rgba(110, 60, 140, 0.2)	'];

    const ctx1 = document.getElementById('stock-chart1').getContext('2d')   ; 
    const ctx2 = document.getElementById('stock-chart2').getContext('2d'); 
    const ctx3 = document.getElementById('stock-chart3').getContext('2d'); 
    const ctx4 = document.getElementById('stock-chart4').getContext('2d'); 
    
    // Destroy previous charts if they exist:
    if (window.bookValueChart) {
        window.bookValueChart.destroy();
    }
    if (window.EarningsPerShareChart) {
        window.EarningsPerShareChart.destroy();
    }
    if (window.SalesPerShareChart) {
        window.SalesPerShareChart.destroy();
    }
    if (window.grossMarginChart) {
        window.grossMarginChart.destroy();
    }

    const bookValueData = data.series.annual.bookValue; // Enter the bookValue array
    //The bookValue array has two values: period(date) & value(at that current date)
    const years1 = bookValueData.map(item => item.period.substring(0, 4)).reverse(); // Only grab the year
    const values1 = bookValueData.map(item => item.v).reverse(); 
    
    
    // The creation of the actual charts
    window.bookValueChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: years1,
            datasets: [{
                label: 'Book Value Per Share ($)',
                data: values1,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: { display: true, text: 'Book Value ($)' }
                },
                x: {
                    title: { display: true, text: 'Year' }
                }
            }
        }
    });

    const epsData = data.series.annual.eps; // Enter the eps array
    const years2 = epsData.map(item => item.period.substring(0, 4)).reverse(); // Only grab the year
    const values2 = epsData.map(item => item.v).reverse(); 

    window.EarningsPerShareChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: years2,
            datasets: [{
                label: 'Earnings Per Share (%)',
                data: values2,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: { display: true, text: 'Share Value ($)' }
                },
                x: {
                    title: { display: true, text: 'Year' }
                }
            }
        }
    })

    const spsData = data.series.annual.salesPerShare; // Enter the eps array
    const years3 = spsData.slice(0,10).map(item => item.period.substring(0, 4)).reverse(); // Only grab the first 10 elements of the array
    const values3 = spsData.slice(0,10).map(item => item.v.toFixed(2)).reverse(); // Only grab the first 10 elements of the array

    window.SalesPerShareChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: years3,
            datasets: [{
                label: 'Sales Per Share (%)',
                data: values3,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: colors, 
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales Per Share ($)',
                },
            },
        },
    })

    const grossMarginData = data.series.annual.grossMargin; // Enter the eps array
    const years4 = grossMarginData.slice(0,10).map(item => item.period.substring(0, 4)).reverse(); // Only grab the first 10 elements of the array
    const values4 = grossMarginData.slice(0,10).map(item => item.v * 100).reverse(); // Only grab the first 10 elements of the array

    window.grossMarginChart = new Chart(ctx4, {
        type: 'polarArea',
        data: {
            labels: years4,
            datasets: [{
                label: 'Gross Margin(%)',
                data: values4,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: colors, 
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                  pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                      size: 14
                    }
                  }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Gross Margin ($)',
                },
            },
        },
    })
}