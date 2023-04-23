const fundamentals = document.getElementById('fundamentals-chart');
const frameworks = document.getElementById('frameworks-chart');
const darkModeButton = document.getElementById('dark-mode-button');
const techStack = document.getElementById('tech-stack-chart')

const techStackChart = new Chart(techStack, {
  type: 'bar',
  data: {
    labels: ['C++', 'Angular', 'TypeScript', 'Python', 'Vue', 'React', 'JavaScript', 'CSS', 'HTML'],
    datasets: [{
      label: 'Easy as',
      data: [20, 40, 40, 70, 80, 100, 100, 100, 100],
      backgroundColor: ["#095DE0"],
    }],
  },
  options: {
    indexAxis: 'y', // <-- here
    responsive: true,
    scales: {
      x: {
        grid: {
          lineWidth: 0.4
        }
      },
      y: {
        ticks: {
          font: {
              size: 10,
          }
      },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
          display: false
      }
  }
  }
});

const fundamentalsChart = new Chart(fundamentals, {
  type: 'bar',
  data: {
    labels: ['Javascript', 'HTML', 'CSS', 'TypeScript'],
    datasets: [{
      label: 'Easy as',
      data: [100, 100, 100, 50],
      backgroundColor: ["#095DE0"],
    }]
  },
  borderColor: "#095DE0",
  options: {

    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
              lineWidth: 0.4
          }
        }
      },
    plugins: {
        legend: {
            display: false
        }
    }
    }
});

const frameworksChart = new Chart(frameworks, {
    type: 'bar',
    data: {
      labels: ['React', 'Vue', 'Angular'],
      datasets: [{
        label: 'Easy as',
        data: [100, 80, 40],
        backgroundColor: ["#095DE0"],
      }]
    },
   options: {
      scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
                lineWidth: 0.4
            }
          }
        },
      plugins: {
          legend: {
              display: false
          }
      }
      }
  });
  

const updateCharts = () =>{
  if(localStorage.getItem('theme') === 'dark'){
    fundamentalsChart.options.scales.y.grid.color = "rgba(252, 252, 252, 0.1)";
    frameworksChart.options.scales.y.grid.color = "rgba(252, 252, 252, 0.1)";
    techStackChart.options.scales.x.grid.color = "rgba(252, 252, 252, 0.1)";

  } else {
    fundamentalsChart.options.scales.y.grid.color = "rgba(12, 13, 13, 0.1)";
    frameworksChart.options.scales.y.grid.color = "rgba(12, 13, 13, 0.1)";
    techStackChart.options.scales.x.grid.color = "rgba(12, 13, 13, 0.1)";

  }
  fundamentalsChart.update();
  frameworksChart.update();
  techStackChart.update();
}


const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    if(html.classList.contains('dark')){
        localStorage.setItem('theme', "dark")
    } else {
        localStorage.setItem('theme', "light")
    }
    updateCharts();
};

if(localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
}

  
updateCharts();
darkModeButton.addEventListener('click', toggleDarkMode);