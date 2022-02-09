const button = document.querySelector(".btn");
const btns = document.querySelectorAll('.region')
console.log(btns[2].innerHTML)
const inputvalue = document.querySelector(".inputvalue");

button.addEventListener("click", function () {
  console.log(inputvalue.value)
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputvalue.value +
    "&appid=5ea20c34427b9975a24ca2c9d4b64486"
  )
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("data", JSON.stringify({ data }));
      window.location.href = '/data.html'
    })
    .catch((err) => alert("Enter Vaild City Name"));
});

btns.forEach(btn=>{
  btn.addEventListener("click", function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      btn.innerHTML +
      "&appid=5ea20c34427b9975a24ca2c9d4b64486"
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("data", JSON.stringify({ data }));
        window.location.href = '/data.html'
      })
      .catch((err) => alert("Enter Vaild City Name"));
  });
})

