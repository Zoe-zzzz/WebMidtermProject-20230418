let citydata=[
    {name:"",lat:"",lon:""},
    {name:"台北",lat:25.0856513,lon:121.421409},
    {name:"台中",lat:24.1852333,lon:120.4946381},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"元智",lat:24.9703173,lon:121.2608673}
];
$(function(){
    for(let x=0;x<citydata.length;x++)
    {
        $("#cityselect").append(
            `<option value='${x}'>${citydata[x].name}</option>`
        );
    }
    $("#cityselect").on("change",loadserverdata);
});
function loadserverdata(){
    console.log("[loadserverdata]in");
    debugger;
    $("#result").empty();
    if(this.value==0)return;
    let weartherAPI_URL="http://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="2fc3a1bbf75edff6a8c7d705c6bdcadd";
    $.getJSON(weartherAPI_URL,{
        lat:citydata[this.value].lat,
        lon:citydata[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
.done(function(data){
    console.log(data);
    $("#result").append(
        `<p>氣溫：${data.main.temp_min} ~ ${data.main.temp_max}</p>`
    );
    $("#result").append(
        `<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`
    );
})
.fail(function(){console.log("Error")})
.always(function(){console.log("Always")});

}