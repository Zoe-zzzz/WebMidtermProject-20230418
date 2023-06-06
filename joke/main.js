$(function(){
    $("#b1").on("click",loadServerData);
    $("#b2").on("click",findServerData);
});
function loadServerData(){
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(function(data){
        console.log("success");
        $("#showData").text(data.value);

    })
    .fail(function(){
        console.log("error");
    })
    .always(function(){
        console.log("always");
    });
}
function findServerData(){
    $("#showData2").empty();
    var keyword=$("input").val();
    $.getJSON("https://api.chucknorris.io/jokes/search?query="+keyword)
     .done(function(data){
         console.log(data);
         for(var x=0;x<data.total;x++)
         {
            $("#showData2").append(data.result[x].value+"<hr>");
         }

     })
     .fail(function(){
         console.log("error");
     })
     .always(function(){
         console.log("always");
     });
}