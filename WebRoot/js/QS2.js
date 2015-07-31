/**
 * Created by Administrator on 2015/7/14.
 */
var canvas = document.getElementById("canvas_QS"),
    context = canvas.getContext("2d"),
    RADIUS = 0.5,
    horizonButton=document.getElementById("btn_horizon"),
    resetButton=document.getElementById('btn_reset'),
    animateButton = document.getElementById("btn_start");
var pic_QS = new Image();
$(document).ready(function () {
    startAnimation();
    pauseAnimation();
});

//pic_QS.addEventListener('load', drawImg, false);
pic_QS.src = "image/QS_v.png";
/*定义了精灵模板，name为精灵名，painter为绘制器，behaviors为行为数组*/
var Sprite = function (name, painter, behaviors) {
    if (name != undefined)this.name = name;
    if (painter != undefined)this.painter = painter;
    //定义了精灵的一些常用属性，比如宽高、位置、移动速度等
    this.top = 0;
    this.left = 0;
    this.width = 20;
    this.height = 20;
    this.velocityX = 0;
    this.velocityY = 0;
    this.visible = true;
    this.animating = false;
    this.behaviors = behaviors || [];
    return this;
}
//Sprite的原型函数，为sprite指定了两个方法，分别为：paint和update
Sprite.prototype = {
    paint: function (context) {
        if (this.painter != undefined && this.visible) {
            this.painter.paint(this, context);
        }
    },
    update: function (context, time) {
        for (var i = 0; i < this.behaviors.length; i++) {
            this.behaviors[i].execute(this, context, time);
        }
    }
};
//闸门的绘制器
ZMpainter = function (data_ZM) {
    this.resource = data_ZM.resource;       //图片的位置,在此还可以定义闸门状态，后期可以调整

}
ZMpainter.prototype = {
    paint: function (sprite, context) {        //指定了闸门的原型绘制方法
        var img = new Image();
        img.src = this.resource;
        context.drawImage(img, sprite.left, sprite.top, sprite.width, sprite.height);
    }
}
//水池的绘制器
SCpainter = function (data_SC) {
    this.speed = data_SC.speed;           //进水速度
    this.SCwidth = data_SC.width;         //水池宽度
    this.SCheight = data_SC.height;       //水池高度
    this.height = 0;                      //水位高度
    this.readDiv = data_SC.readout;        //显示水位的div名称
    this.flag=0;
}
//水池的paint方法
SCpainter.prototype = {
    paint: function (sprite, context) {
        this.flag=this.flag+1;
        if(this.height==0){
            if(!paused){
                this.height+=this.speed;
            }
        }
        else if(this.height < this.SCheight * 0.9){
            context.fillStyle="#6ae9ee";
            if(!paused){
                this.height+=this.speed;
            }
            var h = parseFloat(this.height/40).toFixed(1);
            document.getElementById(this.readDiv).innerHTML = "高度：" + h + "M";
            context.fillRect(sprite.left, sprite.top + this.SCheight - this.height, this.SCwidth, this.height);
        }
        else if(this.height<this.SCheight){
            context.fillStyle = "#9abbe8";
            if(!paused){
                this.height+=this.speed;
            }
            var h = parseFloat(this.height/40).toFixed(1);
            if(this.flag>5){
                this.flag=0;
                document.getElementById(this.readDiv).innerHTML = "请注意！高度已到" + h + "M！！";
                context.fillRect(sprite.left, sprite.top + this.SCheight - this.height, this.SCwidth, this.height);
            }

        }
        else{
            context.fillStyle = "#9abbe8";
            var h = parseFloat(this.height/40).toFixed(1);
            document.getElementById(this.readDiv).innerHTML = "请注意！高度已满！！!";
            context.fillRect(sprite.left, sprite.top + this.SCheight - this.height, this.SCwidth, this.height);
        }

    }
}
//管道的绘制器，cells数组为管道的起始点、拐点和终点的坐标、速度数组，speed代表水速，x、y代表当前小球位置
GDpainter = function (cells) {
    this.cells = cells || [];   //拐点数组
    this.cellIndex = 0;         //当前数组索引
    this.speed = 0.5;             //水流速度
    this.GDwidth = 20;          //管道宽度
    this.lineHeight = 10;       //线条的长度
    this.x = cells[0].x;        //当前绘制点的位置x
    this.y = cells[0].y;        //当前绘制点的位置y
    this.firstX = this.x;       //第一个水流效果线段的起始坐标X
    this.firstY = this.y;       //第一个水流效果线段的其实坐标Y
    this.beginHeight = 0;       //第一段管道第一个水流效果线段的长度
    this.endHeight = 0;         //第一段管道最后一个水流效果线段的长度
}

