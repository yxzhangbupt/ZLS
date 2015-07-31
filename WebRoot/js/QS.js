/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {

//创建画布
    var canvas = oCanvas.create({
        canvas: "#canvas_QS",
        background: "#ccc",
        fps: 15
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/QS.png"
    });
    canvas.addChild(bg);
    //创建水池01
    var SC01 = canvas.display.SC({
        x: 307,
        y: 287,
        Width: 182,
        Height: 168,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee"
    });
    canvas.addChild(SC01);
    
    var SC02 = canvas.display.SC({
        x: 307,
        y: 470,
        Width: 182,
        Height: 168,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee"
    });
    canvas.addChild(SC02);
    
    var SC03 = canvas.display.SC({
        x: 850,
        y: 288,
        Width: 148,
        Height: 163,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee"
    });
    canvas.addChild(SC03);
    
    var SC04 = canvas.display.SC({
        x: 850,
        y: 474,
        Width: 148,
        Height: 163,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee"
    });
    canvas.addChild(SC04);
    

    var GD01 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 124, y_cell: 0},
            {x_cell: 124, y_cell: 258},
            {x_cell: 218, y_cell: 258},
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
        paused: 1
    });
    canvas.addChild(GD01);

    var GD02 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 218, y_cell: 0},
            {x_cell: 218, y_cell: 266},
            {x_cell: 218, y_cell: 360},
            {x_cell: 218, y_cell: 520},
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
        paused: 1
    });
    canvas.addChild(GD02);

    var GD03 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 218, y_cell: 360},
            {x_cell: 284, y_cell: 360}

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
        paused: 1
    });
    canvas.addChild(GD03);

    var GD04 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 218, y_cell: 523},
            {x_cell: 284, y_cell: 523}

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
        paused: 1
    });
    canvas.addChild(GD04);

    var GD05 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 702, y_cell: 400},
            {x_cell: 930, y_cell: 400}

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
        paused: 1
    });
    canvas.addChild(GD05);

    var GD06 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 702, y_cell: 517},
            {x_cell: 930, y_cell: 517}

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
        paused: 1
    });
    canvas.addChild(GD06);

    var GD07 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1021, y_cell: 345},
            {x_cell: 1065, y_cell: 345},
            {x_cell: 1065, y_cell: 0}

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
        paused: 1
    });
    canvas.addChild(GD07);

    var GD08 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1021, y_cell: 566},
            {x_cell: 1065, y_cell: 566},
            {x_cell: 1065, y_cell: 345}

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
        paused: 1
    });
    canvas.addChild(GD08);
    
    var GD09 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1065, y_cell: 433},
            {x_cell: 1177, y_cell: 433}

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
        paused: 1
    });
    canvas.addChild(GD09);
    
    var GD10 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1065, y_cell: 521},
            {x_cell: 1177, y_cell: 521}

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
        paused: 1
    });
    canvas.addChild(GD10);

    canvas.setLoop(function () {
        $.ajax({
            url:"update_qs.jsp",
            method:"POST",
            data:{ data:"Onload",db:"PoolState",
            	PoolID1:"MTG_QS_SC01",t1:SC01.t,
            	PoolID2:"MTG_QS_SC02",t2:SC02.t,
            	PoolID3:"MTG_QS_Y01",t3:SC03.t,
            	PoolID4:"MTG_QS_Y02",t4:SC04.t},
            success:function(da){
                var data=eval('('+da+')');
               
                SC01.height_now = SC01.Height * parseFloat(data.Onload1) / 100.0;
                SC02.height_now = SC02.Height * parseFloat(data.Onload2) / 100.0;
                SC03.height_now = SC03.Height * parseFloat(data.Onload3) / 100.0;
                SC04.height_now = SC04.Height * parseFloat(data.Onload4) / 100.0;
                if (SC01.t > 2000) {
                    SC01.t = 0;
                }
                else {
                    SC01.t += 5;
                }
                
                if (SC02.t > 2000) {
                    SC02.t = 0;
                }
                else {
                    SC02.t += 5;
                }
                
                if (SC03.t > 2000) {
                    SC03.t = 0;
                }
                else {
                    SC03.t += 5;
                }
                
                if (SC04.t > 2000) {
                    SC04.t = 0;
                }
                else {
                    SC04.t += 5;
                }
            }
        });
      
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
        canvas.redraw();
    }).start();
    $("#btn_start").click(function () {

        if (GD02.paused == 1)
            GD02.paused = 0;
        else
            GD02.paused = 1;
    });
});
