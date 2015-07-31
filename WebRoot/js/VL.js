/**
 * Created by Administrator on 2015/7/26.
 */

oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_VL",
        background: "#ccc",
        fps: 50
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/vl.png"
    });
    canvas.addChild(bg);

    var SC01 = canvas.display.SC_show({
        x: 145,
        y: 207,
        Width: 147,
        Height: 61,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        fill: "#966bd6",
        full:0,
        start:1
    });
    canvas.addChild(SC01);
    
    var SC02 = canvas.display.SC_show({
        x: 294,
        y: 207,
        Width: 35,
        Height: 61,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        fill: "#966bd6",
        full:0,
        start:0
    });
    canvas.addChild(SC02);
    
    var SC03 = canvas.display.SC_show({
        x: 338,
        y: 207,
        Width: 452,
        Height: 256,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        fill: "#966bd6",
        full:0,
        start:0
    });
    canvas.addChild(SC03);
    
    var fg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/vl.png"
    });
    canvas.addChild(fg);

    var GD01 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 788, y_cell: 448},
            {x_cell: 976, y_cell: 448},
            {x_cell: 1123, y_cell: 448}

        ],  //拐点数组
        cellIndex: 0,         //当前数组索引
        Speed: 2,           //水流速度
        GDwidth: 20,          //管道宽度
        LineHeight: 30,       //线条的长??
        x_now: 0,        //当前绘制点的位置x
        y_now: 0,        //当前绘制点的位置y
        firstX: 0,       //第一个水流效果线段的起始坐标X
        firstY: 0,       //第一个水流效果线段的其实坐标Y
        beginHeight: 0,       //第一段管道第??个水流效果线段的长度
        endHeight: 0,     //第一段管道最后一个水流效果线段的长度
        paused: 0,
        full:0
    });
    canvas.addChild(GD01);

    var GD02 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 788, y_cell: 448},
            {x_cell: 976, y_cell: 448},
            {x_cell: 976, y_cell: 338},
            {x_cell: 1123, y_cell: 338}

        ],  //拐点数组
        cellIndex: 0,         //当前数组索引
        Speed: 2,           //水流速度
        GDwidth: 20,          //管道宽度
        LineHeight: 30,       //线条的长??
        x_now: 0,        //当前绘制点的位置x
        y_now: 0,        //当前绘制点的位置y
        firstX: 0,       //第一个水流效果线段的起始坐标X
        firstY: 0,       //第一个水流效果线段的其实坐标Y
        beginHeight: 0,       //第一段管道第??个水流效果线段的长度
        endHeight: 0,     //第一段管道最后一个水流效果线段的长度
        paused: 0,
        full:0
    });
    canvas.addChild(GD02);

//    var fg1 = canvas.display.image({
//        x: 0,
//        y: 0,
//        image: "../image/JJC_bg1.png"
//    });
//    canvas.addChild(fg1);
    canvas.setLoop(function () {
//        $.ajax({
//            url:"update_vl.jsp",
//            method:"POST",
//            data:{ data:"Onload",db:"PoolState",PoolID:"MTG_VL_SC01",t:SC01.t},
//            success:function(da){
//            	var data=eval('('+da+')');
//                SC01.height_now = SC01.Height * parseFloat(data.Onload1) / 100.0;
//                SC02.height_now = SC02.Height * parseFloat(data.Onload2) / 100.0;
//                SC03.height_now = SC03.Height * parseFloat(data.Onload3) / 100.0;
//                
//                if (SC01.t > 8170) {
//                    SC01.t = 7540;
//                }
//                else {
//                    SC01.t += 5;
//                }
//            }
//        });
    	
        GD01.advance();
        GD02.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        
        if(SC01.full==1){
        	SC02.start = 1;
        }
        if(SC02.full==1){
        	SC03.start = 1;
        }
        if(SC03.full==1){
        	GD01.paused = 1;
        	GD02.paused = 1;
        }

        
        
        canvas.redraw();
    }).start();

});
