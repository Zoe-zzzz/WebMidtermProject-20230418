let thisButton=document.getElementsByTagName("button")[0];
let showData=document.getElementById("showData");

var startDate=new Date();
console.log(startDate.getMonth());
var day = startDate.getDate();
var month = startDate.getMonth() + 1;
var year = startDate.getFullYear();
console.log(year+"/"+month+"/"+day);
var finaltext=[];
finaltext+=year;
if(month<10)
{
    finaltext+='0'+month;
}
else{
    finaltext+=month;
}
if(day<10)
{
    finaltext+='0'+day;
}
else{
    finaltext+=day;
}
console.log(finaltext);
thisButton.addEventListener("click", loadServerData);

function loadServerData(){
    console.log("load");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest=new XMLHttpRequest();
    }
    else{
         alert("No XMLHttpRequest!");
         return;
        }
        xmlHttpRequest.open("GET","DataFromServer.txt",true);
        //xmlHttpRequest.open("GET",finaltext+".txt",true);
        xmlHttpRequest.send();
        xmlHttpRequest.onreadystatechange=function(){
        if(xmlHttpRequest.readyState==4&&xmlHttpRequest.status==200){
            showData.innerHTML=xmlHttpRequest.responseText;
            thisButton.style.visibility="hidden";
        }
    }
}