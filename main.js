function getInfo(){
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = newName.value;
    cityInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("submit").click();
        }
    });
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=bab68c5bee6f6d279cdc7cce12b4a32f')
.then(response => response.json())
.then(data => {
    document.getElementById("min").innerHTML = Number(data.list[0].main.temp_min - 273.15).toFixed(1)+'॰';
    document.getElementById("max").innerHTML = Number(data.list[0].main.temp_max - 273.15).toFixed(1)+'॰';
    document.getElementById("msg").innerHTML = data.list[0].weather[0].description;
    document.getElementById("wind").innerHTML = Number(data.list[0].wind.speed)+'KM/s';
    document.getElementById("feels").innerHTML = Number(data.list[0].main.humidity)+"%";
    document.getElementById("temp").innerHTML = Number(data.list[0].main.temp - 273.15).toFixed(1)+'॰';
    document.getElementById("the-day").innerHTML = data.list[0].weather[0].main;
    document.getElementById('label').src = "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png";
     
    for(i = 0; i<8; i++){
        document.getElementById("time" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    for(i = 0; i<8; i++){
        document.getElementById("min" + (i+1)).innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(2)+ "°";
    }

    for(i = 0; i<8; i++){
        document.getElementById("max" + (i+1)).innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
})
.catch(err => alert("Enter the Valid city Name or check your internet connection"))
}
fetch('https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=bab68c5bee6f6d279cdc7cce12b4a32f')
.then(response => response.json())
.then(data => {
    document.getElementById("paris").innerHTML = "Paris (" + Number(data.list[0].main.temp - 273.15).toFixed(1)+'॰)';

})
fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=bab68c5bee6f6d279cdc7cce12b4a32f')
.then(response => response.json())
.then(data => {
    document.getElementById("london").innerHTML = "London (" + Number(data.list[0].main.temp - 273.15).toFixed(1)+'॰)';

})

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "bhandara";
    getInfo();
}

// if(data.list[0].weather.main == 'Clouds'){
//     document.getElementById('the-day').innerHTML = "Its Cloudy day";
// }
// else{
//     document.write("bg")
// }