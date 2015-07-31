/**
 * Created by Administrator on 2015/7/29.
 */
/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

//��������
    var canvas = oCanvas.create({
        canvas: "#canvas_ZP_old",
        background: "#ccc",
        fps: 60
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/waterline_old.png"
    });
    canvas.addChild(bg);

    var GD01 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 0 ,y_cell: 552},
            {x_cell: 35, y_cell: 552}
        ],  //�յ�����
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //��ǰ��������
        Speed: 2,           //ˮ���ٶ�
        GDwidth: 20,          //�ܵ����
        LineHeight: 30,       //�����ĳ���
        x_now: 0,        //��ǰ���Ƶ��λ��x
        y_now: 0,        //��ǰ���Ƶ��λ��y
        firstX: 0,       //��һ��ˮ��Ч���߶ε���ʼ���X
        firstY: 0,       //��һ��ˮ��Ч���߶ε���ʵ���Y
        beginHeight: 0,       //��һ�ιܵ���һ��ˮ��Ч���߶εĳ���
        endHeight: 0,     //��һ�ιܵ����һ��ˮ��Ч���߶εĳ���
        legacyHeight: 0,
        paused: 1,              //�Ƿ���ͣ
        full:0                      //�ܵ���ˮ�Ƿ��ѳ���
    });
    canvas.addChild(GD01);
    var SC01 = canvas.display.SC_show({
        x: 30,
        y: 353,
        Width: 93,
        Height: 234,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    SC01.bind("start",function(){
        this.start=1;
        canvas.redraw();
    });
    canvas.addChild(SC01);
    var SC02 = canvas.display.SC_show({
        x: 126,
        y: 514,
        Width: 164,
        Height: 76,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    SC02.bind("start",function(){
        this.start=1;
        canvas.redraw();
    });
    canvas.addChild(SC02);
    var SC03 = canvas.display.SC_show({
        x: 380,
        y: 297,
        Width: 133,
        Height: 259,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        start:0,
        full:0,
        fill: "#eee"
    });
    SC03.bind("start",function(){
        this.start=1;
        canvas.redraw();
    });
    canvas.addChild(SC03);
    var GD02 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 227, y_cell: 513},
            {x_cell: 227, y_cell: 484},
            {x_cell: 447, y_cell: 484},
            {x_cell: 447, y_cell: 253}
        ],  //�յ�����
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //��ǰ��������
        Speed: 2,           //ˮ���ٶ�
        GDwidth: 20,          //�ܵ����
        LineHeight: 30,       //�����ĳ���
        x_now: 0,        //��ǰ���Ƶ��λ��x
        y_now: 0,        //��ǰ���Ƶ��λ��y
        firstX: 0,       //��һ��ˮ��Ч���߶ε���ʼ���X
        firstY: 0,       //��һ��ˮ��Ч���߶ε���ʵ���Y
        beginHeight: 0,       //��һ�ιܵ���һ��ˮ��Ч���߶εĳ���
        endHeight: 0,     //��һ�ιܵ����һ��ˮ��Ч���߶εĳ���
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD02.bind("start",function(){
        this.paused=1;
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
        if(SC01.full!=1){
            SC01.advance();
        }
        else{
            SC02.trigger("start");
        }
        SC02.advance();
        SC03.advance();
        if(GD01.full==1){
            SC01.trigger("start");
        }
        if(SC02.full==1){
            GD02.trigger("start");
        }
        if(GD02.full==1){
            SC03.trigger("start");
        }
        canvas.redraw();
    }).start();
    $("#btn_start").click(function(){
        GD01.paused=1;
    });
});