//为绘制器指定了两个方法，advance为每次刷新前的状态转移；paint为绘制方法
GDpainter.prototype = {
    //advance控制水流动态的每一次变化更新，管道的绘制不在此控制，由paint方法遍历cells数组画完
    advance: function () {
        //该方法主要实现每次更新第一个动态线条的位置和长度，最终由beginHeight保存长度，firstX、firstY保存第一个动态线条的位置
        this.endHeight = 0;
        if (Math.abs(this.firstX - this.cells[0].x) >= this.lineHeight || Math.abs(this.firstY - this.cells[0].y) >= this.lineHeight) {
            this.firstX = this.cells[0].x;
            this.firstY = this.cells[0].y;
            this.beginHeight = 0;
        }
        else {
            if (this.beginHeight < this.lineHeight) {
                if (this.beginHeight + this.speed > this.lineHeight) {
                    this.beginHeight = this.lineHeight;
                }
                else {
                    this.beginHeight += this.speed;
                }
            }
            else {
                if (this.cells[0].x == this.cells[1].x) {
                    if (this.cells[1].y > this.cells[0].y) {
                        this.firstY += this.speed;
                    }
                    else {
                        this.firstY -= this.speed;
                    }
                }
                else {
                    if (this.cells[1].x > this.cells[0].x) {
                        this.firstX += this.speed;
                    }
                    else {
                        this.firstX -= this.speed;
                    }
                }
            }
        }
    },

//原来的advance方法
//    advance:function () {
//        if (this.x >= this.cells[this.cellIndex + 1].x && this.y >= this.cells[this.cellIndex + 1].y) {
//            this.cellIndex++;
//        }
//        if (this.cellIndex == this.cells.length - 1) {
//            this.cellIndex = 0;
//            this.x = this.cells[0].x;
//            this.y = this.cells[0].y;
//        }
//        this.x += this.cells[this.cellIndex].velocityX * this.speed;
//        this.y += this.cells[this.cellIndex].velocityY * this.speed;
//    },

    paint: function (sprite, context) {
        //以下画管道
        //context.beginPath();
        //context.lineWidth = this.GDwidth;
        //context.strokeStyle = "#B0C3BC";
        //context.moveTo(this.cells[0].x, this.cells[0].y);
        //for (var i = 1; i < this.cells.length; i++) {
        //    context.lineTo(this.cells[i].x, this.cells[i].y);
        //}
        //context.stroke();

//原来的画小球方法
//        //以下画小球
//        context.beginPath();
//        context.arc(this.x, this.y, RADIUS, 0, Math.PI * 2);
//        context.strokeStyle = "blue";
//        context.stroke();

//以下画流动的虚线表示水流
        if (!paused) {
            this.x = this.firstX;
            this.y = this.firstY;
            var myEnd = false;
//        var nextNode_x = this.cells[1].x, //下一个拐点的x坐标
//            nextNode_y = this.cells[1].y; //下一个拐点的y坐标
            var flag = {                      //当前管道水流的方向,1代表该方向为正方向，-1代表该方向上反方向，0代表当前方向不移动
                x: 0,
                y: 0
            };
            context.beginPath();
            context.lineJoin = 'round';

            context.lineWidth = this.GDwidth / 4;   //流动线条的宽度，暂定为管道宽度的1/4
            context.strokeStyle = "blue";           //流动线条的颜色
            if (this.cells[1].x - this.cells[0].x > 0) {
                flag.x = 1;
            }
            else if (this.cells[1].x - this.cells[0].x < 0) {
                flag.x = -1;
            }
            else {
                flag.x = 0;
            }
            if (this.cells[1].y - this.cells[0].y > 0) {
                flag.y = 1;
            }
            else if (this.cells[1].y - this.cells[0].y < 0) {
                flag.y = -1;
            }
            else {
                flag.y = 0;
            }
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + flag.x * this.beginHeight, this.y + flag.y * this.beginHeight);
            this.x += flag.x * (this.beginHeight + this.lineHeight);
            this.y += flag.y * (this.beginHeight + this.lineHeight);
            for (var i = 1; i < this.cells.length; i++) {
                myEnd = false;
                if (this.cells[i].x - this.cells[i - 1].x > 0) {
                    flag.x = 1;
                }
                else if (this.cells[i].x - this.cells[i - 1].x < 0) {
                    flag.x = -1;
                }
                else {
                    flag.x = 0;
                }
                if (this.cells[i].y - this.cells[i - 1].y > 0) {
                    flag.y = 1;
                }
                else if (this.cells[i].y - this.cells[i - 1].y < 0) {
                    flag.y = -1;
                }
                else {
                    flag.y = 0;
                }
                if (this.endHeight > 0) {
                    context.moveTo(this.cells[i - 1].x - flag.x * (this.GDwidth / 8), this.cells[i - 1].y - flag.y * (this.GDwidth / 8));
                    context.lineTo(this.cells[i - 1].x + flag.x * (this.endHeight ), this.cells[i - 1].y + flag.y * this.endHeight);
                    this.x = this.cells[i - 1].x + flag.x * (this.lineHeight + this.endHeight);
                    this.y = this.cells[i - 1].y + flag.y * (this.lineHeight + this.endHeight);
                }
                if (this.endHeight < 0) {
                    this.x = this.cells[i - 1].x - flag.x * (this.endHeight);
                    this.y = this.cells[i - 1].y - flag.y * (this.endHeight);
                }
                if (this.endHeight == 0 && i != 1) {
                    this.x = this.cells[i - 1].x;
                    this.y = this.cells[i - 1].y;
                }
                while (Math.abs(this.x - this.cells[i].x) >= this.lineHeight || Math.abs(this.y - this.cells[i].y) >= this.lineHeight) {
                    context.moveTo(this.x, this.y);
                    context.lineTo(this.x + flag.x * this.lineHeight, this.y + flag.y * this.lineHeight);
                    this.x += flag.x * this.lineHeight;
                    this.y += flag.y * this.lineHeight;
                    if (Math.abs(this.x - this.cells[i].x) < this.lineHeight && Math.abs(this.y - this.cells[i].y) < this.lineHeight) {
                        this.endHeight = this.lineHeight - Math.abs(this.x - this.cells[i].x) - Math.abs(this.y - this.cells[i].y);
                        this.endHeight *= -1;
                        myEnd = true;
                        break;
                    }
                    else {
                        this.x += flag.x * this.lineHeight;
                        this.y += flag.y * this.lineHeight;
                    }
                }
                if (myEnd == false && Math.abs(this.x - this.cells[i].x) < this.lineHeight && Math.abs(this.y - this.cells[i].y) < this.lineHeight) {
                    context.moveTo(this.x, this.y);
                    context.lineTo(this.cells[i].x, this.cells[i].y);
                    this.endHeight = this.lineHeight - Math.abs(this.x - this.cells[i].x) - Math.abs(this.y - this.cells[i].y);
                }
            }
            context.stroke();
        }

    }
};
function pauseAnimation() {
    animateButton.value = 'Play';
    animateButton.innerHTML = "开始演示";
    paused = true;
}
function startAnimation() {
    animateButton.value = 'Pause';
    animateButton.innerText = "暂停演示";
    paused = false;
    window.setTimeout(animate, 50);
}
resetButton.onclick=function(){
    window.open("getWater_vertical.html","_self")
}
animateButton.onclick = function (e) {
    if (animateButton.value == 'Pause')pauseAnimation();
    else startAnimation();
}
horizonButton.onclick=function(e){
    window.open("getWater1.html","_self");
}





