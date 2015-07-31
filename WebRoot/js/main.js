/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

//????????
    var canvas = oCanvas.create({
        canvas: "#canvas_main",
        background: "#ccc",
        fps: 60
    });
    //?????
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/main/main.jpg"
    });
    canvas.addChild(bg);
    //???¡Â??????
    var img1=canvas.display.image({
        x:705,
        y:89,
        image:"image/main/up1.png"
    });
    canvas.addChild(img1);
    img1.bind("click",function(){
       window.location.href="QS.html";
    });
    img1.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        $("#name_QS").css("display","inline");
        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        $("#name_QS").css("display","none");
    }).bind("flash",function(){
        $("#name_QS").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QS").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QS").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QS").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QS").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD01.trigger("start");
    });
    //????????
    var img2=canvas.display.image({
        x:833,
        y:388,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
    img2.bind("click",function(){
        window.location.href="JJC.html";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        $("#name_JJC1").css("display","inline");
        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        $("#name_JJC1").css("display","none");
    }).bind("flash",function(){
        $("#name_JJC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC1").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD07.trigger("start");
    });
    //???????????
    var img21=img2.clone({
        x:1042,
        y:391
    });
    canvas.addChild(img21);
    img21.bind("click",function(){
        window.location.href="JJC.html";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        $("#name_JJC2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        $("#name_JJC2").css("display","none");
    }).bind("flash",function(){
        $("#name_JJC2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC2").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD08.trigger("start");
    });
    var img22=img2.clone({
        x:1133,
        y:565
    });
    canvas.addChild(img22);
    img22.bind("click",function(){
        window.location.href="JJC.html";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        $("#name_JJC3").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        $("#name_JJC3").css("display","none");
    }).bind("flash",function(){
        $("#name_JJC3").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC3").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC3").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_JJC3").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_JJC3").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD09.trigger("start");
    });
    //V?????????
    var img3=canvas.display.image({
        x:852,
        y:651,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
    img3.bind("click",function(){
        window.location.href="VL.html";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        $("#name_VL").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        $("#name_VL").css("display","none");
   
    }).bind("flash",function(){
        $("#name_VL").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_VL").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_VL").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_Vl").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_Vl").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD11.trigger("start");
    });

    //?????????
    var img4=canvas.display.image({
        x:982,
        y:379,
        image:"image/main/up5.png"
    });
    canvas.addChild(img4);
    img4.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_HHJ").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_HHJ").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_HHJ").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HHJ").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HHJ").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HHJ").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HHJ").animate({
            height:'200px',opacity:'1'},'fast');
        img4.unbind("flash");

        GD05.trigger("start");
    });
    //???????
    var img5=canvas.display.image({
        x:811,
        y:562,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    img5.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_HX").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_HX").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_HX").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HX").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HX").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HX").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HX").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD10.trigger("start");
    });
    //?????
    var img6=canvas.display.image({
        x:289,
        y:479,
        image:"image/main/41.png"
    });
    canvas.addChild(img6);
    img6.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_QSC1").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_QSC1").css("display","none");
        canvas.mouse.cursor("default");
    });
    var img61=canvas.display.image({
        x:283,
        y:305,
        image:"image/main/21.png"
    }).bind("flash",function(){
        $("#name_QSC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC1").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");
    });
    canvas.addChild(img61);
    img61.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_QSC2").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_QSC2").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_QSC2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC2").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");
    });
    var img62=canvas.display.image({
        x:475,
        y:301,
        image:"image/main/21.png"
    });
    canvas.addChild(img62);
    img62.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_QSC3").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_QSC3").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_QSC3").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC3").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC3").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC3").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC3").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");
    });
    var img63=canvas.display.image({
        x:479,
        y:477,
        image:"image/main/3.png"
    });
    canvas.addChild(img63);
    img63.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_QSC4").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_QSC4").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_QSC4").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC4").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC4").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QSC4").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QSC4").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");
    });

    var img7=canvas.display.image({
        x:864,
        y:18,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
    img7.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_YC").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_YC").css("display","none");
        canvas.mouse.cursor("default");
    });

    var img8=canvas.display.image({
        x:384,
        y:656,
        image:"image/main/tc.png"
    });
    canvas.addChild(img8);
    img8.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_TC").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_TC").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_TC").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_TC").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_TC").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_TC").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_TC").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD14.trigger("start");
        GD15.trigger("start");
    });

    var img9=canvas.display.image({
        x:640,
        y:654,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
    img9.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        $("#name_CY").css("display","inline");
    }).bind("mouseleave",function(){
        $("#name_CY").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_CY").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_CY").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_CY").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_CY").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_CY").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");

        GD12.trigger("start");
        GD13.trigger("start");
    });

    //???
    var GD00 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 734 ,y_cell: 20},
            {x_cell: 734, y_cell: 93}
        ],  //???????
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 1,              //??????
        full:0                      //??????????????
    });
    canvas.addChild(GD00);

    var GD01 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 741 ,y_cell: 171},
            {x_cell: 741, y_cell: 271},
            {x_cell: 998, y_cell: 271}


        ],  //???????
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,              //??????
        full:0                      //??????????????
    });
    canvas.addChild(GD01)
    GD01.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
       this.paused=1;
        $("#name_QS").css("display","none");
    });

    var GD02 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 998, y_cell: 271},
            {x_cell: 1200, y_cell: 271},
            {x_cell: 1200, y_cell: 379}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD02.bind("start",function(){
        GD02.paused=1;
        canvas.redraw();
    });
    canvas.addChild(GD02);
    var GD03 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 998, y_cell: 271},
            {x_cell: 998, y_cell: 378}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD03.bind("start",function(){
        GD02.paused=1;
        canvas.redraw();
    });
    canvas.addChild(GD03);
    var GD04 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 979, y_cell: 392},
            {x_cell: 892, y_cell: 392}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
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
            {x_cell: 1026, y_cell: 392},
            {x_cell: 1096, y_cell: 392}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD05.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
        GD04.paused=1;
        GD06.paused=1;
    });
    canvas.addChild(GD05);

    var GD06 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1200, y_cell: 415},
            {x_cell: 1200, y_cell: 567}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD06.bind("start",function(){
        GD02.paused=1;
        canvas.redraw();
    });
    canvas.addChild(GD06);

    var GD07 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 892, y_cell: 514},
            {x_cell: 892, y_cell: 544},
            {x_cell: 784, y_cell: 544},
            {x_cell: 784, y_cell: 590},
            {x_cell: 812, y_cell: 590}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    canvas.addChild(GD07);
    GD07.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    var GD08 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1106, y_cell: 513},
            {x_cell: 1106, y_cell: 543},
            {x_cell: 997, y_cell: 543},
            {x_cell: 997, y_cell: 590},
            {x_cell: 965, y_cell: 590}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD08.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD08);

    var GD09 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1130, y_cell: 640},
            {x_cell: 937, y_cell: 640},
            {x_cell: 937, y_cell: 655}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD09.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD09);

    var GD10 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 878, y_cell: 620},
            {x_cell: 878, y_cell: 640},
            {x_cell: 659, y_cell: 640},
            {x_cell: 659, y_cell: 660}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD10.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD10);

    var GD11 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 810, y_cell: 685},
            {x_cell: 682, y_cell: 685}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD11.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD11);

    var GD12 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 639, y_cell: 675},
            {x_cell: 590, y_cell: 675}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD12.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD12);

    var GD13 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 661, y_cell: 714},
            {x_cell: 661, y_cell: 737},
            {x_cell: 430, y_cell: 737},
            {x_cell: 430, y_cell: 708}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD13.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD13);

    var GD14 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 431, y_cell: 661},
            {x_cell: 431, y_cell: 627},
            {x_cell: 410, y_cell: 627},
            {x_cell: 410, y_cell: 612}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD14.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD14);

    var GD15 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 531, y_cell: 662},
            {x_cell: 531, y_cell: 627},
            {x_cell: 410, y_cell: 627},
            {x_cell: 410, y_cell: 612}
        ],
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //???????????
        Speed: 2,           //??????
        GDwidth: 20,          //???????
        LineHeight: 30,       //?????????
        x_now: 0,        //?????????¦Ë??x
        y_now: 0,        //?????????¦Ë??y
        firstX: 0,       //????????§¹????¦Å???????X
        firstY: 0,       //????????§¹????¦Å???????Y
        beginHeight: 0,       //????¦É??????????§¹????¦Å????
        endHeight: 0,     //????¦É???????????§¹????¦Å?????
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD15.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD15);
    canvas.setLoop(function () {
        GD00.advance();
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
        GD11.advance();
        GD12.advance();
        GD13.advance();
        GD14.advance();
        GD15.advance();
        if(GD00.full==1){
            img1.trigger("flash");
        }
        if(GD01.full==1){
            GD02.paused=1;
            GD03.paused=1;
        }
        if(GD02.full==1){
            img4.trigger("flash");
        }
        if(GD06.full==1){
            img2.trigger("flash");
            img21.trigger("flash");
            img22.trigger("flash");
        }
        if(GD08.full==1)
        {
            img5.trigger("flash");
            img3.trigger("flash");
        }
        //if(GD09.full==1){
        //    img3.trigger("flash");
        //}
        if(GD10.full==1){
            img9.trigger("flash");
        }
        if(GD13.full==1){
            img8.trigger("flash");
        }
        if(GD15.full==1){
            img6.trigger("flash");
            img61.trigger("flash");
            img62.trigger("flash");
            img63.trigger("flash");
        }
        canvas.redraw();
    }).start();
    $("#btn_start").click(function(){
            if(this.value==1){
                this.innerText="ÔÝÍ£";
                this.value=0;
            }
            else{
                this.innerText="¿ªÊ¼";
                this.value=1;
            }
      }
    );




    function restart(){
        canvas.timeline.start();
    }
});