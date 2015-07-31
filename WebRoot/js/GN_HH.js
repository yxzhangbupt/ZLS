/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function(){
    //var canvas=oCanvas.create({
    //    canvas:"#canvas_test",
    //    background:"#eee"
    //});
    //var button_keep=canvas.display.rectangle({
    //        x:30,
    //        y:80,
    //        width:200,
    //        height:150,
    //        fill:"#000"
    //    }),
    //    button_clear=button_keep.clone({
    //        x:250
    //    });
    //canvas.addChild(button_keep);
    //canvas.addChild(button_clear);
    //button_keep.bind("click tap", function () {
    //    canvas.clear();
    //});
    //button_clear.dragAndDrop();
    //

    //水池的构造器，上升型
    var constructor = function (settings, core) {

        return oCanvas.extend({
            core: core,
            shapeType: "rectangular",

            init: function () {

            },
            advance: function () {
                if(this.height_now<this.height){
                    this.height_now+=1;
                }
                else{
                    this.height_now=0;
                }
            },
            draw: function () {
                var canvas = this.core.canvas,
                    origin = this.getOrigin(),
                    x = this.abs_x - origin.x,
                    y = this.abs_y - origin.y;

                canvas.beginPath();

                if (this.fill !== "") {
                    canvas.fillStyle = this.fill;
                    canvas.fillRect(x, y+this.height-this.height_now, this.width, this.height_now);
                }
                canvas.strokeStyle = this.strokeColor;
                canvas.lineWidth = this.strokeWidth;
                canvas.strokeRect(x,y,this.width,this.height);
                //
                //if (this.strokeWidth > 0) {
//                    canvas.strokeStyle = this.strokeColor;
//                    canvas.lineWidth = this.strokeWidth;
                //    canvas.strokeRect(x, y+this.height-this.height_now, this.width, this.height_now);
                //}
                canvas.stroke();
                canvas.closePath();
            }
        }, settings);
    };
//水池的构造函数
    oCanvas.registerDisplayObject("SC", constructor, "init");
//创建画布
    var canvas = oCanvas.create({
        canvas: "#canvas_HH",
        background: "#ccc",
        fps:1
    });
    var bg=canvas.display.image({
        x:0,
        y:0,
        image:"./image/111.png"
    });
    canvas.addChild(bg);
//    var bg=canvas.display.image({
//        x:0,
//        y:0,
//        image:"../image/m00005.png"
//    });
//    canvas.addChild(bg);
//创建堰0A
    var HH1_Y0A = canvas.display.SC({
        x: 266,
        y: 137,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH1_Y0A);
//创建堰0A
    var HH1_Y0B = canvas.display.SC({
        x: 353,
        y: 137,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH1_Y0B);//创建堰0A
    var HH1_Y01 = canvas.display.SC({
        x: 266,
        y: 276,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH1_Y01);//创建堰0A
    var HH1_Y02 = canvas.display.SC({
        x: 353,
        y: 276,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH1_Y02);//创建堰0A
    var HH2_Y01 = canvas.display.SC({
        x: 931,
        y: 441,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH2_Y01);//创建堰0A
        var HH2_Y02 = canvas.display.SC({
        x: 931,
        y: 581,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HH2_Y02);
    var flag = 1;
    var step = 5;
//    $("#btn_start").toggle(
//        function () {
//            flag = 0;
//            },
//        function() {
//            flag = 1;
//        });
    $("button#btn_start").click(function(){
        if(flag==1){
            flag=0;
              $(this).text("开始演示");
            }

        else{
            flag=1;
            $(this).text("暂停演示");}
    });
    $("#btn_fast").click(function(){
        step += 5;
    });
    $("#btn_slow").click(function(){
        step -= 5;
    });
    $("#btn_zero").click(function(){
        step = 5;
    });
    $("#btn_reset").click(function(){
        t=0;
        flag=0;
        step = 5;
        $("#btn_start").text("开始演示");
        document.cookie="time=0";
    });
    $("#btn_last").click(function(){
        window.location.assign("./GN_getWater.html");
    });
    $("#btn_next").click(function(){
        window.location.assign("./GN_JJ.html");
    });
    var strCookie =document.cookie;
    //将多cookie切割为多个名/值对
    var arrCookie=strCookie.split(";");
    var t;
    //遍历cookie数组，处理每个cookie对
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        //找到名称为time的cookie，并返回它的值
        if("time"==arr[0]){
           	t = parseFloat(arr[1]);
           	break;
        }
    }
    canvas.setLoop(function () {
//        var testCookie =document.cookie;
//        document.getElementById("test1").innerHTML="cookies:"+testCookie;
        document.getElementById("SimTime").innerHTML="仿真时间: "+t+"秒  "+"step:"+step+"秒";
        //Y0A
        $.post("./updateYOnload.jsp",{id:"MTG_HH1_Y0A",t:t},function(Onload){
//        	alert(data);
            HH1_Y0A.height_now=parseFloat(Onload);
            document.getElementById("readout_HH1_YA_Onload").innerHTML="堰A负载："+Onload+"%";
            if(Onload>85){
                HH1_Y0A.fill="#0767c8";
            }
            else{
                HH1_Y0A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH1_Y0A",t:t},function(VNow) {
            document.getElementById("readout_HH1_YA_Vnow").innerHTML = "堰A水量：" +VNow+"立方米";
        });
        //Y0B
        $.post("./updateYOnload.jsp",{id:"MTG_HH1_Y0B",t:t},function(Onload){
//        	alert(data);
            HH1_Y0B.height_now=parseFloat(Onload);
            document.getElementById("readout_HH1_YB_Onload").innerHTML="堰B负载："+Onload+"%";
            if(Onload>85){
                HH1_Y0B.fill="#0767c8";
            }
            else{
                HH1_Y0B.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH1_Y0B",t:t},function(VNow) {
            document.getElementById("readout_HH1_YB_Vnow").innerHTML = "堰B水量：" +VNow+"立方米";
        });
        //HH1_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_HH1_Y01",t:t},function(Onload){
//        	alert(data);
            HH1_Y01.height_now=parseFloat(Onload);
            document.getElementById("readout_HH1_Y1_Onload").innerHTML="井1堰1负载："+Onload+"%";
            if(Onload>85){
                HH1_Y01.fill="#0767c8";
            }
            else{
                HH1_Y01.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH1_Y01",t:t},function(VNow) {
            document.getElementById("readout_HH1_Y1_Vnow").innerHTML = "井1堰1水量：" +VNow+"立方米";
        });
        //HH1_Y2
        $.post("./updateYOnload.jsp",{id:"MTG_HH1_Y02",t:t},function(Onload){
//        	alert(data);
            HH1_Y02.height_now=parseFloat(Onload);
            document.getElementById("readout_HH1_Y2_Onload").innerHTML="井1堰2负载："+Onload+"%";
            if(Onload>85){
                HH1_Y02.fill="#0767c8";
            }
            else{
                HH1_Y02.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH1_Y02",t:t},function(VNow) {
            document.getElementById("readout_HH1_Y2_Vnow").innerHTML = "井1堰2水量：" +VNow+"立方米";
        });
        //HH2_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_HH2_Y01",t:t},function(Onload){//注意，此处应为id:"MTG_HH2_Y01"
//        	alert(data);
            HH2_Y01.height_now=parseFloat(Onload);
            document.getElementById("readout_HH2_Y1_Onload").innerHTML="井2堰1负载："+Onload+"%";
            if(Onload>85){
                HH2_Y01.fill="#0767c8";
            }
            else{
                HH2_Y01.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH2_Y01",t:t},function(VNow) {
            document.getElementById("readout_HH2_Y1_Vnow").innerHTML = "井2堰1水量：" +VNow+"立方米";
        });
        //HH2_Y2
        $.post("./updateYOnload.jsp",{id:"MTG_HH2_Y02",t:t},function(Onload){
//        	alert(data);
            HH2_Y02.height_now=parseFloat(Onload);
            document.getElementById("readout_HH2_Y2_Onload").innerHTML="井2堰2负载："+Onload+"%";
            if(Onload>85){
                HH2_Y02.fill="#0767c8";
            }
            else{
                HH2_Y02.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_HH2_Y02",t:t},function(VNow) {
            document.getElementById("readout_HH2_Y2_Vnow").innerHTML = "井2堰2水量：" +VNow+"立方米";
        });
        if(flag==1){
            t+=step;
        }
        else{
            t+=0;
        }
        var writeCookie="time="+t;
        document.cookie=writeCookie;
        canvas.redraw();
    }).start();
});
