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
        canvas: "#canvas_CY",
        background: "#ccc",
        fps:1
    });
    var bg=canvas.display.image({
        x:0,
        y:0,
        image:"./image/CY.png"
    });
    canvas.addChild(bg);
//  var bg=canvas.display.image({
//      x:0,
//      y:0,
//      image:"../image/m00005.png"
//  });
//  canvas.addChild(bg);
    
    var CY_Y1A = canvas.display.SC({
        x: 266,
        y: 140,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y1A);
    
    var CY_Y1B = canvas.display.SC({
        x: 353,
        y: 140,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y1B);
   
    var CY_Y2A = canvas.display.SC({
        x: 266,
        y: 240,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
     canvas.addChild(CY_Y2A);
   
    var CY_Y2B = canvas.display.SC({
        x: 353,
        y: 240,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
     canvas.addChild(CY_Y2B);
   
    var CY_Y3A = canvas.display.SC({
        x: 266,
        y: 340,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
     canvas.addChild(CY_Y3A);
    
        var CY_Y3B = canvas.display.SC({
        x: 353,
        y: 340,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y3B);
   
	 var CY_Y4A = canvas.display.SC({
        x: 266,
        y: 440,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
     canvas.addChild(CY_Y4A);
    
        var CY_Y4B = canvas.display.SC({
        x: 353,
        y: 440,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y4B);
    
	 var CY_Y5A = canvas.display.SC({
        x: 266,
        y: 540,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y5A);

        var CY_Y5B = canvas.display.SC({
        x: 353,
        y: 540,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(CY_Y5B);
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
              $(this).text("��ʼ��ʾ");
            }

        else{
            flag=1;
            $(this).text("��ͣ��ʾ");}
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
        $("#btn_start").text("��ʼ��ʾ");
        document.cookie="time=0";
    });
    $("#btn_last").click(function(){
        window.location.assign("./GN_VL.html");
    });
    $("#btn_next").click(function(){
        window.location.assign("./GN_TC01.html");
    });
    var strCookie =document.cookie;
    //����cookie�и�Ϊ�����/ֵ��
    var arrCookie=strCookie.split(";");
    var t;
    //����cookie���飬����ÿ��cookie��
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        //�ҵ����Ϊtime��cookie�����������ֵ
        if("time"==arr[0]){
            t = parseFloat(arr[1]);

            break;
        }
    }
    canvas.setLoop(function () {
//      var testCookie =document.cookie;
//      document.getElementById("test1").innerHTML="cookies:"+testCookie;
      document.getElementById("SimTime").innerHTML="仿真时间: "+t+"秒  "+"step:"+step+"秒";
      //Y1A
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y1A",t:t},function(Onload){
//      	alert(data);
          CY_Y1A.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y1A_Onload").innerHTML="堰1A负载"+Onload+"%";
          if(Onload>85){
              CY_Y1A.fill="#0767c8";
          }
          else{
              CY_Y1A.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y1A",t:t},function(VNow) {
          document.getElementById("readout_CY_Y1A_Vnow").innerHTML = "堰1A水量" +VNow+"立方米";
      });
      //Y1B
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y1B",t:t},function(Onload){
//      	alert(data);
          CY_Y1B.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y1B_Onload").innerHTML="堰1B负载"+Onload+"%";
          if(Onload>85){
              CY_Y1B.fill="#0767c8";
          }
          else{
              CY_Y1B.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y1B",t:t},function(VNow) {
          document.getElementById("readout_CY_Y1B_Vnow").innerHTML = "堰1B水量" +VNow+"立方米";
      });
      //CY1_Y1
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y2A",t:t},function(Onload){
//      	alert(data);
          CY_Y2A.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y2A_Onload").innerHTML="堰2A负载"+Onload+"%";
          if(Onload>85){
              CY_Y2A.fill="#0767c8";
          }
          else{
              CY_Y2A.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y2A",t:t},function(VNow) {
          document.getElementById("readout_CY_Y2A_Vnow").innerHTML = "堰2A水量" +VNow+"立方米";
      });
      //CY1_Y2
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y2B",t:t},function(Onload){
//      	alert(data);
          CY_Y2B.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y2B_Onload").innerHTML="堰2B负载"+Onload+"%";
          if(Onload>85){
              CY_Y2B.fill="#0767c8";
          }
          else{
              CY_Y2B.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y2B",t:t},function(VNow) {
          document.getElementById("readout_CY_Y2B_Vnow").innerHTML = "堰2B水量" +VNow+"立方米";
      });
      //CY2_Y1
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y3A",t:t},function(Onload){
//      	alert(data);
          CY_Y3A.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y3A_Onload").innerHTML="堰3A负载"+Onload+"%";
          if(Onload>85){
              CY_Y3A.fill="#0767c8";
          }
          else{
              CY_Y3A.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y3A",t:t},function(VNow) {
          document.getElementById("readout_CY_Y3A_Vnow").innerHTML = "堰3A水量" +VNow+"立方米";
      });
      //CY2_Y2
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y3B",t:t},function(Onload){
//      	alert(data);
          CY_Y3B.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y3B_Onload").innerHTML="堰3B负载"+Onload+"%";
          if(Onload>85){
              CY_Y3B.fill="#0767c8";
          }
          else{
              CY_Y3B.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y3B",t:t},function(VNow) {
          document.getElementById("readout_CY_Y3B_Vnow").innerHTML = "堰3B水量" +VNow+"立方米";
      });
		  //CY2_Y1
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y4A",t:t},function(Onload){
//      	alert(data);
          CY_Y4A.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y4A_Onload").innerHTML="堰4负载"+Onload+"%";
          if(Onload>85){
              CY_Y4A.fill="#0767c8";
          }
          else{
              CY_Y4A.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y4A",t:t},function(VNow) {
          document.getElementById("readout_CY_Y4A_Vnow").innerHTML = "堰4A水量" +VNow+"立方米";
      });
      //CY2_Y2
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y4B",t:t},function(Onload){
//      	alert(data);
          CY_Y4B.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y4B_Onload").innerHTML="堰4B负载"+Onload+"%";
          if(Onload>85){
              CY_Y4B.fill="#0767c8";
          }
          else{
              CY_Y4B.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y4B",t:t},function(VNow) {
          document.getElementById("readout_CY_Y4B_Vnow").innerHTML = "堰4B水量" +VNow+"立方米";
      });
		 //CY2_Y1
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y5A",t:t},function(Onload){
//      	alert(data);
          CY_Y5A.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y5A_Onload").innerHTML="堰5A负载"+Onload+"%";
          if(Onload>85){
              CY_Y5A.fill="#0767c8";
          }
          else{
              CY_Y5A.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y5A",t:t},function(VNow) {
          document.getElementById("readout_CY_Y5A_Vnow").innerHTML = "堰5A水量" +VNow+"立方米";
      });
      //CY2_Y2
      $.post("./updateYOnload.jsp",{id:"MTG_CY_Y5B",t:t},function(Onload){
//      	alert(data);
          CY_Y5B.height_now=parseFloat(Onload);
          document.getElementById("readout_CY_Y5B_Onload").innerHTML="堰5B负载"+Onload+"%";
          if(Onload>85){
              CY_Y5B.fill="#0767c8";
          }
          else{
              CY_Y5B.fill="#43d9f9";
          }
      });
      $.post("./updateYVNow.jsp",{id:"MTG_CY_Y5B",t:t},function(VNow) {
          document.getElementById("readout_CY_Y5B_Vnow").innerHTML = "堰5B水量" +VNow+"立方米";
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
