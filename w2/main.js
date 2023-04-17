var x=0;
let millisecsPerDay=24*60*60*1000;
$("table").css("width","400px");
$("table").css("text-align","center");
function run(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

var topicCount=topic.length;
var trtype;
for(;x<topicCount;x++){

    $("#courseTable").append(
        "<tr>"+
        `<td>${x+1}</td>`+//``可穿插固定內容與變數，變數需加$
        `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>"
        );
    }
    /*$("tr").eq(2).attr("bgColor","gray");
    console.log($("tr").eq(1).text());*/
    $("tr:odd").attr("bgColor","beige");
    for(var y=0;y<topicCount;y++)
    {
        if(topic[y]=="國定假日")
        {
            $("tr").eq(y+1).attr("bgColor","gray");
        }
    }
};
$('#textsubmit').on('click', function(){
    if(x==0)
    {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    }
  var textbox=($("#textbox").val());
  $("#courseTable").append(
    "<tr>"+
    `<td>${x+1}</td>`+//``可穿插固定內容與變數，變數需加$
    `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
    `<td>${textbox}</td>`+
    "</tr>"
    );
    x++;
    if(textbox=="國定假日")
    {
        $("tr").eq(x).attr("bgColor","gray");
    }
    else
    {
        if(x%2!=0)
        {
            $("tr").eq(x).attr("bgColor","beige");
        }
    }

});