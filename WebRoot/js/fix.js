/**
 * Created by Administrator on 2015/7/30.
 */
/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

//创建画布
    var canvas = oCanvas.create({
        canvas: "#canvas_fix",
        background: "#ccc",
        fps: 15
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/fix.jpg"
    });
    canvas.addChild(bg);

    var GD01 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 736 ,y_cell: 168},
            {x_cell: 736, y_cell: 268},
            {x_cell: 906, y_cell: 268},
            {x_cell: 906, y_cell: 377},
            {x_cell: 816, y_cell: 377}

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
        paused: 0,              //是否暂停
        full:0                      //管道的水是否已充满
    });
    canvas.addChild(GD01);

    var GD02 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 600, y_cell: 100},
            {x_cell: 600, y_cell: 300},
            {x_cell: 600, y_cell: 500},
            {x_cell: 700, y_cell: 700},
            {x_cell: 900, y_cell: 700},
            {x_cell: 1100, y_cell: 500},
            {x_cell: 1100, y_cell: 100},
            {x_cell: 600, y_cell: 100}
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
        paused: 0,
        full:0
    });
    GD02.bind("start",function(){
        GD02.paused=1;
        canvas.redraw();
    });
    canvas.addChild(GD02);
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
        if(GD01.full==1){
            GD02.trigger("start");
        }
        canvas.redraw();
    }).start();
    $("#btn_start").click(function(){
        GD01.paused=1;
    });
});