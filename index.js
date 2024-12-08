const userinput = document.getElementById('userinput');

const divv = document.getElementById('divcont');


const srchdata = async () => {


    const API = '1a64d47fe3477d73ac66226ba804421c';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userinput.value}&appid=${API}&units=metric`;
    const fetchdata = await fetch(API_URL);
    const response = await fetchdata.json();
    console.log(response);
    showData(response);

}

const showData = (data) => {
    divv.innerHTML = `
<div id="divcont">
    <br>
    <br>
    <br>
    
    
    
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <div>
    
    <h2 style="font-family: arial border: 2px solid black;"> City : ${userinput.value}</h2>
    
    </div>
<h2>Feels Like : ${data.main.feels_like}</h2>
    <h1>Country : ${data.sys.country}</h1>
    <h1>${data.main.temp}°C</h1>
    <h1>${data.weather[0].main}</h1>
    
</div>
`
}