function animate() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawImg();
    if (!paused) {
        GD01.painter.advance();
        GD02.painter.advance();
        GD03.painter.advance();
        GD04.painter.advance();
        GD05.painter.advance();
        GD06.painter.advance();
        GD07.painter.advance();
    }


    //GD04.paint(context);
    //GD05.paint(context);
    //GD06.paint(context);
    //GD07.paint(context);
    SC01.paint(context);
    SC02.paint(context);
    SC03.paint(context);
    GD01.paint(context);
    GD02.paint(context);
    GD03.paint(context);
    drawobjects();
    window.setTimeout(animate, 50);
}
var paused = false,
    cells = [
        {x: 752, y: 600, velocityX: 2, velocityY: 0},
        {x: 752, y: 523, velocityX: 2, velocityY: 0},
        {x: 1037, y: 523, velocityX: 0, velocityY: 3},
        {x: 1037, y: 230, velocityX: 0, velocityY: 3}
    ],
    cells1 = [
        {x: 836, y: 586, velocityX: 1, velocityY: 0},
        {x: 951, y: 586, velocityX: 0, velocityY: 3}
    ],
    cells2 = [
        {x: 1136, y: 586, velocityX: 1, velocityY: 0},
        {x: 1247, y: 586, velocityX: 1, velocityY: 1}
    ],
    cells3 = [
        {x: 847, y: 621, velocityX: 1, velocityY: 0},
        {x: 958, y: 621, velocityX: 1, velocityY: 1}
    ],
    cells4 = [
        {x: 1270, y: 500, velocityX: 1, velocityY: 0},
        {x: 1341, y: 500, velocityX: 1, velocityY: 1},
        {x: 1341, y: 10, velocityX: 0, velocityY: 1}
    ],
    cells5 = [
        {x: 1270, y: 500, velocityX: 1, velocityY: 0},
        {x: 1341, y: 500, velocityX: 1, velocityY: 1},
        {x: 1341, y: 355, velocityX: 0, velocityY: 1},
        {x: 1490, y: 355, velocityX: 0, velocityY: 1}
    ],
    cells6 = [
        {x: 1270, y: 500, velocityX: 1, velocityY: 0},
        {x: 1341, y: 500, velocityX: 1, velocityY: 1},
        {x: 1341, y: 460, velocityX: 0, velocityY: 1},
        {x: 1490, y: 460, velocityX: 0, velocityY: 1}
    ],

    GD07 = new Sprite("GD07", new GDpainter(cells6)),
    GD06 = new Sprite("GD06", new GDpainter(cells5)),
    GD05 = new Sprite("GD05", new GDpainter(cells4)),
    GD04 = new Sprite("GD04", new GDpainter(cells3)),
    GD03 = new Sprite("GD03", new GDpainter(cells2)),
    GD02 = new Sprite("GD02", new GDpainter(cells1)),
    GD01 = new Sprite("GD01", new GDpainter(cells)),
    data_SC01 = {
        speed: 0.5,
        width: 175,
        height: 47,
        readout: "readout_SC1"
    },
    SC01 = new Sprite("SC01", new SCpainter(data_SC01)),
    data_SC02 = {
        speed: 0.5,
        width: 150,
        height: 483,
        readout: "readout_SC2"
    },
    SC02 = new Sprite("SC02", new SCpainter(data_SC02)),
    data_SC03={
        speed:0.5,
        width:121,
        height:461,
        readout:"readout_SC3"
    },
    SC03= new Sprite("SC03",new SCpainter(data_SC03)),
    data_ZM02 = {
        resource: "image/drain.png"
    },
    data_FlowMeter01 = {
        resource: "image/flow.png"
    },
    FlowMeter01 = new Sprite("FlowMeter01", new ZMpainter(data_FlowMeter01)),
    data_FlowMeter02 = {
        resource: "image/flow.png"
    },
    FlowMeter02 = new Sprite("FlowMeter02", new ZMpainter(data_FlowMeter02)),
    ZM02 = new Sprite("ZM02", new ZMpainter(data_ZM02));
