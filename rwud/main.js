var x=1;
var court=["A","B","C","D","E","F","G"];
$(function(){
    $("#read").on("click", readHandler);
    $("#write").on("click", writeHandler);
    $("#update").on("click", updateHandler);
    $("#delete").on("click", deleteHandler);
});

function readHandler(){
    let url="http://localhost:3000/movie";
    $.getJSON(url)
    .done(function(msg){
        console.log(msg);
    })
    .fail(function(msg){
        console.log("Fail!");
    });
}
function updateHandler() {
    let url="http://localhost:3000/reservation/1";
    $.ajax({
        url:url,
        type:'PUT',
        data:'task=buy bread',
        success:function(data){
            console.log(data);
        }
    });
}
function writeHandler() {
    let url="http://localhost:3000/movie/1";
    console.log(nowday);
    $.post(url,{dateAndTime:[nowday]}).
    done(function(msg) {
        console.log(msg);
    }).
    fail(function(msg) {
        console.log("Fail!");
    });
    x++;
}

function deleteHandler() {
    let url="http://localhost:3000/movie/11";
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(data) {
            console.log(data);
        }
    });
}

