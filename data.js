
var city = document.querySelector(".city");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
let info = localStorage.getItem('data')
data = JSON.parse(info).data
var namevalue = data.name;
var tempvalue = data["main"]["temp"];
var descvalue = data["weather"][0]["description"];
city.textContent = "City: " + namevalue;
console.log(city)
temp.innerHTML = "Temprature: " + (Math.floor(tempvalue - 273) + "°");
desc.innerHTML = "Cloud: " + descvalue;