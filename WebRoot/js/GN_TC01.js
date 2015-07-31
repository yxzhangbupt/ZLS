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

    //ˮ�صĹ�������������
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
//ˮ�صĹ��캯��
    oCanvas.registerDisplayObject("SC", constructor, "init");
//��������
    var canvas = oCanvas.create({
        canvas: "#canvas_TC",
        background: "#ccc",
        fps:1
    });
    var bg=canvas.display.image({
        x:0,
        y:0,
        image:"./image/TC.png"
    });
    canvas.addChild(bg);
//    var bg=canvas.display.image({
//        x:0,
//        y:0,
//        image:"../image/m00005.png"
//    });
//    canvas.addChild(bg);
    var TC01_Y01 = canvas.display.SC({
        x: 64,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y01);
    var TC01_Y02 = canvas.display.SC({
        x: 271,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y02);
    var TC01_Y03 = canvas.display.SC({
        x: 485,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y03);
    var TC01_Y04 = canvas.display.SC({
        x: 689,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y04);
    var TC01_Y05 = canvas.display.SC({
        x: 900,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y05);
	   var TC01_Y06 = canvas.display.SC({
        x: 1151,
        y: 245,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(TC01_Y06);
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
        t=0
        flag=0;
        step = 5;
        $("#btn_start").text("开始演示");
        document.cookie="time=0";
    });
    $("#btn_last").click(function(){
        window.location.assign("./GN_CY.html");
    });
    $("#btn_next").click(function(){
        window.location.assign("./GN_QingS.html");
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
        $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y01",t:t},function(Onload){
//        	alert(data);
            TC01_Y01.height_now=100*parseFloat(Onload);
            document.getElementById("readout_TC01_Y01_Onload").innerHTML="堰1负载"+Onload*100+"%";
            if(Onload>0.85){
                TC01_Y01.fill="#0767c8";
            }
            else{
                TC01_Y01.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_TC01_Y01",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y01_Vnow").innerHTML = "堰1水量" +VNow+"立方米";
        });
        $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y02",t:t},function(Onload){
//        	alert(data);
            TC01_Y02.height_now=parseFloat(Onload);
            document.getElementById("readout_TC01_Y02_Onload").innerHTML="堰2负载"+Onload+"%";
            if(Onload>85){
                TC01_Y02.fill="#0767c8";
            }
            else{
                TC01_Y02.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_TC01_Y02",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y02_Vnow").innerHTML = "堰2水量" +VNow+"立方米";
        });
        $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y03",t:t},function(Onload){
//        	alert(data);
            TC01_Y03.height_now=parseFloat(Onload);
            document.getElementById("readout_TC01_Y03_Onload").innerHTML="堰3负载"+Onload+"%";
            if(Onload>85){
                TC01_Y03.fill="#0767c8";
            }
            else{
                TC01_Y03.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_TC01_Y03",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y03_Vnow").innerHTML = "堰3水量" +VNow+"立方米";
        });
        $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y04",t:t},function(Onload){
//        	alert(data);
            TC01_Y04.height_now=parseFloat(Onload);
            document.getElementById("readout_TC01_Y04_Onload").innerHTML="堰4负载"+Onload+"%";
            if(Onload>85){
                TC01_Y04.fill="#0767c8";
            }
            else{
                TC01_Y04.fill="#43d9f9";
            }
        });
        $.post("./updatePoolVNow.jsp",{id:"MTG_TC01_Y04",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y04_Vnow").innerHTML = "堰4水量" +VNow+"立方米";
        });
        $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y05",t:t},function(Onload){
//        	alert(data);
            TC01_Y05.height_now=parseFloat(Onload);
            document.getElementById("readout_TC01_Y05_Onload").innerHTML="堰5负载"+Onload+"%";
            if(Onload>85){
                TC01_Y05.fill="#0767c8";
            }
            else{
                TC01_Y05.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_TC01_Y05",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y05_Vnow").innerHTML = "堰5水量" +VNow+"立方米";
        });
		 $.post("./updateYOnload.jsp",{id:"MTG_TC01_Y06",t:t},function(Onload){
//        	alert(data);
            TC01_Y06.height_now=parseFloat(Onload);
            document.getElementById("readout_TC01_Y06_Onload").innerHTML="堰6负载"+Onload+"%";
            if(Onload>85){
                TC01_Y06.fill="#0767c8";
            }
            else{
                TC01_Y06.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_TC01_Y06",t:t},function(VNow) {
            document.getElementById("readout_TC01_Y06_Vnow").innerHTML = "堰6水量" +VNow+"立方米";
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
