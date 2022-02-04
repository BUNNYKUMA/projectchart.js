function update(){
async function myfun() {
  const url = 'http://localhost/pj/json/read.json ';
  const response = await fetch(url);
  // wait until the request has completed
  const datapoints = await response.json();
  console.log(datapoints);
  return datapoints;
};
myfun().then(datapoints => {
  const Recip_County = datapoints.data.map(function (index) {
    return index.Recip_County;
  });
  console.log(Recip_County);
  myChart.config.data.labels = Recip_County;
  myChart.update();
})

//  data

myfun().then(datapoints => {
  const Recip_County = datapoints.data.map(function (index) {
    return index.Recip_County;
  });
  const Series_Complete_Yes = datapoints.data.map(function (index) {
    return index.Series_Complete_Yes;
  });
  
  // console.log(Recip_County);
  // console.log(Series_Complete_Yes);
  myChart.config.data.datasets[0].data = Series_Complete_Yes;
  myChart.config.data.labels = Recip_County;
  myChart.update();
})

}



const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
// const call = ['12', '33', '55', '66', '88', '99', '63'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0,0,0,0,0],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
