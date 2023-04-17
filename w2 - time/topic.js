var topic=["尚未開學","國定假日","環境準備","隨機性","重複性"];
var day,month,year;
$('#submit').on('click', function(){
    x=0;
    console.log($('#firstdate').val());
    if($('#firstdate').val()=="")
    {
      var date = new Date();
    }
    else
    {
      var date = new Date($('#firstdate').val());
    }
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    // alert([day, month, year].join('/'));
    setMonthAndDate(month,day);
    $("#courseTable").empty();
    $("#courseTable2").empty();
    run();
  });

//   alert([date.day, date.month, date.year].join('/'));
var startDate=new Date();
function setMonthAndDate(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    // 把使用者想要的日期灌進去，不在乎時分秒，全部改成0
}
// setMonthAndDate(date.month,date.day);