data_ZM01 = {
    resource: "image/flow.png"
},
    ZM01 = new Sprite("ZM01", new ZMpainter(data_ZM01));
function drawImg() {
    context.drawImage(pic_QS, 0, 0, 1600, 753);
}
function drawobjects() {
    //ZM01.paint(context);
    //ZM02.paint(context);
    //FlowMeter01.paint(context);
    //FlowMeter02.paint(context);
    //ZM01.paint(context);
}
//function drawObject() {
//    image = new Image();
//    image.src = "image/flow.png";
//    image.onload = function (e) {
//        context.drawImage(image, 78, 50, 80, 107);
//    }
//    image2 = new Image();
//    image2.src = "image/drain.png";
//    image2.onload = function (e) {
//        context.drawImage(image2, 136, 281, 59, 50);
//    }
//    image1 = new Image();
//    image1.src = "image/flow.png";
//    image1.onload = function (e) {
//        context.drawImage(image1, 78, 180, 80, 107);
//    }
//
//    image3 = new Image();
//    image3.src = "image/drain.png";
//    image3.onload = function (e) {
//        context.drawImage(image3, 136, 500, 59, 50);
//    }
//    image4 = new Image();
//    image4.src = "image/drain.png";
//    image4.onload = function (e) {
//        context.drawImage(image4, 700, 211, 59, 50);
//    }
//    image5 = new Image();
//    image5.src = "image/drain.png";
//    image5.onload = function (e) {
//        context.drawImage(image5, 700, 524, 59, 50);
//    }
//    image6 = new Image();
//    image6.src = "image/drain.png";
//    image6.onload = function (e) {
//        context.drawImage(image6, 1067, 320, 59, 50);
//    }
//    image7 = new Image();
//    image7.src = "image/drain.png";
//    image7.onload = function (e) {
//        context.drawImage(image7, 1067, 476, 59, 50);
//    }
//    image8 = new Image();
//    image8.src = "image/drain_r.png";
//    image8.onload = function (e) {
//        context.drawImage(image8, 1000, 163, 59, 50);
//    }
//    image9 = new Image();
//    image9.src = "image/drain_r.png";
//    image9.onload = function (e) {
//        context.drawImage(image9, 1000, 397, 59, 50);
//    }
//    image10 = new Image();
//    image10.src = "image/液位.png";
//
//    context.drawImage(image10, 282, 489, 100, 80);
//
//    image11 = new Image();
//    image11.src = "image/液位.png";
//    image11.onload = function (e) {
//        context.drawImage(image11, 282, 249, 100, 80);
//    }
//    image12 = new Image();
//    image12.src = "image/提升泵2.png";
//    image12.onload = function (e) {
//        context.drawImage(image12, 558, 212, 58, 84);
//    }
//    image13 = new Image();
//    image13.src = "image/提升泵2.png";
//    image13.onload = function (e) {
//        context.drawImage(image13, 558, 302, 58, 84);
//    }
//    image14 = new Image();
//    image14.src = "image/提升泵2.png";
//    image14.onload = function (e) {
//        context.drawImage(image14, 558, 392, 58, 84);
//    }
//    image15 = new Image();
//    image15.src = "image/提升泵2.png";
//}
//流量计01的位置和宽高
FlowMeter01.left = 324;
FlowMeter01.top = 86;
FlowMeter01.width = 100;
FlowMeter01.height = 60;
//流量计02的位置和宽高
FlowMeter02.left = 324;
FlowMeter02.top = 300;
FlowMeter02.width = 100;
FlowMeter02.height = 70;
//闸门01的位置和宽高
ZM01.left = 344;
ZM01.top = 86;
ZM01.width = 59;
ZM01.height = 50;
//闸门02的位置和宽高
ZM02.left = 344;
ZM02.top = 318;
ZM02.width = 59;
ZM02.height = 50;
//水池01的位置
SC01.left = 640;
SC01.top = 571;

//水池01的位置
SC02.left = 491;
SC02.top = 135;
//水池03的位置
SC03.left=975;
SC03.top=134;
//管道01的位置
GD01.top = 100;
GD01.left = 100;