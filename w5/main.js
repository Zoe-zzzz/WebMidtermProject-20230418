let player;//YouTubePlayer
let currentPlay=0;//記錄目前撥到第幾首歌
//YouTubeAPIReady
function onYouTubeIframeAPIReady(){
    console.log("youtube ready!");
player=new YT.Player("player",{
    height:"390",
    width:"640",
    videoId:playList[currentPlay],
    playerVars:{
        autoplay:0,
        controls:0,
        start:playTime[currentPlay][0],
        end:playTime[currentPlay][1],
        iv_load_policy:3
    },
    events:{
        onReady:onPlayerReady,
        onStateChange:onPlayerStateChange   
   }
});
}
//YouTubePlayerReady
function onPlayerReady(event){
    $("#playbutton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
});
}
//PlayerStateChange
function onPlayerStateChange(event){
    console.log(event);
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
        currentPlay++;
        player.loadVideoById({
            videoId:playList[currentPlay],
            startSeconds:playTime[currentPlay][0],
            endSeconds:playTime[currentPlay][1],
            suggestedQuality:"large"
        });
    }else{
        currentPlay=0;
        player.cueVideoById({
            videoId:playList[currentPlay],
            startSeconds:playTime[currentPlay][0],
            endSeconds:playTime[currentPlay][1],
            suggestedQuality:"large"
        });
    }

    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
}
