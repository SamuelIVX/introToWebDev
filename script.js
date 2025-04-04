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