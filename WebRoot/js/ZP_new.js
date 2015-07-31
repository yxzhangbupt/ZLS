/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

//创建画布
    var canvas = oCanvas.create({
        canvas: "#canvas_ZP_new",
        background: "#ccc",
        fps: 60
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/waterLine.png"
    });
    canvas.addChild(bg);


    var SC01 = canvas.display.SC_show({
        x: 124, y: 349,
        Width: 80, Height: 238,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    canvas.addChild(SC01);
    var SC02 = canvas.display.SC_show({
        x: 208, y: 518,
        Width: 170, Height: 69,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    canvas.addChild(SC02);
   
    var SC03 = canvas.display.SC_show({
        x: 471, y: 286,
        Width: 132, Height:277,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    canvas.addChild(SC03);
    
    var SC04 = canvas.display.SC_show({
        x: 710, y: 260,
        Width: 128, Height:306,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    canvas.addChild(SC04);
    
    var SC05 = canvas.display.SC_show({
        x: 851, y: 260,
        Width: 67, Height: 129,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    canvas.addChild(SC05);
    
    var SC06 = canvas.display.SC_show({
        x: 1226,
        y: 247,
        Width: 510,
        Height: 412,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 21, y_t: 0},
            {x_t: 135, y_t: 0},
            {x_t: 135, y_t: 200},
            {x_t: 0, y_t: 324},
            {x_t: 255, y_t: 412},
            {x_t: 510, y_t: 324},
            {x_t: 370, y_t: 200},
            {x_t: 370, y_t: 0}
        ],
        t: 1405,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC06);
    
    var SC07 = canvas.display.SC_show({
        x: 1103,
        y: 266,
        Width: 210,
        Height: 270,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 0, y_t: 0},
            {x_t: 0, y_t: 53},
            {x_t: 132, y_t: 268},
            {x_t: 204, y_t: 202},
            {x_t: 204, y_t: 0}
        ],
        t: 1405,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC07);
    
    var SC08 = canvas.display.SC_show({
        x: 1654,
        y: 273,
        Width: 510,
        Height: 412,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 0, y_t: 0},
            {x_t: 0, y_t: 199},
            {x_t: 75, y_t: 266},
            {x_t: 208, y_t: 38},
            {x_t: 208, y_t: 0}
        ],
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC08);
    
    var SC09 = canvas.display.SC_show({
        x: 2081,
        y: 352,
        Width: 68,
        Height: 27,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC09);
    
    var SC10 = canvas.display.SC_show({
        x: 2151,
        y: 352,
        Width: 18,
        Height: 27,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC10);
    
    var SC11 = canvas.display.SC_show({
        x: 2182,
        y: 348,
        Width: 297,
        Height: 134,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC11);
    
    var SC12 = canvas.display.SC_show({
        x: 2848,
        y: 565,
        Width: 199,
        Height: 57,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC12);
    
    var SC13 = canvas.display.SC_show({
        x: 3259,
        y: 494,
        Width: 159,
        Height: 99,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC13);
    
    var SC14 = canvas.display.SC_show({
        x: 3602,
        y: 435,
        Width: 316,
        Height: 154,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC14);
    
    var SC15 = canvas.display.SC_show({
        x: 4025,
        y: 462,
        Width: 295,
        Height: 131,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC15);
    

    var GD01 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 0 ,y_cell: 552},
            {x_cell: 140, y_cell: 552}
        ],  //拐点数组
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //当前数组索引
        Speed: 2,           //水流速度
        GDwidth: 20,          //管道宽度
        LineHeight: 30,       //线条的长度
        x_now: 0,        //当前绘制点的位置x
        y_now: 0,        //当前绘制点的位置y
        firstX: 0,       //第一个水流效果线段的起始坐标X
        firstY: 0,       //第一个水流效果线段的其实坐标Y
        beginHeight: 0,       //第一段管道第一个水流效果线段的长度
        endHeight: 0,     //第一段管道最后一个水流效果线段的长度
        legacyHeight: 0,
        paused: 1,              //是否暂停
        full:0                      //管道的水是否已充满
    });
    canvas.addChild(GD01);

    var GD02 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 322, y_cell: 515},
            {x_cell: 324, y_cell: 484},
            {x_cell: 542, y_cell: 481},
            {x_cell: 542, y_cell: 252}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD02);
    
    var GD03 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 606, y_cell: 540},
            {x_cell: 746, y_cell: 540},
            {x_cell: 746, y_cell: 493}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD03);
    
    var GD04 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 887, y_cell: 288},
            {x_cell: 887, y_cell: 519},
            {x_cell: 899, y_cell: 528},
            {x_cell: 1099, y_cell: 530},
            {x_cell: 1183, y_cell: 462},
            {x_cell: 1345, y_cell: 462}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD04);
    
    var GD05 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1899, y_cell: 304},
            {x_cell: 1899, y_cell: 364},
            {x_cell: 2081, y_cell: 364}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD05);
    
    var GD06 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 2655, y_cell: 522},
            {x_cell: 2696, y_cell: 522},
            {x_cell: 2715, y_cell: 538},
            {x_cell: 2848, y_cell: 538}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD06);
    
    var GD07 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 3044, y_cell: 561},
            {x_cell: 3219, y_cell: 561}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD07);
    
    var GD08 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 3435, y_cell: 493},
            {x_cell: 3435, y_cell: 548},
            {x_cell: 3499, y_cell: 548},
            {x_cell: 3594, y_cell: 653},
            {x_cell: 3837, y_cell: 653},
            {x_cell: 3837, y_cell: 592}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD08);
    
    var GD09 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 3918, y_cell: 565},
            {x_cell: 4027, y_cell: 565}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD09);
    
    var GD10 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 4323, y_cell: 570},
            {x_cell: 4374, y_cell: 570}
        ],  //拐点数组
        deta: 1,
        deta_x: 1, deta_y: 0,
        flag_x: 1, flag_y: 0,
        cellIndex: 0,
        Speed: 2,
        GDwidth: 20,
        LineHeight: 30,
        x_now: 0,  y_now: 0,
        firstX: 0, firstY: 0,
        beginHeight: 0, endHeight: 0,
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD10);
    
    
    canvas.setLoop(function () {
        //$.ajax({
        //    url:"update.jsp",
        //    method:"POST",
        //    data:{ data:"Onload",db:"PoolState",PoolID:"MTG_QS_SC01",t:SC01.t},
        //    success:function(da){
        //        var data=eval(da);
        //        SC01.height_now = 270 * parseFloat(data);
        //        if (SC01.t > 2000) {
        //            SC01.t = 0;
        //        }
        //        else {
        //            SC01.t +=5;
        //        }
        //    }
        //});
        GD01.advance();
        GD02.advance();
        GD03.advance();
        GD04.advance();
        GD05.advance();
        GD06.advance();
        GD07.advance();
        GD08.advance();
        GD09.advance();
        GD10.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        SC04.advance();
        SC05.advance();
        SC06.advance();
        SC07.advance();
        SC08.advance();
        SC09.advance();
        SC10.advance();
        SC11.advance();
        SC12.advance();
        SC13.advance();
        SC14.advance();
        SC15.advance();
        

        if(GD01.full==1){
            SC01.start = 1;
        }
        if(SC01.full==1){
            SC02.start = 1;
        }
        if(SC02.full==1){
            GD02.paused = 1;
        }
        if(GD02.full==1) {
            SC03.start = 1;
        }
        if(SC03.full==1) {
            GD03.paused = 1;
        }        
        if(GD03.full==1) {
            SC04.start = 1;
        }
        if(SC04.full==1) {
            SC05.start = 1;
        }
        if(SC05.full==1) {
            GD04.paused = 1;
        }
        if(GD04.full==1) {
            SC06.start = 1;
        }
        if(SC06.full==1) {
            SC07.start = 1;
            SC08.start = 1;
        }
        if(SC07.full==1 && SC08.full==1) {
            GD05.paused = 1;
        }
        if(GD05.full==1) {
            SC09.start = 1;
        }
        if(SC09.full==1) {
            SC10.start = 1;
        }
        if(SC10.full==1) {
            SC11.start = 1;
        }
        if(SC11.full==1) {
            GD06.paused = 1;
        }
        if(GD06.full==1) {
            SC12.start = 1;
        }
        if(SC12.full==1) {
            GD07.paused = 1;
        } 
        if(GD07.full==1) {
            SC13.start = 1;
        }
        if(SC13.full==1) {
            GD08.paused = 1;
        } 
        if(GD08.full==1) {
            SC14.start = 1;
        }
        if(SC14.full==1) {
            GD09.paused = 1;
        }
        if(GD09.full==1) {
            SC15.start = 1;
        }
        if(SC15.full==1) {
            GD10.paused = 1;
        }
        
        canvas.redraw();
    }).start();
    $("#btn_start").click(function(){
        GD01.paused=1;
    });
});