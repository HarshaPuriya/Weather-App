// let btn = document.querySelector("button");
let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector('.temp');
let location_p = document.querySelector('.time_location p')
let time_date = document.querySelector('.time_location span')
let condition = document.querySelector('.weather_condition span')
let weather_image = document.querySelector('.weather_condition img')

// btn.addEventListener('click', function() {
//     let value = input.value;
//     console.log(value);
// })

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let value = input.value;
  console.log(value);
  let apiUrl = 'https://api.weatherapi.com/v1/current.json?key=e36480d0944e4c3a9b1164335233012&q='+value+'&aqi=no';
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    temp.innerText = data.current.temp_c;
    location_p.innerText = data.location.name;
    time_date.innerText = data.location.localtime;
    condition.innerText = data.current.condition.text;
    let imgSrc = data.current.condition.icon;
    weather_image.src = "https:"+imgSrc;
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Sorry for the inconvience, please try again with correct name");
  });
  
})
 