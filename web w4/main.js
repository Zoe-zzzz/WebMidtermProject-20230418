let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
let scores=0;
const gridLength=50;
var lestImagePositionX;
var lasttime=60;
$(function(){
    mapArray=[
        //0:可以走的，1:有一座山，2:終點，3:有一個敵人
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 1, 4, 0, 1, 0, 0, 1, 4],
        [3, 1, 0, 0, 0, 0, 3, 1, 1, 0, 1, 1],
        [4, 0, 0, 3, 3, 1, 0, 0, 1, 3, 1, 4],
        [0, 0, 3, 1, 1, 0, 1, 1, 0, 0, 1, 4],
        [1, 4, 0, 1, 3, 0, 0, 1, 0, 0, 1, 0],
        [3, 0, 3, 0, 0, 3, 0, 0, 1, 0, 1, 1],
        [0, 3, 1, 1, 1, 0, 0, 3, 1, 1, 1, 4],
        [3, 0, 3, 0, 1, 0, 0, 1, 3, 0, 1, 3],
        [0, 1, 3, 0, 1, 1, 0, 4, 1, 0, 3, 1],
        [1, 0, 1, 1, 3, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 4, 1, 0, 0, 1, 1, 0, 1, 2]
    ];
    function showtime(){
        lasttime--;
        if(lasttime<1)
        {
            $("#gameover").css("display","block");
            $("#gameover2").css("display","block");
        }
        $("#time").text(lasttime);
    }
    setInterval(showtime,1000);
    ctx=$("#myCanvas")[0].getContext("2d");//後面接getContext為js原生語法，前面要加取第0個
    imgMain=new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMain={//單純的單字，可以加單引號或不用，但若有其他符號，一訂要加引號
        x:0,
        y:0
    };
    imgMain.onload=function(){//要先等圖來才能畫
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        //ctx.drawImage(imgMain,360,0,80,130,currentImgMain.x+gridLength,currentImgMain.y,gridLength,gridLength*3);
        //ctx.drawImage(imgMain,360,0,80,130,currentImgMain.x+gridLength,currentImgMain.y+gridLength,gridLength,gridLength);
        //ctx.drawImage(imgMain,360,0,80,130,currentImgMain.x+gridLength,currentImgMain.y+gridLength*2,gridLength,gridLength);
    };
    imgMountain=new Image();
    imgMountain.src="images/material.png";
    imgEnemy=new Image();
    imgEnemy.src="images/Enemy.png";
    imgMoney=new Image();
    imgMoney.src="images/material.png";
    imgMoney.onload=function(){
    imgMountain.onload=function(){
    imgEnemy.onload=function(){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(imgMountain,32,190,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[x][y]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if (mapArray[x][y] == 4) {
                    ctx.drawImage(imgMoney, 256, 0, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                }
            }
        }
    }
}
}
});



$(document).on("keydown",function(event){
    console.log(event.code);
    event.preventDefault();
    let targetImg,targetBlock,cutImagePositionX;//決定臉朝哪個方向
    targetImg={
        "x":-1,
        "y":-1
    };
    targetBlock={
        "x":-1,
        "y":-1
    }
    
    
    switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            lestImagePositionX=cutImagePositionX=175;//臉朝左
            break;
        case"ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            lestImagePositionX=cutImagePositionX=355;//臉朝上
            break;
        case"ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            lestImagePositionX=cutImagePositionX=540;//臉朝右
            break;
        case"ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            lestImagePositionX=cutImagePositionX=0;//臉朝下
            break;
        case"Space":
            if(lestImagePositionX==0)
            {
                targetImg.x=currentImgMain.x;
                targetImg.y=currentImgMain.y+2*gridLength;
                cutImagePositionX=lestImagePositionX;
            }
            else if(lestImagePositionX==540)
            {
                targetImg.x=currentImgMain.x+2*gridLength;
                targetImg.y=currentImgMain.y;
                cutImagePositionX=lestImagePositionX;
            }
            else if(lestImagePositionX==355)
            {
                targetImg.x=currentImgMain.x;
                targetImg.y=currentImgMain.y-2*gridLength;
                cutImagePositionX=lestImagePositionX;
            }
            else
            {
                targetImg.x=currentImgMain.x-2*gridLength;
                targetImg.y=currentImgMain.y;
                cutImagePositionX=lestImagePositionX;
            }
            break;
        default://其他按鍵不處理
            return;
        }
        if(targetImg.x<=550&&targetImg.x>=0&&targetImg.y<=550&&targetImg.y>=0){//限制在9格裡
            targetBlock.x=targetImg.y/gridLength; //算出mapArray
            targetBlock.y=targetImg.x/gridLength;
        }else{
            targetBlock.x=-1; //-1 異常直 不讓它過去
            targetBlock.y=-1;
        }
        ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        if(targetBlock.x!=-1&&targetBlock.y!=-1){
            switch(mapArray[targetBlock.x][targetBlock.y]){
                case 0:
                    $("#talkBox").text("");
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    break;
                case 1:
                    $("#talkBox").text("有山");
                    //currentImgMain.x=targetImg.x;
                    //currentImgMain.y=targetImg.y;加了可以吃掉
                    break;
                case 2:
                    $("#talkBox").text("抵達終點");
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    $("#gameover").text("GAME WIN");
                    $("#gameover").css("color","yellow");
                    $("#gameover").css("display","block");
                    $("#gameover2").css("display","block");
                    break;
                case 3:
                    $("#talkBox").text("你被攻擊減50");
                    scores-=50;
                    if(scores<0){
                        $("#gameover").css("display","block");
                        $("#gameover2").css("display","block");
                    }
                    $("#scores").text(scores);
                    break;
                case 4:
                    $("#talkBox").text("開寶箱");
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    scores+=100;
                    $("#scores").text(scores);
                    break;
            }
        }else{
            $("#talkBox").text("邊界");
        }
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});