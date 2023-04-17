let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
const gridLength=200;

$(function(){
    mapArray=[
        //0:可以走的，1:有一座山，2:終點，3:有一個敵人
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];
    
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
    imgMountain.onload=function(){
    imgEnemy.onload=function(){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[x][y]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }
            }
        }
    }
}
});



$(document).on("keydown",function(event){
    console.log(event.code);
    let targetImg,targetBlock,cutImagePositionX;//決定臉朝哪個方向
    targetImg={
        "x":-1,
        "y":-1
    };
    targetBlock={
        "x":-1,
        "y":-1
    }
    event.preventDefault();
    
    switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=175;//臉朝左
            break;
        case"ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=355;//臉朝上
            break;
        case"ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=540;//臉朝右
            break;
        case"ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutImagePositionX=0;//臉朝下
            break;
        default://其他按鍵不處理
            return;
        }
        if(targetImg.x<=400&&targetImg.x>=0&&targetImg.y<=400&&targetImg.y>=0){//限制在9格裡
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
                    break;
                case 3:
                    $("#talkBox").text("哈摟");
                    break;
            }
        }else{
            $("#talkBox").text("邊界");
        }
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});