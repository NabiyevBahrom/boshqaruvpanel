 var salesData = {
labels: ["Yanvar", "Fevral", "Mart", "April", "May", "Iyun",],
    datasets: [{
      label: 'Sales',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: [65, 59, 80, 81, 56, 55]
    }]
  };

  // Get the context of the canvas element
  var ctx = document.getElementById('salesChart').getContext('2d');

  // Create a bar chart
  var salesChart = new Chart(ctx, {
    type: 'bar',
    data: salesData,
  });
