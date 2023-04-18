let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 100;

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

//initial
$(function(){
    // 0 : available, 1 : Mountain, 2 : Final Stop, 3 : Enemy
    mapArray = [
        [0, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 1, 4],
        [3, 1, 0, 0, 0, 0],
        [0, 0, 0, 3, 3, 1],
        [0, 0, 3, 1, 1, 0],
        [1, 0, 0, 1, 3, 2],
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        x:0,
        y:0
    };

    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x, currentImgMain.y, gridLength,gridLength);
        // ctx.drawImage(imgMain, 360, 0, 80, 130, 200,0, gridLength, gridLength*3);
    };


    let sources = {
        mountain: "images/material.png",
        enemy: "images/Enemy.png",
        money:"images/material.png",

    };

    // imgMountain = new Image();
    // imgMountain.src = "images/material.png";
    // imgEnemy = new Image();
    // imgEnemy.src = "images/Enemy.png";

    loadImages(sources, function(images){
        for (let x in mapArray) {
            for (let y in mapArray[x]) {
                if (mapArray[x][y] == 1) {
                    ctx.drawImage(images.mountain, 32, 190, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                } else if (mapArray[x][y] == 3) {
                    ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                }else if (mapArray[x][y] == 4) {
                    ctx.drawImage(images.money, 256, 0, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                }
            }
        }
    });

    // imgMountain.onload = function(){
    //     imgEnemy.onload = function(){
    //         for(let x in mapArray){
    //             for(let y in mapArray[x]){
    //                 if(mapArray[x][y] == 1){
    //                     ctx.drawImage(imgMountain, 32, 65, 32, 32, y*gridLength, x*gridLength, gridLength, gridLength);
    //                 }else if(mapArray[x][y] == 3){
    //                     ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
    //                 }
    //             }
    //         }
    //     };
    // };

});

//Click Event
$(document).on("keydown", function(event){
    console.log(event.key);
    event.preventDefault();
});
  