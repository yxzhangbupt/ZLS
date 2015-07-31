/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_JJC",
        background: "#ccc",
        fps: 50
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "./image/JJC_bg1.png"
    });
 
    var SC01 = canvas.display.SC_show({
        x: 368,
        y: 320,
        Width: 555,
        Height: 300,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 138, y_t: 0},
            {x_t: 414, y_t: 0},
            {x_t: 414, y_t: 87},
            {x_t: 552, y_t: 215},
            {x_t: 276, y_t: 297},
            {x_t: 0, y_t: 215},
            {x_t: 138, y_t: 87}
        ],
        t: 1405,
        fill: "#966bd6",
        full:0,
        start:0
    });
    canvas.addChild(SC01);

    var SC02 = canvas.display.SC_show({
        x: 208,
        y: 341,
        Width: 250,
        Height: 190,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 0, y_t: 24},
            {x_t: 0, y_t: 58},
            {x_t: 154, y_t: 186},
            {x_t: 246, y_t: 104},
            {x_t: 246, y_t: 0},
            {x_t: 36, y_t: 0},
            {x_t: 36, y_t: 23}
        ],
        t: 1405,
        fill: "#966bd6",
        full:0,
        start:0
    });
    canvas.addChild(SC02);

    var SC03 = canvas.display.SC_show({
        x: 830,
        y: 341,
        Width: 250,
        Height: 190,
        height_now: 0,
        trail_flag: 1,
        trail: [
            {x_t: 0, y_t: 0},
            {x_t: 0, y_t: 104},
            {x_t: 92, y_t: 186},
            {x_t: 244, y_t: 58},
            {x_t: 244, y_t: 24},
            {x_t: 212, y_t: 24},
            {x_t: 212, y_t: 0}
        ],
        t: 1405,
        fill: "#966bd6",
        full:0,
        start:0
    });
    canvas.addChild(SC03);
    canvas.addChild(bg);



//    var fg = canvas.display.image({
//        x: 0,
//        y: 0,
//        image: "image/JJC_bg1.png"
//    });
//    canvas.addChild(fg);
    
    var GD01 = canvas.display.GD1({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 125,y_cell: 508},
            {x_cell: 187, y_cell: 508},
            {x_cell: 256, y_cell: 443},
            {x_cell: 477, y_cell: 443}

        ],  //閹锋劗鍋ｉ弫鎵矋
        cellIndex: 0,         //瑜版挸澧犻弫鎵矋缁便垹绱�
        Speed: 2,           //濮樺瓨绁﹂柅鐔峰
        GDwidth: 20,          //缁狅繝浜剧�钘夊
        LineHeight: 30,       //缁炬寧娼惃鍕毐閿燂拷
        x_now: 0,        //瑜版挸澧犵紒妯哄煑閻愬湱娈戞担宥囩枂x
        y_now: 0,        //瑜版挸澧犵紒妯哄煑閻愬湱娈戞担宥囩枂y
        firstX: 0,       //缁楊兛绔存稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戠挧宄邦潗閸ф劖鐖
        firstY: 0,       //缁楊兛绔存稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戦崗璺虹杽閸ф劖鐖
        beginHeight: 0,       //缁楊兛绔村▓鐢殿吀闁挾顑囬敓锟芥稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戦梹鍨
        endHeight: 0,     //缁楊兛绔村▓鐢殿吀闁挻娓堕崥搴濈娑擃亝鎸夊ù浣规櫏閺嬫粎鍤庡▓鐢垫畱闂�灝瀹�
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
            {x_cell: 1103,y_cell: 380},
            {x_cell: 1103, y_cell: 500},
            {x_cell: 1118, y_cell: 520},
            {x_cell: 1209, y_cell: 520}

        ],  //閹锋劗鍋ｉ弫鎵矋
        cellIndex: 0,         //瑜版挸澧犻弫鎵矋缁便垹绱�
        Speed: 2,           //濮樺瓨绁﹂柅鐔峰
        GDwidth: 20,          //缁狅繝浜剧�钘夊
        LineHeight: 30,       //缁炬寧娼惃鍕毐閿燂拷
        x_now: 0,        //瑜版挸澧犵紒妯哄煑閻愬湱娈戞担宥囩枂x
        y_now: 0,        //瑜版挸澧犵紒妯哄煑閻愬湱娈戞担宥囩枂y
        firstX: 0,       //缁楊兛绔存稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戠挧宄邦潗閸ф劖鐖
        firstY: 0,       //缁楊兛绔存稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戦崗璺虹杽閸ф劖鐖
        beginHeight: 0,       //缁楊兛绔村▓鐢殿吀闁挾顑囬敓锟芥稉顏呮寜濞翠焦鏅ラ弸婊呭殠濞堢數娈戦梹鍨
        endHeight: 0,     //缁楊兛绔村▓鐢殿吀闁挻娓堕崥搴濈娑擃亝鎸夊ù浣规櫏閺嬫粎鍤庡▓鐢垫畱闂�灝瀹�
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
//            url:"update_jjc.jsp",
//            method:"POST",
//            data:{ data:"Onload",db:"YState",PoolID:"MTG_JJ1_Y01",t:SC01.t},
//            success:function(da){
//            	var data=eval('('+da+')');
//                SC01.height_now = SC01.Height * parseFloat(data.Onload1) / 100.0;
//                SC02.height_now = SC02.Height * parseFloat(data.Onload2) / 100.0;
//                SC03.height_now = SC03.Height * parseFloat(data.Onload3) / 100.0;
//                
//                if (SC01.t > 7600) {
//                    SC01.t = 1405;
//                } else {
//                    SC01.t += 10;
//                }
//                
//                if (SC02.t > 7600) {
//                    SC02.t = 1405;
//                } else {
//                    SC02.t += 10;
//                }
//                
//                if (SC03.t > 7600) {
//                    SC03.t = 1405;
//                } else {
//                    SC03.t += 10;
//                }
//            }
//        });
    	
        GD01.advance();
        GD02.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        
        if(GD01.full==1){
        	SC01.start = 1;
        }
        if(SC01.full==1){
        	SC02.start = 1;
        	SC03.start = 1;
        }
        if(SC02.full == 1 && SC03.full == 1){
        	GD02.paused = 1;
        }
        
        
        canvas.redraw();
    }).start();
});
