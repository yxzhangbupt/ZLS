/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {

//��������
    var canvas = oCanvas.create({
        canvas: "#canvas_QS_zp",
        background: "#ccc",
        fps: 50
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/QS_v1.png"
    });
    canvas.addChild(bg);
    //����ˮ��01
    var SC01 = canvas.display.SC_show({
        x: 326,
        y: 500,
        Width: 153,
        Height: 140,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC01);
    
    var SC02 = canvas.display.SC_show({
        x: 489,
        y: 569,
        Width: 190,
        Height: 70,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC02);
    
    var SC03 = canvas.display.SC_show({
        x: 841,
        y: 219,
        Width: 142,
        Height: 393,
        height_now: 0,
        trail_flag: 0,
        t: 150,
        fill: "#eee",
        full:0,
        start:0
    });
    canvas.addChild(SC03);
    
    var GD01 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 241, y_cell: 587},
            {x_cell: 381, y_cell: 587}
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
        paused: 1,
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
            {x_cell: 597, y_cell: 600},
            {x_cell: 597, y_cell: 520},
            {x_cell: 905, y_cell: 520},
            {x_cell: 905, y_cell: 220},
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
    canvas.addChild(GD02);

    var GD03 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1007, y_cell: 587},
            {x_cell: 1146, y_cell: 587}

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
    canvas.addChild(GD03);

    canvas.setLoop(function () {
//        $.ajax({
//            url:"update_qs_zp.jsp",
//            method:"POST",
//            data:{ data:"Onload",db:"PoolState",
//            	PoolID1:"MTG_QS_SC01",t1:SC01.t,
//            	PoolID2:"MTG_QS_Y01",t2:SC03.t},
//
//            success:function(da){
//                var data=eval('('+da+')');
//               
//                SC01.height_now = SC01.Height * parseFloat(data.Onload1) / 100.0;
//                SC02.height_now = SC02.Height * parseFloat(data.Onload2) / 100.0;
//                SC03.height_now = SC03.Height * parseFloat(data.Onload3) / 100.0;
//
//                if (SC01.t > 2000) {
//                    SC01.t = 0;
//                }
//                else {
//                    SC01.t += 5;
//                }
//                
//                if (SC02.t > 2000) {
//                    SC02.t = 0;
//                }
//                else {
//                    SC02.t += 5;
//                }
//                
//                if (SC03.t > 1500) {
//                    SC03.t = 150;
//                }
//                else {
//                    SC03.t += 5;
//                }
//            }
//        });
      
        GD01.advance();
        SC01.advance();

        SC02.advance();

        GD02.advance();

        SC03.advance();

        GD03.advance();

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
        canvas.redraw();
    }).start();
    
    $("#btn_start").click(function () {

        if (GD02.paused == 1)
            GD02.paused = 0;
        else
            GD02.paused = 1;
    });
});
