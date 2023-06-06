let chanelhulu=[],nowchanel=1;
let Videolist=["video/Dune Part Two.mp4",
                "video/euphoria.mp4",
                "video/euphoria season2.mp4",
                "video/fresh.mp4",
                "video/the great.mp4",
                "video/normalpeople.mp4",
                "video/fleabag.mp4",
                "video/fleabag season2.mp4"]
let currentchanel=0;
$(function(){
    $("#myVideo").attr("src",Videolist[currentchanel]);
    $("#playBtn").on("click",function(){//停止按下去撥放，撥放按下去停止
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max =$("#myVideo")[0].duration;
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn").on("click", downVolume);
    $("#higherVolumeBtn").on("click", upVolume);
    $("#myVideo").on("timeupdate",updateProgress);
    $("#progressBar").on("change",changeProgress);
    $("#prevchanel").on("click",prevChanel);
    $("#nextchanel").on("click", nextChanel);
    $("#bb").on("click",bbclick);
});
function downVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume==0) {
    } else if(myVideo.volume<0.1) {
        myVideo.volume=0;
    } else{
        myVideo.volume=myVideo.volume-0.1;
    }
    $("#volumeDisplay").text(myVideo.volume.toFixed(2));
}
function upVolume() {
    varmyVideo=$("#myVideo")[0];
    if(myVideo.volume==1) {
    } else if(myVideo.volume>0.9) {
        myVideo.volume=1;
    } else{
        myVideo.volume=myVideo.volume+0.1;
    }
    $("#volumeDisplay").text(myVideo.volume.toFixed(2));
}
function updateProgress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
    $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
    $("#progressBar")[0].value =$("#myVideo")[0].currentTime;
}
function changeProgress(){
    $("#myVideo")[0].currentTime=$("#progressBar")[0].value;
}
function prevChanel(){
    if(currentchanel==0)
    {
        currentchanel--;
        $("#myVideo").attr("src","");
        $("#whennotv").attr("src","image/IMG_5765.JPG");
    }
    else
    {
        currentchanel--;
        $("#myVideo").attr("src",Videolist[currentchanel]);
        $("#myVideo")[0].play();
    }
    nowchanel--;
     $("#chanelnumber").text(nowchanel);
}
function nextChanel(){
   
    if(currentchanel<Videolist.length-1)
    {
        currentchanel++;
        $("#myVideo").attr("src",Videolist[currentchanel]);
        $("#myVideo")[0].play();
        
    }
    else
    {
        currentchanel++;
        $("#myVideo").attr("src","");
        $("#whennotv").attr("src","image/IMG_5766.JPG");
    }
    nowchanel++;
     $("#chanelnumber").text(nowchanel);
     
}
/*function bbclick(){
    $("#bb").
}*/